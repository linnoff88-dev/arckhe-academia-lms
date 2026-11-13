
import { Module } from '../../types';
import { Agent } from '../../components/icons';

export const M11_SALES: Module = {
    id: 'm11_sales',
    title: 'Módulo 11: Agentes Autônomos de Vendas (SDRs)',
    subtitle: 'A força de trabalho digital que prospecata e qualifica 24/7.',
    icon: Agent,
    lessons: [
        {
            id: 'm11_sales-l1',
            title: 'Lição 1: O que é um AI SDR?',
            videoUrl: 'https://www.youtube.com/watch?v=xSHqm8JsqkI', // What are AI Agents
            content: `## Prospecção no Piloto Automático
Um AI SDR (como 11x.ai ou Artisan) não é apenas um script. É um agente que:
1. Pesquisa leads no LinkedIn/Apollo.
2. Visita o site do lead para entender o negócio.
3. Escreve e envia o e-mail personalizado.
4. Lê a resposta e agenda a reunião ou remove da lista.`,
            quiz: [{ question: 'O que diferencia um AI SDR de uma ferramenta de e-mail marketing?', options: ['O preço.', 'A autonomia para pesquisar, personalizar e gerenciar o fluxo de resposta sozinho.', 'Envia mais e-mails.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11_sales-l2',
            title: 'Lição 2: Agentes de Pesquisa',
            videoUrl: 'https://www.youtube.com/watch?v=3M2-vjJ_Wvk', // Research Agents
            content: `## Preparação de Reunião
Agentes que varrem a web antes da sua reunião e entregam um dossiê: "O prospect postou sobre X ontem no LinkedIn, a empresa acabou de levantar investimento e eles usam o concorrente Y".
Você entra na call preparado em segundos.`,
            quiz: [{ question: 'Qual a função de um Agente de Pesquisa?', options: ['Fazer café.', 'Coletar e sintetizar informações públicas sobre o prospect para preparar o vendedor.', 'Mandar spam.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11_sales-l3',
            title: 'Lição 3: Agentes de Negociação',
            videoUrl: 'https://www.youtube.com/watch?v=0qQ2o1tR5jU', // Autonomous Negotiation
            content: `## Comércio Autônomo
Em cenários transacionais (pequeno valor), agentes podem negociar preço e condições dentro de limites pré-aprovados.
"Posso te dar 5% de desconto se fechar hoje."
Libera humanos para negociações complexas e estratégicas.`,
            quiz: [{ question: 'Onde agentes de negociação são mais úteis?', options: ['Vendas enterprise complexas.', 'Vendas transacionais de menor valor e alto volume.', 'RH.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11_sales-l4',
            title: 'Lição 4: Multi-Agentes em Vendas',
            videoUrl: 'https://www.youtube.com/watch?v=2c_k_BsuBv4', // Multi-Agent Systems
            content: `## O Time Virtual
Uma arquitetura onde:
- Agente A (Hunter) acha o lead.
- Agente B (Researcher) enriquece os dados.
- Agente C (Copywriter) escreve o e-mail.
- Agente D (Manager) revisa antes de enviar.
Especialização gera qualidade superior.`,
            quiz: [{ question: 'Por que usar múltiplos agentes especializados?', options: ['É mais complicado.', 'Melhora a qualidade final dividindo tarefas complexas em etapas especializadas.', 'Gasta mais energia.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11_sales-l5',
            title: 'Lição 5: Integração com Ferramentas',
            videoUrl: 'https://www.youtube.com/watch?v=5dEZ_0s1F1c', // Tool Use in AI
            content: `## Mãos no Teclado
Agentes usam "Tools" (Ferramentas). Eles precisam ter permissão para:
- Ler/Escrever no CRM (Salesforce).
- Acessar o Calendário.
- Enviar E-mail.
O "Function Calling" é a tecnologia que permite isso.`,
            quiz: [{ question: 'O que permite ao agente interagir com o CRM?', options: ['Mágica.', 'Integrações via API e Function Calling.', 'Um humano clicando.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11_sales-l6',
            title: 'Lição 6: Agentes de Voz (Voice AI)',
            videoUrl: 'https://www.youtube.com/watch?v=yY1QZ9o3x_0', // Voice AI Agents
            content: `## Cold Call 2.0
Agentes de voz (ex: Air.ai) que ligam para milhares de leads simultaneamente, conversam com latência humana, contornam objeções e transferem para um humano apenas se houver interesse real.
Escalabilidade infinita de prospecção telefônica.`,
            quiz: [{ question: 'Qual a revolução dos Agentes de Voz?', options: ['Falam alto.', 'Escalar a prospecção telefônica com conversas naturais e simultâneas.', 'Tocam música.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11_sales-l7',
            title: 'Lição 7: Human-in-the-Loop em Vendas',
            videoUrl: 'https://www.youtube.com/watch?v=reUZRyXxUs4', // Human in the Loop
            content: `## Supervisão
Em vendas enterprise, você não quer um bot enviando e-mail errado para o CEO da Coca-Cola.
O agente prepara o rascunho ("Draft") e o vendedor humano apenas revisa e clica em "Enviar". Aumenta a produtividade em 10x sem perder o controle.`,
            quiz: [{ question: 'Como garantir qualidade em contas estratégicas?', options: ['Automação total.', 'Human-in-the-Loop: O agente prepara, o humano revisa e aprova.', 'Manual.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11_sales-l8',
            title: 'Lição 8: Auto-Correção',
            videoUrl: 'https://www.youtube.com/watch?v=jEn_Lg3jJPU', // Reinforcement Learning Concept
            content: `## Aprendendo Contínuo
Bons agentes analisam seus próprios resultados.
"Mandei 100 e-mails com o Assunto A e tive 2% de abertura. Vou tentar o Assunto B na próxima."
Eles otimizam a estratégia de outbound autonomamente.`,
            quiz: [{ question: 'O que um agente avançado faz com resultados ruins?', options: ['Desiste.', 'Analisa os dados e auto-corrige a estratégia para a próxima tentativa.', 'Culpa o chefe.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11_sales-l9',
            title: 'Lição 9: Agentes de Onboarding',
            videoUrl: 'https://www.youtube.com/watch?v=ad79nYk2keg', // Automated Onboarding
            content: `## Pós-Venda Imediato
Assim que o contrato é assinado, um agente assume: envia boas-vindas, coleta dados técnicos, agenda o kickoff e garante que o cliente comece a usar o produto.
Reduz o tempo de "Time to Value".`,
            quiz: [{ question: 'Qual o foco do Agente de Onboarding?', options: ['Vender mais.', 'Garantir uma transição rápida e eficiente da venda para o uso do produto.', 'Cobrar fatura.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11_sales-l10',
            title: 'Lição 10: Agentes de Reativação',
            videoUrl: 'https://www.youtube.com/watch?v=ACs5g9z8Kxo', // Churn & Reactivation
            content: `## Minerando o Cemitério
Milhares de leads antigos no CRM.
Um agente pode trabalhar essa base "morta" incansavelmente, enviando mensagens de "Oi, vi que você se interessou ano passado, temos novidades...".
Recupera receita perdida a custo zero de mídia.`,
            quiz: [{ question: 'O que é reativação de base?', options: ['Enterrar leads.', 'Reengajar leads antigos ou perdidos para tentar novas oportunidades.', 'Apagar dados.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11-sales-l11',
            title: 'Lição 11: Personalização de Vídeo via Agente',
            videoUrl: 'https://www.youtube.com/watch?v=273tZ2V-D9E', // Video Personalization
            content: `## Agentes Multimodais
Agentes que não apenas escrevem, mas geram um vídeo personalizado (usando avatares) para cada prospect, enviam no LinkedIn e monitoram se foi assistido.
Multicanalidade autônoma.`,
            quiz: [{ question: 'Agentes multimodais podem gerar:', options: ['Apenas texto.', 'Texto, áudio e vídeo personalizados.', 'Apenas código.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11-sales-l12',
            title: 'Lição 12: Configuração e Setup',
            videoUrl: 'https://www.youtube.com/watch?v=1VDcke66TRE', // Agent Setup / Prompt
            content: `## Prompting do Agente
Configurar um agente não é programar, é escrever um "Job Description" muito detalhado.
"Você é um SDR agressivo mas polido. Seu objetivo é agendar reuniões. Nunca desista antes de 3 nãos. Se perguntarem preço, diga que depende e peça reunião."`,
            quiz: [{ question: 'Como se configura o comportamento de um agente?', options: ['Com código C++.', 'Com um prompt de sistema detalhado (Job Description) e regras de negócio.', 'Com um controle remoto.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11-sales-l13',
            title: 'Lição 13: O Futuro da Equipe de Vendas',
            videoUrl: 'https://www.youtube.com/watch?v=IMa8v4q_X_w', // Managing AI Workforce
            content: `## Gestor de Robôs
O futuro gerente de vendas não gerenciará apenas pessoas, mas uma frota de agentes.
Saber auditar, treinar e otimizar seus agentes digitais será uma competência de liderança fundamental.`,
            quiz: [{ question: 'Qual a nova competência do gerente de vendas?', options: ['Gritar.', 'Gerenciar e orquestrar uma força de trabalho híbrida de humanos e agentes de IA.', 'Carimbar papel.'], correctAnswerIndex: 1 }],
        },
    ],
};
