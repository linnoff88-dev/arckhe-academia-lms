import React, { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';

const SECTORS = {
    'Varejo': [60, 50, 40, 50, 50],
    'Saúde': [40, 70, 30, 60, 40],
    'Finanças': [80, 90, 60, 70, 80],
    'Tecnologia': [90, 80, 80, 90, 90],
    'Indústria': [70, 60, 50, 40, 60]
};

const CATEGORIES = [
    'Automação de Processos',
    'Governança de Dados',
    'Adoção de Agentes',
    'Treinamento da Equipe',
    'Orçamento em IA'
];

const MaturityComparator: React.FC = () => {
    const [selectedSector, setSelectedSector] = useState<keyof typeof SECTORS>('Varejo');
    
    // User scores (10 to 100)
    const [userScores, setUserScores] = useState<number[]>([30, 30, 30, 30, 30]);

    const handleScoreChange = (index: number, val: number) => {
        const newScores = [...userScores];
        newScores[index] = val;
        setUserScores(newScores);
    };

    const data = CATEGORIES.map((category, index) => ({
        subject: category,
        Mercado: SECTORS[selectedSector][index],
        SuaEmpresa: userScores[index],
        fullMark: 100,
    }));

    return (
        <div className="bg-white dark:bg-cyber-panel border border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-xl mb-12">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-6 font-sans">
                Comparador de Maturidade em IA
            </h2>
            <div className="mb-6">
                <label className="block text-sm font-mono text-slate-500 dark:text-slate-400 mb-2">Selecione seu Setor de Atuação</label>
                <select 
                    value={selectedSector}
                    onChange={(e) => setSelectedSector(e.target.value as keyof typeof SECTORS)}
                    className="bg-slate-100 dark:bg-black/50 border border-slate-300 dark:border-white/10 rounded-lg p-3 text-slate-800 dark:text-white focus:outline-none focus:border-brand-500 dark:focus:border-cyber-primary"
                >
                    {Object.keys(SECTORS).map(sector => (
                        <option value={sector} key={sector}>{sector}</option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                    {CATEGORIES.map((cat, i) => (
                        <div key={Math.random()} >
                            <label className="flex justify-between items-center text-sm font-mono text-slate-500 dark:text-slate-400 mb-2">
                                <span>{cat}</span>
                                <span className="font-bold text-brand-600 dark:text-cyber-accent">Nível {userScores[i]}</span>
                            </label>
                            <input 
                                type="range" 
                                min="0" max="100" step="10"
                                value={userScores[i]} 
                                onChange={(e) => handleScoreChange(i, Number(e.target.value))}
                                className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer"
                            />
                        </div>
                    ))}
                </div>

                <div className="h-[350px] w-full flex justify-center items-center">
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                            <PolarGrid stroke="#475569" />
                            <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 10 }} />
                            <PolarRadiusAxis angle={30} domain={[0, 100]} />
                            <Radar name="Média do Mercado" dataKey="Mercado" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.4} />
                            <Radar name="Sua Empresa" dataKey="SuaEmpresa" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                            <Legend />
                            <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }} />
                        </RadarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            
        </div>
    );
};

export default MaturityComparator;
