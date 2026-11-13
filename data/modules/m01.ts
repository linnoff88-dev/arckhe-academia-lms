
import { Module } from '../../types';
import { BrainCircuit } from '../../components/icons';

export const M1: Module = {
  id: 'm1',
  title: 'Módulo 1: Fundamentos de IA',
  subtitle: 'Uma introdução sólida aos conceitos, história e impacto da Inteligência Artificial.',
  icon: BrainCircuit,
  lessons: [
      {
        id: 'm1-l1',
        title: 'Lição 1: O que é Inteligência Artificial?',
        videoUrl: 'https://www.youtube.com/watch?v=2ePf9rue1Ao', // CrashCourse AI: What is AI?
        content: `## O Novo Software
A Inteligência Artificial representa uma mudança de paradigma: o **Software 2.0**.
No software tradicional, humanos escrevem regras explícitas (se X, faça Y). Na IA, humanos fornecem dados e objetivos, e a máquina infere as regras matemáticas que conectam a entrada à saída.

## Capacidades Cognitivas
Não se trata de "consciência", mas de simular capacidades cognitivas humanas:
- **Percepção:** Ver (Visão Computacional) e Ouvir (Reconhecimento de Fala).
- **Raciocínio:** Encontrar padrões e lógica em dados complexos.
- **Atuação:** Gerar conteúdo ou tomar decisões.`,
        quiz: [
          { question: 'Qual a definição de "Software 2.0" no contexto de IA?', options: ['Software que roda na nuvem.', 'Sistemas onde a máquina infere as regras a partir dos dados, em vez de serem programadas.', 'A atualização do Windows.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1-l2',
        title: 'Lição 2: História da Inteligência Artificial',
        videoUrl: 'https://www.youtube.com/watch?v=aPvirX2Y7XQ', // History of AI
        content: `## Ciclos de Hype e Realidade
A IA não é nova; ela vive em ciclos.
- **1956 (Nascimento):** O termo é cunhado em Dartmouth. Expectativa de que máquinas pensantes chegariam em 20 anos.
- **Invernos da IA:** Períodos de desilusão e corte de verbas quando as promessas não se concretizaram.
- **2012 (Renascimento):** O Deep Learning torna-se viável com GPUs e Big Data.
- **2022 (Era Generativa):** O ChatGPT democratiza o acesso à IA.

Entender a história evita cair no "hype" exagerado e focar no valor real.`,
        quiz: [
          { question: 'O que foi o "Inverno da IA"?', options: ['Um problema de resfriamento de servidores.', 'Período de redução de investimentos devido a promessas não cumpridas.', 'A época em que a IA foi inventada.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1-l3',
        title: 'Lição 3: Tipos de Inteligência Artificial',
        videoUrl: 'https://www.youtube.com/watch?v=5ek53A7DKog', // Types of AI
        content: `## A Escala de Inteligência
Devemos classificar a IA pela sua capacidade de generalização:
- **ANI (Artificial Narrow Intelligence):** IA Estreita. É o que temos hoje. Super-humana em tarefas específicas (xadrez, diagnósticos), mas incapaz de fazer qualquer outra coisa.
- **AGI (Artificial General Intelligence):** IA Geral. O objetivo final. Uma máquina capaz de aprender qualquer tarefa intelectual que um humano consegue.
- **ASI (Artificial Super Intelligence):** Superinteligência. Intelecto muito superior ao humano em todas as áreas.`,
        quiz: [
            { question: 'O ChatGPT e os carros autônomos atuais são exemplos de qual tipo?', options: ['AGI (Geral).', 'ANI (Estreita).', 'ASI (Superinteligência).'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1-l4',
        title: 'Lição 4: Deep Learning / IA Generativa',
        videoUrl: 'https://www.youtube.com/watch?v=G2fqAlgmoPo', // Generative AI Explained
        content: `## Analisar vs. Criar
- **IA Discriminativa (Tradicional):** Focada em classificar ou prever. "Isto é um gato?" ou "Qual será o valor da ação?".
- **IA Generativa (Nova Era):** Focada em criar novos dados que se assemelham aos originais. "Crie uma imagem de um gato".
A GenAI aprende a estrutura estatística dos dados para gerar novidade, não apenas repetir o passado.`,
        quiz: [
            { question: 'Qual a principal função da IA Generativa?', options: ['Classificar dados existentes.', 'Gerar novos conteúdos originais baseados em padrões aprendidos.', 'Armazenar dados.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1-l5',
        title: 'Lição 5: Deep Learning',
        videoUrl: 'https://www.youtube.com/watch?v=aircAruvnKk', // Neural Networks
        content: `## Profundidade é Poder
Deep Learning é uma técnica de ML que utiliza Redes Neurais com muitas camadas ("profundas").
Diferente do ML clássico, o Deep Learning consegue aprender automaticamente quais características (features) são importantes nos dados, sem que um humano precise defini-las manualmente. É a tecnologia por trás da revolução atual.`,
        quiz: [
            { question: 'Qual a grande vantagem do Deep Learning sobre o ML clássico?', options: ['É mais barato.', 'Extrai características (features) automaticamente dos dados brutos.', 'Funciona sem dados.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1-l6',
        title: 'Lição 6: Redes Neurais',
        videoUrl: 'https://www.youtube.com/watch?v=BFdMrDOx_rq', // How Neural Networks Work
        content: `## Inspiração Biológica
Redes Neurais são sistemas computacionais vagamente inspirados nos neurônios biológicos.
- **Nós (Neurônios):** Processam a informação.
- **Conexões (Sinapses):** Transmitem o sinal com um determinado "peso".
O "aprendizado" é simplesmente o ajuste matemático desses pesos para minimizar o erro na tarefa final.`,
        quiz: [
            { question: 'O que acontece matematicamente quando uma rede neural "aprende"?', options: ['Novos neurônios são criados.', 'Os pesos das conexões são ajustados para reduzir o erro.', 'O computador fica mais rápido.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1-l7',
        title: 'Lição 7: Processamento de Linguagem Natural',
        videoUrl: 'https://www.youtube.com/watch?v=fNxaJSZwYoc', // NLP Intro
        content: `## A Ponte Humano-Máquina
PLN (NLP) é a capacidade da máquina de ler, decifrar, entender e dar sentido às linguagens humanas.
Não é apenas tradução de palavras, mas compreensão de:
- **Sintaxe:** Gramática e estrutura.
- **Semântica:** Significado das palavras.
- **Pragmática:** Contexto e intenção do falante.`,
        quiz: [
            { question: 'O que o PLN busca entender além das palavras?', options: ['A velocidade da fala.', 'O contexto, a intenção e o significado (semântica).', 'A marca do teclado.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1-l8',
        title: 'Lição 8: Visão Computacional',
        videoUrl: 'https://www.youtube.com/watch?v=273tZ2V-D9E', // Computer Vision
        content: `## Olhos Digitais
Visão Computacional trata de como os computadores podem ganhar compreensão de alto nível a partir de imagens digitais ou vídeos.
Envolve:
- **Detecção:** Onde está o objeto?
- **Classificação:** O que é o objeto?
- **Segmentação:** Quais pixels pertencem ao objeto?`,
        quiz: [
            { question: 'Qual tarefa NÃO pertence à Visão Computacional?', options: ['Detectar rostos.', 'Transcrever áudio.', 'Segmentar tumores em raio-x.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1-l9',
        title: 'Lição 9: Aplicações de Inteligência Artificial',
        videoUrl: 'https://www.youtube.com/watch?v=reUZRyXxUs4', // Business AI
        content: `## Onipresença Invisível
A IA já permeia setores críticos:
- **Saúde:** Descoberta de drogas e diagnóstico por imagem.
- **Finanças:** Trading algorítmico e análise de risco de crédito.
- **Varejo:** Previsão de demanda e logística otimizada.
O valor está em aplicar a tecnologia para resolver problemas de negócio específicos, não em usar IA por usar.`,
        quiz: [
            { question: 'Qual o foco correto ao aplicar IA nos negócios?', options: ['Usar a tecnologia mais nova.', 'Resolver problemas específicos e gerar valor.', 'Substituir todos os humanos.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1-l10',
        title: 'Lição 10: Desafios e Limites da IA',
        videoUrl: 'https://www.youtube.com/watch?v=roprbjQh1Hw', // AI Bias and Data
        content: `## O Lado Sombrio
A IA não é infalível. Principais limitações:
- **Alucinação:** A IA pode inventar fatos com total confiança.
- **Viés (Bias):** A IA reproduz e amplifica preconceitos existentes nos dados de treinamento.
- **Explicabilidade:** Muitas vezes não sabemos *por que* a IA tomou uma decisão (Black Box).`,
        quiz: [
            { question: 'O que é o problema da "Caixa Preta" (Black Box)?', options: ['O servidor desligado.', 'A dificuldade de explicar como e por que a IA chegou a uma determinada conclusão.', 'Um software pirata.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1-l11',
        title: 'Lição 11: Machine Learning (Aprendizado)',
        videoUrl: 'https://www.youtube.com/watch?v=ukzFI9rgwfU', // Machine Learning Basics
        content: `## A Engrenagem Principal
Machine Learning (ML) é o subcampo da IA que estuda algoritmos que melhoram com a experiência (dados).
Existem três formas principais de aprendizado:
- **Supervisionado:** Ensinar com exemplos rotulados (Entrada -> Saída correta). Ex: Previsão de preços.
- **Não Supervisionado:** A máquina encontra padrões sozinha em dados brutos. Ex: Segmentação de clientes.
- **Por Reforço:** Aprender por tentativa e erro buscando uma recompensa. Ex: Robótica e Jogos.`,
        quiz: [
            { question: 'No aprendizado supervisionado, o que é essencial fornecer à máquina?', options: ['Apenas dados brutos.', 'Dados de entrada e a resposta correta (rótulo).', 'Acesso à internet.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1-l12',
        title: 'Lição 12: O Futuro da Inteligência Artificial',
        videoUrl: 'https://www.youtube.com/watch?v=xSHqm8JsqkI', // Future of Agents
        content: `## Convergência e Agência
O futuro aponta para:
- **Multimodalidade:** Modelos que entendem texto, áudio, vídeo e sensores simultaneamente.
- **Agentes Autônomos:** IAs que não apenas respondem, mas executam ações no mundo digital e físico.
- **Inteligência Aumentada:** A simbiose entre a criatividade humana e a velocidade da máquina.`,
        quiz: [
            { question: 'O que são Agentes Autônomos no futuro da IA?', options: ['Chatbots simples.', 'Sistemas capazes de executar ações e perseguir objetivos sem intervenção humana constante.', 'Vídeo games.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1-l13',
        title: 'Lição 13: Ética em Inteligência Artificial',
        videoUrl: 'https://www.youtube.com/watch?v=cf522e5e1eE', // AI Ethics
        content: `## O Dilema do Alinhamento
Como garantir que os objetivos da IA estejam alinhados com os valores humanos?
Questões críticas:
- **Privacidade:** Uso de dados pessoais para treino.
- **Direitos Autorais:** Propriedade intelectual na IA Generativa.
- **Deslocamento de Trabalho:** Impacto social da automação.
A ética deve ser um requisito de design, não um adendo.`,
        quiz: [
            { question: 'Qual é o problema do "Alinhamento" em IA?', options: ['Alinhar o texto.', 'Garantir que os objetivos e ações da IA estejam em harmonia com os valores e segurança humanos.', 'Conectar cabos.'], correctAnswerIndex: 1 }
        ],
      },
  ],
};
