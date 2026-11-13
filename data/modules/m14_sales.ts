
import { Module } from '../../types';
import { BrainLightbulb } from '../../components/icons';

export const M14_SALES: Module = {
    id: 'm14_sales',
    title: 'Módulo 14: Sales Enablement e PKM',
    subtitle: 'Gestão do conhecimento comercial para vender mais e melhor.',
    icon: BrainLightbulb,
    lessons: [
      {
          id: 'm14_sales-l1',
          title: 'Lição 1: O Segundo Cérebro do Vendedor',
          videoUrl: 'https://www.youtube.com/watch?v=opR1l3e0aMI', // Building a Second Brain
          content: `## Informação Demais
Vendedores lidam com: Detalhes do produto, Preços, Concorrentes, Casos de uso, Objeções.
Tentar decorar tudo falha.
O "Segundo Cérebro" é um sistema onde essa informação vive e é facilmente recuperável durante a venda.`,
          quiz: [{ question: 'Por que vendedores precisam de um Segundo Cérebro?', options: ['Porque têm memória ruim.', 'Para gerenciar o volume massivo de informações de produto e mercado necessárias para vender.', 'Para guardar fotos.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm14_sales-l2',
          title: 'Lição 2: Playbooks Vivos',
          videoUrl: 'https://www.youtube.com/watch?v=9t78YjV1Kz8', // Living Playbooks
          content: `## Documento vs. Sistema
Playbooks em PDF morrem.
Um sistema de PKM (como Notion ou Obsidian) permite Playbooks vivos, interligados, onde o vendedor pode navegar de "Objeção de Preço" para "Caso de Sucesso de ROI" em um clique.`,
          quiz: [{ question: 'Qual o problema de playbooks estáticos?', options: ['Ficam desatualizados e difíceis de navegar.', 'São caros.', 'São bonitos.'], correctAnswerIndex: 0 }],
      },
      {
          id: 'm14_sales-l3',
          title: 'Lição 3: Organização de Contas (PARA)',
          videoUrl: 'https://www.youtube.com/watch?v=5dEZ_0s1F1c', // PARA Method
          content: `## Estruturando Clientes
Use o método PARA (Projects, Areas, Resources, Archives) para organizar suas contas.
- **Projects:** Deals ativos (fechamento este mês).
- **Areas:** Contas de relacionamento longo prazo (Key Accounts).
- **Resources:** Templates, scripts, infos de produto.
- **Archives:** Deals perdidos.`,
          quiz: [{ question: 'Como o método PARA ajuda na gestão de território?', options: ['Não ajuda.', 'Separa o que é foco ativo (Projetos) do que é manutenção (Áreas) e referência.', 'Organiza por ordem alfabética.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm14_sales-l4',
          title: 'Lição 4: IA para Resumo de Mercado',
          videoUrl: 'https://www.youtube.com/watch?v=G2fqAlgmoPo', // AI Summarization
          content: `## Inteligência Competitiva
Use a IA para monitorar e resumir notícias sobre seus clientes e concorrentes.
"Resuma as 3 principais notícias sobre o setor de Varejo desta semana."
Isso alimenta o "Resources" do seu PKM e te dá assunto para quebrar o gelo.`,
          quiz: [{ question: 'Como usar IA para inteligência de mercado?', options: ['Lendo jornal.', 'Automatizando o resumo e monitoramento de notícias do setor e concorrentes.', 'Adivinhando.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm14_sales-l5',
          title: 'Lição 5: Gestão de Objeções',
          videoUrl: 'https://www.youtube.com/watch?v=1A_T4k6-X7A', // Sales Objections
          content: `## A Biblioteca de Respostas
Cada vez que você ouvir uma nova objeção difícil e encontrar uma boa resposta, capture-a.
Crie uma base de "Battle Cards" no seu PKM.
Com o tempo, você terá a resposta perfeita para tudo, acessível em segundos.`,
          quiz: [{ question: 'O que é um Battle Card de objeções?', options: ['Cartão de jogo.', 'Um registro organizado das melhores respostas para as objeções mais comuns.', 'Cartão de visita.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm14_sales-l6',
          title: 'Lição 6: Leitura Sintópica de Vendas',
          videoUrl: 'https://www.youtube.com/watch?v=jEn_Lg3jJPU', // Syntopical Reading
          content: `## Aprendendo com os Mestres
Não leia apenas um livro de vendas. Leia SPIN Selling, Challenger Sale e Sandler.
Use a IA para cruzar as metodologias e criar o *seu* método sintético adaptado ao seu produto.`,
          quiz: [{ question: 'Qual o objetivo da leitura sintópica em vendas?', options: ['Ler rápido.', 'Integrar diferentes metodologias de vendas para criar uma abordagem única e robusta.', 'Copiar um livro.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm14_sales-l7',
          title: 'Lição 7: CRM como PKM',
          videoUrl: 'https://www.youtube.com/watch?v=reUZRyXxUs4', // CRM as Knowledge Base
          content: `## O Cérebro da Equipe
O CRM deve ser tratado como um PKM coletivo.
Notas de reunião não são burocracia; são memória externa.
Se um vendedor sai, o conhecimento sobre a conta fica no sistema, não na cabeça dele.`,
          quiz: [{ question: 'Qual a visão do CRM no contexto de PKM?', options: ['Chato.', 'É a memória institucional coletiva sobre os relacionamentos com clientes.', 'Software lento.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm14_sales-l8',
          title: 'Lição 8: Templates e Snippets',
          videoUrl: 'https://www.youtube.com/watch?v=0qQ2o1tR5jU', // Productivity Snippets
          content: `## Velocidade
Nunca escreva o mesmo e-mail duas vezes.
Se funcionou, vira template. Use expansores de texto (TextExpander) ou a biblioteca do CRM.
O PKM armazena seus melhores "blocos de Lego" de comunicação.`,
          quiz: [{ question: 'O que fazer com um e-mail que converteu bem?', options: ['Apagar.', 'Transformar em template/snippet para reutilização.', 'Imprimir.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm14_sales-l9',
          title: 'Lição 9: Captura Rápida em Reunião',
          videoUrl: 'https://www.youtube.com/watch?v=V2POyQVQuzA', // Meeting Transcription AI
          content: `## Foco no Cliente
Durante a reunião, você deve ouvir, não digitar loucamente.
Use ferramentas de transcrição (IA) como captura.
Sua nota manual deve ser apenas para "Key Insights" e sentimentos, que a IA não pega.`,
          quiz: [{ question: 'Qual o papel da anotação manual em reuniões com IA?', options: ['Transcrever tudo.', 'Capturar insights chave e sentimentos, deixando a transcrição literal para a IA.', 'Desenhar.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm14_sales-l10',
          title: 'Lição 10: Busca Semântica no Enablement',
          videoUrl: 'https://www.youtube.com/watch?v=TRjq7t2Ms5I', // Semantic Search in Enterprise
          content: `## Encontrando Ouro
Sales Enablement coloca conteúdo num drive. Ninguém acha.
Com busca semântica (IA), o vendedor digita: "Case de banco sobre segurança" e o sistema acha o slide específico dentro de um PDF de 50 páginas.`,
          quiz: [{ question: 'Como a busca semântica ajuda o vendedor?', options: ['Não ajuda.', 'Permite encontrar conteúdo específico de vendas baseado no significado, não só no nome do arquivo.', 'Organiza pastas.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm14_sales-l11',
          title: 'Lição 11: Chat com seus Dados de Venda',
          videoUrl: 'https://www.youtube.com/watch?v=eC6Hd1hUPtU', // Chat with your Data
          content: `## Conversando com o Histórico
"Quais foram os principais motivos de perda de deals no setor financeiro ano passado?"
Uma IA conectada ao seu PKM/CRM pode responder isso sintetizando centenas de notas de "Loss Reason".`,
          quiz: [{ question: 'O que o "Chat com Dados" permite?', options: ['Fofoca.', 'Extrair inteligência agregada de históricos de vendas através de perguntas naturais.', 'Nada.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm14_sales-l12',
          title: 'Lição 12: Curadoria de Conteúdo para Social Selling',
          videoUrl: 'https://www.youtube.com/watch?v=ad79nYk2keg', // Content Curation
          content: `## Autoridade
Vendedores modernos produzem conteúdo.
Use seu PKM para guardar artigos interessantes. Use a IA para resumir e criar posts para LinkedIn baseados neles.
Transforma consumo de informação em presença digital.`,
          quiz: [{ question: 'Como o PKM apoia o Social Selling?', options: ['Dando likes.', 'Organizando referências e ideias para criação consistente de conteúdo de autoridade.', 'Postando fotos.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm14_sales-l13',
          title: 'Lição 13: O Futuro do Aprendizado em Vendas',
          videoUrl: 'https://www.youtube.com/watch?v=reUZRyXxUs4', // Future of Learning
          content: `## Just-in-Time Learning
Em vez de treinamentos longos uma vez por ano, o aprendizado será micro, contextual e na hora da necessidade.
O sistema detecta que você vai visitar um cliente de Agro e te empurra um resumo de 2 min sobre "Tendências do Agro e como vendemos lá".`,
          quiz: [{ question: 'O que é Just-in-Time Learning?', options: ['Aprender atrasado.', 'Aprendizado entregue no momento exato em que é necessário para a tarefa.', 'Faculdade.'], correctAnswerIndex: 1 }],
      },
    ],
};
