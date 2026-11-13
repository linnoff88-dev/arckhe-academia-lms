
import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useCourseProgress } from '../context/ProgressContext';
import { SendHorizontal, Globe, Hash, ShieldCheck, Star, Sparkles, Menu, MessageSquare, Trophy, CheckCircle2 } from '../components/icons';
import { Link } from 'react-router-dom';
import { calculateLevel } from '../utils/gamification';

interface ChatMessage {
    id: number;
    user: string;
    text: string;
    role: 'student' | 'admin' | 'system';
    timestamp: string;
    level: number;
}

const INITIAL_MESSAGES: ChatMessage[] = [
    { id: 1, user: 'Sistema', text: 'Bem-vindo ao NEXUS. Conexão neural estabelecida.', role: 'system', timestamp: '09:00', level: 99 },
    { id: 2, user: 'Ana_Dev', text: 'Alguém já testou o módulo de Agentes Autônomos? Está incrível!', role: 'student', timestamp: '09:05', level: 12 },
    { id: 3, user: 'Carlos_CEO', text: 'Acabei de aplicar o CRM autônomo na minha empresa. Surreal.', role: 'student', timestamp: '09:12', level: 15 },
];

const SocialHub: React.FC = () => {
    const { currentUser } = useAuth();
    const { level, earnedBadges, xp, getAllUsersProgress } = useCourseProgress();
    const { getAllUsers } = useAuth();
    
    const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
    const [inputText, setInputText] = useState('');
    const [mobileTab, setMobileTab] = useState<'channels' | 'chat' | 'rank'>('chat');
    const chatEndRef = useRef<HTMLDivElement>(null);

    // Simulação de persistência local básica para chat
    useEffect(() => {
        const saved = localStorage.getItem('nexus_chat_history');
        if (saved) {
            setMessages(JSON.parse(saved));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('nexus_chat_history', JSON.stringify(messages));
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, mobileTab]);

    const handleSendMessage = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputText.trim() || !currentUser) return;

        const newMessage: ChatMessage = {
            id: Date.now(),
            user: currentUser.username,
            text: inputText,
            role: currentUser.role,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            level: level
        };

        setMessages(prev => [...prev, newMessage]);
        setInputText('');
    };

    if (!currentUser) return null;

    // LEADERBOARD LOGIC
    const allUsers = getAllUsers();
    const allProgress = getAllUsersProgress();

    // Mock users if real users are few
    const mockUsers = [
        { id: 'mock1', username: 'Sofia_Tech', xp: 15400, level: calculateLevel(15400).level, role: 'student' },
        { id: 'mock2', username: 'Lucas_AI', xp: 12100, level: calculateLevel(12100).level, role: 'student' },
        { id: 'mock3', username: 'Marcos_Vendas', xp: 9800, level: calculateLevel(9800).level, role: 'student' },
    ];

    const realUsersData = allUsers.map(u => {
        const userXP = allProgress[u.id]?.xp || 0;
        return {
            id: u.id,
            username: u.username,
            xp: userXP,
            level: calculateLevel(userXP).level,
            role: u.role
        };
    });

    // Combine & Sort
    // Filter duplicates if mock users share IDs with real users (unlikely here but good practice)
    const leaderboard = [...mockUsers, ...realUsersData.filter(u => !mockUsers.some(m => m.username === u.username))]
        .sort((a, b) => b.xp - a.xp)
        .slice(0, 10); // Top 10

    return (
        <div className="min-h-[calc(100vh-100px)] bg-cyber-bg text-slate-300 p-2 md:p-6 animate-scale-in flex flex-col">
            
            {/* Mobile Tabs Navigation */}
            <div className="lg:hidden flex justify-between bg-cyber-panel border border-white/10 rounded-xl p-1 mb-4 sticky top-20 z-30 shadow-lg">
                <button 
                    onClick={() => setMobileTab('channels')}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-2 transition-all ${mobileTab === 'channels' ? 'bg-cyber-primary text-black shadow-sm' : 'text-slate-400 hover:bg-white/5'}`}
                >
                    <Menu className="w-4 h-4" /> Canais
                </button>
                <button 
                    onClick={() => setMobileTab('chat')}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-2 transition-all ${mobileTab === 'chat' ? 'bg-cyber-primary text-black shadow-sm' : 'text-slate-400 hover:bg-white/5'}`}
                >
                    <MessageSquare className="w-4 h-4" /> Chat
                </button>
                <button 
                    onClick={() => setMobileTab('rank')}
                    className={`flex-1 py-2 text-xs font-bold rounded-lg flex items-center justify-center gap-2 transition-all ${mobileTab === 'rank' ? 'bg-cyber-primary text-black shadow-sm' : 'text-slate-400 hover:bg-white/5'}`}
                >
                    <Trophy className="w-4 h-4" /> Rank
                </button>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 h-[80vh] w-full">
                
                {/* Sidebar: Navigation & Channels */}
                <div className={`${mobileTab === 'channels' ? 'flex' : 'hidden'} lg:flex flex-col gap-6 bg-cyber-panel/50 backdrop-blur border border-white/5 rounded-2xl p-6 shadow-xl h-full`}>
                    <div className="flex items-center gap-3 text-cyber-primary mb-4 lg:mb-6">
                        <Globe className="w-6 h-6 animate-pulse-slow" />
                        <h1 className="text-xl font-bold font-mono tracking-wider">NEXUS</h1>
                    </div>

                    <div className="space-y-2 flex-1 overflow-y-auto">
                        <h3 className="text-xs font-mono text-slate-500 uppercase mb-2 ml-2">Canais</h3>
                        <button className="w-full text-left px-4 py-3 rounded-lg bg-cyber-primary/10 text-cyber-primary border border-cyber-primary/30 flex items-center gap-3 transition-all hover:translate-x-1">
                            <Hash className="w-4 h-4" /> Geral
                        </button>
                        <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/5 text-slate-400 flex items-center gap-3 transition-all hover:translate-x-1 hover:text-white">
                            <Hash className="w-4 h-4" /> Networking
                        </button>
                        <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/5 text-slate-400 flex items-center gap-3 transition-all hover:translate-x-1 hover:text-white">
                            <Hash className="w-4 h-4" /> Vagas & Projetos
                        </button>
                        <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-white/5 text-slate-400 flex items-center gap-3 transition-all hover:translate-x-1 hover:text-white">
                            <Hash className="w-4 h-4" /> Off-Topic
                        </button>
                    </div>

                    <div className="mt-auto pt-4 border-t border-white/5">
                        <div className="p-4 rounded-xl bg-gradient-to-br from-cyber-secondary/10 to-purple-900/20 border border-cyber-secondary/20">
                            <h3 className="text-sm font-bold text-cyber-secondary mb-1 flex items-center gap-2">
                                <Sparkles className="w-4 h-4" /> Status VIP
                            </h3>
                            <p className="text-xs text-slate-400">
                                Você possui {earnedBadges.size} medalhas de acesso.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Chat Area */}
                <div className={`${mobileTab === 'chat' ? 'flex' : 'hidden'} lg:flex lg:col-span-2 flex-col bg-cyber-panel border border-white/10 rounded-2xl shadow-2xl overflow-hidden relative h-full`}>
                    {/* Chat Header */}
                    <div className="p-4 border-b border-white/5 bg-slate-900/50 flex items-center justify-between shrink-0">
                        <div className="flex items-center gap-2">
                            <Hash className="w-5 h-5 text-cyber-primary" />
                            <span className="font-bold text-white">Geral</span>
                        </div>
                        <span className="text-xs text-green-400 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> 42 Online
                        </span>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex gap-3 group ${msg.role === 'system' ? 'justify-center my-4 opacity-70' : ''}`}>
                                {msg.role !== 'system' && (
                                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-xs md:text-sm shadow-lg ${msg.user === currentUser.username ? 'bg-cyber-primary text-black' : 'bg-slate-700 text-white border border-white/10'}`}>
                                        {msg.user.substring(0, 2).toUpperCase()}
                                    </div>
                                )}
                                
                                <div className={`flex flex-col max-w-[85%] ${msg.role === 'system' ? 'items-center' : ''}`}>
                                    {msg.role !== 'system' && (
                                        <div className="flex items-baseline gap-2 mb-1">
                                            <span className={`text-xs md:text-sm font-bold ${msg.user === currentUser.username ? 'text-cyber-primary' : 'text-white'}`}>
                                                {msg.user}
                                            </span>
                                            <span className="text-[10px] font-mono text-slate-500 bg-white/5 px-1.5 rounded">Lvl {msg.level}</span>
                                            <span className="text-[10px] text-slate-600">{msg.timestamp}</span>
                                        </div>
                                    )}
                                    
                                    <div className={`
                                        text-sm leading-relaxed p-3 rounded-xl
                                        ${msg.role === 'system' ? 'bg-cyber-primary/10 text-cyber-primary border border-cyber-primary/20 text-center font-mono text-xs px-6' : ''}
                                        ${msg.user === currentUser.username && msg.role !== 'system' ? 'bg-cyber-primary/10 text-slate-100 border border-cyber-primary/10 rounded-tl-none' : ''}
                                        ${msg.user !== currentUser.username && msg.role !== 'system' ? 'bg-white/5 text-slate-300 border border-white/5 rounded-tl-none' : ''}
                                    `}>
                                        {msg.text}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div ref={chatEndRef} />
                    </div>

                    {/* Input Area */}
                    <div className="p-3 md:p-4 bg-slate-900/80 border-t border-white/5 backdrop-blur shrink-0">
                        <form onSubmit={handleSendMessage} className="flex gap-2 md:gap-3">
                            <input 
                                type="text" 
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                placeholder="Enviar mensagem..."
                                className="flex-1 bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyber-primary/50 focus:ring-1 focus:ring-cyber-primary/50 transition-all placeholder:text-slate-600"
                            />
                            <button 
                                type="submit" 
                                disabled={!inputText.trim()}
                                className="p-3 bg-cyber-primary text-black rounded-xl hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                            >
                                <SendHorizontal className="w-5 h-5" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right Sidebar: Leaderboard */}
                <div className={`${mobileTab === 'rank' ? 'flex' : 'hidden'} lg:flex flex-col bg-cyber-panel/50 backdrop-blur border border-white/5 rounded-2xl p-6 shadow-xl h-full`}>
                    <div className="flex items-center gap-2 text-yellow-400 mb-6">
                        <Star className="w-5 h-5 fill-yellow-400" />
                        <h2 className="text-lg font-bold font-sans tracking-wide text-white">Elite Global</h2>
                    </div>

                    <div className="space-y-3 overflow-y-auto flex-1 pr-1">
                        {leaderboard.map((user, index) => {
                            const isCurrentUser = user.username === currentUser.username;
                            let rowStyle = 'bg-white/5 border-transparent hover:bg-white/10';
                            let rankColor = 'text-slate-500';
                            
                            if (index === 0) { rowStyle = 'bg-yellow-500/10 border-yellow-500/30 shadow-[0_0_10px_rgba(234,179,8,0.2)]'; rankColor = 'text-yellow-400'; }
                            else if (index === 1) { rowStyle = 'bg-slate-300/10 border-slate-300/30'; rankColor = 'text-slate-300'; }
                            else if (index === 2) { rowStyle = 'bg-orange-700/10 border-orange-700/30'; rankColor = 'text-orange-400'; }
                            
                            if (isCurrentUser) { rowStyle = 'bg-cyber-primary/10 border-cyber-primary/50 shadow-md ring-1 ring-cyber-primary/50'; }

                            return (
                                <div key={index} className={`flex items-center justify-between p-3 rounded-xl border transition-all ${rowStyle}`}>
                                    <div className="flex items-center gap-3">
                                        <div className={`w-8 h-8 flex items-center justify-center rounded-lg font-mono text-sm font-bold ${rankColor} bg-black/20`}>
                                            #{index + 1}
                                        </div>
                                        <div>
                                            <p className={`text-sm font-bold ${isCurrentUser ? 'text-cyber-primary' : 'text-slate-200'}`}>
                                                {user.username}
                                            </p>
                                            <p className="text-[10px] text-slate-500 flex items-center gap-1">
                                                {index < 3 && <Trophy className="w-3 h-3" />}
                                                Visionário
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs font-mono text-white font-bold">{user.xp.toLocaleString()} XP</div>
                                        <div className="text-[9px] text-slate-500 font-mono">Lvl {user.level}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-auto pt-6 border-t border-white/10">
                        <h3 className="text-xs font-mono text-slate-500 uppercase mb-4">Sua Posição</h3>
                        <div className="bg-cyber-primary/20 p-4 rounded-xl border border-cyber-primary/30 flex justify-between items-center">
                            <div>
                                <div className="text-white font-bold">{currentUser.username}</div>
                                <div className="text-xs text-cyber-primary">{xp.toLocaleString()} XP</div>
                            </div>
                            <div className="text-right">
                                <div className="text-2xl font-mono font-bold text-white">#{leaderboard.findIndex(u => u.username === currentUser.username) + 1 > 0 ? leaderboard.findIndex(u => u.username === currentUser.username) + 1 : '10+'}</div>
                                <div className="text-[10px] font-mono text-cyber-primary">Nível {level}</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SocialHub;
