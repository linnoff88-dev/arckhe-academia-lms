
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCourseProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import GlossaryModal from './GlossaryModal';
import { BookMarked, Star, LogOut, ShieldCheck, BrainCircuit, Globe, Sun, Moon, Search, X, Users, ShoppingCart } from './icons';
import { COURSE_DATA } from '../data/courseData';
import { COURSES } from '../data/courses';
import { ALL_BADGES } from '../data/gamificationData';

const Header: React.FC = () => {
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<{ lessonId: string, title: string, moduleTitle: string, moduleId: string, courseId: string }[]>([]);
  
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchContainerRef = useRef<HTMLDivElement>(null);

  const { xp, level, xpForNextLevel, xpInCurrentLevel, registerInteraction, xpNotifications, badgeNotifications, earnedBadges } = useCourseProgress();
  const { currentUser, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const isZenMode = typeof document !== 'undefined' && document.body.classList.contains('zen-mode');

  const handleOpenGlossary = () => {
      setIsGlossaryOpen(true);
      registerInteraction('global', 'glossary');
  };

  // Search Logic
  useEffect(() => {
    if (searchQuery.length < 2) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results: typeof searchResults = [];

    // Prioritizing Courses that contain the module, defaulting to 'aplicacao-estrategica-ia' if not found explicitly (fallback)
    const findCourseForModule = (moduleId: string) => {
        return COURSES.find(c => c.moduleIds.includes(moduleId))?.id || 'aplicacao-estrategica-ia';
    };

    COURSE_DATA.forEach(module => {
      module.lessons.forEach(lesson => {
        if (lesson.title.toLowerCase().includes(query) || lesson.content.toLowerCase().includes(query)) {
          results.push({
            lessonId: lesson.id,
            title: lesson.title,
            moduleTitle: module.title,
            moduleId: module.id,
            courseId: findCourseForModule(module.id)
          });
        }
      });
    });

    setSearchResults(results.slice(0, 5)); // Limit to 5 results
  }, [searchQuery]);

  // Click outside to close search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
        searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const isSocialUnlocked = earnedBadges.size > 0;

  return (
    <>
      <header className="sticky top-0 z-50 transition-all duration-300 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-white/10">
        <div className="container mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-18 py-2">
            {/* Logo Area */}
            <div className={`flex items-center gap-2 md:gap-3 group cursor-pointer transition-opacity duration-300 ${isSearchOpen ? 'opacity-0 md:opacity-100 pointer-events-none md:pointer-events-auto' : ''}`} onClick={() => navigate('/')}>
              <div className="relative">
                <div className="absolute inset-0 bg-brand-400 blur-md opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <div className="relative bg-gradient-to-br from-brand-500 to-accent-600 p-1.5 md:p-2.5 rounded-lg md:rounded-xl shadow-lg shadow-brand-500/20 transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
                  <BrainCircuit className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-base md:text-xl font-bold text-slate-900 dark:text-slate-100 leading-none tracking-tight font-sans">Arckhé AI Academy</span>
                <span className="text-[8px] md:text-[10px] text-brand-600 dark:text-brand-400 font-bold tracking-[0.2em] uppercase mt-0.5">Academy</span>
              </div>
            </div>
            
            {/* Actions Area */}
            <div className="flex items-center gap-2 md:gap-3 sm:gap-6 relative">
              
              {/* Search Bar - Responsive */}
              <div ref={searchContainerRef} className={`absolute right-0 top-1/2 -translate-y-1/2 flex items-center transition-all duration-300 z-50 ${isSearchOpen ? 'w-[calc(100vw-32px)] md:w-96 right-[16px] md:right-0' : 'w-10'}`}>
                  {isSearchOpen ? (
                      <div className="relative w-full">
                          <input 
                              ref={searchInputRef}
                              type="text" 
                              placeholder="Buscar lição ou conceito..." 
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-300 dark:border-white/20 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-xl"
                          />
                          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                          <button onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-red-500">
                              <X className="w-4 h-4" />
                          </button>

                          {/* Search Results Dropdown */}
                          {searchResults.length > 0 && (
                              <div className="absolute top-full left-0 w-full mt-2 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden animate-slide-up">
                                  {searchResults.map((result) => (
                                      <Link 
                                        key={result.lessonId}
                                        to={`/course/${result.courseId}/module/${result.moduleId}/lesson/${result.lessonId}`}
                                        onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                                        className="block p-3 hover:bg-slate-50 dark:hover:bg-white/5 border-b border-slate-100 dark:border-white/5 last:border-0 transition-colors"
                                      >
                                          <div className="text-xs font-mono text-brand-600 dark:text-brand-400 mb-0.5">{result.moduleTitle}</div>
                                          <div className="text-sm font-bold text-slate-800 dark:text-slate-200 line-clamp-1">{result.title}</div>
                                      </Link>
                                  ))}
                              </div>
                          )}
                      </div>
                  ) : (
                      <button 
                        onClick={() => setIsSearchOpen(true)}
                        className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-200 ml-auto"
                        title="Buscar"
                      >
                          <Search className="w-5 h-5" />
                      </button>
                  )}
              </div>

              {/* Hide other items when searching on mobile */}
              <div className={`flex items-center gap-2 md:gap-3 transition-opacity duration-300 ${isSearchOpen ? 'opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto' : 'opacity-100'}`}>
                  {/* Theme Toggle */}
                  <button
                    onClick={toggleTheme}
                    className="p-1.5 md:p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/10 transition-all duration-200"
                    title={theme === 'dark' ? 'Mudar para Claro' : 'Mudar para Escuro'}
                  >
                    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </button>

                  {currentUser ? (
                    <>
                      {/* XP NOTIFICATIONS */}
                      <div className="fixed top-24 right-4 z-[100] flex flex-col gap-2 pointer-events-none w-64">
                            {xpNotifications.map(n => (
                                <div key={n.id} className="bg-slate-900/95 backdrop-blur border border-cyber-primary/50 text-cyber-primary px-4 py-3 rounded-lg shadow-lg animate-slide-up flex items-center gap-3 justify-between">
                                    <div className="flex items-center gap-2">
                                        <Star className="w-4 h-4 fill-cyber-primary" />
                                        <span className="font-mono font-bold text-sm whitespace-nowrap">+{n.amount} XP</span>
                                    </div>
                                    <span className="text-[10px] text-slate-400 border-l border-slate-700 pl-2 leading-tight uppercase tracking-wider text-right">{n.label}</span>
                                </div>
                            ))}
                      </div>

                      {/* BADGE NOTIFICATIONS */}
                      {badgeNotifications.length > 0 && (
                          <div className="fixed inset-0 z-[110] flex items-center justify-center pointer-events-none">
                              {badgeNotifications.map(n => {
                                  const badge = ALL_BADGES.find(b => b.id === n.badgeId);
                                  if (!badge) return null;
                                  const Icon = badge.icon;
                                  return (
                                      <div key={n.id} className="bg-slate-900/95 backdrop-blur-md border-4 border-[#FFD700] p-8 rounded-3xl shadow-[0_0_50px_rgba(255,215,0,0.5)] animate-scale-in flex flex-col items-center max-w-sm text-center">
                                          <div className="w-24 h-24 bg-[#FFD700]/20 rounded-full flex items-center justify-center mb-6 ring-4 ring-[#FFD700]/50 shadow-[0_0_30px_rgba(255,215,0,0.4)]">
                                              <Icon className="w-12 h-12 text-[#FFD700] drop-shadow-lg" />
                                          </div>
                                          <h2 className="text-2xl font-bold text-[#FFD700] font-sans mb-2 uppercase tracking-widest leading-tight">
                                              Nova Conquista
                                          </h2>
                                          <h3 className="text-xl font-bold text-white mb-4">
                                              {badge.name}
                                          </h3>
                                          <p className="text-slate-300 font-serif">
                                              {badge.description}
                                          </p>
                                      </div>
                                  );
                              })}
                          </div>
                      )}

                      {isSocialUnlocked && (
                          <Link 
                            to="/social" 
                            className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-600 hover:bg-purple-500/20 transition-all duration-300 animate-pulse-slow"
                            title="Área Secreta da Comunidade"
                          >
                              <Globe className="w-4 h-4" />
                              <span className="text-xs font-bold tracking-wider">NEXUS</span>
                          </Link>
                      )}

                      {currentUser.role === 'admin' && (
                        <Link
                            to="/admin"
                            className="hidden sm:flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-brand-600 transition-colors px-3 py-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5"
                          >
                            <ShieldCheck className="w-4 h-4" />
                            <span>ADMIN</span>
                          </Link>
                      )}
                      
                      <Link to="/store" className="flex items-center gap-2 px-3 py-2 text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 font-bold transition-colors">
                          <ShoppingCart className="w-5 h-5" />
                          <span className="hidden lg:inline text-sm">Loja</span>
                      </Link>

                      <Link to="/profile" className="hidden md:flex items-center gap-3 bg-white/60 dark:bg-white/10 backdrop-blur-sm py-1.5 px-4 rounded-full border border-slate-200 dark:border-white/10 shadow-sm transition-transform hover:scale-105 cursor-pointer" title="Ver Perfil">
                        <div className="relative">
                            <Star className="w-5 h-5 text-yellow-500 dark:text-yellow-400 fill-yellow-500 dark:fill-yellow-400 drop-shadow-sm" />
                            <div className="absolute inset-0 bg-yellow-400 blur-sm opacity-40 animate-pulse"></div>
                        </div>
                        <div className="flex flex-col leading-none">
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{currentUser.username}</span>
                          <span className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold uppercase mt-0.5">Nível {level}</span>
                        </div>
                      </Link>

                      {/* Mobile User Avatar */}
                      <Link to="/profile" className="md:hidden flex items-center justify-center w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 border border-brand-200 dark:border-brand-700 text-xs font-bold text-brand-700 dark:text-brand-300">
                          {level}
                      </Link>

                      <button
                        onClick={handleLogout}
                        className="p-1.5 md:p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-all duration-200"
                        title="Sair"
                      >
                        <LogOut className="w-5 h-5" />
                      </button>
                    </>
                  ) : null}

                  <button
                    onClick={handleOpenGlossary}
                    className="flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-xl bg-slate-100 dark:bg-white/5 hover:bg-white dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-white border border-transparent hover:border-brand-100 dark:hover:border-white/20 transition-all duration-200 text-xs md:text-sm font-bold shadow-sm hover:shadow-md"
                  >
                    <BookMarked className="w-4 h-4" />
                    <span className="hidden lg:inline">Glossário</span>
                  </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <GlossaryModal isOpen={isGlossaryOpen} onClose={() => setIsGlossaryOpen(false)} />
    </>
  );
};

export default Header;
