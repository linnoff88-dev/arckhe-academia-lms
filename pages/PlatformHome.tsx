
import React from 'react';
import { Link } from 'react-router-dom';
import { COURSES } from '../data/courses';
import { useCourseProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import { ArrowRight } from '../components/icons';
import ImplementationRoadmap from '../components/ImplementationRoadmap';

const PlatformHome: React.FC = () => {
    const { currentUser } = useAuth();
    const { getCourseProgress } = useCourseProgress();

    const getThemeStyles = (theme: string) => {
        switch(theme) {
            case 'cyan': return 'from-cyan-500 to-blue-600 shadow-cyan-500/20';
            case 'rose': return 'from-rose-500 to-pink-600 shadow-rose-500/20';
            case 'emerald': return 'from-emerald-500 to-teal-600 shadow-emerald-500/20';
            case 'violet': return 'from-violet-500 to-purple-600 shadow-violet-500/20';
            case 'amber': return 'from-amber-500 to-orange-600 shadow-amber-500/20';
            default: return 'from-gray-500 to-slate-600';
        }
    };

    return (
        <div className="min-h-screen pb-20 animate-slide-up">
            {/* Hero Section */}
            <div className="relative py-16 px-4 sm:px-6 lg:px-8 mb-12 text-center">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[120px]"></div>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 font-sans">
                    {/* Correção de Contraste: Gradiente escuro no modo Light, Branco no modo Dark */}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-900 via-brand-700 to-slate-600 dark:from-white dark:via-white dark:to-slate-400">
                        Arkhé AI
                    </span>
                    <span className="block text-2xl md:text-3xl font-mono text-brand-600 dark:text-cyber-primary mt-2 font-normal">Education Hub</span>
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
                    Bem-vindo, {currentUser?.username}. Selecione sua trilha de especialização e domine o futuro dos negócios.
                </p>
            </div>

            {/* Courses Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {COURSES.map((course, index) => {
                        const progress = getCourseProgress(course.id);
                        const themeClass = getThemeStyles(course.theme);
                        
                        return (
                            <Link 
                                key={course.id} 
                                to={`/course/${course.id}`}
                                className="group relative flex flex-col bg-white dark:bg-cyber-panel border border-slate-200 dark:border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 shadow-xl hover:shadow-2xl"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Header with Icon */}
                                <div className={`h-32 bg-gradient-to-br ${themeClass} p-6 relative overflow-hidden`}>
                                    <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3"></div>
                                    <div className="relative z-10 flex justify-between items-start">
                                        <div className="p-3 bg-black/20 rounded-xl backdrop-blur-sm text-white">
                                            <course.icon className="w-8 h-8" />
                                        </div>
                                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/80 bg-black/20 px-2 py-1 rounded">
                                            {course.moduleIds.length} Módulos
                                        </span>
                                    </div>
                                </div>

                                {/* Body */}
                                <div className="p-6 flex flex-col flex-grow bg-white dark:bg-cyber-panel">
                                    <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 group-hover:text-brand-600 dark:group-hover:text-cyber-primary transition-colors">
                                        {course.title}
                                    </h2>
                                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase mb-4 tracking-wide">
                                        {course.subtitle}
                                    </p>
                                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6 flex-grow">
                                        {course.description}
                                    </p>

                                    {/* Progress Bar */}
                                    <div className="mt-auto">
                                        <div className="flex justify-between text-xs mb-2 font-mono">
                                            <span className="text-slate-500">PROGRESSO</span>
                                            <span className="text-slate-900 dark:text-white font-bold">{progress}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                                            <div 
                                                className={`h-full rounded-full transition-all duration-1000 bg-gradient-to-r ${themeClass}`}
                                                style={{ width: `${progress}%` }}
                                            ></div>
                                        </div>
                                        
                                        <div className="mt-6 flex items-center justify-end gap-2 text-sm font-bold text-slate-700 dark:text-white group-hover:gap-4 transition-all">
                                            {progress > 0 ? 'CONTINUAR' : 'INICIAR'} <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <ImplementationRoadmap />
            </div>
        </div>
    );
};

export default PlatformHome;
