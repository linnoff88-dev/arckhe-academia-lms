
import { Module } from '../../types';
import { Users } from '../../components/icons';

export const M16_SALES: Module = {
    id: 'm16_sales',
    title: 'Módulo 16: Liderança Comercial 4.0',
    subtitle: 'Gestão de times de vendas de alta performance com dados e IA.',
    icon: Users,
    lessons: [
        {
            id: 'm16_sales-l1',
            title: 'Lição 1: O CSO Data-Driven',
            videoUrl: 'https://www.youtube.com/watch?v=9t78YjV1Kz8', // Sales Leadership in AI Era
            content: `## Fim do Gestor Motivacional (Apenas)
O líder de vendas antigo motivava com discursos. O novo lidera com dados.
Ele sabe exatamente porque o vendedor A vende mais que o B (taxa de conversão, atividade, discurso) e atua cirurgicamente no gap.`,
            quiz: [{ question: 'Qual a mudança no perfil do líder de vendas?', options: ['Fala mais alto.', 'Migra de gestão baseada apenas em motivação para gestão baseada em dados e coaching técnico.', 'Vende sozinha.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16_sales-l2',
            title: 'Lição 2: Coaching com IA',
            videoUrl: 'https://www.youtube.com/watch?v=AJNBp-19_cM', // AI Sales Coaching
            content: `## Feedback Escalonável
Um gerente não consegue ouvir todas as calls. A IA consegue.
O sistema escuta 100% das chamadas e diz ao gerente: "O João está interrompendo o cliente demais" ou "A Maria não está fazendo perguntas de implicação".
O coaching vira diário e preciso.`,
            quiz: [{ question: 'Como a IA escala o coaching de vendas?', options: ['Demitindo.', 'Analisando 100% das interações e identificando gaps de competência automaticamente.', 'Dando palestras.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16_sales-l3',
            title: 'Lição 3: Gestão de Pipeline Precisa',
            videoUrl: 'https://www.youtube.com/watch?v=1A_T4k6-X7A', // Pipeline Health
            content: `## A Verdade Nua
Vendedores escondem deals ruins ou inflacionam bons.
A IA audita o pipeline: "Este deal está parado há 20 dias, a chance real é 10%, não 80%".
O líder cobra com base na realidade, não na esperança.`,
            quiz: [{ question: 'Qual o papel da IA na gestão de pipeline?', options: ['Limpar.', 'Auditar a saúde real das oportunidades, removendo o viés otimista do vendedor.', 'Criar deals.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16_sales-l4',
            title: 'Lição 4: Forecast Accuracy',
            videoUrl: 'https://www.youtube.com/watch?v=GFeXcafDPlY', // Sales Forecasting Accuracy
            content: `## Promessa Cumprida
Errar a previsão de vendas quebra o fluxo de caixa e o estoque.
Líderes que usam IA para forecast têm margem de erro menor que 5%. Isso dá confiança para o CEO e investidores.`,
            quiz: [{ question: 'Por que a precisão do Forecast é vital?', options: ['Para ganhar bônus.', 'Para planejamento financeiro, de estoque e confiança dos stakeholders.', 'Para adivinhar.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16_sales-l5',
            title: 'Lição 5: Recrutamento de Vendedores',
            videoUrl: 'https://www.youtube.com/watch?v=5dEZ_0s1F1c', // Hiring Sales Talent with Data
            content: `## O DNA do Vendedor
Quem contratar?
A IA analisa os top performers da sua empresa (soft skills, hard skills, background) e ajuda a triar candidatos que tenham o "fit" ideal para o *seu* ciclo de vendas específico.`,
            quiz: [{ question: 'Como a IA melhora a contratação de vendas?', options: ['Sorteio.', 'Identificando padrões de sucesso nos vendedores atuais para buscar perfis similares.', 'Teste de QI.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16_sales-l6',
            title: 'Lição 6: Ramp-up Acelerado',
            videoUrl: 'https://www.youtube.com/watch?v=ad79nYk2keg', // Accelerating Ramp Up
            content: `## Tempo até a Meta
Reduzir o tempo que um novo vendedor leva para bater a meta.
Sistemas de Enablement com IA entregam o conteúdo certo na hora certa e simulam calls (Roleplay AI) para treinar o novato intensivamente antes de ele queimar leads reais.`,
            quiz: [{ question: 'O que é Ramp-up?', options: ['Uma rampa.', 'O tempo que um novo vendedor leva para atingir a produtividade total.', 'Desligamento.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16_sales-l7',
            title: 'Lição 7: Retenção de Talentos (Vendas)',
            videoUrl: 'https://www.youtube.com/watch?v=ACs5g9z8Kxo', // Retention Strategies
            content: `## Evitando o Burnout
Vendas é alta pressão.
A IA detecta sinais de burnout (queda de atividade, tom de voz negativo, e-mails noturnos) e avisa o líder para intervir antes que o top performer peça demissão.`,
            quiz: [{ question: 'Como a IA ajuda na retenção?', options: ['Dando dinheiro.', 'Detectando sinais precoces de desengajamento ou burnout para ação preventiva.', 'Férias.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16_sales-l8',
            title: 'Lição 8: Cultura de Alta Performance',
            videoUrl: 'https://www.youtube.com/watch?v=Opa7Zkq-3pA', // High Performance Culture
            content: `## Gamificação Inteligente
Usar dados para criar competições justas e transparentes.
Não apenas "quem vendeu mais", mas "quem melhorou mais", "quem fez mais upsell". Reconhecer comportamentos certos, não apenas resultados finais.`,
            quiz: [{ question: 'Qual a melhor forma de gamificar vendas?', options: ['Sorteio.', 'Reconhecer comportamentos e evoluções baseados em dados, além do resultado final.', 'Gritar.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16_sales-l9',
            title: 'Lição 9: Gestão de Comissões',
            videoUrl: 'https://www.youtube.com/watch?v=3M2-vjJ_Wvk', // Sales Compensation
            content: `## Transparência Total
Nada desmotiva mais que comissão errada.
Sistemas automatizados dão visibilidade em tempo real do ganho ("Se eu fechar isso, ganho aquilo"). O líder usa isso como alavanca motivacional diária.`,
            quiz: [{ question: 'Por que a visibilidade de comissão importa?', options: ['Para ostentar.', 'É o principal motor motivacional do vendedor; erros ou opacidade destroem a confiança.', 'Não importa.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16_sales-l10',
            title: 'Lição 10: Alinhamento Vendas e Marketing',
            videoUrl: 'https://www.youtube.com/watch?v=gQddtTdmPOc', // Sales Marketing Alignment
            content: `## Smarketing
O líder de vendas deve usar dados para conversar com Marketing.
"Os leads do canal X não estão convertendo, mas os do canal Y fecham rápido."
Feedback loop baseado em dados, não em "eu acho que os leads estão ruins".`,
            quiz: [{ question: 'Como melhorar a relação com Marketing?', options: ['Reclamando.', 'Fornecendo feedback estruturado baseado em dados de conversão por canal.', 'Ignorando.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16_sales-l11',
            title: 'Lição 11: Estratégia de Territórios',
            videoUrl: 'https://www.youtube.com/watch?v=273tZ2V-D9E', // Territory Strategy
            content: `## Otimização Geográfica
Onde colocar o próximo vendedor?
IA analisa o potencial de mercado inexplorado (White Space) e sugere a melhor alocação de recursos para maximizar a cobertura sem canibalização.`,
            quiz: [{ question: 'O que define uma boa estratégia de território?', options: ['Tamanho igual.', 'Potencial de mercado equilibrado e cobertura eficiente.', 'Sorteio.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16_sales-l12',
            title: 'Lição 12: Ética na Liderança Comercial',
            videoUrl: 'https://www.youtube.com/watch?v=cf522e5e1eE', // Ethical Leadership
            content: `## Pressão Saudável
Com tantos dados (monitoramento de calls, e-mails, tempo), o líder pode virar um "Big Brother".
Liderança ética usa os dados para desenvolver pessoas, não para microgerenciar ou punir erros honestos.`,
            quiz: [{ question: 'Qual o risco do monitoramento excessivo?', options: ['Ficar chato.', 'Criar uma cultura de medo e microgerenciamento (Big Brother).', 'Gastar luz.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16_sales-l13',
            title: 'Lição 13: O Futuro da Liderança de Vendas',
            videoUrl: 'https://www.youtube.com/watch?v=hAQSLARIkgc', // Chief Revenue Officer
            content: `## Chief Revenue Officer (CRO)
O líder de vendas evolui para CRO.
Ele olha para toda a jornada de receita (Marketing -> Vendas -> CS) como um sistema único integrado por dados e IA. Visão holística de crescimento.`,
            quiz: [{ question: 'Qual a evolução do Diretor de Vendas?', options: ['Presidente.', 'CRO (Chief Revenue Officer), integrando toda a cadeia de receita.', 'Aposentado.'], correctAnswerIndex: 1 }],
        },
    ],
};
