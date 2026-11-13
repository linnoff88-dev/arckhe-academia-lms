
import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { COURSES } from '../data/courses';
import { COURSE_DATA } from '../data/courseData';
import { ALL_BADGES } from '../data/gamificationData';
import ModuleCard from '../components/ModuleCard';
import { useCourseProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import Certificate from '../components/Certificate';
import ProgressBar from '../components/ProgressBar';
import ChallengesWidget from '../components/ChallengesWidget';
import BusinessCaseBuilder from '../components/BusinessCaseBuilder';
import ROISimulator from '../components/ROISimulator';
import MaturityComparator from '../components/MaturityComparator';
import { Trophy, PlayCircle, Sparkles, ArrowLeft } from '../components/icons';

const FlameIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
    </svg>
);

interface CourseBannerProps {
    courseTitle: string;
    courseSubtitle: string;
    username: string | undefined;
    nextLessonUrl: string;
    progressPercentage: number;
    themeColor: string;
}

const CourseBanner: React.FC<CourseBannerProps> = ({ courseTitle, courseSubtitle, username, nextLessonUrl, progressPercentage, themeColor }) => {
    const getButtonText = () => {
        if (progressPercentage === 0) return "Iniciar Jornada";
        if (progressPercentage === 100) return "Revisitar Curso";
        return "Continuar Jornada";
    };

    // Map theme to gradient
    const getGradient = (theme: string) => {
        switch(theme) {
            case 'cyan': return 'from-cyan-500 to-blue-600';
            case 'rose': return 'from-rose-500 to-pink-600';
            case 'emerald': return 'from-emerald-500 to-teal-600';
            case 'violet': return 'from-violet-500 to-purple-600';
            case 'amber': return 'from-amber-500 to-orange-600';
            default: return 'from-brand-500 to-accent-600';
        }
    };

    const gradientClass = getGradient(themeColor);
    
    // Define cor do texto baseado no tema para o título
    const getTextColorClass = (theme: string) => {
        switch(theme) {
            case 'cyan': return 'text-cyan-400';
            case 'rose': return 'text-rose-400';
            case 'emerald': return 'text-emerald-400';
            case 'violet': return 'text-violet-400';
            case 'amber': return 'text-amber-400';
            default: return 'text-brand-400';
        }
    };
    
    const textColorClass = getTextColorClass(themeColor);

    return (
      <div className="relative rounded-3xl overflow-hidden shadow-2xl text-white isolate min-h-[280px] md:min-h-[340px] flex items-center group border border-white/10">
        {/* Background Tech */}
        <div className="absolute inset-0 -z-10 bg-cyber-bg">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black"></div>
            <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
            <div className="absolute top-0 left-0 w-full h-full opacity-30">
                 <div className={`absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-r ${gradientClass} blur-[120px] animate-blob`}></div>
            </div>
        </div>
        
        <div className="relative z-10 p-6 md:p-12 w-full flex flex-col lg:flex-row justify-between items-center gap-8 text-center lg:text-left">
            <div className="max-w-2xl space-y-4 md:space-y-6 animate-slide-up flex flex-col items-center lg:items-start">
                <Link to="/" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/20 backdrop-blur-md text-[10px] font-mono text-white/80 uppercase tracking-widest hover:bg-white/10 transition-colors">
                    <ArrowLeft className="w-3 h-3" /> Voltar ao Hub
                </Link>
                
                <div className="space-y-1">
                    <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-400 cyber-glitch" data-text={courseTitle}>
                        {courseTitle}
                    </h1>
                    <p className={`text-base md:text-xl font-mono uppercase tracking-widest font-bold opacity-90 ${textColorClass}`}>
                        {courseSubtitle}
                    </p>
                </div>
                
                <p className="text-sm md:text-lg text-slate-300 leading-relaxed max-w-lg font-light hidden sm:block">
                    Olá, {username}. Prepare-se para acelerar seu conhecimento nesta trilha de especialização.
                </p>
    
                <div className="pt-4">
                    <Link 
                        to={nextLessonUrl} 
                        className={`
                            relative px-6 py-3 md:px-8 md:py-4 bg-white text-black rounded-xl font-bold text-sm md:text-base uppercase tracking-wide font-mono
                            shadow-[0_0_20px_rgba(255,255,255,0.3)] 
                            hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] hover:-translate-y-1
                            transition-all duration-300 ease-out
                            flex items-center gap-3 overflow-hidden group/btn w-fit
                        `}
                    >
                        <PlayCircle className="w-5 h-5" />
                        <span className="relative z-10">{getButtonText()}</span>
                        <div className="absolute inset-0 -translate-x-full group-hover/btn:animate-shimmer bg-gradient-to-r from-transparent via-white/80 to-transparent z-20"></div>
                    </Link>
                </div>
            </div>
        </div>
      </div>
    );
};

const CourseDashboard: React.FC = () => {
    const { courseId } = useParams<{ courseId: string }>();
    const navigate = useNavigate();
    
    const {
        getCourseProgress,
        completedLessons,
        level,
        xpForNextLevel,
        xpInCurrentLevel,
        earnedBadges,
        currentStreak
    } = useCourseProgress();
    const { currentUser } = useAuth();

    const [roiCurrentCost, setRoiCurrentCost] = React.useState(100000);
    const [roiCurrentRevenue, setRoiCurrentRevenue] = React.useState(500000);
    const [roiCostReductionPct, setRoiCostReductionPct] = React.useState(15);
    const [roiRevenueIncreasePct, setRoiRevenueIncreasePct] = React.useState(10);

    const roiData = {
        currentCost: roiCurrentCost,
        currentRevenue: roiCurrentRevenue,
        costReductionPct: roiCostReductionPct,
        revenueIncreasePct: roiRevenueIncreasePct,
        newCost: roiCurrentCost * (1 - roiCostReductionPct / 100),
        newRevenue: roiCurrentRevenue * (1 + roiRevenueIncreasePct / 100),
        currentProfit: roiCurrentRevenue - roiCurrentCost,
        newProfit: (roiCurrentRevenue * (1 + roiRevenueIncreasePct / 100)) - (roiCurrentCost * (1 - roiCostReductionPct / 100))
    };

    // Find current course config
    const currentCourse = COURSES.find(c => c.id === courseId);
    
    // Filter modules for this course
    const courseModules = currentCourse 
        ? COURSE_DATA.filter(m => currentCourse.moduleIds.includes(m.id))
        : [];

    // If course not found, redirect
    useEffect(() => {
        if (!currentCourse) {
            navigate('/');
        }
    }, [currentCourse, navigate]);

    if (!currentCourse) return null;

    const progressPercentage = getCourseProgress(courseId || '');
    const levelProgress = xpForNextLevel > 0 ? (xpInCurrentLevel / xpForNextLevel) * 100 : 0;

    // Find next lesson logic for THIS course
    const getNextLessonUrl = () => {
        for (const module of courseModules) {
            for (const lesson of module.lessons) {
                if (!completedLessons.has(lesson.id)) {
                    return `/course/${courseId}/module/${module.id}/lesson/${lesson.id}`;
                }
            }
        }
        // If all complete or start
        if (courseModules.length > 0 && courseModules[0].lessons.length > 0) {
             return `/course/${courseId}/module/${courseModules[0].id}/lesson/${courseModules[0].lessons[0].id}`;
        }
        return '#';
    };

    return (
        <div className="space-y-8 md:space-y-12 animate-slide-up pb-20">
            <CourseBanner 
                courseTitle={currentCourse.title}
                courseSubtitle={currentCourse.subtitle}
                username={currentUser?.username} 
                nextLessonUrl={getNextLessonUrl()}
                progressPercentage={progressPercentage}
                themeColor={currentCourse.theme}
            />

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Metrics Panel - Main Stats (2 Columns) */}
                <div className="lg:col-span-2 bg-cyber-panel border border-white/10 rounded-3xl p-5 md:p-8 shadow-xl relative overflow-hidden group flex flex-col justify-between">
                     <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                     
                     <div className="relative z-10">
                        <div className="flex flex-wrap items-center justify-between mb-6 md:mb-8 gap-4">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                                    <Trophy className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-lg md:text-xl font-bold text-white font-sans">Status do Sistema</h2>
                                    <p className="text-[10px] md:text-xs text-slate-400 font-mono uppercase">Metabolismo de Aprendizado</p>
                                </div>
                            </div>
                            
                            {/* Streak */}
                            <div className={`
                                flex items-center gap-3 px-4 py-2 rounded-xl border backdrop-blur-sm transition-all
                                ${currentStreak > 0 
                                    ? 'bg-orange-500/10 border-orange-500/30 text-orange-400' 
                                    : 'bg-white/5 border-white/10 text-slate-500'}
                            `}>
                                <FlameIcon className={`w-5 h-5 ${currentStreak > 0 ? 'fill-orange-500 text-orange-500 animate-pulse' : ''}`} />
                                <div className="flex flex-col leading-none">
                                    <span className="text-lg font-bold font-mono">{currentStreak}</span>
                                    <span className="text-[10px] font-bold uppercase opacity-70">Dias</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Level Card */}
                            <div className="bg-black/20 rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all group/card">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <p className="text-[10px] font-mono text-slate-500 uppercase mb-1">Nível Global</p>
                                        <p className="text-3xl md:text-4xl font-bold text-white font-mono">{level}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-bold text-white font-mono">{xpInCurrentLevel} <span className="text-slate-500">/ {xpForNextLevel} XP</span></p>
                                    </div>
                                </div>
                                <ProgressBar percentage={levelProgress} height="h-1.5" />
                            </div>

                            {/* Progress Card */}
                            <div className="bg-black/20 rounded-2xl p-5 border border-white/5 hover:border-white/20 transition-all group/card">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <p className="text-[10px] font-mono text-slate-500 uppercase mb-1">Progresso da Trilha</p>
                                        <p className="text-3xl md:text-4xl font-bold text-white font-mono">{progressPercentage}%</p>
                                    </div>
                                </div>
                                <ProgressBar percentage={progressPercentage} height="h-1.5" />
                            </div>
                        </div>
                     </div>
                </div>

                {/* Challenges Widget (1 Column) */}
                <div className="lg:col-span-1">
                    <ChallengesWidget />
                </div>

                {/* Badges Hive (1 Column) */}
                <div className="lg:col-span-1 bg-cyber-panel border border-white/10 rounded-3xl p-5 md:p-8 shadow-xl flex flex-col relative overflow-hidden h-full min-h-[250px]">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                    
                    <h3 className="text-sm font-mono font-bold text-slate-400 uppercase mb-4 relative z-10 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-white" /> Últimas Conquistas
                    </h3>
                    
                    <div className="grid grid-cols-3 gap-2 relative z-10 content-start">
                         {ALL_BADGES.slice(0, 9).map(badge => {
                                const hasEarned = earnedBadges.has(badge.id);
                                return (
                                    <div key={badge.id} className="group/badge relative w-full aspect-square flex items-center justify-center">
                                        <div className={`
                                            w-full h-full rounded-xl flex items-center justify-center transition-all duration-500 border
                                            ${hasEarned 
                                                ? 'bg-white/10 border-white/30 text-white shadow-[0_0_10px_rgba(255,255,255,0.2)]' 
                                                : 'bg-white/5 border-white/5 text-slate-600 grayscale opacity-30'}
                                            group-hover/badge:scale-105
                                        `} title={badge.name}>
                                            <badge.icon className="w-1/2 h-1/2" />
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
            </div>

            {progressPercentage === 100 && (
                <div className="animate-slide-up">
                    <Certificate 
                        studentName={currentUser ? currentUser.username : "Visionário"} 
                        courseTitle={currentCourse.title}
                    />
                </div>
            )}

            <div>
                <div className="flex items-end justify-between mb-6 md:mb-8 border-b border-white/10 pb-4">
                    <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight font-sans">Módulos do Curso</h2>
                    <span className="text-[10px] md:text-xs font-mono text-white bg-white/10 border border-white/20 px-2 md:px-3 py-1 rounded-full">{courseModules.length} UNITS</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {courseModules.map((module, index) => (
                        <div key={module.id} className="animate-slide-up h-full" style={{ animationDelay: `${index * 50}ms` }}>
                            <ModuleCard module={module} themeColor={currentCourse.theme} courseId={currentCourse.id} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-16 animate-slide-up">
                <MaturityComparator />
                <ROISimulator 
                    currentCost={roiCurrentCost} setCurrentCost={setRoiCurrentCost}
                    currentRevenue={roiCurrentRevenue} setCurrentRevenue={setRoiCurrentRevenue}
                    costReductionPct={roiCostReductionPct} setCostReductionPct={setRoiCostReductionPct}
                    revenueIncreasePct={roiRevenueIncreasePct} setRevenueIncreasePct={setRoiRevenueIncreasePct}
                />
                <BusinessCaseBuilder roiData={roiData} />
            </div>
        </div>
    );
};

export default CourseDashboard;
