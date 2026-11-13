
import { Module } from '../../types';
import { MessageSquare } from '../../components/icons';

export const M2: Module = {
    id: 'm2',
    title: 'Módulo 2: Processamento de Linguagem Natural (NLP)',
    subtitle: 'Como as máquinas entendem, processam e geram linguagem humana.',
    icon: MessageSquare,
    lessons: [
      {
          id: 'm2-l1',
          title: 'Lição 1: O que é NLP',
          videoUrl: 'https://www.youtube.com/watch?v=X1IpNUs1PV8',
          content: `## A Linguagem dos Dados
NLP é a disciplina que preenche a lacuna entre a comunicação humana e o entendimento computacional.
Enquanto humanos usam linguagem ambígua e contextual, computadores exigem precisão. O NLP moderno usa probabilidade para lidar com essa ambiguidade.`,
          quiz: [{ question: 'Qual o principal desafio do NLP?', options: ['Falta de palavras.', 'Lidar com a ambiguidade e contexto da linguagem humana.', 'Velocidade da internet.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm2-l2',
          title: 'Lição 2: Word Embeddings',
          videoUrl: 'https://www.youtube.com/watch?v=Gli2fxRtQlg',
          content: `## Geometria do Significado
Embeddings transformam palavras em vetores numéricos em um espaço multidimensional.
Nesse espaço, palavras com significados similares estão fisicamente próximas.
Isso permite que a máquina entenda que "Rei" - "Homem" + "Mulher" = "Rainha", puramente através da matemática.`,
          quiz: [{ question: 'O que um vetor de Embedding representa?', options: ['A contagem de letras.', 'O significado semântico da palavra em um espaço numérico.', 'A tradução para inglês.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm2-l3',
          title: 'Lição 3: Análise de Sentimento',
          videoUrl: 'https://www.youtube.com/watch?v=BCgm7YLZ2wg',
          content: `## Mineração de Opinião
Utiliza NLP para identificar e extrair informações subjetivas.
Além de positivo/negativo, modelos modernos detectam emoções específicas (raiva, alegria, frustração) e intenção de compra, sendo cruciais para monitoramento de marca e CS.`,
          quiz: [{ question: 'A análise de sentimento moderna vai além de positivo/negativo para identificar:', options: ['Erros de ortografia.', 'Emoções específicas e intenções.', 'A idade do autor.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm2-l4',
          title: 'Lição 4: NER (Named Entity Recognition)',
          videoUrl: 'https://www.youtube.com/watch?v=tW_Wv5tCq04',
          content: `## Estruturando o Caos
NER é a tarefa de localizar e classificar entidades nomeadas em texto não estruturado.
Transforma um texto corrido em dados estruturados: Quem (Pessoa), Onde (Local), Quanto (Valor Monetário), Quando (Data). Fundamental para automação jurídica e financeira.`,
          quiz: [{ question: 'Para que serve o NER em processos de negócio?', options: ['Corrigir texto.', 'Extrair dados estruturados (nomes, datas, valores) de documentos.', 'Traduzir documentos.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm2-l5',
          title: 'Lição 5: Atenção e Transformers',
          videoUrl: 'https://www.youtube.com/watch?v=aCWm4eMQlQs',
          content: `## O Fim da Sequência Linear
Antes dos Transformers, processávamos texto palavra por palavra.
O mecanismo de **Self-Attention** permite que o modelo olhe para a frase inteira de uma vez e entenda a relação de cada palavra com todas as outras, resolvendo ambiguidades de contexto instantaneamente.`,
          quiz: [{ question: 'O que o mecanismo de "Self-Attention" permite?', options: ['Processar uma palavra por vez.', 'Relacionar cada palavra com todas as outras da frase simultaneamente para entender o contexto.', 'Economizar memória.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm2-l6',
          title: 'Lição 6: LLMs (Large Language Models)',
          videoUrl: 'https://www.youtube.com/watch?v=jMN40fy-sUU',
          content: `## Previsão de Próxima Palavra
LLMs como o GPT são, em essência, máquinas de autocompletar super-avançadas.
Eles foram treinados em tanta quantidade de texto que aprenderam raciocínio lógico e conhecimento de mundo como um "efeito colateral" da tarefa de prever a próxima palavra.`,
          quiz: [{ question: 'Qual a tarefa fundamental de treinamento de um LLM?', options: ['Responder perguntas.', 'Prever a próxima palavra (token) em uma sequência.', 'Pesquisar no Google.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm2-l7',
          title: 'Lição 7: Tokens e Tokenização',
          videoUrl: 'https://www.youtube.com/watch?v=tI4s6d4v8z8',
          content: `## A Moeda da IA
Modelos não leem palavras, leem tokens.
Um token pode ser uma palavra inteira ("mesa") ou parte dela ("in-cons-ti-tu-cio-nal").
A eficiência da tokenização afeta diretamente o custo e a "janela de contexto" (memória de curto prazo) do modelo.`,
          quiz: [{ question: 'Por que entender tokens é importante para custos?', options: ['Tokens são moedas digitais.', 'As APIs de IA cobram por milhão de tokens processados, não por palavras.', 'Não é importante.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm2-l8',
          title: 'Lição 8: Alucinação em LLMs',
          videoUrl: 'https://www.youtube.com/watch?v=z8vSg8z0_aI',
          content: `## O Defeito da Probabilidade
Como LLMs são probabilísticos, eles sempre geram uma resposta, mesmo que não saibam a verdade.
A alucinação ocorre quando o modelo preenche lacunas de conhecimento com informações estatisticamente plausíveis, mas factualmente falsas.`,
          quiz: [{ question: 'A alucinação em IA ocorre porque:', options: ['O modelo quer mentir.', 'O modelo prioriza a plausibilidade estatística sobre a veracidade factual.', 'O modelo está com vírus.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm2-l9',
          title: 'Lição 9: RAG (Retrieval-Augmented Generation)',
          videoUrl: 'https://www.youtube.com/watch?v=74UZux9HpSE',
          content: `## Aterramento (Grounding)
RAG é a técnica de fornecer ao LLM um "livro de consultas" confiável (seus dados corporativos).
O modelo busca a informação relevante primeiro e depois usa sua capacidade de linguagem para formular a resposta baseada *apenas* naquela fonte, reduzindo drasticamente a alucinação.`,
          quiz: [{ question: 'Como o RAG reduz alucinações?', options: ['Desligando a criatividade.', 'Fornecendo dados externos confiáveis como contexto para a resposta.', 'Aumentando o tamanho do modelo.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm2-l10',
        title: 'Lição 10: Fine-Tuning',
        videoUrl: 'https://www.youtube.com/watch?v=Q0rh6O35djI',
        content: `## Adaptação de Estilo e Formato
Enquanto o RAG dá *conhecimento*, o Fine-Tuning ensina *comportamento*.
É o processo de continuar o treinamento de um modelo base com um conjunto de dados menor e específico para que ele aprenda um tom de voz, um formato de código ou uma terminologia específica de setor.`,
        quiz: [{ question: 'Quando usar Fine-Tuning em vez de RAG?', options: ['Para adicionar fatos novos.', 'Para adaptar o estilo, formato ou comportamento do modelo.', 'Sempre.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm2-l11',
        title: 'Lição 11: BERT vs. GPT',
        videoUrl: 'https://www.youtube.com/watch?v=mJFNcP-Q62c',
        content: `## Encoder vs. Decoder
- **BERT (Bidirectional):** Lê o texto em ambas as direções. Excelente para *entender* e classificar (Search, Sentiment). É um modelo "Encoder".
- **GPT (Generative):** Lê da esquerda para a direita para prever o futuro. Excelente para *criar*. É um modelo "Decoder".`,
        quiz: [{ question: 'Para uma tarefa de classificação de documentos, qual arquitetura é historicamente mais eficiente?', options: ['GPT (Decoder).', 'BERT (Encoder).', 'DALL-E.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm2-l12',
        title: 'Lição 12: IA Multilíngue e Tradução',
        videoUrl: 'https://www.youtube.com/watch?v=lI7Vj3NfF6E',
        content: `## Interlíngua Universal
Modelos modernos não traduzem palavra por palavra. Eles mapeiam a frase de entrada para um "espaço de significado" abstrato e depois decodificam esse significado para a língua de destino.
Isso permite tradução zero-shot entre pares de línguas que nunca foram vistas juntas no treinamento.`,
        quiz: [{ question: 'O que permite a tradução de alta qualidade em LLMs?', options: ['Dicionários bilíngues.', 'A representação abstrata do significado (semântica) independente do idioma.', 'Memorização de frases.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm2-l13',
        title: 'Lição 13: O Futuro do NLP',
        videoUrl: 'https://www.youtube.com/watch?v=mJFNcP-Q62c',
        content: `## Interface Natural
O NLP está deixando de ser uma área de estudo para se tornar a interface padrão de computação.
No futuro, programaremos, analisaremos dados e operaremos máquinas usando apenas linguagem natural. O código vira um detalhe de implementação.`,
        quiz: [{ question: 'Qual a tendência final para o NLP?', options: ['Tornar-se obsoleto.', 'Tornar-se a interface universal de comando para computadores.', 'Apenas tradução.'], correctAnswerIndex: 1 }],
      },
    ],
};
