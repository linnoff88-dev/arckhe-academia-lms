
import React, { createContext, useState, useContext, useEffect, ReactNode, useMemo, useCallback } from 'react';
import { COURSE_DATA } from '../data/courseData';
import { COURSES } from '../data/courses';
import { ALL_BADGES, POSSIBLE_CHALLENGES } from '../data/gamificationData';
import { useAuth } from './AuthContext';
import { Challenge } from '../types';
import { calculateLevel } from '../utils/gamification';

// Configuração de XP
const XP_RATES = {
    LESSON_COMPLETE_FULL: 100,
    LESSON_COMPLETE_HALF: 50,
    LESSON_COMPLETE_BONUS: 150,
    MODULE_COMPLETE: 500,
    COURSE_COMPLETE: 2000,
    INTERACTION_EXPAND: 30,
    INTERACTION_AUDIO: 20,
    INTERACTION_PDF: 15,
    INTERACTION_INFOGRAPHIC: 25,
    INTERACTION_REGENERATE_INFOGRAPHIC: 5,
    INTERACTION_VIDEO_CURADO: 30,
    INTERACTION_AI_QUIZ: 35,
    INTERACTION_TUTOR: 15,
    INTERACTION_GLOSSARY: 10,
    QUIZ_QUESTION_CORRECT: 10,
    NEXT_LESSON: 5
};

const BONUS_MODULE_IDS = ['m15']; 

export type InteractionType = 'expand' | 'audio' | 'pdf' | 'ai_quiz' | 'tutor' | 'glossary' | 'infographic' | 'regenerate_infographic' | 'quiz_correct' | 'next_lesson' | 'skip_quiz' | 'quiz_complete' | 'video_curado';

interface StoredProgress {
  completedLessons: string[];
  completedModules: string[];
  xp: number;
  coins?: number;
  purchasedItems?: string[];
  earnedBadges: string[];
  lastStudyDate?: string;
  currentStreak?: number;
  interactions: string[]; 
  activeChallenges?: Challenge[];
  challengeWeek?: number; // Para resetar semanalmente
}

interface AllUserProgress {
  [userId: string]: StoredProgress;
}

interface XPNotification {
    id: number;
    amount: number;
    label: string;
}

interface BadgeNotification {
    id: number;
    badgeId: string;
}

interface ProgressContextType {
  completedLessons: Set<string>;
  completedModules: Set<string>;
  markLessonAsComplete: (lessonId: string, quizScore?: number) => void;
  registerInteraction: (lessonId: string | 'global', type: InteractionType, customInteractionId?: string) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  isModuleCompleted: (moduleId: string) => boolean;
  getCourseProgress: (courseId: string) => number;
  xp: number;
  coins: number;
  purchasedItems: string[];
  purchaseItem: (itemId: string, cost: number) => boolean;
  level: number;
  xpForNextLevel: number;
  xpInCurrentLevel: number;
  earnedBadges: Set<string>;
  currentStreak: number;
  getAllUsersProgress: () => AllUserProgress;
  xpNotifications: XPNotification[];
  badgeNotifications: BadgeNotification[];
  activeChallenges: Challenge[];
  claimChallengeReward: (challengeId: string) => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const ALL_PROGRESS_KEY = 'allCourseProgress';

export const ProgressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { currentUser } = useAuth();

  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [completedModules, setCompletedModules] = useState<Set<string>>(new Set());
  const [xp, setXp] = useState<number>(0);
  const [coins, setCoins] = useState<number>(0);
  const [purchasedItems, setPurchasedItems] = useState<Set<string>>(new Set());
  const [earnedBadges, setEarnedBadges] = useState<Set<string>>(new Set());
  const [currentStreak, setCurrentStreak] = useState<number>(0);
  const [lastStudyDate, setLastStudyDate] = useState<string | undefined>(undefined);
  const [interactions, setInteractions] = useState<Set<string>>(new Set());
  const [activeChallenges, setActiveChallenges] = useState<Challenge[]>([]);
  
  // Sistema de Notificação Visual
  const [xpNotifications, setXpNotifications] = useState<XPNotification[]>([]);
  const [badgeNotifications, setBadgeNotifications] = useState<BadgeNotification[]>([]);

  const addXPNotification = (amount: number, label: string) => {
      const id = Date.now() + Math.random();
      setXpNotifications(prev => [...prev, { id, amount, label }]);
      setTimeout(() => {
          setXpNotifications(prev => prev.filter(n => n.id !== id));
      }, 3500);
  };

  const addBadgeNotification = (badgeId: string) => {
      const id = Date.now() + Math.random();
      setBadgeNotifications(prev => [...prev, { id, badgeId }]);
      setTimeout(() => {
          setBadgeNotifications(prev => prev.filter(n => n.id !== id));
      }, 5000);
  };

  const getAllUsersProgress = (): AllUserProgress => {
    try {
      const item = window.localStorage.getItem(ALL_PROGRESS_KEY);
      return item ? JSON.parse(item) : {};
    } catch (error) {
      console.error("Could not load all user progress", error);
      return {};
    }
  };

  // Funções Auxiliares de Desafio
  const getCurrentWeekNumber = () => {
      const date = new Date();
      const startDate = new Date(date.getFullYear(), 0, 1);
      const days = Math.floor((date.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000));
      return Math.ceil(days / 7);
  };

  const generateWeeklyChallenges = (): Challenge[] => {
      // Seleciona 3 desafios aleatórios da pool
      const shuffled = [...POSSIBLE_CHALLENGES].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 3).map(base => ({
          ...base,
          current: 0,
          completed: false,
          claimed: false
      }));
  };

  // Load Progress
  useEffect(() => {
    if (currentUser) {
      try {
        const allProgress = getAllUsersProgress();
        const userProgress = allProgress[currentUser.id];

        if (userProgress) {
          setCompletedLessons(new Set(userProgress.completedLessons || []));
          setCompletedModules(new Set(userProgress.completedModules || []));
          setXp(userProgress.xp || 0);
          setCoins(userProgress.coins || 0);
          setPurchasedItems(new Set(userProgress.purchasedItems || []));
          setEarnedBadges(new Set(userProgress.earnedBadges || []));
          setCurrentStreak(userProgress.currentStreak || 0);
          setLastStudyDate(userProgress.lastStudyDate);
          setInteractions(new Set(userProgress.interactions || []));
          
          // Lógica de Challenges Semanais
          const currentWeek = getCurrentWeekNumber();
          if (userProgress.challengeWeek !== currentWeek || !userProgress.activeChallenges) {
              setActiveChallenges(generateWeeklyChallenges());
          } else {
              setActiveChallenges(userProgress.activeChallenges);
          }

        } else {
          // New User Init
          setCompletedLessons(new Set());
          setCompletedModules(new Set());
          setXp(0);
          setCoins(0);
          setPurchasedItems(new Set());
          setEarnedBadges(new Set());
          setCurrentStreak(0);
          setLastStudyDate(undefined);
          setInteractions(new Set());
          setActiveChallenges(generateWeeklyChallenges());
        }
      } catch (error) {
        console.error("Error loading progress", error);
      }
    } else {
       // Reset for no user
       setCompletedLessons(new Set());
       setCompletedModules(new Set());
       setXp(0);
       setCoins(0);
       setPurchasedItems(new Set());
       setEarnedBadges(new Set());
       setCurrentStreak(0);
       setLastStudyDate(undefined);
       setInteractions(new Set());
       setActiveChallenges([]);
    }
  }, [currentUser]);

  // Save Progress
  useEffect(() => {
    if (currentUser) {
      try {
        const allProgress = getAllUsersProgress();
        const progressToStore: StoredProgress = {
          completedLessons: Array.from(completedLessons),
          completedModules: Array.from(completedModules),
          xp,
          coins,
          purchasedItems: Array.from(purchasedItems),
          earnedBadges: Array.from(earnedBadges),
          currentStreak,
          lastStudyDate,
          interactions: Array.from(interactions),
          activeChallenges,
          challengeWeek: getCurrentWeekNumber()
        };
        allProgress[currentUser.id] = progressToStore;
        window.localStorage.setItem(ALL_PROGRESS_KEY, JSON.stringify(allProgress));
      } catch (error) {
        console.error("Error saving progress", error);
      }
    }
  }, [completedLessons, completedModules, xp, coins, purchasedItems, earnedBadges, currentStreak, lastStudyDate, interactions, activeChallenges, currentUser]);

  const updateChallengeProgress = useCallback((type: 'lesson_count' | 'ai_interaction' | 'perfect_score', amount = 1) => {
      setActiveChallenges(prev => prev.map(challenge => {
          if (challenge.type === type && !challenge.completed) {
              const newCurrent = Math.min(challenge.current + amount, challenge.target);
              const isCompleted = newCurrent >= challenge.target;
              if (isCompleted && !challenge.completed) {
                  addXPNotification(0, `Desafio Concluído: ${challenge.title}`);
              }
              return { ...challenge, current: newCurrent, completed: isCompleted };
          }
          return challenge;
      }));
  }, []);

  const claimChallengeReward = (challengeId: string) => {
      setActiveChallenges(prev => prev.map(challenge => {
          if (challenge.id === challengeId && challenge.completed && !challenge.claimed) {
              setXp(currXp => currXp + challenge.rewardXp);
              setCoins(currXp => currXp + challenge.rewardXp);
              addXPNotification(challenge.rewardXp, `Recompensa: ${challenge.title}`);
              return { ...challenge, claimed: true };
          }
          return challenge;
      }));
  };

  const { level, xpForNextLevel, xpInCurrentLevel } = useMemo(() => {
    return calculateLevel(xp);
  }, [xp]);

  const checkStreak = () => {
      const today = new Date().toISOString().split('T')[0]; 
      
      if (lastStudyDate === today) return currentStreak;

      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayString = yesterday.toISOString().split('T')[0];

      let newStreak = 1;
      if (lastStudyDate === yesterdayString) {
          newStreak = currentStreak + 1;
      } else if (currentStreak > 0) {
          newStreak = 1;
      }

      setLastStudyDate(today);
      setCurrentStreak(newStreak);

      if (newStreak >= 3 && !earnedBadges.has('badge-streak-3')) {
          setEarnedBadges(prev => new Set(prev).add('badge-streak-3'));
          addBadgeNotification('badge-streak-3');
      }

      return newStreak;
  };

  const registerInteraction = useCallback((lessonId: string | 'global', type: InteractionType, customInteractionId?: string) => {
      const interactionKey = customInteractionId ? `${lessonId}_${type}_${customInteractionId}` : `${lessonId}_${type}`;
      
      if (interactions.has(interactionKey)) return;
      
      const newInteractions = new Set(interactions).add(interactionKey);
      setInteractions(newInteractions);

      let earnedAmount = 0;
      let label = "";

      switch (type) {
          case 'expand': earnedAmount = XP_RATES.INTERACTION_EXPAND; label = "Vídeo Curado"; break;
          case 'audio': earnedAmount = XP_RATES.INTERACTION_AUDIO; label = "Audio Gerado"; break;
          case 'pdf': earnedAmount = XP_RATES.INTERACTION_PDF; label = "Backup Físico"; break;
          case 'infographic': earnedAmount = XP_RATES.INTERACTION_INFOGRAPHIC; label = "Infográficos"; break;
          case 'regenerate_infographic': earnedAmount = XP_RATES.INTERACTION_REGENERATE_INFOGRAPHIC; label = "Revisão Visual"; break;
          case 'video_curado': earnedAmount = XP_RATES.INTERACTION_VIDEO_CURADO; label = "Material Extra"; break;
          case 'ai_quiz': earnedAmount = XP_RATES.INTERACTION_AI_QUIZ; label = "Desafio IA"; break;
          case 'tutor': earnedAmount = XP_RATES.INTERACTION_TUTOR; label = "Mentoria"; break;
          case 'glossary': earnedAmount = XP_RATES.INTERACTION_GLOSSARY; label = "Pesquisa"; break;
          case 'quiz_correct': earnedAmount = XP_RATES.QUIZ_QUESTION_CORRECT; label = "Acerto"; break;
          case 'next_lesson': earnedAmount = XP_RATES.NEXT_LESSON; label = "Avanço"; break;
      }

      if (earnedAmount > 0) {
          const activeStreak = checkStreak();
          const streakMultiplier = 1 + (Math.min(activeStreak, 10) * 0.05); 
          
          const finalXp = Math.round(earnedAmount * streakMultiplier);
          
          setXp(prev => prev + finalXp);
          setCoins(prev => prev + finalXp);
          addXPNotification(finalXp, label);
      }
      
      updateChallengeProgress('ai_interaction', 1);

  }, [interactions, currentStreak, updateChallengeProgress]);

  const markLessonAsComplete = (lessonId: string, quizScore?: number) => {
    if (completedLessons.has(lessonId)) return;

    const newCompletedLessons = new Set(completedLessons).add(lessonId);
    setCompletedLessons(newCompletedLessons);

    const activeStreak = checkStreak();
    const streakMultiplier = 1 + (Math.min(activeStreak, 10) * 0.05);

    const parentModule = COURSE_DATA.find(module => module.lessons.some(lesson => lesson.id === lessonId));
    
    const hasExpandedContent = interactions.has(`${lessonId}_expand`);
    
    let baseXp = 0;
    let label = "";

    if (parentModule && BONUS_MODULE_IDS.includes(parentModule.id)) {
        baseXp = XP_RATES.LESSON_COMPLETE_BONUS;
        label = "Lição Bônus";
    } else {
        if (quizScore === undefined) {
            // Manual Complete or Skipped Quiz
            baseXp = XP_RATES.LESSON_COMPLETE_HALF;
            label = "Modo Leitura (Skip Quiz)";
        } else {
            // Completed with Quiz
            // Add a bonus if they had an excellent score
            const masteryBonus = quizScore >= 80 ? 20 : 0;
            baseXp = hasExpandedContent ? XP_RATES.LESSON_COMPLETE_FULL + masteryBonus : XP_RATES.LESSON_COMPLETE_FULL - 20 + masteryBonus;
            label = hasExpandedContent ? "Domínio Completo (Deep)" : "Lição Concluída";
        }
    }

    const earnedXp = Math.round(baseXp * streakMultiplier);
    setXp(prevXp => prevXp + earnedXp);
    setCoins(prevXp => prevXp + earnedXp);
    addXPNotification(earnedXp, label);
    
    updateChallengeProgress('lesson_count', 1);

    if (quizScore === 100) {
        updateChallengeProgress('perfect_score', 1);
        if (!earnedBadges.has('badge-quiz-perfect')) {
            setEarnedBadges(prev => new Set(prev).add('badge-quiz-perfect'));
            addBadgeNotification('badge-quiz-perfect');
        }
    }

    if (parentModule) {
      const allLessonsInModuleCompleted = parentModule.lessons.every(lesson => newCompletedLessons.has(lesson.id));
      
      if (allLessonsInModuleCompleted) {
        if (!completedModules.has(parentModule.id)) {
            const newCompletedModules = new Set(completedModules).add(parentModule.id);
            setCompletedModules(newCompletedModules);
            setXp(prevXp => prevXp + XP_RATES.MODULE_COMPLETE);
            setCoins(prevXp => prevXp + XP_RATES.MODULE_COMPLETE);
            addXPNotification(XP_RATES.MODULE_COMPLETE, "MÓDULO DOMINADO!");

            // Module Badge
            const moduleBadge = ALL_BADGES.find(b => b.type === 'module' && b.moduleId === parentModule.id);
            if (moduleBadge && !earnedBadges.has(moduleBadge.id)) {
                setEarnedBadges(prev => new Set(prev).add(moduleBadge.id));
                addBadgeNotification(moduleBadge.id);
            }

            // Check Course Completion
            COURSES.forEach(course => {
                const isCourseComplete = course.moduleIds.every(mid => newCompletedModules.has(mid));
                if (isCourseComplete) {
                    const courseBadge = ALL_BADGES.find(b => b.type === 'course' && b.courseId === course.id);
                    if (courseBadge && !earnedBadges.has(courseBadge.id)) {
                        setEarnedBadges(prev => new Set(prev).add(courseBadge.id));
                        setXp(prevXp => prevXp + XP_RATES.COURSE_COMPLETE);
                        setCoins(prevXp => prevXp + XP_RATES.COURSE_COMPLETE);
                        addXPNotification(XP_RATES.COURSE_COMPLETE, `TRILHA MESTRE: ${course.title}`);
                        addBadgeNotification(courseBadge.id);
                    }
                }
            });
        }
      }
    }
  };

  const isLessonCompleted = (lessonId: string) => completedLessons.has(lessonId);
  const isModuleCompleted = (moduleId: string) => completedModules.has(moduleId);

  const getCourseProgress = (courseId: string): number => {
      const course = COURSES.find(c => c.id === courseId);
      if (!course) return 0;

      const courseModuleIds = course.moduleIds;
      let totalLessonsInCourse = 0;
      let completedLessonsInCourse = 0;

      COURSE_DATA.forEach(module => {
          if (courseModuleIds.includes(module.id)) {
              totalLessonsInCourse += module.lessons.length;
              module.lessons.forEach(lesson => {
                  if (completedLessons.has(lesson.id)) {
                      completedLessonsInCourse++;
                  }
              });
          }
      });

      if (totalLessonsInCourse === 0) return 0;
      return Math.round((completedLessonsInCourse / totalLessonsInCourse) * 100);
  };

  const purchaseItem = (itemId: string, cost: number): boolean => {
      if (coins >= cost && !purchasedItems.has(itemId)) {
          setCoins(prev => prev - cost);
          setPurchasedItems(prev => new Set(prev).add(itemId));
          return true;
      }
      return false;
  };

  const value = {
    completedLessons,
    completedModules,
    markLessonAsComplete,
    registerInteraction,
    isLessonCompleted,
    isModuleCompleted,
    getCourseProgress,
    xp,
    coins,
    purchasedItems: Array.from(purchasedItems),
    purchaseItem,
    level,
    xpForNextLevel,
    xpInCurrentLevel,
    earnedBadges,
    currentStreak,
    getAllUsersProgress,
    xpNotifications,
    badgeNotifications,
    activeChallenges,
    claimChallengeReward
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useCourseProgress = (): ProgressContextType => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useCourseProgress must be used within a ProgressProvider');
  }
  return context;
};
