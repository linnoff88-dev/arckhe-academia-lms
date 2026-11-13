
import React, { useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import { useCourseProgress } from '../context/ProgressContext';
import { ALL_BADGES } from '../data/gamificationData';
import { COURSE_DATA } from '../data/courseData';
import { Trophy, Award, BrainCircuit, Star, ArrowRight } from '../components/icons';
import { Link } from 'react-router-dom';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';

// Inline simple radar chart component replacement
const SkillRadarComponent = ({ stats }: { stats: any[] }) => {
    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={stats}>
                    <PolarGrid stroke="rgba(255,255,255,0.2)" />
                    <PolarAngleAxis dataKey="label" tick={{ fill: '#e2e8f0', fontSize: 12, fontFamily: 'monospace' }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar 
                        name="Progresso" 
                        dataKey="value" 
                        stroke="#06b6d4" 
                        fill="#06b6d4" 
                        fillOpacity={0.5} 
                    />
                    <Tooltip 
                        contentStyle={{ backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '8px' }}
                        itemStyle={{ color: '#06b6d4' }}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

const ProfilePage: React.FC = () => {
  const { currentUser } = useAuth();
  const { 
    xp, 
    level, 
    xpInCurrentLevel, 
    xpForNextLevel, 
    earnedBadges, 
    getCourseProgress,
    completedLessons
  } = useCourseProgress();

  // Compute live progress based on completed lessons across modules mapping
  const radarStats = useMemo(() => {
      const getPillarProgress = (moduleIds: string[]) => {
          let total = 0;
          let completed = 0;
          COURSE_DATA.forEach(mdl => {
              if (moduleIds.includes(mdl.id)) {
                  total += mdl.lessons.length;
                  mdl.lessons.forEach(l => {
                      if (completedLessons.has(l.id)) completed++;
                  });
              }
          });
          return total === 0 ? 0 : Math.round((completed / total) * 100);
      };

      return [
        { label: 'Técnico', value: getPillarProgress(['m1']), color: '#06b6d4' },
        { label: 'Negócios', value: getPillarProgress(['m2']), color: '#f43f5e' },
        { label: 'Ética', value: getPillarProgress(['m5']), color: '#f59e0b' },
        { label: 'Implementação', value: getPillarProgress(['m3', 'm4']), color: '#10b981' },
        { label: 'Visão Geral', value: getPillarProgress(['m0']), color: '#8b5cf6' },
        { label: 'Automação', value: getPillarProgress(['m3']), color: '#ec4899' },
        { label: 'Analytics', value: getPillarProgress(['m2', 'm4']), color: '#14b8a6' },
        { label: 'Estratégia', value: getPillarProgress(['m0', 'm1', 'm5']), color: '#6366f1' }
      ];
  }, [completedLessons]);

  const earnedBadgesList = ALL_BADGES.filter(b => earnedBadges.has(b.id));
  const lockedBadgesList = ALL_BADGES.filter(b => !earnedBadges.has(b.id));

  // Check for course completions to show certificate download options
  const completedCourses = [
      { id: 'aplicacao-estrategica-ia', title: 'Aplicação Estratégica de IA', progress: getCourseProgress('aplicacao-estrategica-ia') }
  ].filter(c => c.progress === 100);

  return (
    <div className="animate-slide-up pb-20">
        {/* Header Profile Card */}
        <div className="bg-cyber-panel border border-white/10 rounded-3xl p-8 mb-8 relative overflow-hidden shadow-2xl">
            {/* Background ambient glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
                {/* Avatar with Level Badge */}
                <div className="relative group">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-cyber-primary to-cyber-secondary p-[3px] shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                        <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden relative">
                            {/* Placeholder Avatar - Initials */}
                            <span className="text-3xl md:text-4xl font-bold text-white font-mono z-10">
                                {currentUser.username.substring(0, 2).toUpperCase()}
                            </span>
                            <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
                        </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full border-2 border-slate-900 shadow-lg transform group-hover:scale-110 transition-transform">
                        Lvl {level}
                    </div>
                </div>

                {/* User Info & XP Bar */}
                <div className="flex-1 text-center md:text-left w-full">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-1 font-sans tracking-tight">{currentUser.username}</h1>
                    <p className="text-slate-400 font-mono text-xs md:text-sm mb-6 uppercase tracking-widest">{currentUser.email} • {currentUser.role === 'admin' ? 'Administrador' : 'Explorador'}</p>
                    
                    <div className="max-w-xl">
                        <div className="flex justify-between text-xs mb-2 font-mono font-bold">
                            <span className="text-cyber-primary">{xpInCurrentLevel} XP</span>
                            <span className="text-slate-500">{xpForNextLevel} XP para o próximo nível</span>
                        </div>
                        <div className="h-3 bg-slate-800 rounded-full overflow-hidden border border-white/5 relative">
                            <div className="absolute inset-0 bg-cyber-primary/20 animate-pulse"></div>
                            <div className="h-full bg-gradient-to-r from-cyber-primary to-cyber-secondary transition-all duration-1000 ease-out shadow-[0_0_10px_rgba(6,182,212,0.5)]" style={{ width: `${(xpInCurrentLevel / xpForNextLevel) * 100}%` }}></div>
                        </div>
                        <p className="text-right text-[10px] text-slate-500 mt-2 font-mono">TOTAL ACUMULADO: {xp.toLocaleString()} XP</p>
                    </div>
                </div>

                {/* Quick Stats */}
                <div className="flex gap-4 mt-4 md:mt-0">
                    <div className="text-center p-4 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm min-w-[100px]">
                        <Trophy className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
                        <span className="block text-2xl font-bold text-white font-mono">{earnedBadgesList.length}</span>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Medalhas</span>
                    </div>
                    <div className="text-center p-4 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm min-w-[100px]">
                        <Award className="w-6 h-6 text-cyber-primary mx-auto mb-2" />
                        <span className="block text-2xl font-bold text-white font-mono">{completedCourses.length}</span>
                        <span className="text-[10px] text-slate-400 uppercase tracking-wider font-bold">Diplomas</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Skill Matrix */}
            <div className="lg:col-span-1 bg-cyber-panel border border-white/10 rounded-3xl p-6 shadow-xl flex flex-col items-center justify-center min-h-[400px] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
                <h3 className="text-sm font-mono font-bold text-slate-400 uppercase mb-2 flex items-center gap-2 w-full relative z-10">
                    <BrainCircuit className="w-4 h-4 text-cyber-primary" /> Matriz de Habilidades
                </h3>
                <div className="flex-1 flex items-center justify-center w-full relative z-10">
                    <SkillRadarComponent stats={radarStats} />
                </div>
                <p className="text-[10px] text-slate-500 text-center mt-4 max-w-xs relative z-10">
                    Este radar evolui conforme você completa módulos nas diferentes trilhas de especialização do Arkhé AI Hub.
                </p>
            </div>

            {/* Badges Gallery & Certs */}
            <div className="lg:col-span-2 space-y-8">
                
                {/* Certificates Area */}
                {completedCourses.length > 0 && (
                    <div className="bg-gradient-to-r from-slate-900 to-slate-800 border border-cyber-primary/30 rounded-3xl p-6 shadow-xl relative overflow-hidden">
                        <div className="absolute right-0 top-0 w-64 h-full bg-cyber-primary/5 -skew-x-12 transform translate-x-12"></div>
                        <h3 className="text-sm font-mono font-bold text-cyber-primary uppercase mb-6 flex items-center gap-2 relative z-10">
                            <Award className="w-4 h-4" /> Certificações Oficiais
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
                            {completedCourses.map(course => (
                                <div key={course.id} className="flex flex-col justify-between bg-black/40 p-5 rounded-2xl border border-white/10 hover:border-cyber-primary/50 transition-all group">
                                    <div>
                                        <h4 className="text-white font-bold text-lg leading-tight mb-1">{course.title}</h4>
                                        <p className="text-xs text-slate-400 font-mono mb-4">CONCLUÍDO • 100%</p>
                                    </div>
                                    <Link to={`/course/${course.id}`} className="text-xs bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 py-2 rounded-xl font-bold transition-all flex items-center justify-center gap-2 group-hover:bg-cyber-primary group-hover:text-black group-hover:border-cyber-primary">
                                        <Award className="w-3 h-3" /> Ver Certificado
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Conquistas Desbloqueadas */}
                <div className="bg-cyber-panel border border-white/10 rounded-3xl p-6 shadow-xl">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-sm font-mono font-bold text-slate-400 uppercase flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-400" /> Galeria de Conquistas
                        </h3>
                        <span className="text-xs text-slate-500 font-mono">{earnedBadgesList.length} / {ALL_BADGES.length}</span>
                    </div>
                    
                    {earnedBadgesList.length > 0 ? (
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                            {earnedBadgesList.map(badge => (
                                <div key={badge.id} className="group relative flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:scale-110 group-hover:border-cyber-primary/50 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-help">
                                        <badge.icon className="w-8 h-8" />
                                    </div>
                                    
                                    {/* Tooltip */}
                                    <div className="absolute bottom-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 text-white text-[10px] p-3 rounded-xl w-40 text-center pointer-events-none z-20 border border-white/20 shadow-xl transform translate-y-2 group-hover:translate-y-0">
                                        <p className="font-bold text-cyber-primary mb-1">{badge.name}</p>
                                        <p className="text-slate-300 leading-tight">{badge.description}</p>
                                        <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 border-b border-r border-white/20 transform rotate-45"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-10 bg-white/5 rounded-2xl border border-white/5 border-dashed">
                            <Trophy className="w-12 h-12 text-slate-600 mx-auto mb-3" />
                            <p className="text-slate-400 font-bold">Sua galeria está vazia.</p>
                            <p className="text-xs text-slate-600 mt-1">Complete sua primeira lição para ganhar uma medalha!</p>
                            <Link to="/" className="inline-block mt-4 text-xs font-bold text-cyber-primary hover:text-white transition-colors">
                                Ir para o Dashboard <ArrowRight className="w-3 h-3 inline" />
                            </Link>
                        </div>
                    )}
                </div>

                {/* Próximas Conquistas (Locked) */}
                {lockedBadgesList.length > 0 && (
                    <div className="bg-cyber-panel border border-white/10 rounded-3xl p-6 shadow-xl opacity-60 hover:opacity-100 transition-opacity duration-500">
                        <h3 className="text-sm font-mono font-bold text-slate-500 uppercase mb-6 flex items-center gap-2">
                            <Trophy className="w-4 h-4" /> Próximos Desafios
                        </h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                            {lockedBadgesList.slice(0, 12).map(badge => (
                                <div key={badge.id} className="flex flex-col items-center group relative">
                                    <div className="w-16 h-16 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center text-slate-700 group-hover:border-white/20 group-hover:text-slate-500 transition-colors">
                                        <badge.icon className="w-8 h-8" />
                                    </div>
                                    <div className="absolute bottom-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-[10px] p-2 rounded w-32 text-center pointer-events-none z-20 border border-white/10">
                                        <span className="font-bold text-slate-400">Bloqueado:</span> {badge.name}
                                    </div>
                                </div>
                            ))}
                            {lockedBadgesList.length > 12 && (
                                <div className="w-16 h-16 rounded-2xl bg-black/20 border border-white/5 flex items-center justify-center text-xs text-slate-600 font-mono font-bold">
                                    +{lockedBadgesList.length - 12}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
};

export default ProfilePage;
