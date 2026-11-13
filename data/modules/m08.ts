
import { Module } from '../../types';
import { Wrench } from '../../components/icons';

export const M8: Module = {
    id: 'm8',
    title: 'Módulo 8: Infraestrutura de IA',
    subtitle: 'Ferramentas, Vetores, Orquestração e a base técnica da IA Generativa.',
    icon: Wrench,
    lessons: [
      {
          id: 'm8-l1',
          title: 'Lição 1: O AI Stack Moderno',
          videoUrl: 'https://www.youtube.com/watch?v=HdLSlDk_68c',
          content: `## A Nova Pilha Tecnológica
Desenvolver com IA exige novas ferramentas.
- **LLM:** O cérebro (OpenAI, Anthropic).
- **Vector DB:** A memória (Pinecone, Weaviate).
- **Orquestração:** O esqueleto (LangChain, LlamaIndex).
- **Observabilidade:** Os olhos (Arize, LangSmith).`,
          quiz: [{ question: 'Qual componente atua como a "memória de longo prazo" no AI Stack?', options: ['LLM.', 'Vector Database.', 'Orquestrador.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8-l2',
          title: 'Lição 2: Stack Moderna de Dados',
          videoUrl: 'https://www.youtube.com/watch?v=l_KI8c370HA',
          content: `## A Fundação
O MDS (Modern Data Stack) alimenta a IA.
Sem dados limpos e centralizados no Snowflake/Databricks, sua IA não tem contexto.
A integração entre o time de Dados e o time de IA é crítica.`,
          quiz: [{ question: 'Qual a relação entre MDS e IA?', options: ['Nenhuma.', 'O MDS fornece a infraestrutura de dados limpos necessária para a IA.', 'Competição.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8-l3',
          title: 'Lição 3: No-Code e Orquestração de IA',
          videoUrl: 'https://www.youtube.com/watch?v=jl8kgAiP3V4',
          content: `## Flowise e LangFlow
Ferramentas visuais para construir fluxos de IA (Cadeias) arrastando caixas.
Permite prototipagem rápida de chatbots e agentes sem escrever código Python complexo. Democratiza a engenharia de IA.`,
          quiz: [{ question: 'Para que servem ferramentas como Flowise?', options: ['Criar imagens.', 'Criar fluxos de IA visualmente (No-Code).', 'Minerar cripto.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8-l4',
          title: 'Lição 4: API Proprietária vs Open Source',
          videoUrl: 'https://www.youtube.com/watch?v=wIkBhzZ2oJI',
          content: `## A Grande Decisão
- **Proprietária (GPT-4):** Mais inteligente, fácil de usar, mas dados saem da empresa e custo escala por uso.
- **Open Source (Llama 3):** Roda na sua infra, privacidade total, custo fixo, mas exige engenharia pesada.
A tendência é híbrida: Modelos fechados para tarefas complexas, abertos para tarefas simples/privadas.`,
          quiz: [{ question: 'Qual a principal vantagem de modelos Open Source locais?', options: ['São mais famosos.', 'Privacidade de dados e controle total.', 'Não precisam de computador.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8-l5',
          title: 'Lição 5: Vector Databases',
          videoUrl: 'https://www.youtube.com/watch?v=CCn3OJ-8ghs',
          content: `## Buscando Conceitos
Bancos tradicionais buscam palavras exatas. Bancos vetoriais buscam significados.
Eles armazenam "Embeddings" (vetores numéricos).
Permitem que a IA encontre "contratos de risco" mesmo que a palavra "risco" não esteja no texto, mas sim sinônimos ou contextos similares.`,
          quiz: [{ question: 'Vector Databases são otimizados para:', options: ['Busca por palavra-chave.', 'Busca semântica (por similaridade de significado).', 'Armazenar vídeos.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8-l6',
          title: 'Lição 6: Vector Database na Prática',
          videoUrl: 'https://www.youtube.com/watch?v=961LDe2SWTo',
          content: `## Chunking e Indexação
Não jogamos o livro inteiro no banco.
Dividimos em pedaços (chunks), convertemos em vetores e indexamos.
A estratégia de "Chunking" (tamanho do pedaço) define a qualidade da resposta da IA.`,
          quiz: [{ question: 'O que é "Chunking"?', options: ['Um tipo de dança.', 'Dividir o texto em pedaços menores para indexação vetorial.', 'Apagar dados.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8-l7',
          title: 'Lição 7: Arquitetura e Infraestrutura IA',
          videoUrl: 'https://www.youtube.com/watch?v=-_KbDTz0Bus',
          content: `## O Custo da Inferência
Rodar modelos exige GPUs.
Decisões de arquitetura: Serverless (paga por uso) vs Instância Dedicada (paga por hora).
Quantização: Reduzir a precisão do modelo para ele caber em hardwares menores e mais baratos.`,
          quiz: [{ question: 'O que é Quantização em IA?', options: ['Física quântica.', 'Reduzir o tamanho/precisão do modelo para ganhar eficiência.', 'Aumentar o preço.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8-l8',
          title: 'Lição 8: Orquestração (LangChain)',
          videoUrl: 'https://www.youtube.com/watch?v=MOGyT7a3jaw',
          content: `## O Maestro
LangChain é a biblioteca padrão para construir apps de LLM.
Ele gerencia:
- Memória (histórico do chat).
- Prompts (templates).
- Cadeias (Sequência de ações).
- Ferramentas (Acesso à web, cálculo).`,
          quiz: [{ question: 'Qual a função do LangChain?', options: ['Gerar imagens.', 'Orquestrar componentes para criar aplicações complexas de LLM.', 'Minerar dados.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8-l9',
          title: 'Lição 9: Frameworks de Agentes',
          videoUrl: 'https://www.youtube.com/watch?v=F7gfvkknijQ',
          content: `## Equipes Virtuais
CrewAI, AutoGen.
Frameworks que permitem criar múltiplos agentes com personas diferentes (Pesquisador, Escritor, Revisor) que conversam entre si para resolver uma tarefa complexa.`,
          quiz: [{ question: 'O que frameworks como CrewAI facilitam?', options: ['Jogos multiplayer.', 'Criação de sistemas multi-agentes que colaboram.', 'Edição de vídeo.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8-l10',
          title: 'Lição 10: LLM Ops e Observabilidade',
          videoUrl: 'https://www.youtube.com/watch?v=ZyXy6Nn96os',
          content: `## Monitorando a Caixa Preta
Como saber se sua IA está alucinando em produção?
Ferramentas de "Tracing" mostram o passo-a-passo do raciocínio da IA.
Monitoramento de custo por token, latência e feedback do usuário.`,
          quiz: [{ question: 'O que é Tracing em LLMOps?', options: ['Desenhar.', 'Rastrear o fluxo de execução e raciocínio da IA.', 'Localizar o servidor.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm8-l11',
        title: 'Lição 11: LangChain Explicado',
        videoUrl: 'https://www.youtube.com/watch?v=jl8kgAiP3V4',
        content: `## Chains e Memories
Aprofundando no LangChain.
- **Chains:** Lógica sequencial (Se A, então B).
- **Memory:** Como fazer o bot lembrar do nome do usuário após 10 mensagens.
Sem memória, o LLM é amnésico a cada nova chamada.`,
        quiz: [{ question: 'Por que precisamos de componentes de "Memory"?', options: ['Para guardar fotos.', 'Porque LLMs são "stateless" (não lembram do passado) por padrão.', 'Para ocupar RAM.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm8-l12',
        title: 'Lição 12: Agente de IA com LangChain/MCP',
        videoUrl: 'https://www.youtube.com/watch?v=961LDe2SWTo',
        content: `## Model Context Protocol (MCP)
Um padrão aberto da Anthropic para conectar IAs a fontes de dados.
Em vez de criar integrações customizadas para cada ferramenta, o MCP cria uma linguagem universal para agentes lerem bancos de dados e arquivos.`,
        quiz: [{ question: 'O que o MCP resolve?', options: ['Problemas de rede.', 'Padroniza a conexão entre Agentes de IA e fontes de dados.', 'Melhora o gráfico.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm8-l13',
        title: 'Lição 13: OpenAI e LangChain agentes multi-tool',
        videoUrl: 'https://www.youtube.com/watch?v=MOGyT7a3jaw',
        content: `## Roteamento Inteligente
Criar um agente que tem um "cinto de utilidades" (Calculadora, Google Search, Wikipedia, API interna).
O LLM decide sozinho qual ferramenta usar baseado na pergunta do usuário.
"Quanto é 50 USD em Reais?" -> Usa ferramenta de Cotação -> Usa Calculadora.`,
        quiz: [{ question: 'Em um agente multi-tool, quem decide qual ferramenta usar?', options: ['O programador (If/Else).', 'O próprio LLM, analisando a intenção do usuário.', 'O usuário.'], correctAnswerIndex: 1 }],
      },
    ],
};
