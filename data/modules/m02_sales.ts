
import { Module } from '../../types';
import { MessageSquare } from '../../components/icons';

export const M2_SALES: Module = {
    id: 'm2_sales',
    title: 'Módulo 2: NLP para Vendas (Inteligência de Conversa)',
    subtitle: 'Como usar o processamento de linguagem para entender clientes e fechar negócios.',
    icon: MessageSquare,
    lessons: [
      {
          id: 'm2_sales-l1',
          title: 'Lição 1: O que é NLP em Vendas',
          videoUrl: 'https://www.youtube.com/watch?v=fNxaJSZwYoc', // Introduction to NLP
          content: `## Decodificando o Cliente
Em vendas, cada palavra importa. NLP (Processamento de Linguagem Natural) é a tecnologia que permite ao CRM "ler" seus e-mails e "ouvir" suas reuniões.
Ele transforma conversas não estruturadas em dados de pipeline.`,
          quiz: [{ question: 'Para que serve NLP em vendas?', options: ['Corrigir gramática.', 'Transformar conversas (e-mail/voz) em dados estruturados de negócio.', 'Criar slides.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm2_sales-l2',
          title: 'Lição 2: E-mails que Convertem (Embeddings)',
          videoUrl: 'https://www.youtube.com/watch?v=gQddtTdmPOc', // Word Embeddings Explained
          content: `## Semântica de Venda
Usando embeddings, ferramentas de IA conseguem analisar quais "assuntos" de e-mail têm maior taxa de abertura e quais "CTAs" (chamadas para ação) geram mais respostas.
Não é mágica, é matemática vetorial aplicada à persuasão.`,
          quiz: [{ question: 'Como embeddings ajudam em Cold Mails?', options: ['Deixam o e-mail bonito.', 'Identificam padrões semânticos de alta conversão.', 'Enviam mais rápido.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm2_sales-l3',
          title: 'Lição 3: Análise de Sentimento em Calls',
          videoUrl: 'https://www.youtube.com/watch?v=AJNBp-19_cM', // Sentiment Analysis Explained
          content: `## O Termômetro da Negociação
Durante uma call, o cliente diz "Interessante...". Foi irônico ou genuíno?
Modelos de análise de sentimento analisam o tom de voz e o contexto das palavras para classificar a temperatura do deal: "Comprometido", "Cético" ou "Hostil".`,
          quiz: [{ question: 'O que a análise de sentimento detecta em calls?', options: ['O volume.', 'A intenção emocional e a "temperatura" do lead.', 'A duração.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm2_sales-l4',
          title: 'Lição 4: Extração de Objeções (NER)',
          videoUrl: 'https://www.youtube.com/watch?v=5dEZ_0s1F1c', // Named Entity Recognition
          content: `## Mapeando Barreiras
Named Entity Recognition (NER) pode ser treinado para detectar "Objeções".
O sistema varre todas as calls do mês e extrai: "Preço alto" (30%), "Falta de Feature X" (20%), "Concorrente Y" (15%). Isso gera inteligência direta para o time de Produto e Marketing.`,
          quiz: [{ question: 'Como o NER ajuda na estratégia de vendas?', options: ['Criando nomes.', 'Extraindo e categorizando objeções e competidores citados automaticamente.', 'Agendando reuniões.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm2_sales-l5',
          title: 'Lição 5: Resumo Automático de Reuniões',
          videoUrl: 'https://www.youtube.com/watch?v=V2POyQVQuzA', // AI Meeting Assistants
          content: `## Fim da Ata Manual
Vendedores odeiam digitar notas no CRM.
Transformers (a tecnologia do GPT) podem ouvir uma hora de reunião e gerar:
1. Resumo executivo.
2. Próximos passos (Action Items).
3. Atualização automática dos campos do Deal no Salesforce.`,
          quiz: [{ question: 'Qual o maior ganho de produtividade do NLP para vendedores?', options: ['Escrever poesia.', 'Automatizar a entrada de dados e resumos de reuniões no CRM.', 'Fazer café.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm2_sales-l6',
          title: 'Lição 6: Chatbots de Venda (LLMs)',
          videoUrl: 'https://www.youtube.com/watch?v=0qQ2o1tR5jU', // Modern Chatbots
          content: `## Vendedor 24/7
Chatbots antigos eram árvores de decisão burras.
Chatbots com LLMs entendem intenção. O cliente pergunta: "Serve para clínica médica?" e o bot responde contextualmente, consultando a base de conhecimento, e já tenta agendar uma demo.`,
          quiz: [{ question: 'O que diferencia um Chatbot LLM de um antigo?', options: ['Nada.', 'Capacidade de entender intenção e contexto, não apenas palavras-chave.', 'Custa menos.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm2_sales-l7',
          title: 'Lição 7: Personalização em Escala',
          videoUrl: 'https://www.youtube.com/watch?v=3M2-vjJ_Wvk', // Hyper-personalization
          content: `## O Paradoxo Resolvido
Antes: Ou você tinha escala (spam) ou personalização (manual).
Agora: LLMs leem o LinkedIn do prospect, leem as notícias da empresa dele e escrevem uma mensagem única que conecta a dor dele à sua solução. Escala com personalização.`,
          quiz: [{ question: 'O que a IA resolve na prospecção?', options: ['O envio de fax.', 'O trade-off entre escala (quantidade) e personalização (qualidade).', 'O preço do lead.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm2_sales-l8',
          title: 'Lição 8: Alucinação em Vendas',
          videoUrl: 'https://www.youtube.com/watch?v=cf522e5e1eE', // AI Hallucinations
          content: `## Perigo: Promessa Falsa
Um chatbot de vendas pode "alucinar" e prometer um desconto que não existe ou uma feature que o produto não tem.
Controle: Usar RAG (Retrieval-Augmented Generation) restrito à base de conhecimento oficial da empresa para garantir que ele só fale a verdade.`,
          quiz: [{ question: 'Como evitar que a IA prometa o que não deve?', options: ['Desligando.', 'Usando RAG restrito à documentação oficial de vendas.', 'Pedindo por favor.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm2_sales-l9',
          title: 'Lição 9: RAG para Sales Enablement',
          videoUrl: 'https://www.youtube.com/watch?v=TRjq7t2Ms5I', // RAG Explained
          content: `## O Guru de Bolso
Vendedores novos demoram meses para aprender o produto.
Um sistema RAG permite que o vendedor pergunte: "Como comparamos com o Concorrente X?" ou "O que responder sobre segurança?" e receba a resposta aprovada na hora, durante a call.`,
          quiz: [{ question: 'O que é Sales Enablement com RAG?', options: ['Treinamento físico.', 'Fornecer respostas instantâneas e precisas ao vendedor baseadas na base de conhecimento da empresa.', 'Dar desconto.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm2_sales-l10',
        title: 'Lição 10: Fine-Tuning para Tom de Voz',
        videoUrl: 'https://www.youtube.com/watch?v=eC6Hd1hUPtU', // Fine-Tuning LLMs
        content: `## A Voz da Marca
Se sua empresa é formal, o ChatGPT padrão pode soar muito casual.
Fazer Fine-Tuning em seus melhores e-mails de vendas passados ensina a IA a escrever "como seus Top Performers", replicando a cultura de comunicação de sucesso.`,
        quiz: [{ question: 'Para que serve Fine-Tuning em vendas?', options: ['Ajustar o monitor.', 'Treinar a IA para imitar o estilo e tom de voz dos melhores vendedores da empresa.', 'Economizar dados.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm2_sales-l11',
        title: 'Lição 11: Tradução em Tempo Real',
        videoUrl: 'https://www.youtube.com/watch?v=4q1uVvKq9y8', // Real-time AI Translation
        content: `## Mercado Global
Ferramentas como HeyGen ou Rask.ai dublam vídeos de vendas para qualquer língua mantendo a voz original.
Ferramentas de chat traduzem o suporte em tempo real. A barreira linguística para vender globalmente caiu.`,
        quiz: [{ question: 'Como a IA impacta vendas internacionais?', options: ['Aumenta o custo.', 'Remove a barreira linguística com tradução e dublagem em tempo real.', 'Exige viagens.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm2_sales-l12',
        title: 'Lição 12: Análise de Objeções',
        videoUrl: 'https://www.youtube.com/watch?v=9t78YjV1Kz8', // Sales Objections Analysis
        content: `## Matriz de Resposta
O NLP agrupa as objeções reais dos clientes.
Se 40% dizem "Está caro", o problema pode ser preço ou percepção de valor.
Se 40% dizem "Não tenho tempo", o problema é urgência.
Dados para ajustar o Pitch.`,
        quiz: [{ question: 'O que a análise de objeções permite?', options: ['Chorar.', 'Ajustar o Pitch de vendas e a estratégia de produto baseada em dados reais de recusa.', 'Demitir clientes.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm2_sales-l13',
        title: 'Lição 13: O Futuro da Conversa',
        videoUrl: 'https://www.youtube.com/watch?v=yY1QZ9o3x_0', // Future of Voice AI
        content: `## Voice Bots Indistinguíveis
Estamos chegando na era dos Voice Bots (como o GPT-4o) que ligam, negociam, fazem piada, percebem hesitação na voz do cliente e agendam a visita.
O telefone voltará a ser uma arma poderosa, mas operado por máquinas.`,
        quiz: [{ question: 'Qual a tendência para prospecção telefônica?', options: ['Ninguém atende.', 'Voice Bots ultra-realistas capazes de manter conversas complexas e naturais.', 'SMS apenas.'], correctAnswerIndex: 1 }],
      },
    ],
};
