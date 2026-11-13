import React from 'react';
import { useCourseProgress } from '../context/ProgressContext';
import { COURSES } from '../data/courses';
import { CheckCircle2, Circle, ArrowRight } from './icons';

const milestones = [
    { id: 'foundations', title: 'Fundamentos de IA', desc: 'Compreensão básica de IA Generativa.' },
    { id: 'automation', title: 'Automação de Processos', desc: 'Identificação e mapeamento de tarefas repetitivas.' },
    { id: 'agents', title: 'Agentes Autônomos', desc: 'Implementação de assistentes de IA especializados.' },
    { id: 'strategy', title: 'Estratégia C-Level', desc: 'Liderança em transformação impulsionada por IA.' }
];

const ImplementationRoadmap: React.FC = () => {
    const { getCourseProgress } = useCourseProgress();
    
    // Simplistic mapping for demonstration
    // Depending on overall progress or specific course progresses we define milestone achievements
    const getMilestoneStatus = (index: number) => {
        let totalProgress = 0;
        COURSES.forEach(course => {
            totalProgress += getCourseProgress(course.id);
        });
        const averageProgress = COURSES.length > 0 ? totalProgress / COURSES.length : 0;
        
        const milestoneThreshold = (index + 1) * 20; // 20%, 40%, 60%, 80%
        return averageProgress >= milestoneThreshold;
    };

    return (
        <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-cyber-panel dark:to-black border border-slate-200 dark:border-white/10 rounded-3xl p-8 shadow-xl mb-12 animate-fade-in relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-500/20 dark:bg-cyber-accent/10 rounded-full blur-[80px]"></div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-8 font-sans">
                Seu Roadmap de Implementação de IA
            </h2>
            
            <div className="relative">
                {/* Connecting Line */}
                <div className="absolute left-6 top-10 bottom-10 w-1 bg-slate-300 dark:bg-slate-800 rounded-full md:left-1/2 md:-translate-x-1/2"></div>
                
                <div className="space-y-12">
                    {milestones.map((milestone, index) => {
                        const isAchieved = getMilestoneStatus(index);
                        const isNext = !isAchieved && (index === 0 || getMilestoneStatus(index - 1));
                        
                        return (
                            <div key={milestone.id} className="relative flex items-center md:justify-between flex-col md:flex-row gap-6 md:gap-0">
                                {/* Left Side (Empty on mobile, text on desktop if even) */}
                                <div className={`hidden md:block w-[45%] text-right ${index % 2 === 0 ? '' : 'invisible'}`}>
                                    <h3 className={`text-xl font-bold ${isAchieved ? 'text-brand-600 dark:text-cyber-primary' : 'text-slate-700 dark:text-slate-300'}`}>
                                        {milestone.title}
                                    </h3>
                                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">{milestone.desc}</p>
                                </div>

                                {/* Center Node */}
                                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 md:-translate-x-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full border-4 border-slate-100 dark:border-black bg-white dark:bg-cyber-panel shadow-lg transition-transform duration-300 hover:scale-110">
                                    {isAchieved ? (
                                        <CheckCircle2 className="w-6 h-6 text-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] rounded-full" />
                                    ) : isNext ? (
                                        <div className="w-4 h-4 bg-brand-500 dark:bg-cyber-accent rounded-full animate-pulse shadow-[0_0_15px_rgba(217,70,239,0.6)]"></div>
                                    ) : (
                                        <Circle className="w-5 h-5 text-slate-400 dark:text-slate-600" />
                                    )}
                                </div>

                                {/* Right Side (Text on mobile, text on desktop if odd) */}
                                <div className={`pl-16 md:pl-0 w-full md:w-[45%] ${index % 2 !== 0 || window.innerWidth < 768 ? '' : 'md:invisible'}`}>
                                    <h3 className={`text-xl font-bold ${isAchieved ? 'text-brand-600 dark:text-cyber-primary' : (isNext ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-500')}`}>
                                        {milestone.title}
                                    </h3>
                                    <p className={`${isAchieved || isNext ? 'text-slate-600 dark:text-slate-300' : 'text-slate-400 dark:text-slate-600'} text-sm mt-2`}>
                                        {milestone.desc}
                                    </p>
                                    
                                    {isNext && (
                                        <div className="mt-3 inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-bold text-brand-500 dark:text-cyber-accent bg-brand-50 dark:bg-cyber-accent/10 py-1 px-3 rounded-full">
                                            Próximo Passo <ArrowRight className="w-3 h-3" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ImplementationRoadmap;
