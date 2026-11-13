
import { Module } from '../../types';
import { BrainCircuit } from '../../components/icons';

export const M1_SALES: Module = {
  id: 'm1_sales',
  title: 'Módulo 1: Fundamentos de IA para Vendas',
  subtitle: 'Como a Inteligência Artificial está reescrevendo o playbook comercial.',
  icon: BrainCircuit,
  lessons: [
      {
        id: 'm1_sales-l1',
        title: 'Lição 1: O Novo Vendedor Aumentado',
        videoUrl: 'https://www.youtube.com/watch?v=9t78YjV1Kz8', // Salesforce: State of Sales & AI
        content: `## O Copiloto Comercial
A IA não veio substituir o vendedor, mas eliminar o trabalho que não é venda (admin, data entry, pesquisa).
O "Vendedor Aumentado" usa IA para:
- **Pesquisar:** Encontrar dados do prospect em segundos.
- **Escrever:** Gerar rascunhos de e-mails hiper-personalizados.
- **Analisar:** Ter feedback em tempo real sobre sua performance na call.`,
        quiz: [
          { question: 'Qual o principal objetivo da IA em vendas?', options: ['Fazer o vendedor trabalhar mais.', 'Eliminar tarefas administrativas e aumentar o tempo de venda ativa.', 'Substituir o CRM.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_sales-l2',
        title: 'Lição 2: História da IA em Vendas',
        videoUrl: 'https://www.youtube.com/watch?v=1A_T4k6-X7A', // Evolution of CRM (HubSpot)
        content: `## Do CRM ao Agente
- **Era 1.0 (Excel):** Listas estáticas.
- **Era 2.0 (CRM Cloud):** Salesforce/HubSpot. Dados centralizados, mas entrada manual.
- **Era 3.0 (IA Preditiva):** Lead Scoring e Previsão de Vendas.
- **Era 4.0 (IA Generativa):** Agentes que prospectam, escrevem e agendam sozinhos.`,
        quiz: [
          { question: 'O que caracteriza a Era 4.0 da IA em vendas?', options: ['Planilhas coloridas.', 'Agentes Generativos que executam tarefas de prospecção autonomamente.', 'CRMs mais rápidos.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_sales-l3',
        title: 'Lição 3: Tipos de IA no Comercial',
        videoUrl: 'https://www.youtube.com/watch?v=0qQ2o1tR5jU', // Generative vs Predictive AI
        content: `## Preditiva vs. Generativa
No comercial, usamos duas IAs:
1.  **Preditiva (Numérica):** "Qual a chance deste lead fechar?" (Lead Scoring). "Quanto vamos vender mês que vem?" (Forecast).
2.  **Generativa (Criativa):** "Escreva um e-mail de follow-up para o CEO da empresa X citando a notícia Y."`,
        quiz: [
            { question: 'Para que serve a IA Preditiva em vendas?', options: ['Escrever poemas.', 'Calcular probabilidades (Scoring) e previsões (Forecast).', 'Criar imagens.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_sales-l4',
        title: 'Lição 4: Deep Learning na Prospecção',
        videoUrl: 'https://www.youtube.com/watch?v=5dEZ_0s1F1c', // Finding ICP with Data
        content: `## Encontrando Padrões Invisíveis
Deep Learning analisa milhões de datapoints (tamanho da empresa, tecnologias usadas, contratações recentes) para encontrar o "Cliente Ideal" (ICP) que você nem sabia que existia.
Vai muito além de filtros simples de "Cargo" e "Setor".`,
        quiz: [
            { question: 'Como o Deep Learning melhora a definição de ICP?', options: ['Adivinhando.', 'Analisando padrões complexos em grandes volumes de dados para identificar compradores ideais.', 'Usando filtros básicos.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_sales-l5',
        title: 'Lição 5: Automação vs. IA',
        videoUrl: 'https://www.youtube.com/watch?v=YevFxH3n02s', // Automation vs AI
        content: `## Régua vs. Cérebro
- **Automação (Régua):** "Se o cliente preencher o form, mande o e-mail X." (Rígido).
- **IA (Cérebro):** "Se o cliente preencher o form, analise o perfil dele. Se for VIP, avise o diretor. Se for pequeno, mande o e-mail Y personalizado." (Adaptativo).`,
        quiz: [
            { question: 'Qual a diferença entre Automação de Marketing e IA?', options: ['O preço.', 'A Automação segue regras fixas; a IA toma decisões adaptativas baseadas em dados.', 'Nenhuma.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_sales-l6',
        title: 'Lição 6: Redes Neurais em Vendas',
        videoUrl: 'https://www.youtube.com/watch?v=aircAruvnKk', // Neural Networks Simplified
        content: `## O Cérebro do CRM
Redes neurais podem analisar o histórico de e-mails trocados com um cliente e prever o risco de "Churn" (cancelamento) ou a probabilidade de "Upsell" (venda adicional) com precisão superior à intuição humana.`,
        quiz: [
            { question: 'O que redes neurais podem prever no CRM?', options: ['O tempo.', 'Risco de Churn e oportunidades de Upsell baseadas em comportamento.', 'O nome do cliente.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_sales-l7',
        title: 'Lição 7: NLP para Vendas',
        videoUrl: 'https://www.youtube.com/watch?v=fNxaJSZwYoc', // Introduction to NLP
        content: `## Revenue Intelligence
NLP é a tecnologia que permite ao computador "ouvir" suas calls de vendas (Zoom/Meet).
Ele transcreve, identifica perguntas, objeções, concorrentes citados e a proporção fala/escuta, gerando coaching automático para o time.`,
        quiz: [
            { question: 'Como o NLP ajuda gestores de vendas?', options: ['Gravando reuniões.', 'Analisando o conteúdo das conversas para fornecer insights e coaching.', 'Traduzindo sites.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_sales-l8',
        title: 'Lição 8: Visão Computacional no Varejo',
        videoUrl: 'https://www.youtube.com/watch?v=273tZ2V-D9E', // Computer Vision in Retail
        content: `## Loja Inteligente
Em vendas físicas, a Visão Computacional analisa o fluxo de clientes na loja, mapas de calor (onde param mais?) e até expressões faciais para medir satisfação diante de uma gôndola.`,
        quiz: [
            { question: 'Qual a aplicação de Visão Computacional no varejo físico?', options: ['Tirar selfie.', 'Análise de fluxo, mapas de calor e comportamento do consumidor na loja.', 'Ler código de barras apenas.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_sales-l9',
        title: 'Lição 9: Aplicações Práticas de Receita',
        videoUrl: 'https://www.youtube.com/watch?v=3M2-vjJ_Wvk', // AI Sales Tools Landscape
        content: `## Onde dá dinheiro?
As aplicações de maior ROI em vendas hoje são:
1. **Prospecção:** Enriquecimento de dados e e-mails frios.
2. **Conversão:** Chatbots que qualificam 24/7.
3. **Retenção:** Análise preditiva de saúde do cliente.`,
        quiz: [
            { question: 'Qual destas é uma aplicação de alto ROI em vendas?', options: ['Criar logo.', 'Chatbots de qualificação 24/7.', 'Formatador de texto.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_sales-l10',
        title: 'Lição 10: Desafios de IA em Vendas',
        videoUrl: 'https://www.youtube.com/watch?v=reUZRyXxUs4', // Challenges of AI Adoption
        content: `## O Risco da Robotização
O maior desafio é a perda do toque humano.
Se a IA automatiza tudo, a venda vira spam. O segredo é usar a IA para ser *mais* humano nos momentos que importam, e robô apenas nos bastidores.
Outro risco: Dados sujos no CRM geram recomendações erradas.`,
        quiz: [
            { question: 'Qual o perigo da automação excessiva em vendas?', options: ['Vender muito.', 'Perder a conexão humana e tornar a abordagem genérica (spam).', 'Ficar sem internet.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_sales-l11',
        title: 'Lição 11: Machine Learning no Pipeline',
        videoUrl: 'https://www.youtube.com/watch?v=GFeXcafDPlY', // Predictive Sales Forecasting
        content: `## Forecast Científico
Vendedores são otimistas. ML é realista.
Modelos de ML analisam milhares de deals passados para dizer: "Baseado no padrão, este deal que o vendedor diz que fecha hoje, na verdade só fecha mês que vem". Isso torna a previsão de receita confiável.`,
        quiz: [
            { question: 'Por que ML é melhor que humanos para Forecast?', options: ['É pessimista.', 'Remove o viés emocional/otimista e baseia-se em dados históricos.', 'Sabe o futuro.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_sales-l12',
        title: 'Lição 12: O Futuro da Área Comercial',
        videoUrl: 'https://www.youtube.com/watch?v=0iC5sIgZuOs', // Future of Sales AI
        content: `## Times Híbridos
O futuro não é "IA substitui Vendedor".
É "Vendedor Centauro" (Humano + IA) substituindo vendedor tradicional.
SDRs (pré-vendas) serão os mais impactados por agentes autônomos, enquanto Closers (fechadores) focarão 100% em relacionamento.`,
        quiz: [
            { question: 'Qual função de vendas será mais automatizada por Agentes?', options: ['Field Sales (Visitas).', 'SDR/BDR (Prospecção e Qualificação).', 'Key Account Manager.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_sales-l13',
        title: 'Lição 13: Ética em Vendas com IA',
        videoUrl: 'https://www.youtube.com/watch?v=N-i5kI5kzac', // AI Ethics
        content: `## Persuasão vs. Manipulação
A IA pode ser usada para identificar vulnerabilidades psicológicas do cliente e explorar isso para vender. Isso é antiético.
A diretriz deve ser: Usar a IA para entregar o valor certo, para a pessoa certa, na hora certa. Transparência é chave.`,
        quiz: [
            { question: 'Qual a linha ética no uso de IA em vendas?', options: ['Vender a qualquer custo.', 'Não usar persuasão baseada em manipulação de vulnerabilidades.', 'Não usar IA.'], correctAnswerIndex: 1 }
        ],
      },
  ],
};
