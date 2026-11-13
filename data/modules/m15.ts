
import { Module } from '../../types';
import { Send } from '../../components/icons';

export const M15: Module = {
    id: 'm15',
    title: 'Módulo 15: IA para Vendas e Growth',
    subtitle: 'Estratégias avançadas para multiplicar receita e leads com inteligência artificial.',
    icon: Send,
    lessons: [
        {
            id: 'm15-l1',
            title: 'Lição 1: O Novo Funil de Vendas e IA',
            videoUrl: 'https://www.youtube.com/watch?v=Gn4_hvWng-s',
            content: `## Aceleração
O funil tradicional (AIDA) era linear e humano-dependente.
Com IA, o funil é circular e acelerado. A IA atua em todas as etapas:
- Topo: Geração de conteúdo e atração.
- Meio: Nutrição personalizada automática.
- Fundo: Scoring e fechamento assistido.`,
            quiz: [{ question: 'Como a IA transforma o funil de vendas?', options: ['Elimina o cliente.', 'Automatiza e otimiza todas as etapas, acelerando a conversão.', 'Apenas no topo.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15-l2',
            title: 'Lição 2: Lead Scoring Preditivo',
            videoUrl: 'https://www.youtube.com/watch?v=GFeXcafDPlY',
            content: `## Focando no Ouro
Vendedores perdem tempo com leads ruins.
O Scoring Preditivo usa Machine Learning para analisar dados históricos (quem comprou?) e atribuir uma nota de probabilidade de fechamento para cada novo lead.
O time foca apenas nos leads nota 9 ou 10.`,
            quiz: [{ question: 'O que é Lead Scoring Preditivo?', options: ['Dar nota na prova.', 'Usar dados históricos para prever a probabilidade de compra de um lead.', 'Sortear clientes.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15-l3',
            title: 'Lição 3: Hiperpersonalização em Escala',
            videoUrl: 'https://www.youtube.com/watch?v=nHYGdAch_YA',
            content: `## Fim do "Prezado Cliente"
Cold mail genérico morreu.
Ferramentas de IA analisam o LinkedIn, notícias e site do prospecto para escrever um e-mail de abordagem 100% único, que menciona dores específicas daquela empresa.
Escala de robô, toque de humano.`,
            quiz: [{ question: 'O que a IA permite na prospecção (Outbound)?', options: ['Enviar spam igual para todos.', 'Hiperpersonalização (mensagens únicas) em escala massiva.', 'Escrever errado.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15-l4',
            title: 'Lição 4: CRM Autônomo',
            videoUrl: 'https://www.youtube.com/watch?v=0iC5sIgZuOs',
            content: `## O CRM que se preenche
Vendedores odeiam preencher CRM.
A nova geração de CRMs "ouve" e-mails, chamadas e reuniões, e atualiza os campos, cria tarefas e move os cards no pipeline automaticamente.
Dados limpos sem esforço humano.`,
            quiz: [{ question: 'Qual a principal vantagem do CRM Autônomo?', options: ['É colorido.', 'Elimina a entrada manual de dados, garantindo informações atualizadas.', 'É grátis.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15-l5',
            title: 'Lição 5: Inteligência de Conversa com IA',
            videoUrl: 'https://www.youtube.com/watch?v=1VOoYGr7-lk',
            content: `## A Ciência da Call
Ferramentas (Gong, Chorus) que gravam, transcrevem e analisam chamadas de vendas.
Descobrem: "Quem fala mais vende menos?", "Quais competidores foram citados?", "Qual a objeção mais comum?".
Coaching de vendas baseado em dados reais.`,
            quiz: [{ question: 'O que é Revenue/Conversation Intelligence?', options: ['Gravar voz.', 'Análise de dados de conversas de vendas para extrair insights e coaching.', 'Atendimento.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15-l6',
            title: 'Lição 6: Chatbots de Conversão com IA',
            videoUrl: 'https://www.youtube.com/watch?v=SC5Fj0_cKho',
            content: `## Conversão Instantânea
Formulários estáticos estão morrendo.
Chatbots de IA no site engajam o visitante na hora, qualificam a intenção e agendam reunião direto no calendário do vendedor (ou vendem direto).
A resposta imediata aumenta drasticamente a conversão.`,
            quiz: [{ question: 'Qual o papel do Chatbot de Vendas moderno?', options: ['Irritar.', 'Engajar, qualificar e converter leads em tempo real.', 'Dizer oi.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15-l7',
            title: 'Lição 7: Serviços de Contato Ativo e Follow-up, SDR',
            videoUrl: 'https://www.youtube.com/watch?v=510g5HNqNjo',
            content: `## Cadência Infinita
A maioria das vendas acontece no 5º follow-up, mas a maioria dos vendedores para no 2º.
Agentes de IA executam cadências de contato (e-mail, LinkedIn, WhatsApp) perfeitas, persistentes e educadas, até obter uma resposta.`,
            quiz: [{ question: 'Como a IA melhora o Follow-up?', options: ['Desistindo rápido.', 'Mantendo cadências de contato consistentes e personalizadas indefinidamente.', 'Ligando de madrugada.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15-l8',
            title: 'Lição 8: Análise de Churn Preditivo',
            videoUrl: 'https://www.youtube.com/watch?v=Q7OJenx_dbc',
            content: `## Prevendo o Adeus
Reter é mais barato que adquirir.
Modelos de IA analisam sinais de uso (login caindo, tickets de suporte aumentando) para alertar o time de CS que um cliente *vai* cancelar, antes que ele cancele.`,
            quiz: [{ question: 'Para que serve a análise de Churn Preditivo?', options: ['Demissões.', 'Identificar clientes em risco de cancelamento para ação proativa.', 'Calcular lucro.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15-l9',
            title: 'Lição 9: Dynamic Pricing (Preço Dinâmico com IA)',
            videoUrl: 'https://www.youtube.com/watch?v=0iC5sIgZuOs',
            content: `## Preço Perfeito
Ajustar preços em tempo real baseado na demanda, estoque, concorrência e perfil do cliente.
Comum em companhias aéreas, agora acessível para e-commerce e serviços B2B para maximizar margem.`,
            quiz: [{ question: 'O que é Dynamic Pricing?', options: ['Preço fixo.', 'Ajuste automático de preços baseado em variáveis de mercado em tempo real.', 'Desconto.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15-l10',
            title: 'Lição 10: SDRs Artificiais (Agentes de Prospecção)',
            videoUrl: 'https://www.youtube.com/watch?v=xSHqm8JsqkI', // AI Agents Explained (Replaced bad link)
            content: `## Prospecção Autônoma
Agentes de IA (como 11x.ai) que agem como um SDR (Representante de Desenvolvimento de Vendas).
Eles pesquisam leads, encontram contatos e iniciam conversas, passando para o humano apenas quando há interesse real.`,
            quiz: [{ question: 'O que um SDR Artificial substitui?', options: ['O vendedor senior.', 'Tarefas manuais de prospecção e qualificação inicial.', 'O gerente.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15-l11',
            title: 'Lição 11: IA na Criação de Ofertas',
            videoUrl: 'https://www.youtube.com/watch?v=Gn4_hvWng-s',
            content: `## Oferta Irresistível
Usar IA para analisar o que o mercado está comprando, ler reviews de competidores e estruturar ofertas (Bundles, Garantias, Bônus) matematicamente otimizadas para conversão.`,
            quiz: [{ question: 'Como a IA auxilia na criação de ofertas?', options: ['Inventando preços.', 'Analisando dados de mercado para estruturar propostas de alto valor percebido.', 'Sorteio.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15-l12',
            title: 'Lição 12: Previsão de Vendas (Forecasting com IA)',
            videoUrl: 'https://www.youtube.com/watch?v=1VOoYGr7-lk',
            content: `## Adeus "Achômetro"
Previsão de vendas baseada em dados históricos e sinais atuais do pipeline, não no otimismo do vendedor.
Permite planejamento financeiro e de estoque muito mais preciso.`,
            quiz: [{ question: 'Qual a vantagem do Forecasting com IA?', options: ['Otimismo.', 'Precisão baseada em dados, removendo o viés emocional humano.', 'Sorte.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15-l13',
            title: 'Lição 13: O Futuro das Vendas B2B com IA',
            videoUrl: 'https://www.youtube.com/watch?v=SC5Fj0_cKho',
            content: `## Vendas Consultivas
Com a IA fazendo o trabalho braçal e transacional, o vendedor humano precisa evoluir para "Consultor de Confiança".
O diferencial será a empatia, a estratégia e a capacidade de navegar políticas complexas do cliente.`,
            quiz: [{ question: 'Qual o papel futuro do vendedor B2B?', options: ['Digitador de pedido.', 'Consultor estratégico e gestor de relacionamentos complexos.', 'Extinto.'], correctAnswerIndex: 1 }],
        },
    ],
};
