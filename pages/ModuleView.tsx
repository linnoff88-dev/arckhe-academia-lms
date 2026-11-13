
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { COURSE_DATA } from '../data/courseData';
import { ALL_BADGES } from '../data/gamificationData';
import { useCourseProgress } from '../context/ProgressContext';
import { ArrowLeft, CheckCircle2, PlayCircle, Lock, ChevronRight, Trophy } from '../components/icons';

const ModuleView: React.FC = () => {
  const { courseId, moduleId } = useParams<{ courseId: string; moduleId: string }>();
  const { isLessonCompleted, isModuleCompleted } = useCourseProgress();
  const module = COURSE_DATA.find(m => m.id === moduleId);
  const isBonusModule = module?.id === 'm15';

  const getLessonState = (lessonId: string, index: number) => {
    const completed = isLessonCompleted(lessonId);
    const firstLessonId = module?.lessons[0].id;
    const firstLessonCompleted = firstLessonId ? isLessonCompleted(firstLessonId) : false;
    const previousLessonId = index > 0 ? module?.lessons[index - 1].id : null;
    const unlocked = index === 0 || firstLessonCompleted || (previousLessonId && isLessonCompleted(previousLessonId));
    return { completed, unlocked };
  };

  if (!module) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center animate-slide-up">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-4">Módulo não encontrado</h2>
        <Link to={`/course/${courseId}`} className="px-6 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors">
            Voltar ao Dashboard
        </Link>
      </div>
    );
  }

  const completedCount = module.lessons.filter(l => isLessonCompleted(l.id)).length;
  const progress = Math.round((completedCount / module.lessons.length) * 100);
  const moduleBadge = ALL_BADGES.find(b => b.moduleId === module.id);

  return (
    <div className="animate-slide-up pb-20">
       <Link to={`/course/${courseId}`} className="inline-flex items-center gap-2 text-slate-500 hover:text-brand-600 dark:hover:text-cyber-primary transition-colors mb-6 font-bold group text-sm md:text-base">
            <div className="p-2 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur shadow-sm group-hover:shadow-md transition-all group-hover:-translate-x-1">
                <ArrowLeft className="h-4 w-4" />
            </div>
            <span>Voltar ao Dashboard</span>
        </Link>

      <div className="relative overflow-hidden rounded-3xl bg-slate-900 shadow-2xl mb-8 md:mb-12 isolate border border-white/10">
        <div className="absolute inset-0 opacity-40">
            <img 
                src={`https://source.unsplash.com/random/1200x400?technology,abstract&sig=${module.id}`} 
                alt="Module Background" 
                className="w-full h-full object-cover"
            />
             <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-brand-900/80 mix-blend-multiply"></div>
        </div>
        
        <div className={`absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-50 mix-blend-screen ${isBonusModule ? 'bg-yellow-500' : 'bg-brand-500'}`}></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>

        <div className="relative z-10 p-6 md:p-12 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center justify-between">
            <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                     <div className={`p-2 md:p-3 rounded-xl backdrop-blur-md border border-white/10 ${isBonusModule ? 'bg-yellow-500/20 text-yellow-300' : 'bg-brand-500/20 text-brand-300'}`}>
                        <module.icon className="w-6 h-6 md:w-8 md:h-8" />
                     </div>
                     {isBonusModule && (
                        <span className="px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300 border border-yellow-500/30 text-xs font-bold uppercase tracking-wide">
                            Módulo Bônus
                        </span>
                     )}
                </div>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3 md:mb-4 leading-tight">
                    {module.title}
                </h1>
                <p className="text-sm md:text-lg text-slate-300 max-w-2xl leading-relaxed">
                    {module.subtitle}
                </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6 flex flex-col items-center min-w-[120px] md:min-w-[160px] self-start md:self-auto">
                <div className="relative w-16 h-16 md:w-20 md:h-20 mb-2">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                        <path className="text-white/10" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                        <path 
                            className={`${isBonusModule ? 'text-yellow-400' : 'text-brand-400'} transition-all duration-1000 ease-out`}
                            strokeDasharray={`${progress}, 100`} 
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="3" 
                        />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-base md:text-lg">
                        {progress}%
                    </div>
                </div>
                <span className="text-[10px] md:text-xs font-medium text-slate-400 uppercase tracking-wider">Concluído</span>
            </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-0 md:px-4">
        <div className="relative">
            {/* Linha Vertical */}
            <div className="absolute left-8 top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-white/10 hidden md:block"></div>

            <div className="space-y-4 md:space-y-6">
                {module.lessons.map((lesson, index) => {
                    const { completed, unlocked } = getLessonState(lesson.id, index);
                    const isNext = unlocked && !completed;

                    return (
                        <div key={lesson.id} className={`relative group ${unlocked ? 'opacity-100' : 'opacity-60 grayscale'}`}>
                            {/* Dot da Timeline */}
                            <div className={`
                                absolute left-8 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 hidden md:block z-10 transition-all duration-300
                                ${completed ? 'bg-emerald-500 border-emerald-500 scale-110' : isNext ? 'bg-white border-brand-500 animate-pulse scale-125' : 'bg-slate-200 dark:bg-slate-800 border-slate-300 dark:border-white/20'}
                            `}></div>

                            <Link 
                                to={unlocked ? `/course/${courseId}/module/${module.id}/lesson/${lesson.id}` : '#'}
                                className={`
                                    ml-0 md:ml-20 block relative overflow-hidden rounded-xl md:rounded-2xl border transition-all duration-300
                                    ${unlocked 
                                        ? 'bg-white dark:bg-cyber-panel hover:-translate-y-1 hover:shadow-xl cursor-pointer' 
                                        : 'bg-slate-50 dark:bg-black/20 cursor-not-allowed'
                                    }
                                    ${completed 
                                        ? 'border-emerald-200 dark:border-emerald-900/50 shadow-emerald-100 dark:shadow-none' 
                                        : isNext 
                                            ? 'border-brand-300 dark:border-brand-500/50 shadow-lg shadow-brand-100 dark:shadow-brand-900/20 ring-1 ring-brand-100 dark:ring-brand-900/30' 
                                            : 'border-slate-200 dark:border-white/5'
                                    }
                                `}
                            >
                                {isNext && <div className="absolute top-0 left-0 w-1 h-full bg-brand-500"></div>}
                                {completed && <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>}

                                <div className="p-4 md:p-6 flex items-center gap-4 md:gap-6">
                                    <div className={`
                                        w-10 h-10 md:w-14 md:h-14 rounded-xl flex-shrink-0 flex items-center justify-center text-base md:text-xl shadow-sm transition-colors
                                        ${completed 
                                            ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400' 
                                            : isNext 
                                                ? 'bg-brand-600 text-white shadow-brand-200 dark:shadow-brand-900/40' 
                                                : 'bg-slate-200 text-slate-400 dark:bg-white/5 dark:text-slate-500'
                                        }
                                    `}>
                                        {completed ? <CheckCircle2 className="w-5 h-5 md:w-7 md:h-7" /> : 
                                         unlocked ? <PlayCircle className="w-5 h-5 md:w-7 md:h-7" /> : 
                                         <Lock className="w-4 h-4 md:w-6 md:h-6" />}
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 md:gap-3 mb-1">
                                            <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider ${completed ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400 dark:text-slate-500'}`}>
                                                Lição {index + 1}
                                            </span>
                                            {isNext && <span className="px-2 py-0.5 rounded text-[9px] md:text-[10px] font-bold bg-brand-100 dark:bg-brand-900/50 text-brand-700 dark:text-brand-300 uppercase">Próxima</span>}
                                        </div>
                                        <h3 className={`text-sm md:text-lg font-bold truncate ${completed ? 'text-slate-500 dark:text-slate-400 line-through decoration-slate-300 dark:decoration-slate-600' : 'text-slate-900 dark:text-white'}`}>
                                            {lesson.title.split(':')[1] || lesson.title}
                                        </h3>
                                    </div>

                                    <div className="hidden sm:flex items-center text-slate-300 dark:text-slate-600 group-hover:text-brand-500 dark:group-hover:text-cyber-primary transition-colors">
                                        {unlocked && <ChevronRight className="w-6 h-6" />}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
        
        {isModuleCompleted(module.id) && (
            <div className="mt-12 mx-4 md:mx-0 relative overflow-hidden rounded-3xl bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 p-1 shadow-2xl animate-slide-up">
                <div className="bg-slate-900 rounded-[22px] p-8 text-center relative overflow-hidden">
                    {/* Efeitos de fundo */}
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/20 rounded-full blur-[80px]"></div>
                    
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-300 to-orange-600 p-[3px] shadow-[0_0_40px_rgba(234,179,8,0.4)] mb-6 animate-float">
                            <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                                {moduleBadge ? (
                                    <moduleBadge.icon className="w-12 h-12 text-yellow-400" />
                                ) : (
                                    <Trophy className="w-12 h-12 text-yellow-400" />
                                )}
                            </div>
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500 mb-2 font-sans tracking-tight">
                            Módulo Dominado!
                        </h2>
                        <p className="text-slate-300 text-lg mb-6 max-w-lg">
                            Você desbloqueou a insígnia <strong className="text-white">{moduleBadge?.name || 'Conquistador'}</strong>.
                        </p>
                        
                        <div className="flex gap-4">
                            <Link to={`/profile`} className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition-all text-sm uppercase tracking-wide">
                                Ver Coleção
                            </Link>
                            <Link to={`/course/${courseId}`} className="px-6 py-3 rounded-xl bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-all shadow-[0_0_20px_rgba(234,179,8,0.4)] text-sm uppercase tracking-wide flex items-center gap-2">
                                Próximo Desafio <ChevronRight className="w-4 h-4"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default ModuleView;
