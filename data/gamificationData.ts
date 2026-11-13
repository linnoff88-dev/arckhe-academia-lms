
import { Badge, Challenge } from '../types';
import { BrainCircuit, BookOpen, MessageSquare, BrainCog, Sparkles, Bot, Database, Wrench, FileText, Trophy, Agent, Repeat, Blocks, BrainLightbulb, Award, Send, Users, Youtube, Headphones } from '../components/icons';

export const ALL_BADGES: Badge[] = [
    // Badges
    { id: 'badge-m0', name: 'Iniciado', description: 'Concluiu o Módulo 0.', icon: Sparkles, type: 'module', moduleId: 'm0' },
    { id: 'badge-m1', name: 'Sócio Estratégico', description: 'Concluiu M1: Fundamentos da IA.', icon: BrainCircuit, type: 'module', moduleId: 'm1' },
    { id: 'badge-m2', name: 'Arquiteto Neural', description: 'Concluiu M2: Preparação de Dados.', icon: Database, type: 'module', moduleId: 'm2' },
    { id: 'badge-m3', name: 'Mestre da Automação', description: 'Concluiu M3: Otimização de Processos.', icon: Bot, type: 'module', moduleId: 'm3' },
    { id: 'badge-m4', name: 'Rainmaker', description: 'Concluiu M4: Vendas e Marketing.', icon: Send, type: 'module', moduleId: 'm4' },
    { id: 'badge-m5', name: 'Líder Exponencial', description: 'Concluiu M5: Projetos de IA.', icon: Users, type: 'module', moduleId: 'm5' },
    
    // Course Badge
    { id: 'badge-course-estrategia', name: 'Estrategista de IA', description: 'Completou a trilha de Aplicação Estratégica de IA.', icon: BrainCircuit, type: 'course', courseId: 'aplicacao-estrategica-ia' },

    // Achievement Badges
    { id: 'badge-quiz-perfect', name: 'Sábio Impecável', description: 'Obteve 100% de acertos em um quiz.', icon: Trophy, type: 'achievement' },
    { id: 'badge-streak-3', name: 'Consistência', description: 'Estudou por 3 dias seguidos.', icon: Award, type: 'achievement' },
];

export const POSSIBLE_CHALLENGES: Omit<Challenge, 'current' | 'completed' | 'claimed'>[] = [
    { id: 'chal-3-lessons', type: 'lesson_count', title: 'Maratona de Estudo', description: 'Complete 3 aulas esta semana.', target: 3, rewardXp: 300, icon: Youtube },
    { id: 'chal-5-ai', type: 'ai_interaction', title: 'Copiloto Ativo', description: 'Use ferramentas de IA (Tutor, Áudio, Expandir) 5 vezes.', target: 5, rewardXp: 250, icon: Sparkles },
    { id: 'chal-perfect-quiz', type: 'perfect_score', title: 'Precisão Cirúrgica', description: 'Acerte 100% em um Quiz.', target: 1, rewardXp: 150, icon: Trophy },
    { id: 'chal-audio-learner', type: 'ai_interaction', title: 'Ouvinte Atento', description: 'Gere 2 versões em áudio das aulas.', target: 2, rewardXp: 200, icon: Headphones },
];
