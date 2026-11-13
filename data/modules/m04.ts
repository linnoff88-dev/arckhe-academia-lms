
import { Module } from '../../types';
import { BookOpen } from '../../components/icons';

export const M4: Module = {
    id: 'm4',
    title: 'Módulo 4: Alfabetização de Dados',
    subtitle: 'Data Literacy: Leitura crítica, interpretação e cultura de dados.',
    icon: BookOpen,
    lessons: [
      {
          id: 'm4-l1',
          title: 'Lição 1: O que é Alfabetização de Dados?',
          videoUrl: 'https://www.youtube.com/watch?v=roprbjQh1Hw',
          content: `## O Novo Inglês
Data Literacy (Alfabetização de Dados) é a habilidade de ler, trabalhar, analisar e comunicar com dados.
Não é sobre ser um cientista de dados, mas sobre ter a competência básica para entender o mundo através de lentes quantitativas. É uma habilidade de sobrevivência corporativa.`,
          quiz: [{ question: 'O que compõe a Alfabetização de Dados?', options: ['Saber usar Excel.', 'A capacidade de ler, analisar e comunicar informações baseadas em dados.', 'Saber programar.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4-l2',
          title: 'Lição 2: Cultura de Dados',
          videoUrl: 'https://www.youtube.com/watch?v=Opa7Zkq-3pA',
          content: `## Morte ao "Eu Acho"
Uma cultura Data-Driven substitui a intuição hierárquica (HiPPO - Highest Paid Person's Opinion) por evidências empíricas.
Exige democratização do acesso aos dados e segurança psicológica para que os dados possam desafiar as opiniões da liderança.`,
          quiz: [{ question: 'Qual o principal obstáculo cultural para empresas Data-Driven?', options: ['Falta de software.', 'Decisões baseadas em hierarquia e intuição em vez de fatos.', 'Internet lenta.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4-l3',
          title: 'Lição 3: Data Literacy na Educação Básica',
          videoUrl: 'https://www.youtube.com/watch?v=T48lnRU_yPE',
          content: `## Imunidade Cognitiva
Ensinar letramento de dados desde cedo cria cidadãos capazes de questionar estatísticas em notícias, entender riscos financeiros e evitar manipulação.
É uma ferramenta de defesa cívica na era da informação.`,
          quiz: [{ question: 'Por que o Data Literacy é importante socialmente?', options: ['Para passar no ENEM.', 'Para criar resistência contra manipulação e desinformação.', 'Para usar computadores.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4-l4',
          title: 'Lição 4: Letramento para todos',
          videoUrl: 'https://www.youtube.com/watch?v=SPq3OSbg8IM',
          content: `## Inclusão
Dados não pertencem apenas ao departamento de TI ou BI.
O vendedor, o RH e o marketing precisam ser fluentes em dados para otimizar suas próprias funções. A organização só escala quando a inteligência está na ponta.`,
          quiz: [{ question: 'Quem deve ser alfabetizado em dados na empresa?', options: ['Apenas o time de BI.', 'Todos os departamentos e níveis hierárquicos.', 'Apenas a diretoria.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4-l5',
          title: 'Lição 5: Conceitos Fundamentais',
          videoUrl: 'https://www.youtube.com/watch?v=CzIvofFYykY',
          content: `## Vocabulário Básico
- **Dado:** Fato bruto (ex: "25").
- **Informação:** Dado com contexto (ex: "25 graus").
- **Conhecimento:** Informação aplicada (ex: "Está quente, não leve casaco").
- **Insight:** Descoberta não óbvia que gera valor.`,
          quiz: [{ question: 'Qual a diferença entre Dado e Informação?', options: ['Nenhuma.', 'Informação é o dado processado e com contexto.', 'Dado é digital, informação é papel.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4-l6',
          title: 'Lição 6: Leitura Crítica de Dados',
          videoUrl: 'https://www.youtube.com/watch?v=7HR5sI4WBoQ',
          content: `## Ceticismo Saudável
Sempre pergunte aos dados:
1. Quem coletou? (Viés de origem)
2. O que foi omitido? (Viés de seleção)
3. A amostra é representativa?
4. O gráfico está distorcendo a escala para exagerar uma tendência?`,
          quiz: [{ question: 'O que é o "Viés de Seleção"?', options: ['Escolher a cor do gráfico.', 'Quando a amostra de dados não representa a realidade total (ex: pesquisar só quem gostou).', 'Erro de soma.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4-l7',
          title: 'Lição 7: Interpretação de dados e imagens',
          videoUrl: 'https://www.youtube.com/watch?v=KhXGJDLha0A',
          content: `## Visualização Mentirosa
Como eixos truncados (que não começam no zero), uso de 3D desnecessário e escalas logarítmicas mal explicadas podem manipular a percepção visual para contar uma mentira usando dados verdadeiros.`,
          quiz: [{ question: 'Por que gráficos 3D são geralmente evitados em análise séria?', options: ['São feios.', 'Distorcem a proporção visual e dificultam a comparação precisa.', 'Ocupam muito espaço.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4-l8',
          title: 'Lição 8: Checagem de Fatos',
          videoUrl: 'https://www.youtube.com/watch?v=VwnWdZSaH3w',
          content: `## Triangulação
Nunca confie em uma única fonte de dados.
A checagem de fatos (Fact-Checking) envolve buscar a fonte primária, verificar a metodologia da pesquisa e cruzar com outras fontes independentes antes de tomar uma decisão.`,
          quiz: [{ question: 'O que é triangulação de dados?', options: ['Usar três monitores.', 'Validar uma informação cruzando múltiplas fontes independentes.', 'Geometria.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4-l9',
          title: 'Lição 9: Verificação e Desinformação',
          videoUrl: 'https://www.youtube.com/watch?v=Q0bbYCQLw6s',
          content: `## O Paradoxo da Simpson
Um fenômeno estatístico onde uma tendência aparece em grupos diferentes de dados, mas desaparece ou reverte quando os grupos são combinados.
Exemplifica como dados agregados podem esconder a verdade e gerar desinformação não intencional.`,
          quiz: [{ question: 'O que o Paradoxo de Simpson nos ensina?', options: ['Que dados agregados podem levar a conclusões opostas aos dados segmentados.', 'Que desenhos animados preveem o futuro.', 'Que estatística é inútil.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4-l10',
          title: 'Lição 10: Data Storytelling',
          videoUrl: 'https://www.youtube.com/watch?v=Ri34OmpEpU8',
          content: `## Influenciando com Dados
Não basta ter o dado certo, é preciso vender a ideia.
Data Storytelling une **Dados** (o que), **Visualização** (o ver) e **Narrativa** (o porquê) para engajar o público emocionalmente e racionalmente na ação desejada.`,
          quiz: [{ question: 'Qual o objetivo do Data Storytelling?', options: ['Fazer slides bonitos.', 'Influenciar a tomada de decisão através de uma narrativa baseada em dados.', 'Esconder os números ruins.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm4-l11',
        title: 'Lição 11: Privacidade e Dados Públicos',
        videoUrl: 'https://www.youtube.com/watch?v=l-BA-dXXCVA',
        content: `## O Valor do Aberto
Dados Abertos (Open Data) governamentais são uma mina de ouro para negócios e fiscalização.
O desafio é cruzar esses dados públicos com dados privados para gerar inteligência de mercado, respeitando sempre a LGPD.`,
        quiz: [{ question: 'O que são Dados Abertos?', options: ['Dados vazados.', 'Dados disponibilizados livremente para uso e redistribuição.', 'Dados criptografados.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm4-l12',
        title: 'Lição 12: Data Visualization',
        videoUrl: 'https://www.youtube.com/watch?v=SPq3OSbg8IM',
        content: `## A Forma Segue a Função
Escolher o gráfico errado mata o insight.
- **Comparação:** Barras.
- **Tendência:** Linhas.
- **Distribuição:** Histograma.
- **Relação:** Dispersão.
Pizza raramente é a melhor opção.`,
        quiz: [{ question: 'Para mostrar uma tendência ao longo do tempo, qual o melhor gráfico?', options: ['Pizza.', 'Linha.', 'Dispersão.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm4-l13',
        title: 'Lição 13: Cidadania Digital e Protagonismo',
        videoUrl: 'https://www.youtube.com/watch?v=cf522e5e1eE', // Ethics/Activism
        content: `## Ativismo de Dados
Usar a alfabetização de dados para resolver problemas reais.
Desde otimizar o orçamento doméstico até monitorar gastos públicos ou propor melhorias em processos da empresa baseadas em evidências.`,
        quiz: [{ question: 'Qual a atitude final da alfabetização de dados?', options: ['Acumular planilhas.', 'Protagonismo e ação baseada em evidências.', 'Ignorância.'], correctAnswerIndex: 1 }],
      },
    ],
};
