
import { Module } from '../../types';
import { Send } from '../../components/icons';

export const M15_SALES: Module = {
    id: 'm15_sales',
    title: 'Módulo 15: Estratégias Avançadas de Fechamento',
    subtitle: 'Táticas de negociação e fechamento (Closer) potencializadas por IA.',
    icon: Send,
    lessons: [
        {
            id: 'm15_sales-l1',
            title: 'Lição 1: A Psicologia do Fechamento',
            videoUrl: 'https://www.youtube.com/watch?v=1A_T4k6-X7A', // Psychology of Closing
            content: `## Confiança e Urgência
O fechamento não é um evento, é um processo.
A IA ajuda a identificar os momentos de pico de interesse (através de sinais digitais) para aplicar a técnica certa de fechamento na hora certa.`,
            quiz: [{ question: 'O que a IA identifica para auxiliar no fechamento?', options: ['A hora do almoço.', 'Sinais digitais de interesse e engajamento para timing perfeito.', 'O signo do cliente.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15_sales-l2',
            title: 'Lição 2: Negociação Assistida em Tempo Real',
            videoUrl: 'https://www.youtube.com/watch?v=AJNBp-19_cM', // Real-time AI Coaching
            content: `## Copiloto de Objeções
Durante a call, o cliente diz "Está caro".
A IA ouve e mostra na tela do vendedor (em tempo real): "O cliente comparou com X. Mencione que nosso suporte é 24/7 e o deles não. Ofereça o case Y."`,
            quiz: [{ question: 'Como funciona a assistência em tempo real?', options: ['Um robô fala.', 'O software sugere argumentos e dados na tela do vendedor enquanto ele fala.', 'Grava a call.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15_sales-l3',
            title: 'Lição 3: Análise de Contratos com IA',
            videoUrl: 'https://www.youtube.com/watch?v=gQddtTdmPOc', // Contract Review AI
            content: `## Redlining Automático
O jurídico do cliente devolveu o contrato todo riscado?
A IA analisa as alterações, destaca os riscos ("Eles removeram a multa de rescisão") e sugere contra-argumentos jurídicos aceitáveis.`,
            quiz: [{ question: 'O que a IA faz na revisão de contratos?', options: ['Assina sozinha.', 'Destaca alterações de risco e sugere contra-cláusulas.', 'Imprime.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15_sales-l4',
            title: 'Lição 4: Previsão de Objeções',
            videoUrl: 'https://www.youtube.com/watch?v=9t78YjV1Kz8', // Handling Objections with Data
            content: `## Antecipação
Baseado no perfil do cliente (Setor, Tamanho), a IA prevê quais objeções ele *provavelmente* fará.
"Clientes de Varejo costumam reclamar da integração."
O vendedor já entra na reunião com a vacina pronta.`,
            quiz: [{ question: 'Qual a vantagem de prever objeções?', options: ['Nenhuma.', 'Preparar a argumentação (vacina) antes mesmo do cliente levantar o problema.', 'Ficar nervoso.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15_sales-l5',
            title: 'Lição 5: Otimização de Propostas',
            videoUrl: 'https://www.youtube.com/watch?v=3M2-vjJ_Wvk', // Proposal Optimization
            content: `## Propostas que Vendem
A IA analisa milhares de propostas enviadas.
"Propostas com vídeo na capa convertem 20% mais." "Propostas enviadas terça-feira fecham mais rápido."
O sistema sugere o formato ideal para cada cliente.`,
            quiz: [{ question: 'Como otimizar propostas com IA?', options: ['Usando Comic Sans.', 'Analisando dados históricos para usar os elementos visuais e estruturais que mais convertem.', 'Mandando em branco.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15_sales-l6',
            title: 'Lição 6: Stakeholder Mapping Automático',
            videoUrl: 'https://www.youtube.com/watch?v=0qQ2o1tR5jU', // Stakeholder Mapping
            content: `## Quem Decide?
Em vendas complexas, há vários decisores.
A IA analisa os e-mails copiados e o LinkedIn para mapear o organograma de poder.
"Você está falando com o Campeão, mas o Decisor Econômico (CFO) ainda não foi envolvido. Risco de perder."`,
            quiz: [{ question: 'O que é Stakeholder Mapping?', options: ['Mapa mundi.', 'Mapear quem influencia e quem decide a compra na empresa cliente.', 'Lista de chamada.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15_sales-l7',
            title: 'Lição 7: Fechamento Condicional',
            videoUrl: 'https://www.youtube.com/watch?v=_S7N9772cW4', // Pricing Strategy
            content: `## Se... Então
A IA ajuda a estruturar trocas.
"Se você assinar hoje, consigo X."
A ferramenta de CPQ (Configure, Price, Quote) com IA diz exatamente até onde você pode ceder desconto para manter a margem saudável.`,
            quiz: [{ question: 'Como o CPQ com IA ajuda na negociação?', options: ['Calcula imposto.', 'Define limites de desconto e margem para negociações condicionais seguras.', 'Gera boleto.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15_sales-l8',
            title: 'Lição 8: Sinal de Compra Digital',
            videoUrl: 'https://www.youtube.com/watch?v=5dEZ_0s1F1c', // Digital Buying Signals
            content: `## Digital Body Language
O cliente abriu a proposta 5 vezes hoje? Compartilhou com o chefe? Visitou a página de termos legais?
Esses são sinais de compra fortíssimos que a IA detecta e avisa: "Ligue agora, eles estão decidindo".`,
            quiz: [{ question: 'O que são sinais de compra digitais?', options: ['Emojis.', 'Comportamentos online (abrir proposta, visitar site) que indicam intenção de fechamento.', 'E-mail de sim.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15_sales-l9',
            title: 'Lição 9: Recuperação de Deals Perdidos',
            videoUrl: 'https://www.youtube.com/watch?v=ACs5g9z8Kxo', // Win Back Strategies
            content: `## O Retorno
A IA monitora ex-leads que disseram "não" há 6 meses.
Se a empresa deles cresceu, ou se o contato mudou, ou se você lançou a feature que faltava, a IA sugere: "Hora de tentar de novo".`,
            quiz: [{ question: 'Quando tentar recuperar um deal perdido?', options: ['Nunca.', 'Quando a IA detectar uma mudança de contexto (gatilho) que favoreça uma nova abordagem.', 'Todo dia.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15_sales-l10',
            title: 'Lição 10: Neurovendas e IA',
            videoUrl: 'https://www.youtube.com/watch?v=1A_T4k6-X7A', // Behavioral Sales
            content: `## Perfil Comportamental
Ferramentas como Crystal Knows analisam o perfil do cliente (DISC/Myers-Briggs) baseado na escrita dele.
"Este cliente é Dominante. Seja direto, pule o papo furado e foque no resultado." Adaptação total do estilo.`,
            quiz: [{ question: 'Como a IA aplica neurovendas?', options: ['Lendo mentes.', 'Identificando o perfil comportamental do cliente para adaptar o estilo de comunicação.', 'Hipnose.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15_sales-l11',
            title: 'Lição 11: Fechamento Assíncrono',
            videoUrl: 'https://www.youtube.com/watch?v=273tZ2V-D9E', // Asynchronous Sales
            content: `## Sales Rooms
Em vez de mandar PDF, mande um "Digital Sales Room". Um microsite personalizado com vídeos, proposta, chat e casos.
A IA monitora quem entra na sala e o que consomem, permitindo fechar o deal sem reunião síncrona.`,
            quiz: [{ question: 'O que é uma Digital Sales Room?', options: ['Sala de reunião.', 'Um ambiente online personalizado com todos os materiais para o cliente decidir e fechar.', 'Chatbot.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15_sales-l12',
            title: 'Lição 12: Pós-Venda Imediato',
            videoUrl: 'https://www.youtube.com/watch?v=ad79nYk2keg', // Customer Success Handoff
            content: `## A Venda não Acaba
O fechamento é o início. A IA já prepara o terreno para o CS.
Transfere as expectativas alinhadas na venda para que o time de entrega não decepcione. Alinhamento Vendas-Entrega.`,
            quiz: [{ question: 'Qual a importância da passagem de bastão pós-fechamento?', options: ['Nenhuma.', 'Garantir que as expectativas vendidas sejam entregues, reduzindo churn futuro.', 'Fazer festa.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15_sales-l13',
            title: 'Lição 13: O Vendedor Centauro (Conclusão)',
            videoUrl: 'https://www.youtube.com/watch?v=reUZRyXxUs4', // Future of Human-AI Sales
            content: `## Humano + Máquina
O vendedor que teme a IA será substituído. O vendedor que usa a IA será promovido.
A fusão da empatia humana com a onisciência de dados da máquina cria o profissional de vendas definitivo.`,
            quiz: [{ question: 'Quem é o Vendedor Centauro?', options: ['Metade cavalo.', 'O profissional que integra inteligência artificial em seu fluxo para amplificar suas capacidades humanas.', 'Um robô.'], correctAnswerIndex: 1 }],
        },
    ],
};
