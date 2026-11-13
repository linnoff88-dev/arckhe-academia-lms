import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ROISimulatorProps {
    currentCost: number;
    setCurrentCost: (v: number) => void;
    currentRevenue: number;
    setCurrentRevenue: (v: number) => void;
    costReductionPct: number;
    setCostReductionPct: (v: number) => void;
    revenueIncreasePct: number;
    setRevenueIncreasePct: (v: number) => void;
}

const ROISimulator: React.FC<ROISimulatorProps> = ({
    currentCost, setCurrentCost,
    currentRevenue, setCurrentRevenue,
    costReductionPct, setCostReductionPct,
    revenueIncreasePct, setRevenueIncreasePct
}) => {

    const newCost = currentCost * (1 - costReductionPct / 100);
    const newRevenue = currentRevenue * (1 + revenueIncreasePct / 100);
    
    const currentProfit = currentRevenue - currentCost;
    const newProfit = newRevenue - newCost;

    const data = [
        {
            name: 'Atual',
            Custos: currentCost,
            Receita: currentRevenue,
            Lucro: currentProfit
        },
        {
            name: 'Com IA',
            Custos: newCost,
            Receita: newRevenue,
            Lucro: newProfit
        }
    ];

    return (
        <div className="bg-white dark:bg-cyber-panel border border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-xl mb-12">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 font-sans">Simulador de ROI de IA</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                    <div>
                        <label className="block text-sm font-mono text-slate-500 dark:text-slate-400 mb-2">Custos Atuais (R$)</label>
                        <input 
                            type="number" 
                            value={currentCost} 
                            onChange={(e) => setCurrentCost(Number(e.target.value))}
                            className="w-full bg-slate-100 dark:bg-black/50 border border-slate-300 dark:border-white/10 rounded-lg p-3 text-slate-800 dark:text-white focus:outline-none focus:border-brand-500 dark:focus:border-cyber-primary"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-mono text-slate-500 dark:text-slate-400 mb-2">Receita Atual (R$)</label>
                        <input 
                            type="number" 
                            value={currentRevenue} 
                            onChange={(e) => setCurrentRevenue(Number(e.target.value))}
                            className="w-full bg-slate-100 dark:bg-black/50 border border-slate-300 dark:border-white/10 rounded-lg p-3 text-slate-800 dark:text-white focus:outline-none focus:border-brand-500 dark:focus:border-cyber-primary"
                        />
                    </div>
                    <div>
                        <label className="flex justify-between items-center text-sm font-mono text-slate-500 dark:text-slate-400 mb-2">
                            <span>Redução de Custos Estimada (%)</span>
                            <span className="font-bold text-brand-600 dark:text-cyber-accent">{costReductionPct}%</span>
                        </label>
                        <input 
                            type="range" 
                            min="0" max="50" 
                            value={costReductionPct} 
                            onChange={(e) => setCostReductionPct(Number(e.target.value))}
                            className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>
                    <div>
                        <label className="flex justify-between items-center text-sm font-mono text-slate-500 dark:text-slate-400 mb-2">
                            <span>Aumento de Receita Estimado (%)</span>
                            <span className="font-bold text-brand-600 dark:text-cyber-accent">{revenueIncreasePct}%</span>
                        </label>
                        <input 
                            type="range" 
                            min="0" max="50" 
                            value={revenueIncreasePct} 
                            onChange={(e) => setRevenueIncreasePct(Number(e.target.value))}
                            className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer"
                        />
                    </div>
                    
                    <div className="bg-brand-50 dark:bg-cyber-primary/10 border border-brand-200 dark:border-cyber-primary/30 p-4 rounded-xl mt-4">
                        <h4 className="text-sm text-brand-800 dark:text-cyber-primary font-bold mb-2">Impacto no Lucro</h4>
                        <div className="text-3xl font-bold text-slate-900 dark:text-white">
                            + R$ {(newProfit - currentProfit).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </div>
                    </div>
                </div>

                <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#475569" opacity={0.3} />
                            <XAxis dataKey="name" stroke="#64748b" />
                            <YAxis stroke="#64748b" />
                            <Tooltip 
                                contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                                itemStyle={{ color: '#fff' }}
                            />
                            <Legend />
                            <Bar dataKey="Custos" fill="#ef4444" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="Receita" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="Lucro" fill="#10b981" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default ROISimulator;
