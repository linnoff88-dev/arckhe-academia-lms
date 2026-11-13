
import { Module } from '../../types';
import { Trophy } from '../../components/icons';

export const M10_LEAD: Module = {
    id: 'm10_lead',
    title: 'Módulo 10: Engenharia de Prompt para Líderes',
    subtitle: 'Delegando tarefas intelectuais complexas para a IA.',
    icon: Trophy,
    lessons: [
      {
          id: 'm10_lead-l1',
          title: 'Lição 1: O Novo Skill de Delegação',
          videoUrl: 'https://www.youtube.com/watch?v=jEn_Lg3jJPU',
          content: `## Prompt é Briefing
Saber "promptear" é saber delegar.
Se você dá um briefing ruim para um humano, o trabalho volta ruim. Com a IA é igual.
Líderes devem dominar a arte de dar contexto, objetivo e formato claros.`,
          quiz: [{ question: 'Qual a analogia entre Prompt e Liderança?', options: ['É programação.', 'Prompting é a evolução da habilidade de delegar e dar briefings claros.', 'É mágica.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10_lead-l2',
          title: 'Lição 2: Estratégia com IA (Strategy-in-a-Box)',
          videoUrl: 'https://www.youtube.com/watch?v=5dEZ_0s1F1c',
          content: `## Consultor de Bolso
"Atue como um consultor da McKinsey. Analise este cenário de mercado (colar dados). Crie uma análise SWOT e sugira 3 iniciativas estratégicas para crescer 20%."
Use a IA para estruturar o pensamento estratégico inicial.`,
          quiz: [{ question: 'Como usar IA para estratégia?', options: ['Para decidir por você.', 'Como um consultor para estruturar análises (SWOT, Pestel) e gerar hipóteses iniciais.', 'Para escrever e-mail.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10_lead-l3',
          title: 'Lição 3: Comunicação Executiva',
          videoUrl: 'https://www.youtube.com/watch?v=eC6Hd1hUPtU',
          content: `## Clareza e Concisão
"Reescreva este e-mail para a diretoria. Torne-o mais executivo, focado em resultados (Bottom Line Up Front) e reduza o tamanho em 50%. Tom confiante."
Garanta que sua comunicação tenha o impacto desejado.`,
          quiz: [{ question: 'Qual técnica de prompt melhora a comunicação executiva?', options: ['Pedir para ser longo.', 'Pedir foco em resultados (BLUF), concisão e tom adequado.', 'Usar emojis.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10_lead-l4',
          title: 'Lição 4: Análise de Decisão (Decision Matrix)',
          videoUrl: 'https://www.youtube.com/watch?v=xnRhRlmkFJ0',
          content: `## Racionalizando a Escolha
"Tenho que decidir entre o Projeto A e B. Aqui estão os dados de cada um. Crie uma matriz de decisão ponderada considerando: ROI, Risco e Tempo de Implementação. Avalie qual é a melhor escolha lógica."`,
          quiz: [{ question: 'O que a IA pode criar para ajudar na decisão?', options: ['Uma moeda.', 'Uma matriz de decisão ponderada baseada nos critérios fornecidos.', 'Um desenho.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10_lead-l5',
          title: 'Lição 5: Simulador de Cenários (Roleplay)',
          videoUrl: 'https://www.youtube.com/watch?v=1A_T4k6-X7A',
          content: `## Ensaio Difícil
"Vou ter uma conversa difícil de demissão. Atue como o funcionário que vai reagir mal e argumentar. Vamos simular a conversa para eu me preparar."
Treine empatia e argumentação em ambiente seguro.`,
          quiz: [{ question: 'Como usar Roleplay com IA?', options: ['Jogando RPG.', 'Simulando conversas difíceis ou negociações para treinar a reação do líder.', 'Escrevendo ficção.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10_lead-l6',
          title: 'Lição 6: Síntese de Informação',
          videoUrl: 'https://www.youtube.com/watch?v=V2POyQVQuzA',
          content: `## Leitura Dinâmica
"Resuma este relatório de 50 páginas em 5 tópicos principais que impactam nosso EBITDA. Destaque os riscos ocultos."
Líderes leem muito. A IA permite ler mais rápido e focar no que importa.`,
          quiz: [{ question: 'Qual o ganho da síntese com IA?', options: ['Preguiça.', 'Velocidade na absorção de grandes volumes de informação e foco nos pontos críticos.', 'Esquecer tudo.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10_lead-l7',
          title: 'Lição 7: Brainstorming Criativo',
          videoUrl: 'https://www.youtube.com/watch?v=c68fnfyDEy4',
          content: `## Expandindo Horizontes
"Dê-me 20 ideias não convencionais para melhorar a cultura da equipe remota. Evite clichês como 'happy hour no zoom'."
Use a IA para sair do pensamento linear e explorar o espaço lateral de soluções.`,
          quiz: [{ question: 'Como fazer brainstorming eficaz com IA?', options: ['Pedindo uma ideia.', 'Pedindo volume (20 ideias), restrições (evite clichês) e pensamento lateral.', 'Copiando o Google.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10_lead-l8',
          title: 'Lição 8: Feedback Construtivo',
          videoUrl: 'https://www.youtube.com/watch?v=1VOoYGr7-lk',
          content: `## Refinando a Mensagem
"Quero dar um feedback para o João sobre a falta de pontualidade, mas ele é muito sensível. Escreva um roteiro de feedback usando a técnica CNV (Comunicação Não-Violenta) que foque no impacto no time."`,
          quiz: [{ question: 'Como a IA auxilia no feedback difícil?', options: ['Escreve a demissão.', 'Estrutura a mensagem usando técnicas como CNV para garantir clareza sem agressividade.', 'Manda indireta.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10_lead-l9',
          title: 'Lição 9: Planejamento de Projetos',
          videoUrl: 'https://www.youtube.com/watch?v=Wp95PxRoMS0',
          content: `## WBS Instantânea
"Crie uma EAP (Estrutura Analítica de Projeto) para o lançamento do novo produto. Quebre em fases, entregáveis e sugira prazos realistas para um time de 5 pessoas."
Transforma uma ideia vaga em um plano de ação estruturado.`,
          quiz: [{ question: 'O que a IA pode gerar para gestão de projetos?', options: ['Fazer o projeto.', 'Estruturas analíticas (EAP/WBS), cronogramas iniciais e listas de tarefas.', 'Nada.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10_lead-l10',
          title: 'Lição 10: Análise de Dados (Code Interpreter)',
          videoUrl: 'https://www.youtube.com/watch?v=0YXyvBcysLg',
          content: `## Conversando com a Planilha
Suba o Excel de vendas.
"Analise a tendência dos últimos 6 meses. Qual produto tem a maior margem e qual está caindo? Crie um gráfico."
Análise de dados sem precisar saber fórmula ou SQL.`,
          quiz: [{ question: 'O que ferramentas como Code Interpreter permitem?', options: ['Programar jogos.', 'Análise de dados avançada e criação de gráficos através de linguagem natural.', 'Limpar vírus.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm10-lead-l11',
        title: 'Lição 11: Prompt de Cultura',
        videoUrl: 'https://www.youtube.com/watch?v=Q0rh6O35djI',
        content: `## Rituais
"Sugira 5 rituais semanais para aumentar o sentimento de pertencimento em um time híbrido, baseados nos valores de [Inserir Valores da Empresa]."
Operationalizar a cultura.`,
        quiz: [{ question: 'Como usar IA para cultura?', options: ['Criando slogans.', 'Desenhando rituais e práticas alinhadas aos valores da empresa.', 'Ignorando.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm10-lead-l12',
        title: 'Lição 12: Criação de OKRs',
        videoUrl: 'https://www.youtube.com/watch?v=996bKg1ogNY',
        content: `## Alinhamento de Metas
"O objetivo estratégico do ano é X. Sugira 3 OKRs (Objetivos e Resultados Chave) para o time de Marketing que estejam alinhados com isso. Certifique-se que os Key Results sejam mensuráveis."`,
        quiz: [{ question: 'Como a IA ajuda nos OKRs?', options: ['Decidindo a meta.', 'Desdobrando objetivos estratégicos em resultados chave mensuráveis e alinhados.', 'Fazendo a avaliação.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm10-lead-l13',
        title: 'Lição 13: Meta-Prompting para Líderes',
        videoUrl: 'https://www.youtube.com/watch?v=7ke-p4vw9hk',
        content: `## O Prompt Mestre
"Aja como um Chief of Staff. Faça-me perguntas para entender minhas prioridades da semana e, em seguida, crie uma agenda otimizada e uma lista de delegação."
Usar a IA para gerenciar a própria gestão.`,
        quiz: [{ question: 'O que é Meta-Prompting na liderança?', options: ['Prompt curto.', 'Usar a IA para estruturar seu próprio pensamento e rotina de gestão (IA gerenciando o gestor).', 'Não usar.'], correctAnswerIndex: 1 }],
      },
    ],
};
