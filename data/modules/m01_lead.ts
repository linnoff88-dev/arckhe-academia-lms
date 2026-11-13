
import { Module } from '../../types';
import { BrainCircuit } from '../../components/icons';

export const M1_LEAD: Module = {
  id: 'm1_lead',
  title: 'Módulo 1: Fundamentos de IA para Líderes',
  subtitle: 'O que todo gestor precisa saber para não ser substituído.',
  icon: BrainCircuit,
  lessons: [
      {
        id: 'm1_lead-l1',
        title: 'Lição 1: A IA na Cadeira de Decisão',
        videoUrl: 'https://www.youtube.com/watch?v=5p248yoa3oE', // Andrew Ng: AI For Everyone
        content: `## Estratégia vs. Tática
A IA já supera humanos em táticas (xadrez, diagnóstico, codificação).
O refúgio do líder é a estratégia: definir *qual* problema resolver e *por que*, enquanto a IA define *como*.`,
        quiz: [
          { question: 'Qual o papel da IA na liderança?', options: ['Substituir o CEO.', 'Executar táticas enquanto o líder foca na estratégia e propósito.', 'Fazer café.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_lead-l2',
        title: 'Lição 2: História da IA para Executivos',
        videoUrl: 'https://www.youtube.com/watch?v=aPvirX2Y7XQ', // History of AI Business
        content: `## Ciclos de Hype
Entender que a IA já teve "invernos" ajuda o líder a não cair em promessas vazias de fornecedores.
Foco em valor real (ROI), não em "Buzzwords".`,
        quiz: [
          { question: 'Por que conhecer a história da IA é importante para líderes?', options: ['Para contar histórias.', 'Para filtrar o hype e focar em investimentos sustentáveis.', 'Para programar.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_lead-l3',
        title: 'Lição 3: Tipos de IA: Preditiva vs Generativa',
        videoUrl: 'https://www.youtube.com/watch?v=5ek53A7DKog', // Predictive vs Generative
        content: `## Onde aplicar?
- **Preditiva:** Otimizar processos existentes (Previsão de vendas, Logística).
- **Generativa:** Criar novos valores (Marketing, Design, Código).
O líder deve saber qual ferramenta usar para qual dor.`,
        quiz: [
            { question: 'Qual IA usar para otimizar processos numéricos?', options: ['Generativa.', 'Preditiva.', 'Nenhuma.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_lead-l4',
        title: 'Lição 4: O Impacto no Organograma',
        videoUrl: 'https://www.youtube.com/watch?v=IMa8v4q_X_w', // The Future of Work - Leaders
        content: `## Achatamento
A IA permite que um indivíduo faça o trabalho de uma equipe.
Isso tende a achatar hierarquias, reduzindo a necessidade de gerentes médios cujo trabalho era apenas repassar informação.`,
        quiz: [
            { question: 'Qual o provável impacto da IA na hierarquia?', options: ['Criar mais níveis.', 'Achatar a estrutura, reduzindo a gerência média.', 'Nenhum.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_lead-l5',
        title: 'Lição 5: Deep Learning Desmistificado',
        videoUrl: 'https://www.youtube.com/watch?v=aircAruvnKk', // Deep Learning for Execs
        content: `## Não é Mágica
Líderes não precisam saber matemática, mas devem entender que Deep Learning precisa de **Muitos Dados** e **Muitos Exemplos**.
Se você não tem dados, não tem projeto.`,
        quiz: [
            { question: 'O que é pré-requisito para Deep Learning?', options: ['Sorte.', 'Grandes volumes de dados de qualidade.', 'Computador quântico.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_lead-l6',
        title: 'Lição 6: Redes Neurais e Intuição',
        videoUrl: 'https://www.youtube.com/watch?v=BFdMrDOx_rq', // Neural Networks High Level
        content: `## Padrões
A IA funciona como a intuição de um especialista: reconhece padrões baseados em experiência (dados), mas às vezes não sabe explicar *por que*.
O líder deve saber quando confiar e quando auditar.`,
        quiz: [
            { question: 'Como a IA se assemelha à intuição?', options: ['Tem sentimentos.', 'Reconhece padrões complexos baseados em experiências passadas (dados).', 'Adivinha.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_lead-l7',
        title: 'Lição 7: NLP na Comunicação Corporativa',
        videoUrl: 'https://www.youtube.com/watch?v=fNxaJSZwYoc', // NLP Business
        content: `## A Torre de Babel
A IA agora entende a linguagem natural da sua empresa (e-mails, contratos, Slack).
Isso permite "minerar" a cultura organizacional e detectar problemas de comunicação antes que virem crises.`,
        quiz: [
            { question: 'O que o NLP permite na gestão?', options: ['Traduzir apenas.', 'Analisar a comunicação interna para insights de cultura e eficiência.', 'Escrever poesia.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_lead-l8',
        title: 'Lição 8: Visão Computacional e Segurança',
        videoUrl: 'https://www.youtube.com/watch?v=273tZ2V-D9E', // Computer Vision Ethics
        content: `## Olhos em Tudo
Monitoramento de segurança do trabalho, acesso a prédios e qualidade.
O desafio do líder é balancear segurança com privacidade dos colaboradores.`,
        quiz: [
            { question: 'Qual o dilema da visão computacional no trabalho?', options: ['Custo.', 'Segurança vs Privacidade dos colaboradores.', 'Resolução.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_lead-l9',
        title: 'Lição 9: Aplicações Estratégicas',
        videoUrl: 'https://www.youtube.com/watch?v=hAQSLARIkgc', // Strategic AI
        content: `## Onde Inovar?
Não use IA para fazer "o mesmo, só que mais barato".
Use IA para criar produtos e serviços que eram impossíveis antes (ex: personalização em massa).`,
        quiz: [
            { question: 'Qual o melhor uso estratégico da IA?', options: ['Cortar custo.', 'Habilitar novos modelos de negócio e propostas de valor.', 'Fazer site.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_lead-l10',
        title: 'Lição 10: Gestão de Riscos de IA',
        videoUrl: 'https://www.youtube.com/watch?v=nFEGjW06cxo', // AI Risk Management
        content: `## O Novo Compliance
Líderes são responsáveis pelos erros de seus robôs.
Riscos de viés (discriminação), alucinação (mentira) e vazamento de dados devem estar na matriz de risco corporativa.`,
        quiz: [
            { question: 'Quem é responsável se a IA errar?', options: ['O programador.', 'A liderança da empresa (Responsabilidade Civil).', 'Ninguém.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_lead-l11',
        title: 'Lição 11: Aprendizado de Máquina na Cultura',
        videoUrl: 'https://www.youtube.com/watch?v=EzTNFV-s6XU', // Learning Culture
        content: `## A Empresa que Aprende
Assim como o ML melhora com novos dados, a organização deve ter processos de feedback loops rápidos.
Cultura de experimentação rápida e tolerância ao erro (desde que se aprenda com ele).`,
        quiz: [
            { question: 'O que é uma cultura de aprendizado?', options: ['Ter biblioteca.', 'Processos iterativos de teste, erro e aprendizado rápido, similar ao treino de ML.', 'Dar cursos.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_lead-l12',
        title: 'Lição 12: Futuro do Trabalho',
        videoUrl: 'https://www.youtube.com/watch?v=0chlwnUKoHA', // Future of Work
        content: `## Coexistência
O futuro não é sem trabalho, é com trabalhos diferentes.
Líderes devem preparar a força de trabalho para atuar como "treinadores" e "auditores" de IA.`,
        quiz: [
            { question: 'Qual a tendência do trabalho?', options: ['Fim do emprego.', 'Evolução para funções de supervisão, criatividade e empatia.', 'Voltar ao campo.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_lead-l13',
        title: 'Lição 13: Liderança Ética',
        videoUrl: 'https://www.youtube.com/watch?v=N-i5kI5kzac', // Ethical AI Leadership
        content: `## O Guardião dos Valores
A IA maximiza a função objetivo que lhe foi dada. Se o objetivo for apenas "lucro", ela pode ser antiética.
O líder é quem define as restrições éticas e morais do sistema.`,
        quiz: [
            { question: 'Qual o papel ético do líder?', options: ['Nenhum.', 'Definir os limites morais e valores que a IA deve respeitar.', 'Programar.'], correctAnswerIndex: 1 }
        ],
      },
  ],
};
