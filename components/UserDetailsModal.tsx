
import React from 'react';
import { User } from '../types';
import { X, CheckCircle2, Trophy } from './icons';
import { ALL_BADGES } from '../data/gamificationData';
import { COURSE_DATA } from '../data/courseData';
import ProgressBar from './ProgressBar';
import { calculateLevel } from '../utils/gamification';

interface StoredProgress {
  completedLessons: string[];
  completedModules: string[];
  xp: number;
  earnedBadges: string[];
}

interface UserDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User;
  progress?: StoredProgress;
}

const UserDetailsModal: React.FC<UserDetailsModalProps> = ({ isOpen, onClose, user, progress }) => {
  if (!isOpen) return null;

  const userProgress = progress || { completedLessons: [], completedModules: [], xp: 0, earnedBadges: [] };
  const totalLessons = COURSE_DATA.reduce((acc, module) => acc + module.lessons.length, 0);
  const progressPercentage = totalLessons > 0 ? Math.round((userProgress.completedLessons.length / totalLessons) * 100) : 0;
  
  const allLessons = COURSE_DATA.flatMap(m => m.lessons);

  // Uso da função centralizada
  const { level, xpForNextLevel, xpInCurrentLevel, progressPercentage: levelProgress } = calculateLevel(userProgress.xp);
  
  const earnedBadgesSet = new Set(userProgress.earnedBadges);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex justify-center items-center p-4">
      <div className="bg-white dark:bg-cyber-panel border border-slate-200 dark:border-white/10 rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col transform transition-all duration-300 scale-95 animate-scale-in">
        <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-white/5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyber-primary to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                {user.username.substring(0,2).toUpperCase()}
            </div>
            <div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">{user.username}</h2>
                <p className="text-slate-500 text-sm font-mono">{user.email}</p>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-white/5">
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto space-y-8 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700">
           {/* Resumo do Progresso */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-50 dark:bg-black/20 p-4 rounded-2xl border border-slate-100 dark:border-white/5">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold text-cyber-primary uppercase tracking-wider">Nível {level}</span>
                        <span className="text-xs font-mono text-slate-500">{xpInCurrentLevel} / {xpForNextLevel} XP</span>
                    </div>
                    <ProgressBar percentage={levelProgress} height="h-2" />
                    <p className="text-[10px] text-slate-400 mt-2 text-right font-mono">TOTAL: {userProgress.xp.toLocaleString()} XP</p>
                </div>
                <div className="bg-slate-50 dark:bg-black/20 p-4 rounded-2xl border border-slate-100 dark:border-white/5">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Curso Completo</span>
                        <span className="text-xs font-mono text-slate-500">{progressPercentage}%</span>
                    </div>
                    <ProgressBar percentage={progressPercentage} height="h-2" />
                    <p className="text-[10px] text-slate-400 mt-2 text-right font-mono">{userProgress.completedLessons.length} / {totalLessons} AULAS</p>
                </div>
           </div>

           {/* Conquistas */}
           <div>
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Trophy className="w-4 h-4" /> Medalhas Conquistadas
              </h3>
              {earnedBadgesSet.size > 0 ? (
                  <div className="flex flex-wrap gap-3">
                      {ALL_BADGES.filter(b => earnedBadgesSet.has(b.id)).map(badge => (
                          <div key={badge.id} className="group relative">
                              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyber-primary/20 to-blue-500/20 border border-cyber-primary/30 text-cyber-primary">
                                  <badge.icon className="w-6 h-6" />
                              </div>
                              <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-[10px] p-2 rounded w-24 text-center pointer-events-none z-20 whitespace-normal left-1/2 -translate-x-1/2">
                                  {badge.name}
                              </div>
                          </div>
                      ))}
                  </div>
              ) : (
                  <p className="text-sm text-slate-500 italic">Nenhuma medalha ainda.</p>
              )}
           </div>

           {/* Lições Concluídas */}
           <div>
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" /> Histórico de Aulas
              </h3>
              {userProgress.completedLessons.length > 0 ? (
                <div className="max-h-48 overflow-y-auto bg-slate-50 dark:bg-black/20 p-2 rounded-xl border border-slate-100 dark:border-white/5 scrollbar-thin">
                    <ul className="space-y-1">
                        {userProgress.completedLessons.map(lessonId => {
                            const lesson = allLessons.find(l => l.id === lessonId);
                            return (
                                <li key={lessonId} className="flex items-center gap-3 text-xs text-slate-700 dark:text-slate-300 p-2 hover:bg-white/5 rounded-lg transition-colors">
                                    <CheckCircle2 className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                                    <span className="truncate">{lesson ? lesson.title : lessonId}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
              ) : (
                <p className="text-sm text-slate-500 italic">Nenhuma lição concluída.</p>
              )}
           </div>

        </div>
        <div className="p-4 border-t border-slate-100 dark:border-white/5 rounded-b-3xl flex justify-end bg-slate-50 dark:bg-black/20">
           <button onClick={onClose} className="px-6 py-2 bg-white dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/20 text-slate-900 dark:text-white font-bold rounded-xl transition-all border border-slate-200 dark:border-white/10 shadow-sm">
             Fechar
           </button>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsModal;
