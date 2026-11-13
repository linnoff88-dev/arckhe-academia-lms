
import { Module } from '../../types';
import { Sparkles } from '../../components/icons';

export const M5: Module = {
    id: 'm5',
    title: 'Módulo 5: Economia da IA Generativa',
    subtitle: 'Custo marginal zero, novos modelos de negócio e os riscos da era sintética.',
    icon: Sparkles,
    lessons: [
      {
          id: 'm5-l1',
          title: 'Lição 1: Custo Marginal Zero de Computação',
          videoUrl: 'https://www.youtube.com/watch?v=hAQSLARIkgc',
          content: `## A Queda da Barreira
A IA Generativa está empurrando o custo de criar conteúdo (texto, imagem, código) para perto de zero.
Assim como a internet reduziu o custo de *distribuição* a zero, a IA reduz o custo de *criação*.
Isso gera uma explosão de oferta e valoriza quem sabe *editar* e *curar*.`,
          quiz: [{ question: 'Qual o impacto econômico imediato da IA Generativa?', options: ['Aumento do custo de software.', 'Redução drástica do custo marginal de criação de conteúdo e conhecimento.', 'Fim da internet.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5-l2',
          title: 'Lição 2: Relação Latente e Curva S',
          videoUrl: 'https://www.youtube.com/watch?v=3WBIrqbN5zA',
          content: `## O Motor da Criatividade
O "Espaço Latente" é onde a IA organiza conceitos matematicamente.
Ela consegue conectar ideias distantes (ex: "Estilo Van Gogh" + "Astronauta") porque entende a relação vetorial entre elas.
A tecnologia segue uma Curva S: estamos saindo da fase linear para a exponencial vertical.`,
          quiz: [{ question: 'O que permite à IA ser "criativa"?', options: ['Ela tem alma.', 'A navegação matemática no Espaço Latente entre conceitos.', 'Cópia direta.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5-l3',
          title: 'Lição 3: R&D no Fine-Tuning',
          videoUrl: 'https://www.youtube.com/watch?v=Q0rh6O35djI',
          content: `## Vantagem Competitiva
Usar modelos genéricos (como GPT-4) é commodity.
A vantagem econômica real está em fazer Fine-Tuning desses modelos com seus dados proprietários.
Seus dados são o fosso defensivo (moat) do seu negócio.`,
          quiz: [{ question: 'Onde está a vantagem competitiva sustentável em IA?', options: ['No modelo genérico.', 'Nos dados proprietários usados para refinar o modelo.', 'No hardware.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5-l4',
          title: 'Lição 4: Alucinação',
          videoUrl: 'https://www.youtube.com/watch?v=z8vSg8z0_aI',
          content: `## Feature, não Bug
A alucinação (inventar fatos) é inerente aos LLMs, pois eles são motores de probabilidade, não bancos de dados de fatos.
Economicamente, isso exige uma camada humana de verificação (Human-in-the-loop) para tarefas críticas, criando novos fluxos de trabalho.`,
          quiz: [{ question: 'Por que LLMs alucinam?', options: ['Erro de programação.', 'Porque são probabilísticos e completam padrões mesmo sem dados factuais.', 'Vírus.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5-l5',
          title: 'Lição 5: Gestão de Conhecimento com IA',
          videoUrl: 'https://www.youtube.com/watch?v=jAEDrm7X_HI',
          content: `## A Memória Institucional Ativa
Empresas perdem milhões reinventando a roda.
A IA permite indexar todo o conhecimento da empresa (Slack, Docs, Emails) e torná-lo consultável em linguagem natural.
Transforma "Arquivo Morto" em "Consultor Ativo".`,
          quiz: [{ question: 'Qual o maior valor da IA na gestão de conhecimento?', options: ['Economizar espaço em disco.', 'Tornar o conhecimento tácito da empresa acessível e acionável.', 'Gerar mais documentos.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5-l6',
          title: 'Lição 6: O Novo Desenvolvedor de IA',
          videoUrl: 'https://www.youtube.com/watch?v=HXLqcKcVgks', // AI Engineer Role
          content: `## De Codificador a Arquiteto
A IA escreve código melhor e mais rápido que humanos.
O papel do desenvolvedor migra de "escrever sintaxe" para "desenhar sistemas", revisar lógica e garantir segurança.
A barreira de entrada para criar software caiu drasticamente.`,
          quiz: [{ question: 'Como a IA muda o papel do programador?', options: ['Ele perde o emprego.', 'Ele passa a focar mais em arquitetura e resolução de problemas do que em sintaxe.', 'Ele tem que digitar mais rápido.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5-l7',
          title: 'Lição 7: Multimodalidade Nativa',
          videoUrl: 'https://www.youtube.com/watch?v=3WBIrqbN5zA',
          content: `## Convergência de Sentidos
Modelos que processam texto, áudio e vídeo no mesmo motor neural (como Gemini 1.5 Pro).
Isso reduz a latência e o custo de integração, permitindo aplicações que "entendem" o mundo como nós (vendo e ouvindo ao mesmo tempo).`,
          quiz: [{ question: 'O que é um modelo multimodal nativo?', options: ['Fala várias línguas.', 'Processa múltiplos tipos de mídia (texto, áudio, vídeo) em um único modelo.', 'Usa vários computadores.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5-l8',
          title: 'Lição 8: Marketing Personalizado',
          videoUrl: 'https://www.youtube.com/watch?v=0qQ2o1tR5jU', // Hyper-personalization
          content: `## O Fim do Segmento
Em vez de criar uma campanha para um "segmento" de 100 mil pessoas, a IA permite criar 100 mil campanhas únicas.
Conteúdo, imagem e oferta gerados em tempo real para a psicologia de cada indivíduo.`,
          quiz: [{ question: 'Qual a promessa da IA no marketing?', options: ['Mandar mais emails.', 'Hiperpersonalização em escala (1:1).', 'Gastar menos.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5-l9',
          title: 'Lição 9: Generative LLM',
          videoUrl: 'https://www.youtube.com/watch?v=Q0rh6O35djI',
          content: `## A Economia da API
Modelos como Serviço (MaaS).
Empresas não precisam mais ter supercomputadores; elas alugam inteligência via API.
Isso transforma Capex (Investimento em Hardware) em Opex (Custo Operacional Variável).`,
          quiz: [{ question: 'Como o modelo de API muda a economia da IA?', options: ['Torna mais caro.', 'Transforma custo fixo de infraestrutura em custo variável de uso.', 'Exige compra de servidores.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5-l10',
          title: 'Lição 10: Agentes',
          videoUrl: 'https://www.youtube.com/watch?v=3WBIrqbN5zA',
          content: `## Service-as-Software
A evolução do SaaS (Software as a Service).
Em vez de comprar uma ferramenta para *você* usar (SaaS), você compra um Agente que *usa a ferramenta por você*.
A IA deixa de ser assistente e vira executora.`,
          quiz: [{ question: 'O que diferencia um Agente de um Chatbot?', options: ['O Agente custa mais.', 'O Agente tem autonomia para executar ações e usar ferramentas.', 'O Chatbot é mais inteligente.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm5-l11',
        title: 'Lição 11: Model Collapse (Colapso de Modelos)',
        videoUrl: 'https://www.youtube.com/watch?v=6vN3FDaw6hw',
        content: `## Poluição de Dados
Se treinarmos futuras IAs apenas com dados gerados por IAs atuais, os modelos vão degenerar (perder variabilidade e qualidade).
Dados humanos "orgânicos" tornam-se um recurso natural escasso e valioso.`,
        quiz: [{ question: 'O que é Model Collapse?', options: ['Quando o servidor cai.', 'Degradação da qualidade da IA por treinar em dados sintéticos repetidamente.', 'Fim da IA.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm5-l12',
        title: 'Lição 12: Propriedade Intelectual e IA',
        videoUrl: 'https://www.youtube.com/watch?v=g8Gwp3rk1oI',
        content: `## A Zona Cinzenta
Quem é dono de uma imagem gerada por IA?
Atualmente, a tendência legal é que obras puramente geradas por IA *não* têm copyright.
Isso força empresas a focar no valor da marca e distribuição, já que o conteúdo em si é comoditizado.`,
        quiz: [{ question: 'Qual o desafio atual de copyright em IA?', options: ['É caro registrar.', 'Obras geradas puramente por máquina geralmente não são protegidas por direitos autorais.', 'Ninguém liga.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm5-l13',
        title: 'Lição 13: Vídeo Generativo e Simulação IA',
        videoUrl: 'https://www.youtube.com/watch?v=HK6y8DAPN_0', // Sora / Physics Simulation
        content: `## Simuladores de Realidade
Vídeos gerados por IA (como Sora) não são apenas pixels; são simuladores de física.
Eles entendem gravidade, luz e colisão. Isso será usado para treinar robôs no mundo virtual antes de colocá-los no mundo real.`,
        quiz: [{ question: 'Além de filmes, para que serve o vídeo generativo?', options: ['Fazer memes.', 'Simular ambientes físicos para treinamento de robótica e ciência.', 'Nada.'], correctAnswerIndex: 1 }],
      },
    ],
};
