
import React from 'react';
import { useCourseProgress } from '../context/ProgressContext';
import { CheckCircle2, Trophy, ArrowRight } from './icons';

const ChallengesWidget: React.FC = () => {
    const { activeChallenges, claimChallengeReward } = useCourseProgress();

    return (
        <div className="bg-cyber-panel border border-white/10 rounded-3xl p-5 md:p-8 shadow-xl flex flex-col relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            
            <div className="relative z-10 mb-6 flex justify-between items-center">
                <h3 className="text-sm font-mono font-bold text-slate-400 uppercase flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-yellow-400" /> Desafios da Semana
                </h3>
                <span className="text-[10px] font-mono text-slate-500 bg-white/5 px-2 py-1 rounded border border-white/5">
                    Reseta em 7 dias
                </span>
            </div>

            <div className="space-y-4 relative z-10 flex-1">
                {activeChallenges.map(challenge => (
                    <div 
                        key={challenge.id} 
                        className={`
                            relative p-4 rounded-xl border transition-all duration-300
                            ${challenge.completed 
                                ? 'bg-gradient-to-r from-emerald-900/20 to-emerald-800/10 border-emerald-500/30' 
                                : 'bg-white/5 border-white/5 hover:border-white/10'
                            }
                        `}
                    >
                        <div className="flex justify-between items-start mb-2">
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg ${challenge.completed ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/10 text-slate-400'}`}>
                                    <challenge.icon className="w-4 h-4" />
                                </div>
                                <div>
                                    <h4 className={`text-sm font-bold ${challenge.completed ? 'text-white' : 'text-slate-200'}`}>
                                        {challenge.title}
                                    </h4>
                                    <p className="text-[10px] text-slate-400 max-w-[150px] leading-tight">
                                        {challenge.description}
                                    </p>
                                </div>
                            </div>
                            <span className="text-xs font-mono text-yellow-400 font-bold">
                                +{challenge.rewardXp} XP
                            </span>
                        </div>

                        {challenge.completed && !challenge.claimed ? (
                            <button 
                                onClick={() => claimChallengeReward(challenge.id)}
                                className="w-full mt-2 py-1.5 bg-yellow-400 hover:bg-yellow-300 text-black text-xs font-bold rounded-lg uppercase tracking-wide flex items-center justify-center gap-2 animate-pulse"
                            >
                                <Trophy className="w-3 h-3" /> Resgatar Recompensa
                            </button>
                        ) : (
                            <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2 overflow-hidden">
                                <div 
                                    className={`h-full rounded-full transition-all duration-500 ${challenge.completed ? 'bg-emerald-500' : 'bg-cyber-primary'}`}
                                    style={{ width: `${Math.min((challenge.current / challenge.target) * 100, 100)}%` }}
                                ></div>
                            </div>
                        )}
                        
                        <div className="flex justify-between mt-1.5">
                            <span className="text-[10px] text-slate-500 font-mono">Progresso</span>
                            <span className={`text-[10px] font-mono font-bold ${challenge.completed ? 'text-emerald-400' : 'text-slate-300'}`}>
                                {challenge.current}/{challenge.target}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChallengesWidget;
