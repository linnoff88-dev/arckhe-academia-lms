
import { Module } from '../../types';
import { BrainCog } from '../../components/icons';

export const M3: Module = {
    id: 'm3',
    title: 'Módulo 3: Redes Neurais & Deep Learning',
    subtitle: 'A arquitetura biológica que revolucionou a inteligência artificial.',
    icon: BrainCog,
    lessons: [
      {
          id: 'm3-l1',
          title: 'Lição 1: O Neurônio Artificial (Perceptron)',
          videoUrl: 'https://www.youtube.com/watch?v=aZJww0sB7Dg',
          content: `## A Matemática da Decisão
O Perceptron é a menor unidade de uma rede neural. Ele toma uma decisão binária baseada em várias entradas.
Cada entrada tem um "peso" (importância). Se a soma ponderada das entradas ultrapassar um limiar, o neurônio "dispara". É a base lógica de toda a IA.`,
          quiz: [{ question: 'O que determina se um neurônio artificial "dispara"?', options: ['A temperatura.', 'Se a soma ponderada das entradas ultrapassar um limiar (bias).', 'A sorte.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3-l2',
          title: 'Lição 2: Redes Neurais Profundas',
          videoUrl: 'https://www.youtube.com/watch?v=etebnvblYLY',
          content: `## Hierarquia de Conceitos
Uma rede neural "profunda" (Deep Learning) tem muitas camadas ocultas entre a entrada e a saída.
Cada camada aprende características progressivamente mais complexas:
- Camada 1: Bordas e cores.
- Camada 2: Formas e texturas.
- Camada 3: Olhos e orelhas.
- Camada 4: Rostos de gatos.`,
          quiz: [{ question: 'O que as camadas intermediárias (ocultas) de uma rede profunda aprendem?', options: ['Nada.', 'Características progressivamente mais complexas e abstratas.', 'A resposta final direto.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3-l3',
          title: 'Lição 3: Backpropagation',
          videoUrl: 'https://www.youtube.com/watch?v=EMxjpEm87CI',
          content: `## O Algoritmo do Aprendizado
Backpropagation (Retropropagação) é como a rede aprende com seus erros.
1. A rede faz um palpite.
2. Mede-se o erro (distância da resposta certa).
3. O algoritmo volta (backwards) pela rede, culpando cada neurônio proporcionalmente pelo erro e ajustando seus pesos.`,
          quiz: [{ question: 'Qual o objetivo do Backpropagation?', options: ['Avançar na rede.', 'Calcular o gradiente do erro para ajustar os pesos e melhorar o modelo.', 'Apagar a memória.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3-l4',
          title: 'Lição 4: Funções de Ativação',
          videoUrl: 'https://www.youtube.com/watch?v=i6l3R7j95x8',
          content: `## A Importância da Não-Linearidade
Sem funções de ativação (como ReLU ou Sigmoid), uma rede neural seria apenas uma grande regressão linear, incapaz de aprender padrões complexos.
A função de ativação decide *quanto* o neurônio deve influenciar a próxima camada, introduzindo a complexidade necessária para modelar o mundo real.`,
          quiz: [{ question: 'Por que as funções de ativação são essenciais?', options: ['Para deixar mais bonito.', 'Para introduzir não-linearidade, permitindo aprender padrões complexos.', 'Para somar números.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3-l5',
          title: 'Lição 5: CNNs (Redes Convolucionais)',
          videoUrl: 'https://www.youtube.com/watch?v=3HTpF3b1NAI',
          content: `## Visão por Filtros
CNNs revolucionaram a visão computacional. Em vez de olhar para cada pixel individualmente, elas passam "filtros" (convoluções) sobre a imagem para detectar padrões locais (como linhas verticais ou curvas), preservando a relação espacial dos pixels.`,
          quiz: [{ question: 'Qual a principal aplicação das CNNs?', options: ['Processamento de texto.', 'Processamento e reconhecimento de imagens/vídeo.', 'Planilhas financeiras.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3-l6',
          title: 'Lição 6: RNNs e LSTMs',
          videoUrl: 'https://www.youtube.com/watch?v=IrG7r5wO3ac',
          content: `## Memória de Sequência
Redes Neurais Recorrentes (RNNs) possuem um "loop" interno que permite que informações persistam.
Isso é crucial para dados onde a ordem importa, como texto, áudio ou preços de ações. LSTMs (Long Short-Term Memory) são uma evolução que consegue lembrar de contextos mais longos.`,
          quiz: [{ question: 'Em que tipo de dado as RNNs são especialistas?', options: ['Imagens estáticas.', 'Dados sequenciais (tempo, texto, áudio).', 'Tabelas aleatórias.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3-l7',
          title: 'Lição 7: O Problema da Caixa Preta',
          videoUrl: 'https://www.youtube.com/watch?v=6jvngmjvsOg',
          content: `## Opacidade
Redes neurais profundas podem ter bilhões de parâmetros.
Embora matematicamente precisas, é extremamente difícil para um humano rastrear *por que* uma decisão específica foi tomada. Isso cria desafios para aplicações em áreas reguladas (como aprovação de crédito).`,
          quiz: [{ question: 'O que significa dizer que uma Rede Neural é uma "Caixa Preta"?', options: ['Ela é pintada de preto.', 'É difícil interpretar a lógica interna que levou a uma decisão específica.', 'Ela só funciona no escuro.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3-l8',
          title: 'Lição 8: Transfer Learning',
          videoUrl: 'https://www.youtube.com/watch?v=Fkkw9OXNYz4',
          content: `## Reciclagem de Conhecimento
Transfer Learning permite pegar um modelo treinado em uma tarefa gigante (ex: reconhecer todos os objetos do mundo) e ajustá-lo para uma tarefa específica (ex: reconhecer defeitos em peças) com muito menos dados.
É a estratégia econômica dominante em IA.`,
          quiz: [{ question: 'Qual a vantagem econômica do Transfer Learning?', options: ['Nenhuma.', 'Reduz drasticamente a necessidade de dados e poder computacional para novas tarefas.', 'Aumenta o custo.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3-l9',
          title: 'Lição 9: GANs (Redes Adversariais)',
          videoUrl: 'https://www.youtube.com/watch?v=CRhcfTgB0os',
          content: `## Competição Criativa
GANs consistem em duas redes:
1. **Gerador:** Cria dados falsos.
2. **Discriminador:** Tenta distinguir o falso do real.
Elas treinam uma a outra em um jogo de soma zero, resultando em gerações sintéticas (imagens, vozes) indistinguíveis da realidade.`,
          quiz: [{ question: 'Como as GANs aprendem?', options: ['Cooperando.', 'Através da competição entre um Gerador e um Discriminador.', 'Lendo livros.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3-l10',
          title: 'Lição 10: Hardware para DL (GPUs/TPUs)',
          videoUrl: 'https://www.youtube.com/watch?v=bpk1SXmD_rs',
          content: `## Paralelismo Massivo
Deep Learning envolve multiplicar matrizes gigantes.
CPUs (processadores normais) são rápidos para tarefas sequenciais, mas GPUs (placas de vídeo) possuem milhares de núcleos para tarefas paralelas, tornando-as milhares de vezes mais rápidas para treinar IA.`,
          quiz: [{ question: 'Por que GPUs são usadas em Deep Learning?', options: ['Têm melhores gráficos.', 'São otimizadas para processamento paralelo massivo (cálculos matriciais).', 'São mais baratas.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm3-l11',
        title: 'Lição 11: Federated Learning',
        videoUrl: 'https://www.youtube.com/watch?v=IU8MLe0l14Q',
        content: `## IA na Borda
Como treinar IA sem centralizar os dados dos usuários (preservando privacidade)?
No Federated Learning, o modelo é enviado para o celular do usuário, aprende localmente, e apenas as *melhorias* (pesos) são enviadas de volta ao servidor central.`,
        quiz: [{ question: 'Qual o principal benefício do Federated Learning?', options: ['Velocidade.', 'Privacidade de dados (o dado bruto nunca sai do dispositivo).', 'Melhor gráfico.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm3-l12',
        title: 'Lição 12: Graph Neural Networks',
        videoUrl: 'https://www.youtube.com/watch?v=MTSS_HRBcnQ',
        content: `## Inteligência Relacional
A maioria das redes neurais espera dados em grade (imagens) ou sequência (texto).
GNNs são projetadas para dados em grafos (redes sociais, moléculas, sistemas de recomendação), aprendendo com as *relações* entre os pontos, não apenas com os pontos.`,
        quiz: [{ question: 'GNNs são ideais para qual tipo de dado?', options: ['Fotos.', 'Dados estruturados em redes/grafos (relações complexas).', 'Áudio.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm3-l13',
        title: 'Lição 13: O Futuro',
        videoUrl: 'https://www.youtube.com/watch?v=gQDRvxpyhrU',
        content: `## Eficiência e Escala
O futuro do Deep Learning aponta para duas direções:
1. **Eficiência:** Modelos menores que rodam localmente (Edge AI).
2. **Escala:** Modelos cada vez maiores rumo à generalização.
Também vemos o surgimento de hardware neuromórfico, que imita a física do cérebro para economizar energia.`,
        quiz: [{ question: 'Qual é um desafio crítico para o futuro do Deep Learning?', options: ['Falta de interesse.', 'Eficiência energética e custo computacional.', 'Muitos monitores.'], correctAnswerIndex: 1 }],
      },
    ],
};
