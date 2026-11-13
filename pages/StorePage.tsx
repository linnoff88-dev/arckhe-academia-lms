import React, { useState } from 'react';
import { useCourseProgress } from '../context/ProgressContext';
import { Award, Star, CheckCircle2, ChevronRight, Lock } from '../components/icons';
import { Link } from 'react-router-dom';

const STORE_ITEMS = [
    {
        id: 'theme-neon',
        title: 'Tema Neon Odissey',
        description: 'Desbloqueie um tema alternativo vibrante para interface com destaques em azul e rosa neon.',
        cost: 500,
        type: 'Theme',
        icon: '✨'
    },
    {
        id: 'avatar-cyber',
        title: 'Avatar Cyberpunk',
        description: 'Adquira a imagem de perfil Cyberpunk exclusiva para o ranking e perfil.',
        cost: 300,
        type: 'Profile',
        icon: '🤖'
    },
    {
        id: 'badge-founder',
        title: 'Medalha do Fundador',
        description: 'Medalha de apoio a plataforma exibida em seu perfil.',
        cost: 1000,
        type: 'Badge',
        icon: '👑'
    },
    {
        id: 'feature-assistant-voice',
        title: 'Nova Voz: Jarvis',
        description: 'Desbloqueie uma voz premium de inteligência sintética super responsiva para a leitura do tutor AI.',
        cost: 1500,
        type: 'Feature',
        icon: '🎙️'
    }
];

const StorePage: React.FC = () => {
    const { coins, purchasedItems, purchaseItem } = useCourseProgress();
    const [purchaseError, setPurchaseError] = useState<string | null>(null);

    const handlePurchase = (id: string, cost: number) => {
        const success = purchaseItem(id, cost);
        if (!success) {
            setPurchaseError(`Saldo insuficiente. Você precisa de ${cost} XP Coins.`);
            setTimeout(() => setPurchaseError(null), 3000);
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 pt-24 pb-20">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent inline-flex items-center gap-3">
                            <Star className="w-8 h-8 text-emerald-400" />
                            Loja Arkhé
                        </h1>
                        <p className="text-slate-400 mt-2 font-mono text-sm max-w-xl">
                            Troque seus XP Coins ganhos em aulas por itens exclusivos de personalização e melhorias na plataforma.
                        </p>
                    </div>
                    <div className="bg-slate-900 border border-emerald-500/30 rounded-xl px-6 py-3 flex items-center gap-3 shadow-[0_0_15px_rgba(16,185,129,0.15)]">
                        <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                            <Star className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div>
                            <p className="text-[10px] text-slate-400 font-mono font-bold uppercase tracking-wider">Saldo Atual</p>
                            <p className="text-xl font-bold text-emerald-400">{coins} <span className="text-sm font-normal text-emerald-500/70">Coins</span></p>
                        </div>
                    </div>
                </div>

                {purchaseError && (
                    <div className="bg-red-500/10 border border-red-500/50 text-red-500 px-4 py-3 rounded-xl mb-6 flex items-center gap-2 animate-fade-in">
                        <Lock className="w-5 h-5" />
                        {purchaseError}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {STORE_ITEMS.map(item => {
                        const isPurchased = purchasedItems.includes(item.id);
                        const canAfford = coins >= item.cost;
                        
                        return (
                            <div key={item.id} className={`bg-slate-900 border rounded-2xl p-6 transition-all duration-300 relative overflow-hidden group ${isPurchased ? 'border-emerald-500/40 bg-emerald-950/10' : canAfford ? 'border-white/10 hover:border-cyan-500/50' : 'border-white/5 opacity-80'}`}>
                                {isPurchased && (
                                    <div className="absolute top-0 right-0 bg-emerald-500 text-black text-[10px] font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1 font-mono">
                                        <CheckCircle2 className="w-3 h-3" /> ADQUIRIDO
                                    </div>
                                )}
                                
                                <div className="text-4xl mb-4 opacity-80">{item.icon}</div>
                                <div className="text-xs font-mono text-cyan-400 font-bold mb-2 uppercase tracking-widest">{item.type}</div>
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-400 mb-6 min-h-[60px]">{item.description}</p>
                                
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-1.5 font-bold font-mono">
                                        <Star className={`w-4 h-4 ${isPurchased ? 'text-emerald-400' : 'text-slate-300'}`} />
                                        <span className={isPurchased ? 'text-emerald-400 line-through opacity-70' : 'text-slate-200'}>{item.cost}</span>
                                    </div>
                                    
                                    {!isPurchased && (
                                        <button 
                                            onClick={() => handlePurchase(item.id, item.cost)}
                                            className={`px-4 py-2 rounded-lg font-bold text-sm transition-all flex items-center gap-2 ${canAfford ? 'bg-white text-black hover:bg-slate-200' : 'bg-white/5 text-white/40 cursor-not-allowed'}`}
                                        >
                                            {canAfford ? 'Comprar' : 'Bloqueado'}
                                        </button>
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

export default StorePage;
