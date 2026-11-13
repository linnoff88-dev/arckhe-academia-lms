
import { Module } from '../../types';
import { Users } from '../../components/icons';

export const M16: Module = {
    id: 'm16',
    title: 'Módulo 16: IA para Liderança e Gestão',
    subtitle: 'Como líderes exponenciais usam IA para gerir pessoas e cultura.',
    icon: Users,
    lessons: [
        {
            id: 'm16-l1',
            title: 'Lição 1: Liderança na Era da IA',
            videoUrl: 'https://www.youtube.com/watch?v=jX33z1tGSQg',
            content: `## O Novo CEO
Líderes não precisam saber codar, mas precisam saber o que a IA pode fazer.
A liderança muda de "comando e controle" para "visão e orquestração" de times híbridos (humanos + IAs).`,
            quiz: [{ question: 'Qual o foco do líder na era da IA?', options: ['Microgerenciamento.', 'Visão, orquestração e estratégia.', 'Programação.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16-l2',
            title: 'Lição 2: Recrutamento com Vida Real',
            videoUrl: 'https://www.youtube.com/watch?v=gICuKa02KQA',
            content: `## Hiring Inteligente
Usar IA para triagem de currículos focada em habilidades (skills), ignorando gênero, idade ou faculdade.
Aumenta a diversidade e a qualidade da contratação.`,
            quiz: [{ question: 'Como a IA ajuda no recrutamento?', options: ['Contrata parentes.', 'Foca em habilidades e reduz vieses inconscientes.', 'Demora mais.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16-l3',
            title: 'Lição 3: People Analytics Avançado com IA',
            videoUrl: 'https://www.youtube.com/watch?v=Y6DSn3HCCkU',
            content: `## Dados de Gente
Analisar dados de engajamento, performance e rotatividade para entender a saúde da organização.
Prever quem está prestes a pedir demissão e agir antes.`,
            quiz: [{ question: 'O que é People Analytics?', options: ['Fofoca.', 'Uso de dados para gestão estratégica de pessoas.', 'Festa.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16-l4',
            title: 'Lição 4: Análise de Sentimento em Clima/Feedback',
            videoUrl: 'https://www.youtube.com/watch?v=BhgYoN3EbBE',
            content: `## O Clima em Tempo Real
Ferramentas que analisam (anonimamente) o sentimento em canais de comunicação interna para medir o pulso da cultura e detectar burnout.`,
            quiz: [{ question: 'Para que serve a análise de sentimento?', options: ['Vigiar.', 'Medir o clima organizacional e detectar burnout.', 'Nada.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16-l5',
            title: 'Lição 5: Feedback Assistido por IA',
            videoUrl: 'https://www.youtube.com/watch?v=1VOoYGr7-lk', // AI Coaching Feedback
            content: `## Comunicação Melhor
Líderes usam IA para reescrever feedbacks e torná-los mais construtivos, empáticos e claros.
Ajuda a evitar ruídos de comunicação e conflitos.`,
            quiz: [{ question: 'Como a IA ajuda no feedback?', options: ['Escreve sozinha.', 'Refina o tom e clareza para ser mais construtivo.', 'Critica.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16-l6',
            title: 'Lição 6: Onboarding Automatizado',
            videoUrl: 'https://www.youtube.com/watch?v=X6vp2oyU8L8',
            content: `## Boas-vindas
Criar jornadas de onboarding únicas para cada novo funcionário com base em sua função e perfil, guiadas por agentes de IA que tiram dúvidas.`,
            quiz: [{ question: 'Vantagem do onboarding com IA?', options: ['É frio.', 'Personalização e suporte imediato ao novo funcionário.', 'Nenhuma.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16-l7',
            title: 'Lição 7: Gestão de Conhecimento',
            videoUrl: 'https://www.youtube.com/watch?v=pLw_rk6MX2E',
            content: `## Memória Institucional
Garantir que o conhecimento não saia da empresa quando o funcionário sai.
Wikis inteligentes que se auto-atualizam e respondem perguntas do time.`,
            quiz: [{ question: 'O que é uma Wiki Inteligente?', options: ['Enciclopédia.', 'Base de conhecimento viva e pesquisável via IA.', 'Papel.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16-l8',
            title: 'Lição 8: Avaliação de Desempenho c/ IA',
            videoUrl: 'https://www.youtube.com/watch?v=Opa7Zkq-3pA', // Performance Mgmt with Data
            content: `## Fim do Viés de Recência
A IA pode compilar as conquistas do funcionário ao longo de todo o ano, ajudando o gestor a fazer uma avaliação baseada em dados, não apenas na memória recente.`,
            quiz: [{ question: 'Como a IA melhora a avaliação?', options: ['Dá nota.', 'Compila dados de todo o período para reduzir viés de recência.', 'Ignora dados.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16-l9',
            title: 'Lição 9: Upskilling e Reskilling Assistidos por IA',
            videoUrl: 'https://www.youtube.com/watch?v=b9a2L-WkOpM', // Upskilling Strategy
            content: `## Plano de Carreira
A IA identifica os gaps de competência de cada funcionário e sugere cursos e projetos específicos para o próximo nível de carreira.`,
            quiz: [{ question: 'Papel da IA no T&D?', options: ['Dar aula.', 'Identificar gaps e personalizar planos de desenvolvimento.', 'Nenhum.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16-l10',
            title: 'Lição 10: Reuniões Produtivas com IA',
            videoUrl: 'https://www.youtube.com/watch?v=V2POyQVQuzA', // Meeting Assistants
            content: `## Atas Automáticas
Ferramentas que transcrevem, resumem e extraem "Action Items" de reuniões.
Libera o time para focar na discussão e garante que nada se perca.`,
            quiz: [{ question: 'O que a IA faz em reuniões?', options: ['Dorme.', 'Transcreve, resume e extrai tarefas.', 'Fala muito.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16-l11',
            title: 'Lição 11: Tomada de Decisão Data-Driven',
            videoUrl: 'https://www.youtube.com/watch?v=w2-Y55tLwdk', // Decision Intelligence
            content: `## Segunda Opinião
Usar a IA como um "conselheiro" para simular cenários, apontar riscos em estratégias e desafiar o pensamento do time executivo.`,
            quiz: [{ question: 'IA na estratégia serve para?', options: ['Decidir sozinha.', 'Simular cenários e desafiar premissas (Advogado do Diabo).', 'Nada.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16-l12',
            title: 'Lição 12: Ética e Governança de Pessoas com IA',
            videoUrl: 'https://www.youtube.com/watch?v=l-BA-dXXCVA', // Privacy in People Analytics
            content: `## Limites
Até onde usar dados de funcionários? Privacidade, transparência e o uso ético da vigilância digital no ambiente de trabalho.`,
            quiz: [{ question: 'Preocupação principal na gestão com IA?', options: ['Custo.', 'Privacidade e ética no uso de dados de colaboradores.', 'Velocidade.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16-l13',
            title: 'Lição 13: Cultura de Inovação Ágil',
            videoUrl: 'https://www.youtube.com/watch?v=EOx9Xhw1Y3Y',
            content: `## Mindset Digital
Como fomentar uma cultura onde a experimentação com IA é incentivada e o erro é visto como aprendizado.
Liderar pelo exemplo.`,
            quiz: [{ question: 'Como criar cultura de IA?', options: ['Proibindo.', 'Incentivando experimentação e aprendizado contínuo.', 'Comprando PCs.'], correctAnswerIndex: 1 }],
        },
    ],
};
