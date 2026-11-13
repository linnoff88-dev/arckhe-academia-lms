
import { Module } from '../../types';
import { Trophy } from '../../components/icons';

export const M10_OPS: Module = {
    id: 'm10_ops',
    title: 'Módulo 10: Engenharia de Prompt para Operações',
    subtitle: 'Usando IA Generativa para documentação, treinamento e resolução de problemas.',
    icon: Trophy,
    lessons: [
      {
          id: 'm10_ops-l1',
          title: 'Lição 1: IA Generativa no Chão de Fábrica',
          videoUrl: 'https://www.youtube.com/watch?v=1VDcke66TRE',
          content: `## O Assistente Universal
Operadores não precisam ser especialistas em IA. Eles precisam saber *perguntar*.
Prompt Engineering para operações foca em extrair informações técnicas complexas de manuais e relatórios de forma rápida e precisa.`,
          quiz: [{ question: 'Qual o foco do prompt em operações?', options: ['Criar arte.', 'Acesso rápido e preciso a informações técnicas e resolução de problemas.', 'Escrever poesia.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10_ops-l2',
          title: 'Lição 2: Criação de SOPs (Procedimentos Padrão)',
          videoUrl: 'https://www.youtube.com/watch?v=ATp4Q4UD-c8',
          content: `## Padronização Rápida
"Transforme estas notas soltas e a transcrição do vídeo do técnico em um Procedimento Operacional Padrão (SOP) passo-a-passo, formatado na norma ISO da empresa, com lista de EPIs necessários no início."
Reduz o tempo de documentação em 90%.`,
          quiz: [{ question: 'Como a IA ajuda na criação de SOPs?', options: ['Imprimindo.', 'Estruturando informações brutas em procedimentos formais e padronizados instantaneamente.', 'Arquivando.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10_ops-l3',
          title: 'Lição 3: Resumo de Turno e Relatórios',
          videoUrl: 'https://www.youtube.com/watch?v=c68fnfyDEy4',
          content: `## Passagem de Serviço
"Analise os logs de ocorrências do turno da noite. Resuma os 3 principais problemas, as ações tomadas e o que ficou pendente para o turno da manhã. Use linguagem técnica e concisa."
Garante continuidade e visibilidade.`,
          quiz: [{ question: 'Para que usar prompt em relatórios de turno?', options: ['Para inventar dados.', 'Para sintetizar ocorrências complexas em insights acionáveis para o próximo time.', 'Para demorar mais.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10_ops-l4',
          title: 'Lição 4: Tradução Técnica de Manuais',
          videoUrl: 'https://www.youtube.com/watch?v=996bKg1ogNY',
          content: `## Precisão Terminológica
"Traduza este manual de manutenção do Alemão para o Português. Mantenha os termos técnicos de hidráulica no original entre parênteses. Adapte o tom para operadores nível técnico."
Few-shot prompting com glossário garante precisão.`,
          quiz: [{ question: 'Qual o segredo para tradução técnica com IA?', options: ['Usar Google Tradutor.', 'Prompts que especificam terminologia, público-alvo e glossários (Few-Shot).', 'Traduzir palavra por palavra.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10_ops-l5',
          title: 'Lição 5: Diagnóstico de Falhas (Troubleshooting)',
          videoUrl: 'https://www.youtube.com/watch?v=xnRhRlmkFJ0',
          content: `## Doutor Máquina
"A máquina X está apresentando vibração alta e temperatura normal. O rolamento foi trocado mês passado. Baseado no manual e no histórico de falhas (RAG), quais são as 3 causas prováveis e como testar cada uma?"
Guia de solução de problemas on-demand.`,
          quiz: [{ question: 'Como a IA auxilia no troubleshooting?', options: ['Consertando sozinha.', 'Sugerindo causas prováveis e roteiros de teste baseados em sintomas e histórico.', 'Chamando o fabricante.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10_ops-l6',
          title: 'Lição 6: Geração de Código para Automação (PLC/Python)',
          videoUrl: 'https://www.youtube.com/watch?v=FylvYZ-_McA',
          content: `## Co-Pilot de Engenharia
"Escreva um script em Python para ler dados de um arquivo CSV e enviar para a API do ERP via REST. Inclua tratamento de erros."
Ou "Gere um bloco de lógica Ladder para um semáforo com temporizador."
Acelera o desenvolvimento de pequenas automações.`,
          quiz: [{ question: 'O que a IA pode gerar para engenheiros?', options: ['Café.', 'Scripts de código e lógica de controle para acelerar o desenvolvimento.', 'Peças físicas.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10_ops-l7',
          title: 'Lição 7: Análise de Incidentes de Segurança',
          videoUrl: 'https://www.youtube.com/watch?v=7ke-p4vw9hk',
          content: `## Relatório de Acidente
"Analise os relatos das testemunhas A, B e C sobre o incidente. Identifique contradições. Crie uma árvore de falhas sugerida baseada na metodologia 5 Porquês."
Ajuda na investigação neutra e estruturada.`,
          quiz: [{ question: 'Como a IA apoia a segurança do trabalho?', options: ['Vigiando.', 'Estruturando a análise de causa raiz de incidentes e relatórios.', 'Multando.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10_ops-l8',
          title: 'Lição 8: Chat com Dados Operacionais',
          videoUrl: 'https://www.youtube.com/watch?v=jl8kgAiP3V4',
          content: `## Interface Natural
Em vez de SQL: "Qual foi a eficiência média da Linha 2 nas últimas 4 terças-feiras? Compare com a média geral."
Text-to-SQL permite que gestores façam perguntas complexas aos dados sem depender de analistas.`,
          quiz: [{ question: 'O que é Text-to-SQL em operações?', options: ['Falar com o banco.', 'Converter perguntas em linguagem natural para consultas de banco de dados.', 'Digitar código.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10_ops-l9',
          title: 'Lição 9: Brainstorming de Melhoria Contínua',
          videoUrl: 'https://www.youtube.com/watch?v=c68fnfyDEy4',
          content: `## Ideação Kaizen
"Temos um problema de desperdício de material no corte. Atue como um especialista em Lean Manufacturing. Sugira 10 ideias de baixo custo (Poka-yoke) para reduzir esse erro."
Expande o leque de soluções possíveis.`,
          quiz: [{ question: 'Como a IA ajuda no Kaizen?', options: ['Fazendo o trabalho.', 'Gerando múltiplas ideias e soluções criativas baseadas em metodologias conhecidas.', 'Reclamando.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10_ops-l10',
          title: 'Lição 10: Treinamento e Onboarding',
          videoUrl: 'https://www.youtube.com/watch?v=996bKg1ogNY',
          content: `## Quiz Gerado
"Crie um quiz de 5 perguntas para verificar se o novo operador entendeu o procedimento de segurança de bloqueio elétrico (LOTO). Inclua feedback para respostas erradas."
Criação instantânea de material de treinamento.`,
          quiz: [{ question: 'O que a IA pode criar para treinamento?', options: ['Certificados falsos.', 'Quizzes, resumos e materiais didáticos personalizados instantaneamente.', 'Nada.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm10-ops-l11',
        title: 'Lição 11: Extração de Dados de Imagens',
        videoUrl: 'https://www.youtube.com/watch?v=xnRhRlmkFJ0',
        content: `## Multimodalidade
"Analise esta foto do painel elétrico. Liste os disjuntores que estão desligados e verifique se há alguma etiqueta de manutenção visível."
Transforma inspeção visual em dado estruturado.`,
        quiz: [{ question: 'Como prompts multimodais ajudam na inspeção?', options: ['Tirando selfie.', 'Analisando fotos técnicas para extrair status e anomalias.', 'Imprimindo.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm10-ops-l12',
        title: 'Lição 12: E-mails de Comunicação Interna',
        videoUrl: 'https://www.youtube.com/watch?v=7ke-p4vw9hk',
        content: `## Comunicados Claros
"Escreva um comunicado para toda a fábrica sobre a parada programada de energia no domingo. Use tom sério mas claro. Enfatize que equipamentos de TI devem ser desligados antes."
Garante que a mensagem chegue sem ruído.`,
        quiz: [{ question: 'Qual o benefício da IA em comunicados?', options: ['Escrever rápido.', 'Clareza, tom adequado e garantia de que pontos críticos foram cobertos.', 'Escrever poemas.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm10-ops-l13',
        title: 'Lição 13: Avaliação de Fornecedores',
        videoUrl: 'https://www.youtube.com/watch?v=c68fnfyDEy4',
        content: `## Análise de Propostas
"Compare estas 3 propostas de fornecedores (textos colados abaixo). Crie uma tabela comparando: Preço, Prazo de Entrega, Garantia e Condições de Pagamento. Indique qual tem o melhor TCO (Custo Total)."`,
        quiz: [{ question: 'Como a IA apoia a decisão de compras?', options: ['Escolhendo o mais barato.', 'Comparando propostas complexas e destacando trade-offs em segundos.', 'Sorteando.'], correctAnswerIndex: 1 }],
      },
    ],
};
