
import { Module } from '../../types';
import { BrainCog } from '../../components/icons';

export const M3_OPS: Module = {
    id: 'm3_ops',
    title: 'Módulo 3: Machine Learning em Operações',
    subtitle: 'Previsão, otimização e manutenção inteligente.',
    icon: BrainCog,
    lessons: [
      {
          id: 'm3_ops-l1',
          title: 'Lição 1: O Poder da Predição',
          videoUrl: 'https://www.youtube.com/watch?v=fCjnoPdNfgI',
          content: `## Reagir vs. Prevenir
Operações tradicionais reagem a problemas (quebra, falta de estoque).
Operações com ML antecipam problemas.
O algoritmo aprende com o passado para dizer: "Vai quebrar em 48h" ou "Vai faltar material na terça".`,
          quiz: [{ question: 'Qual a principal mudança que o ML traz para operações?', options: ['Velocidade.', 'Mudança de reativo (apagar incêndio) para preditivo (prevenir).', 'Custo.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3_ops-l2',
          title: 'Lição 2: Manutenção Preditiva',
          videoUrl: 'https://www.youtube.com/watch?v=9313rb5p4l4',
          content: `## Escutando a Máquina
Sensores de vibração e temperatura geram dados constantes.
O ML detecta anomalias sutis (padrões de vibração) que indicam desgaste de rolamento meses antes da falha catastrófica.`,
          quiz: [{ question: 'O que o ML detecta na manutenção preditiva?', options: ['Sujeira.', 'Padrões anômalos em dados de sensores que indicam falha iminente.', 'Horário de almoço.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3_ops-l3',
          title: 'Lição 3: Previsão de Demanda (Forecasting)',
          videoUrl: 'https://www.youtube.com/watch?v=1VOoYGr7-lk',
          content: `## Estoque Ótimo
Prever quanto vai vender para comprar a matéria-prima certa.
Modelos avançados consideram: Sazonalidade, Clima, Promoções e Tendências Econômicas para errar menos que o Excel.`,
          quiz: [{ question: 'Quais variáveis o ML usa para previsão de demanda?', options: ['Apenas histórico.', 'Múltiplas variáveis externas (clima, economia) e internas.', 'Sorte.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3_ops-l4',
          title: 'Lição 4: Otimização de Inventário',
          videoUrl: 'https://www.youtube.com/watch?v=933jvEBm5hE',
          content: `## Nem Sobra, Nem Falta
Safety Stock (Estoque de Segurança) dinâmico.
Em vez de uma regra fixa ("ter 10 dias de estoque"), o ML ajusta o nível de segurança dia a dia baseado na volatilidade da demanda e no lead time do fornecedor.`,
          quiz: [{ question: 'O que é estoque de segurança dinâmico?', options: ['Estoque trancado.', 'Nível de estoque ajustado automaticamente pelo risco calculado de ruptura.', 'Estoque cheio.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3_ops-l5',
          title: 'Lição 5: Otimização de Rotas e Logística',
          videoUrl: 'https://www.youtube.com/watch?v=jaW1x4nOodM',
          content: `## O Problema do Caixeiro Viajante
Resolver matematicamente a melhor rota para entregar 100 pacotes.
O ML considera trânsito em tempo real, janelas de entrega e restrições de veículos para economizar combustível e tempo.`,
          quiz: [{ question: 'O que o ML otimiza na logística?', options: ['A cor do caminhão.', 'A eficiência das rotas para reduzir custo e tempo.', 'O motorista.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3_ops-l6',
          title: 'Lição 6: Controle de Qualidade Visual',
          videoUrl: 'https://www.youtube.com/watch?v=_NKQCzuZbKc',
          content: `## Visão de Águia
Câmeras na linha de produção usam Deep Learning para identificar defeitos (riscos, amassados, cor errada) em alta velocidade, com precisão superior ao olho humano cansado.`,
          quiz: [{ question: 'Como a IA atua no controle de qualidade?', options: ['Tocando as peças.', 'Inspecionando visualmente produtos em alta velocidade via câmeras.', 'Perguntando.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3_ops-l7',
          title: 'Lição 7: Análise de Causa Raiz',
          videoUrl: 'https://www.youtube.com/watch?v=74UZux9HpSE',
          content: `## Por que falhou?
Quando um defeito ocorre, o ML correlaciona dados de todo o processo (temperatura do forno, lote da matéria-prima, operador) para apontar o fator culpado. "O defeito ocorre quando a umidade passa de 60%".`,
          quiz: [{ question: 'O que o ML faz na análise de causa raiz?', options: ['Culpa alguém.', 'Correlaciona variáveis de processo para identificar a origem estatística do defeito.', 'Limpa a máquina.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3_ops-l8',
          title: 'Lição 8: Otimização de Energia',
          videoUrl: 'https://www.youtube.com/watch?v=hAQSLARIkgc',
          content: `## Eficiência Energética
Google usou DeepMind para reduzir em 40% o custo de resfriamento de data centers.
O algoritmo aprende a configurar os chillers de forma ótima para cada condição climática externa. Aplicável a fornos e HVAC industrial.`,
          quiz: [{ question: 'Como o ML reduz custos de energia?', options: ['Desligando tudo.', 'Otimizando os parâmetros de equipamentos (setpoints) em tempo real.', 'Gerando energia.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3_ops-l9',
          title: 'Lição 9: Digital Twins (Modelagem)',
          videoUrl: 'https://www.youtube.com/watch?v=s8Lims4xYnE',
          content: `## O Cérebro do Gêmeo
O Digital Twin é a carcaça 3D. O modelo de ML é o cérebro que simula a física e o comportamento.
Ele permite rodar cenários "What-if" complexos para planejar a produção.`,
          quiz: [{ question: 'Qual o papel do ML no Digital Twin?', options: ['Renderizar gráfico.', 'Simular o comportamento físico e prever resultados de cenários.', 'Fazer backup.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3_ops-l10',
          title: 'Lição 10: Detecção de Fraude em Procurement',
          videoUrl: 'https://www.youtube.com/watch?v=CTuFkkF5XQI', // AI Fraud Detection
          content: `## Compras Seguras
Analisar padrões de compras para detectar anomalias: "Por que estamos comprando toner de impressora 5x mais caro deste fornecedor novo?".
Previne desvios e conluio.`,
          quiz: [{ question: 'O que o ML busca em Procurement?', options: ['Descontos.', 'Anomalias de preço e volume que podem indicar fraude ou ineficiência.', 'Produtos novos.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm3_ops-l11',
        title: 'Lição 11: Escalonamento de Equipes (Workforce Mgmt)',
        videoUrl: 'https://www.youtube.com/watch?v=2Y1jJMggZjY',
        content: `## Escala Inteligente
Prever quantos atendentes ou operadores serão necessários na próxima sexta-feira às 18h.
Evita subdimensionamento (clientes bravos) e superdimensionamento (custo ocioso).`,
        quiz: [{ question: 'Para que serve o ML na gestão de força de trabalho?', options: ['Contratar.', 'Prever a demanda de trabalho para otimizar a escala de turnos.', 'Pagar salários.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm3_ops-l12',
        title: 'Lição 12: Otimização de Layout',
        videoUrl: 'https://www.youtube.com/watch?v=G1pZdIq-a-w',
        content: `## Fluxo Físico
Analisar o movimento de empilhadeiras e pessoas no armazém para sugerir um layout onde os produtos mais populares fiquem mais perto da saída.
Reduz quilômetros rodados por dia.`,
        quiz: [{ question: 'Como o ML melhora o layout de armazém?', options: ['Pintando o chão.', 'Posicionando itens baseado na frequência de saída para minimizar movimentação.', 'Aumentando o tamanho.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm3_ops-l13',
        title: 'Lição 13: Operações Autônomas (Conclusão)',
        videoUrl: 'https://www.youtube.com/watch?v=gqkWf2A1zyU',
        content: `## Self-Driving Enterprise
O objetivo final: Sistemas que não apenas preveem (Predictive), mas agem (Prescriptive/Autonomous).
A máquina ajusta sua própria velocidade para evitar a quebra prevista, sem intervenção humana.`,
        quiz: [{ question: 'Qual o estágio final do ML em operações?', options: ['Previsão.', 'Ação autônoma corretiva (Self-driving).', 'Relatório.'], correctAnswerIndex: 1 }],
      },
    ],
};
