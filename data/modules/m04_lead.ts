
import { Module } from '../../types';
import { BookOpen } from '../../components/icons';

export const M4_LEAD: Module = {
    id: 'm4_lead',
    title: 'Módulo 4: Dados de Cultura e Engajamento',
    subtitle: 'Mensurando o imensurável: Como quantificar a cultura organizacional.',
    icon: BookOpen,
    lessons: [
      {
          id: 'm4_lead-l1',
          title: 'Lição 1: Alfabetização de Dados para RH',
          videoUrl: 'https://www.youtube.com/watch?v=roprbjQh1Hw',
          content: `## RH Tech
Profissionais de RH precisam perder o medo de planilhas e dashboards.
Entender correlação, causalidade e significância estatística é essencial para argumentar na mesa da diretoria.`,
          quiz: [{ question: 'Qual skill o profissional de RH deve desenvolver?', options: ['Psicologia apenas.', 'Alfabetização de dados e análise estatística básica.', 'Programação avançada.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4_lead-l2',
          title: 'Lição 2: eNPS e Pulse Surveys',
          videoUrl: 'https://www.youtube.com/watch?v=BhgYoN3EbBE',
          content: `## Escuta Contínua
A pesquisa de clima anual morreu.
Pulse surveys (pesquisas rápidas semanais/mensais) geram dados em tempo real sobre o engajamento.
O eNPS (Employee Net Promoter Score) é a métrica chave de lealdade.`,
          quiz: [{ question: 'Qual a vantagem de Pulse Surveys?', options: ['Chato.', 'Feedback contínuo e em tempo real, permitindo correção rápida de rota.', 'Demora um ano.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4_lead-l3',
          title: 'Lição 3: Cultura Data-Driven',
          videoUrl: 'https://www.youtube.com/watch?v=Opa7Zkq-3pA',
          content: `## Fatos > Opiniões
Criar uma cultura onde decisões de gente são baseadas em evidências.
"Eu acho que o time está desmotivado" vs "Os dados de eNPS caíram 10 pontos e a rotatividade voluntária subiu 5%".`,
          quiz: [{ question: 'O que define uma cultura data-driven?', options: ['Muitos computadores.', 'Tomada de decisão baseada em evidências e dados, não apenas em opiniões.', 'Frieza.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4_lead-l4',
          title: 'Lição 4: Dashboards de Liderança',
          videoUrl: 'https://www.youtube.com/watch?v=Ri34OmpEpU8',
          content: `## O Painel de Controle
O que o CEO precisa ver sobre pessoas?
Headcount, Custo de Pessoal, Rotatividade, Absenteísmo, Diversidade e eNPS.
Tudo em um painel único e atualizado.`,
          quiz: [{ question: 'O que deve constar num dashboard de gente?', options: ['Fotos.', 'Métricas chave de saúde organizacional (Turnover, Headcount, Engajamento).', 'Aniversariantes.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4_lead-l5',
          title: 'Lição 5: Privacidade de Dados de Colaboradores',
          videoUrl: 'https://www.youtube.com/watch?v=l-BA-dXXCVA',
          content: `## Confiança
Dados de saúde, salário e desempenho são sensíveis.
Governança rigorosa sobre quem pode ver o quê (LGPD).
A anonimização de pesquisas é sagrada para garantir a honestidade do feedback.`,
          quiz: [{ question: 'Qual o pilar da coleta de dados de colaboradores?', options: ['Vender dados.', 'Privacidade, segurança e anonimato (quando aplicável).', 'Expor tudo.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4_lead-l6',
          title: 'Lição 6: Dados de Diversidade',
          videoUrl: 'https://www.youtube.com/watch?v=nHYGdAch_YA',
          content: `## O Que Não Se Mede...
Monitorar a representatividade em todos os níveis hierárquicos.
Identificar se há equidade salarial (Gender Pay Gap) usando análise de dados para corrigir distorções históricas.`,
          quiz: [{ question: 'Como dados ajudam na equidade?', options: ['Não ajudam.', 'Tornando visíveis as disparidades salariais e de representatividade.', 'Criando problemas.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4_lead-l7',
          title: 'Lição 7: Storytelling com Dados de RH',
          videoUrl: 'https://www.youtube.com/watch?v=Ri34OmpEpU8',
          content: `## Convencendo o CFO
Como pedir orçamento para bem-estar?
Não diga "as pessoas estão cansadas". Mostre: "O aumento de 10% no absenteísmo custou R$ 500k. O programa de bem-estar custa R$ 50k."
Narrativa financeira para problemas humanos.`,
          quiz: [{ question: 'Qual o objetivo do Data Storytelling em RH?', options: ['Escrever livros.', 'Traduzir métricas de pessoas em impacto de negócio para influenciar decisões.', 'Fazer slides coloridos.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4_lead-l8',
          title: 'Lição 8: Qualidade de Dados de Cadastro',
          videoUrl: 'https://www.youtube.com/watch?v=CzIvofFYykY',
          content: `## A Base Suja
Sistemas de RH costumam ter dados desatualizados (endereço, formação).
Campanhas de atualização cadastral e validação automática são vitais para que o People Analytics funcione.`,
          quiz: [{ question: 'Por que limpar dados de cadastro?', options: ['Para ocupar o time.', 'Porque análises avançadas dependem da qualidade do dado base (Garbage in, Garbage out).', 'Para imprimir.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4_lead-l9',
          title: 'Lição 9: Benchmarking de Mercado',
          videoUrl: 'https://www.youtube.com/watch?v=q33K4FWo0Lk',
          content: `## Comparando com Fora
Usar dados de mercado (pesquisas salariais, Glassdoor) para comparar sua competitividade.
"Estamos pagando bem?" "Nossa nota de cultura é boa comparada aos concorrentes?"`,
          quiz: [{ question: 'Para que serve o benchmarking?', options: ['Copiar.', 'Avaliar a competitividade da empresa frente ao mercado de talentos.', 'Inveja.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4_lead-l10',
          title: 'Lição 10: Dados de Saúde e Segurança',
          videoUrl: 'https://www.youtube.com/watch?v=tWYImjxHM3M',
          content: `## Prevenção
Monitorar incidentes, quase-acidentes e afastamentos médicos.
Cruzar dados para identificar áreas de risco e atuar preventivamente na saúde ocupacional.`,
          quiz: [{ question: 'Qual o foco dos dados de SST?', options: ['Burocracia.', 'Prevenção de acidentes e promoção da saúde baseada em tendências de risco.', 'Pagar seguro.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm4-lead-l11',
        title: 'Lição 11: Integração de Sistemas de RH',
        videoUrl: 'https://www.youtube.com/watch?v=jl8kgAiP3V4',
        content: `## Ecossistema Conectado
O sistema de ponto fala com a folha? A avaliação de desempenho fala com o plano de carreira?
Integração de dados para ter uma visão única do colaborador (Employee 360).`,
        quiz: [{ question: 'O que é Employee 360?', options: ['Um giro.', 'Visão unificada de todos os dados do colaborador integrando diferentes sistemas.', 'Avaliação 360.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm4-lead-l12',
        title: 'Lição 12: Métricas de Recrutamento',
        videoUrl: 'https://www.youtube.com/watch?v=3vrfdr5Fma0',
        content: `## Funil de Gente
Time to Fill (tempo para fechar vaga), Cost per Hire (custo por contratação), Quality of Hire (performance do contratado).
Gerir recrutamento como um funil de vendas otimizado.`,
        quiz: [{ question: 'O que é Quality of Hire?', options: ['Contratar gente bonita.', 'Métrica que avalia o desempenho e retenção dos novos contratados pós-admissão.', 'Custo da vaga.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm4-lead-l13',
        title: 'Lição 13: O Futuro dos Dados de Pessoas',
        videoUrl: 'https://www.youtube.com/watch?v=gQDRvxpyhrU',
        content: `## Inferência Comportamental
No futuro, dados passivos (padrões de trabalho digital) serão usados para sugerir melhorias de bem-estar e produtividade, sempre com consentimento.
"Você trabalha melhor de manhã, bloqueie sua agenda."`,
        quiz: [{ question: 'Qual a tendência futura?', options: ['Controle mental.', 'Uso de dados passivos para insights de produtividade e bem-estar personalizados.', 'Fim do RH.'], correctAnswerIndex: 1 }],
      },
    ],
};
