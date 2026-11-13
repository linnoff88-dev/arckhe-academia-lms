
import { Course } from '../types';
import { BrainCircuit } from '../components/icons';

const STRATEGIC_AI_MODULES = [
    'm0', 'm1', 'm2', 'm3', 'm4', 'm5'
];

export const COURSES: Course[] = [
    {
        id: 'aplicacao-estrategica-ia',
        title: 'Aplicação Estratégica de IA em Negócios',
        subtitle: 'Otimização e Crescimento',
        description: 'Capacite-se para decodificar o potencial da Inteligência Artificial, traduzindo conceitos técnicos em estratégias acionáveis para otimizar operações, reduzir custos e impulsionar o crescimento de receita.',
        icon: BrainCircuit,
        theme: 'cyan',
        moduleIds: STRATEGIC_AI_MODULES
    }
];
