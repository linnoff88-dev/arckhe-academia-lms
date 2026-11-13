
import { Module } from '../../types';
import { Trophy } from '../../components/icons';

export const M10_SALES: Module = {
    id: 'm10_sales',
    title: 'Módulo 10: Engenharia de Prompt para Vendas',
    subtitle: 'Escrevendo comandos que geram receita e conversão.',
    icon: Trophy,
    lessons: [
      {
          id: 'm10_sales-l1',
          title: 'Lição 1: Fundamentos de Prompt em Vendas',
          videoUrl: 'https://www.youtube.com/watch?v=jEn_Lg3jJPU', // Prompt Engineering Basics
          content: `## Contexto é Rei
Não diga: "Escreva um e-mail de vendas".
Diga: "Atue como um vendedor sênior de SaaS. Escreva um e-mail frio para um Diretor de Marketing de uma empresa de varejo, focado em dor de ROI, com tom profissional mas provocativo, máximo de 100 palavras."`,
          quiz: [{ question: 'O que melhora um prompt de vendas?', options: ['Ser curto.', 'Contexto rico, persona definida e restrições claras.', 'Usar gírias.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10_sales-l2',
          title: 'Lição 2: Frameworks de Copywriting',
          videoUrl: 'https://www.youtube.com/watch?v=5dEZ_0s1F1c', // Copywriting Frameworks
          content: `## Estruturando a Persuasão
Peça para a IA usar frameworks comprovados:
- **AIDA:** Atenção, Interesse, Desejo, Ação.
- **PAS:** Problema, Agitação, Solução.
Prompt: "Reescreva este texto usando o framework PAS focado em redução de custos."`,
          quiz: [{ question: 'Para que servem frameworks como PAS no prompt?', options: ['Para formatar.', 'Para estruturar a argumentação persuasiva de forma lógica e comprovada.', 'Para traduzir.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10_sales-l3',
          title: 'Lição 3: Personalização com Variáveis',
          videoUrl: 'https://www.youtube.com/watch?v=0qQ2o1tR5jU', // Hyper-personalization
          content: `## Templates Dinâmicos
Criar prompts que aceitam variáveis.
"Escreva uma introdução conectando a notícia {Noticia_Recente} com a nossa solução de {Solucao}, para o cargo {Cargo}."
Isso permite escalar a personalização em ferramentas de automação.`,
          quiz: [{ question: 'Como escalar prompts personalizados?', options: ['Copiando e colando.', 'Usando variáveis dinâmicas (placeholders) no prompt.', 'Digitando rápido.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10-sales-l4',
          title: 'Lição 4: Tratamento de Objeções',
          videoUrl: 'https://www.youtube.com/watch?v=1A_T4k6-X7A', // Handling Objections with AI
          content: `## O Treinador de Roleplay
Use a IA para simular o cliente difícil.
Prompt: "Eu sou o vendedor, você é o cliente cético que acha meu produto caro. Vamos debater. Responda uma frase por vez e seja difícil de convencer."
Excelente para treino antes da call real.`,
          quiz: [{ question: 'Como usar a IA para treinar negociação?', options: ['Pedindo dicas.', 'Simulando roleplay onde a IA atua como o cliente com objeções específicas.', 'Lendo livros.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10-sales-l5',
          title: 'Lição 5: Análise de Calls (Summarization)',
          videoUrl: 'https://www.youtube.com/watch?v=V2POyQVQuzA', // Meeting Summarization
          content: `## Extraindo Ouro
Cole a transcrição da call no prompt.
Peça: "Identifique: 1. Dores principais do cliente. 2. Orçamento mencionado. 3. Decisores citados. 4. Próximos passos acordados. Formate em tópicos."`,
          quiz: [{ question: 'O que pedir à IA após colar uma transcrição?', options: ['Resumir tudo.', 'Extrair informações estruturadas específicas (dores, orçamento, next steps).', 'Traduzir.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10-sales-l6',
          title: 'Lição 6: Refinamento de Tom (Tone Transfer)',
          videoUrl: 'https://www.youtube.com/watch?v=eC6Hd1hUPtU', // Tone Adjustment
          content: `## Ajuste Fino
Escreveu um e-mail ríspido? A IA conserta.
"Reescreva este e-mail para soar mais empático e colaborativo, mas mantendo a firmeza sobre o prazo de pagamento."
Ajuste a comunicação para o perfil do cliente (DISC).`,
          quiz: [{ question: 'O que é Tone Transfer?', options: ['Mudar de música.', 'Reescrever um texto alterando o estilo/emoção (ex: de agressivo para empático).', 'Enviar áudio.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10-sales-l7',
          title: 'Lição 7: Criação de Sequências (Cadências)',
          videoUrl: 'https://www.youtube.com/watch?v=5dEZ_0s1F1c', // Creating Sales Sequences
          content: `## Storytelling em Capítulos
Não peça um e-mail. Peça uma campanha.
"Crie uma sequência de 5 e-mails para reengajar leads frios. E-mail 1: Valor. E-mail 2: Case. E-mail 3: Break-up. Espaçamento de 3 dias."`,
          quiz: [{ question: 'Como criar cadências com IA?', options: ['Um e-mail por vez.', 'Planejando a sequência lógica e narrativa de múltiplos toques.', 'Aleatoriamente.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10-sales-l8',
          title: 'Lição 8: Few-Shot para Estilo',
          videoUrl: 'https://www.youtube.com/watch?v=jEn_Lg3jJPU', // Few-Shot Prompting
          content: `## Clonando seu Melhor Vendedor
"Aqui estão 3 exemplos de e-mails que geraram vendas na minha empresa: [Exemplo 1], [Exemplo 2], [Exemplo 3]. Agora escreva um novo e-mail para o cliente X seguindo ESSE mesmo estilo e estrutura."`,
          quiz: [{ question: 'Como garantir que a IA escreva no estilo da empresa?', options: ['Pedindo "seja legal".', 'Usando Few-Shot Prompting com exemplos reais de sucesso da empresa.', 'Não dá.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10-sales-l9',
          title: 'Lição 9: Pesquisa de Contas (Account Research)',
          videoUrl: 'https://www.youtube.com/watch?v=3M2-vjJ_Wvk', // Account Research
          content: `## O Briefing Instantâneo
Com acesso à web (Browsing):
"Analise o relatório anual de 2023 da empresa X. Liste os 3 principais desafios estratégicos citados pelo CEO e como nossa solução de Y pode ajudar em cada um."
Personalização radical em segundos.`,
          quiz: [{ question: 'Como usar IA para pesquisa de contas?', options: ['Inventando dados.', 'Resumindo relatórios públicos e notícias para encontrar ganchos de venda.', 'Olhando fotos.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm10-sales-l10',
          title: 'Lição 10: Prompt Chaining',
          videoUrl: 'https://www.youtube.com/watch?v=G2fqAlgmoPo', // Prompt Chaining
          content: `## Processos Complexos
Divida tarefas grandes.
Prompt 1: "Pesquise a empresa X."
Prompt 2: "Com base na pesquisa, liste 3 dores."
Prompt 3: "Escreva um e-mail para cada dor."
Encadear prompts gera resultados muito superiores a um "prompt gigante".`,
          quiz: [{ question: 'O que é Prompt Chaining?', options: ['Corrente de e-mail.', 'Quebrar uma tarefa complexa em uma sequência de prompts onde a saída de um vira a entrada do outro.', 'Repetir o mesmo prompt.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm10-sales-l11',
        title: 'Lição 11: Comparativo Competitivo',
        videoUrl: 'https://www.youtube.com/watch?v=0qQ2o1tR5jU', // Competitive Analysis
        content: `## Battle Cards
"Crie uma tabela comparando nosso produto X com o concorrente Y. Foque nas nossas vantagens em segurança e preço. Liste as fraquezas deles baseadas em reviews públicos do G2."
Munição para negociação.`,
        quiz: [{ question: 'Como a IA auxilia na análise competitiva?', options: ['Espionagem.', 'Sintetizando informações públicas para criar comparativos e argumentos de venda.', 'Hackeando.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm10-sales-l12',
        title: 'Lição 12: Criação de Scripts de Call',
        videoUrl: 'https://www.youtube.com/watch?v=9t78YjV1Kz8', // Sales Scripts with AI
        content: `## Roteiros Flexíveis
"Crie um script de cold call para vender software de RH. Inclua: Abertura de quebra-gelo, 3 perguntas de qualificação (SPIN Selling) e respostas para as objeções 'não tenho tempo' e 'já tenho fornecedor'."`,
        quiz: [{ question: 'O que um bom prompt de script deve incluir?', options: ['Apenas "bom dia".', 'Estrutura de abertura, perguntas qualificadoras e tratamento de objeções.', 'Piadas ruins.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm10-sales-l13',
        title: 'Lição 13: Avaliação de E-mails',
        videoUrl: 'https://www.youtube.com/watch?v=eC6Hd1hUPtU', // AI as Editor
        content: `## O Editor Chefe
"Aja como um especialista em Copywriting. Avalie este e-mail de vendas que escrevi. Dê uma nota de 0 a 10 para: Clareza, Persuasão e Call to Action. Sugira 3 melhorias específicas."
Feedback instantâneo antes de enviar.`,
        quiz: [{ question: 'Como usar a IA para melhorar seus próprios e-mails?', options: ['Pedindo para ela enviar.', 'Pedindo para ela atuar como crítica/editora e sugerir melhorias específicas.', 'Não usar.'], correctAnswerIndex: 1 }],
      },
    ],
};
