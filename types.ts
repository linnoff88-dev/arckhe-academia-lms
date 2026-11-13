
import React from 'react';

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface Lesson {
  id: string;
  title: string;
  videoUrl: string;
  lessonUrl?: string;
  content: string;
  quiz: QuizQuestion[];
}

export interface Module {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  lessons: Lesson[];
}

export type CourseTheme = 'cyan' | 'rose' | 'emerald' | 'violet' | 'amber';

export interface Course {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    icon: React.ElementType;
    theme: CourseTheme;
    moduleIds: string[]; // IDs dos módulos que compõem este curso
}

export interface GlossaryEntry {
  concept: string;
  analogy: string;
}

export interface Badge {
    id: string;
    name: string;
    description: string;
    icon: React.ElementType;
    type: 'module' | 'course' | 'achievement';
    moduleId?: string; // ID do módulo se o tipo for 'module'
    courseId?: string; // ID do curso se o tipo for 'course'
}

export interface Challenge {
    id: string;
    type: 'lesson_count' | 'ai_interaction' | 'perfect_score';
    title: string;
    description: string;
    target: number;
    current: number;
    rewardXp: number;
    completed: boolean;
    claimed: boolean;
    icon: React.ElementType;
}

export interface User {
  id: string;
  username: string;
  email: string;
  password?: string; // Opcional para logins sociais
  role: 'student' | 'admin';
}
