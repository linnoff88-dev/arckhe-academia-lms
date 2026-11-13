
import { Module } from '../../types';
import { BrainCog } from '../../components/icons';

export const M3_SALES: Module = {
    id: 'm3_sales',
    title: 'Módulo 3: Machine Learning em Vendas',
    subtitle: 'Usando dados para prever o futuro e fechar mais negócios.',
    icon: BrainCog,
    lessons: [
      {
          id: 'm3_sales-l1',
          title: 'Lição 1: Predição vs. Intuição',
          videoUrl: 'https://www.youtube.com/watch?v=GFeXcafDPlY', // Lead Scoring & Prediction
          content: `## A Ciência do "Fechamento"
Vendedores confiam no "feeling". ML confia nos dados.
Um algoritmo analisa 50 variáveis (tempo de resposta, cargos envolvidos, acessos ao site) para calcular a probabilidade matemática de um deal fechar. Isso remove a "espuma" do pipeline.`,
          quiz: [{ question: 'Qual a vantagem do ML sobre a intuição?', options: ['É mais emocional.', 'Analisa múltiplas variáveis objetivas para dar uma probabilidade matemática.', 'É mais lento.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3_sales-l2',
          title: 'Lição 2: Lead Scoring 2.0',
          videoUrl: 'https://www.youtube.com/watch?v=Z5W7-3W3N4o', // Predictive Lead Scoring
          content: `## Além do "Cargo e Tamanho"
Scoring tradicional: "É Diretor? +10 pontos".
Scoring ML: "Diretores que acessaram a página de preços 2x e abriram o último e-mail em menos de 5 min têm 85% de chance de conversão".
O modelo descobre padrões de comportamento que humanos não veem.`,
          quiz: [{ question: 'O que o Lead Scoring com ML adiciona?', options: ['Pontos aleatórios.', 'Análise comportamental complexa e padrões ocultos de compra.', 'Apenas dados demográficos.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3-sales-l3',
          title: 'Lição 3: Lookalike Audiences',
          videoUrl: 'https://www.youtube.com/watch?v=1K8q7E3-1-o', // Facebook Lookalikes (Concept)
          content: `## Clonando seus Melhores Clientes
Pegue sua lista de clientes que gastam mais (LTV alto).
O ML analisa as características deles e varre o mercado (LinkedIn, Bases de Dados) procurando empresas "gêmeas" (Lookalikes) que você ainda não está prospectando.`,
          quiz: [{ question: 'O que são Lookalikes?', options: ['Gêmeos idênticos.', 'Perfis de mercado que estatisticamente se assemelham aos seus melhores clientes atuais.', 'Espelhos.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3_sales-l4',
          title: 'Lição 4: Churn Prediction',
          videoUrl: 'https://www.youtube.com/watch?v=ACs5g9z8Kxo', // Predicting Churn
          content: `## Retenção Proativa
O ML detecta sinais sutis de insatisfação meses antes do cancelamento.
Ex: "O cliente parou de usar a feature X e abriu 3 tickets sobre fatura".
O sistema alerta o CSM para ligar *hoje*, salvando a receita.`,
          quiz: [{ question: 'Para que serve Churn Prediction?', options: ['Prever o tempo.', 'Identificar clientes em risco de saída antes que eles peçam cancelamento.', 'Calcular comissão.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3_sales-l5',
          title: 'Lição 5: Next Best Action',
          videoUrl: 'https://www.youtube.com/watch?v=0iC5sIgZuOs', // AI for Sales Next Best Action
          content: `## O Vendedor Guiado
O CRM sugere o próximo passo ideal.
"Para este cliente, envie o case de sucesso X agora."
"Para aquele, ligue oferecendo desconto Y."
Baseado no que funcionou historicamente para perfis similares.`,
          quiz: [{ question: 'O que é "Next Best Action"?', options: ['A próxima reunião.', 'Sugestão algorítmica do melhor passo a tomar para avançar uma negociação.', 'Um filme de ação.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3_sales-l6',
          title: 'Lição 6: Previsão de Demanda',
          videoUrl: 'https://www.youtube.com/watch?v=yY1QZ9o3x_0', // Demand Forecasting
          content: `## Estoque e Metas
Para Varejo e B2B de produto.
ML analisa sazonalidade, tendências macroeconômicas e histórico para prever quanto você vai vender.
Evita "Stockout" (perder venda por falta de produto) e "Overstock" (dinheiro parado).`,
          quiz: [{ question: 'Como o ML ajuda no estoque?', options: ['Organizando prateleiras.', 'Prevendo a demanda futura com precisão para equilibrar estoque.', 'Limpando o chão.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3_sales-l7',
          title: 'Lição 7: Otimização de Preço (Dynamic Pricing)',
          videoUrl: 'https://www.youtube.com/watch?v=_S7N9772cW4', // Dynamic Pricing Strategies
          content: `## O Preço Certo
Maximizar margem ou volume?
Algoritmos ajustam o preço em tempo real (como Uber ou Aéreas) baseado na disposição de pagar do cliente, estoque e competidores.
Em B2B, sugere o "desconto ideal" que fecha a venda sem deixar dinheiro na mesa.`,
          quiz: [{ question: 'O que é Dynamic Pricing em B2B?', options: ['Preço fixo.', 'Recomendação de preço/desconto ideal para maximizar a chance de fechar com a maior margem possível.', 'Leilão.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3_sales-l8',
          title: 'Lição 8: Recomendação de Produtos (Cross-sell)',
          videoUrl: 'https://www.youtube.com/watch?v=L-Q-t6-Q-w4', // Recommendation Systems
          content: `## "Quem comprou isso, levou aquilo"
O motor da Amazon aplicado ao seu negócio.
Análise de Cesta de Compras (Market Basket Analysis) descobre correlações ocultas.
"Clientes que compram o Software A têm 40% de chance de querer o Treinamento B."`,
          quiz: [{ question: 'Qual o objetivo de sistemas de recomendação em vendas?', options: ['Vender menos.', 'Aumentar o ticket médio sugerindo produtos complementares relevantes (Cross-sell).', 'Elogiar o cliente.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3_sales-l9',
          title: 'Lição 9: Atribuição de Marketing Multitoque',
          videoUrl: 'https://www.youtube.com/watch?v=3M2-vjJ_Wvk', // Marketing Attribution Models
          content: `## Quem ganha o crédito?
O cliente viu um anúncio, leu um blog, foi num evento e depois comprou.
Modelos de ML (Cadeias de Markov ou Shapley Value) calculam a contribuição real de cada canal, evitando jogar dinheiro fora em canais que não influenciam a decisão.`,
          quiz: [{ question: 'O que a atribuição multitoque resolve?', options: ['Briga de departamentos.', 'Identifica quais canais de marketing realmente influenciaram a venda em uma jornada complexa.', 'Conta cliques.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3_sales-l10',
          title: 'Lição 10: Territory Planning',
          videoUrl: 'https://www.youtube.com/watch?v=1A_T4k6-X7A', // Sales Territory Management
          content: `## Divisão Justa
Como dividir as contas entre os vendedores?
ML analisa o potencial de compra de cada região ou vertical para criar territórios equilibrados, garantindo que todos tenham chance igual de bater a meta.`,
          quiz: [{ question: 'Como o ML ajuda no planejamento de territórios?', options: ['Usando mapas de papel.', 'Equilibrando o potencial de receita de cada território baseando-se em dados de mercado.', 'Sorteio.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm3-l11',
        title: 'Lição 11: Detecção de Fraude em Vendas',
        videoUrl: 'https://www.youtube.com/watch?v=CTuFkkF5XQI', // AI Fraud Detection
        content: `## Venda Falsa
Em e-commerce ou SaaS, pedidos fraudulentos causam prejuízo.
Redes neurais detectam padrões anômalos (ex: IP de um país, cartão de outro, comportamento de navegação robótico) e bloqueiam a venda em milissegundos.`,
        quiz: [{ question: 'O que a IA busca na detecção de fraude?', options: ['Clientes ricos.', 'Padrões anômalos que desviam do comportamento de compra legítimo.', 'Clientes novos.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm3-l12',
        title: 'Lição 12: Otimização de Cadência',
        videoUrl: 'https://www.youtube.com/watch?v=5dEZ_0s1F1c', // Sales Cadence Optimization
        content: `## A/B Testing Contínuo
Qual o melhor horário para ligar? Quantos e-mails mandar?
O ML aprende com milhões de interações e ajusta a cadência automaticamente.
"Ligue para Diretores de TI às terças, 10h. Mande e-mail para Marketing às quintas, 14h."`,
        quiz: [{ question: 'O que é otimização de cadência?', options: ['Tocar bateria.', 'Ajustar horários e frequência de contato para maximizar a taxa de resposta.', 'Falar rápido.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm3-l13',
        title: 'Lição 13: O Futuro Preditivo',
        videoUrl: 'https://www.youtube.com/watch?v=reUZRyXxUs4', // Future of AI
        content: `## Vendas Antes da Vontade
O nível final: Enviar o produto antes do cliente pedir (Modelo Amazon Patent).
Prever a necessidade com tanta precisão que a venda se torna um serviço de reabastecimento automático, eliminando o atrito da decisão de compra.`,
        quiz: [{ question: 'Qual o estágio final da venda preditiva?', options: ['Venda forçada.', 'Antecipação da necessidade, oferecendo a solução antes mesmo do cliente buscar.', 'Telepatia.'], correctAnswerIndex: 1 }],
      },
    ],
};
