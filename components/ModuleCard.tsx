
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Module, CourseTheme } from '../types';
import { useCourseProgress } from '../context/ProgressContext';
import { ArrowRight, CheckCircle2 } from './icons';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80';

const getModuleImage = (moduleId: string) => {
    const images: Record<string, string> = {
        // Módulos Padrão
        'm0': 'photo-1451187580459-43490279c0fa', 
        'm1': 'photo-1620712943543-bcc4688e7485', 
        'm2': 'photo-1555949963-ff9fe0c870eb', 
        'm3': 'photo-1550684848-fac1c5b4e853', 
        'm4': 'photo-1551288049-bebda4e38f71', 
        'm5': 'photo-1611974765270-ca12586343bb', 
        'm6': 'photo-1485827404703-89b55fcc595e', 
        'm7': 'photo-1544197150-b99a580bb7a8', 
        'm8': 'photo-1558494949-efc02220ec98', 
        'm9': 'photo-1504384308090-c54be8042125', 
        'm10': 'photo-1664575602276-acd073f104c1', 
        'm11': 'photo-1531746790731-6c087fecd65a', 
        'm12': 'photo-1518432031352-d6fc5c10da5a', 
        'm13': 'photo-1555099962-4199c345e5dd', 
        'm14': 'photo-1456324854727-9f5fb656c3f8', 
        'm15': 'photo-1460925895917-afdab827c52f', 
        'm16': 'photo-1519389950473-47ba0277781c', 
        
        // Módulos Específicos de Vendas
        'm1_sales': 'photo-1556761175-5973dc0f32e7', 
        'm2_sales': 'photo-1516321318423-f06f85e504b3', 
        'm3_sales': 'photo-1551288049-bebda4e38f71', 
        'm4_sales': 'photo-1460925895917-afdab827c52f', 
        'm5_sales': 'photo-1611974765270-ca12586343bb', 
        'm6_sales': 'photo-1556740738-b6a63e27c4df', 
        'm7_sales': 'photo-1551288049-bebda4e38f71', 
        'm8_sales': 'photo-1519389950473-47ba0277781c', 
        'm9_sales': 'photo-1560472355-536de3962603', 
        'm10_sales': 'photo-1531746020798-e6953c6e8e04', 
        'm11_sales': 'photo-1526304640155-99196483b305', 
        'm12_sales': 'photo-1551434678-e076c223a692', 
        'm13_sales': 'photo-1454165804606-c3d57bc86b40', 
        'm14_sales': 'photo-1552664730-d307ca884978', 
        'm15_sales': 'photo-1556761175-5973dc0f32e7', 
        'm16_sales': 'photo-1556761175-4b46a572b786',

        // Módulos Específicos de Operações
        'm1_ops': 'photo-1581091226825-a6a2a5aee158', 
        'm2_ops': 'photo-1563986768609-322da13575f3', 
        'm3_ops': 'photo-1532619675605-1ede6c2ed2b0', 
        'm4_ops': 'photo-1551288049-bebda4e38f71', 
        'm5_ops': 'photo-1554224155-8d04cb21cd6c', 
        'm6_ops': 'photo-1531297461136-82lw9z1177', 
        'm7_ops': 'photo-1518770660439-4636190af475', 
        'm8_ops': 'photo-1558494949-efc02220ec98', 
        'm9_ops': 'photo-1504384308090-c54be8042125', 
        'm10_ops': 'photo-1664575602276-acd073f104c1', 
        'm11_ops': 'photo-1535376472810-5d229c6bda3c', 
        'm12_ops': 'photo-1581093458791-9f302e6d8359', 
        'm13_ops': 'photo-1581092160562-40aa08e78837', 
        'm14_ops': 'photo-1456324854727-9f5fb656c3f8', 
        'm15_ops': 'photo-1533750349088-cd871a92f312', 
        'm16_ops': 'photo-1519389950473-47ba0277781c', 

        // Módulos Específicos de Liderança
        'm1_lead': 'photo-1519389950473-47ba0277781c', 
        'm2_lead': 'photo-1521737604893-d14cc237f11d', 
        'm3_lead': 'photo-1522071820081-009f0129c71c', 
        'm4_lead': 'photo-1551836022-d5d88e9218df', 
        'm5_lead': 'photo-1507679799987-c73779587ccf', 
        'm6_lead': 'photo-1522202176988-66273c2fd55f', 
        'm7_lead': 'photo-1531482615713-2afd69097998', 
        'm8_lead': 'photo-1600880292203-757bb62b4baf', 
        'm9_lead': 'photo-1504384308090-c54be8042125', 
        'm10_lead': 'photo-1516321318423-f06f85e504b3', 
        'm11_lead': 'photo-1552664730-d307ca884978', 
        'm12_lead': 'photo-1517048676732-d65bc937f952', 
        'm13_lead': 'photo-1517245386807-bb43f82c33c4', 
        'm14_lead': 'photo-1522071820081-009f0129c71c', 
        'm15_lead': 'photo-1556761175-5973dc0f32e7', 
        'm16_lead': 'photo-1519389950473-47ba0277781c', 
    };
    return images[moduleId] ? `https://images.unsplash.com/${images[moduleId]}?auto=format&fit=crop&w=600&q=80` : FALLBACK_IMAGE;
};

interface ModuleCardProps {
  module: Module;
  themeColor?: CourseTheme;
  courseId?: string;
}

const themeColors = {
    cyan: { from: 'from-brand-500', to: 'to-accent-600', shadow: 'shadow-brand-500/30', text: 'text-brand-600', bg: 'bg-brand-600', border: 'border-brand-100' },
    rose: { from: 'from-rose-500', to: 'to-pink-600', shadow: 'shadow-rose-500/30', text: 'text-rose-600', bg: 'bg-rose-600', border: 'border-rose-100' },
    emerald: { from: 'from-emerald-500', to: 'to-teal-600', shadow: 'shadow-emerald-500/30', text: 'text-emerald-600', bg: 'bg-emerald-600', border: 'border-emerald-100' },
    violet: { from: 'from-violet-500', to: 'to-purple-600', shadow: 'shadow-violet-500/30', text: 'text-violet-600', bg: 'bg-violet-600', border: 'border-violet-100' },
    amber: { from: 'from-amber-500', to: 'to-orange-600', shadow: 'shadow-amber-500/30', text: 'text-amber-600', bg: 'bg-amber-600', border: 'border-amber-100' },
};

const ModuleCard: React.FC<ModuleCardProps> = ({ module, themeColor = 'cyan', courseId = 'aplicacao-estrategica-ia' }) => {
  const { completedLessons, isModuleCompleted } = useCourseProgress();
  const [imgSrc, setImgSrc] = useState<string>(getModuleImage(module.id));

  const completedInModule = module.lessons.filter(lesson => completedLessons.has(lesson.id)).length;
  const totalInModule = module.lessons.length;
  const moduleIsCompleted = isModuleCompleted(module.id);
  
  const moduleProgress = moduleIsCompleted ? 100 : (totalInModule > 0 ? (completedInModule / totalInModule) * 100 : 0);
  const theme = themeColors[themeColor];

  return (
    <Link to={`/course/${courseId}/module/${module.id}`} className="group h-full block relative">
        <div className={`absolute -inset-3 rounded-[2.5rem] bg-gradient-to-r ${theme.from} ${theme.to} opacity-0 group-hover:opacity-40 blur-xl transition-opacity duration-700`}></div>

        <div className={`
            relative h-full flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-lg shadow-slate-200/40 border border-slate-100/50
            transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-slate-200/60
        `}>
            <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-100">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
                <img 
                    src={imgSrc} 
                    alt={module.title} 
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 ease-out"
                    onError={() => setImgSrc(FALLBACK_IMAGE)}
                />
                
                <div className={`
                    absolute bottom-0 left-6 sm:left-8 translate-y-1/3 z-20
                    w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-white shadow-xl
                    transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6
                    bg-gradient-to-br ${theme.from} ${theme.to} ${theme.shadow}
                `}>
                    {moduleIsCompleted ? <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" /> : <module.icon className="w-7 h-7 sm:w-8 sm:h-8" />}
                </div>
            </div>

            <div className="p-6 sm:p-8 pt-10 sm:pt-12 flex flex-col flex-grow">
                <h2 className={`text-lg sm:text-xl font-bold text-slate-800 group-hover:${theme.text} transition-colors duration-300 mb-3 line-clamp-2 leading-tight`}>
                    {module.title}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 sm:mb-8 flex-grow line-clamp-3 font-medium">
                    {module.subtitle}
                </p>

                <div className="mt-auto space-y-3">
                     <div className="flex justify-between items-end">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Progresso</span>
                        <span className={`text-xs font-bold ${moduleIsCompleted ? 'text-emerald-600' : theme.text}`}>
                            {Math.round(moduleProgress)}%
                        </span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                         <div 
                            className={`h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r ${theme.from} ${theme.to}`}
                            style={{ width: `${moduleProgress}%` }}
                         ></div>
                    </div>
                    <div className="pt-4 flex items-center justify-between">
                        <span className="text-xs font-medium text-slate-400">{completedInModule}/{totalInModule} Lições</span>
                        <div className={`w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:${theme.bg} group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow`}>
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Link>
  );
};

export default ModuleCard;
