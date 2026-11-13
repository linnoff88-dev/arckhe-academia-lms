
import { Module } from '../../types';
import { Agent } from '../../components/icons';

export const M11_LEAD: Module = {
    id: 'm11_lead',
    title: 'Módulo 11: Agentes Autônomos na Gestão',
    subtitle: 'Orquestrando uma força de trabalho híbrida (Humanos + Bots).',
    icon: Agent,
    lessons: [
        {
            id: 'm11_lead-l1',
            title: 'Lição 1: O Conceito de Agente Executivo',
            videoUrl: 'https://www.youtube.com/watch?v=xSHqm8JsqkI',
            content: `## O Estagiário Infinito
Um Agente não é um chatbot. É um software com um objetivo.
"Agende reuniões com todos os líderes de projeto".
Ele olha a agenda, manda e-mails, negocia horários e envia o convite.
O líder deixa de fazer a tarefa e passa a *definir o objetivo*.`,
            quiz: [{ question: 'Qual a diferença de um Agente para um Chatbot?', options: ['O preço.', 'O Agente persegue objetivos e executa ações (Tools) autonomamente.', 'A voz.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11_lead-l2',
            title: 'Lição 2: Agentes de Agendamento (EA)',
            videoUrl: 'https://www.youtube.com/watch?v=0iC5sIgZuOs',
            content: `## Secretária Executiva Digital
Ferramentas como Clara ou Motion.
Elas negociam horários com externos, protegem seu tempo de foco ("Deep Work") e reorganizam a agenda automaticamente se uma reunião atrasar.
Recupera 20% do tempo do líder.`,
            quiz: [{ question: 'O que agentes de agendamento resolvem?', options: ['Solidão.', 'A gestão complexa da agenda e proteção do tempo de foco.', 'Fome.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11_lead-l3',
            title: 'Lição 3: Agentes de Pesquisa e Briefing',
            videoUrl: 'https://www.youtube.com/watch?v=3M2-vjJ_Wvk',
            content: `## Preparação Instantânea
Antes de entrar numa reunião com um cliente ou parceiro, seu agente varre o LinkedIn e as notícias recentes e te manda um resumo: "Quem são, o que fizeram recentemente e quais os pontos de conexão".
Você chega preparado.`,
            quiz: [{ question: 'Qual a função de um agente de briefing?', options: ['Fazer café.', 'Coletar inteligência contextual sobre pessoas/empresas antes de interações.', 'Gravar a reunião.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11_lead-l4',
            title: 'Lição 4: Agentes de Recrutamento',
            videoUrl: 'https://www.youtube.com/watch?v=Z5W7-3W3N4o',
            content: `## Hunter 24/7
Agentes que buscam candidatos passivos no LinkedIn, enviam mensagens personalizadas de abordagem e fazem a triagem inicial.
O líder só entrevista quem já foi pré-qualificado e está interessado.`,
            quiz: [{ question: 'Como agentes atuam no recrutamento?', options: ['Entrevistando.', 'Buscando ativamente (Sourcing) e engajando candidatos passivos.', 'Demitindo.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11_lead-l5',
            title: 'Lição 5: Multi-Agentes (O Time Virtual)',
            videoUrl: 'https://www.youtube.com/watch?v=2c_k_BsuBv4',
            content: `## Equipe na Nuvem
Criar um time de agentes especializados:
- Um "Analista de Dados" (Code Interpreter).
- Um "Redator" (GPT-4).
- Um "Crítico" (Claude 3).
Você dá a tarefa, eles conversam entre si e te entregam o relatório final. Frameworks como CrewAI.`,
            quiz: [{ question: 'O que é um sistema Multi-Agente?', options: ['Um vírus.', 'Vários agentes especializados colaborando para resolver uma tarefa complexa.', 'Muitas pessoas.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11_lead-l6',
            title: 'Lição 6: Delegação e Supervisão',
            videoUrl: 'https://www.youtube.com/watch?v=Wp95PxRoMS0',
            content: `## A Nova Competência
Como liderar robôs?
Definir o "Definition of Done" (DoD) com precisão absoluta.
Monitorar os outputs (saídas) e não o processo.
Saber intervir quando o agente entra em loop ou alucina (Human-in-the-Loop).`,
            quiz: [{ question: 'Qual a chave para liderar agentes?', options: ['Gritar.', 'Definição precisa de objetivos e critérios de sucesso (DoD) e supervisão de output.', 'Deixar solto.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11_lead-l7',
            title: 'Lição 7: Agentes de Onboarding',
            videoUrl: 'https://www.youtube.com/watch?v=ad79nYk2keg',
            content: `## O Buddy Digital
Um agente designado para cada novo funcionário.
"Olá, sou seu guia. Aqui estão suas senhas. Você tem que fazer o curso X até sexta. Dúvidas sobre benefícios? Pergunte-me."
Garante consistência na integração.`,
            quiz: [{ question: 'Qual o papel do agente de onboarding?', options: ['Vigiar.', 'Guiar e suportar o novo colaborador em seus primeiros passos e tarefas.', 'Fazer o trabalho dele.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11_lead-l8',
            title: 'Lição 8: Automação de Follow-up',
            videoUrl: 'https://www.youtube.com/watch?v=5dEZ_0s1F1c',
            content: `## Cobrança Suave
Líderes perdem tempo cobrando: "E aquele relatório?".
Agentes podem monitorar prazos no Asana/Jira e cobrar o time automaticamente no Slack: "Oi, o prazo é amanhã. Precisa de ajuda?".
Remove o atrito emocional da cobrança humana.`,
            quiz: [{ question: 'Como agentes ajudam na gestão de tarefas?', options: ['Fazendo a tarefa.', 'Automatizando o follow-up e lembretes de prazos, reduzindo o microgerenciamento.', 'Ignorando prazos.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11_lead-l9',
            title: 'Lição 9: Agentes Financeiros (Aprovação)',
            videoUrl: 'https://www.youtube.com/watch?v=reUZRyXxUs4',
            content: `## CFO Digital
Agentes que analisam pedidos de reembolso ou compras.
Se estiver dentro da política e do orçamento, aprova na hora. Se for suspeito, escala para o humano.
Agilidade burocrática.`,
            quiz: [{ question: 'O que um agente financeiro automatiza?', options: ['Investimentos.', 'A validação e aprovação de despesas rotineiras dentro da política.', 'Roubo.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11_lead-l10',
            title: 'Lição 10: Personalização em Escala (Liderança)',
            videoUrl: 'https://www.youtube.com/watch?v=hAQSLARIkgc',
            content: `## Atenção Individual
Como dar parabéns personalizados pelo aniversário de tempo de casa para 500 funcionários?
Agentes monitoram datas e sugerem mensagens personalizadas para o líder enviar. "Parabéns pelos 3 anos, lembro do projeto X...". Escala a empatia.`,
            quiz: [{ question: 'Como agentes ajudam na liderança de grandes times?', options: ['Fingindo.', 'Escalando toques pessoais (aniversários, conquistas) através de lembretes e rascunhos personalizados.', 'Ignorando todos.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11-lead-l11',
            title: 'Lição 11: Governança de Agentes',
            videoUrl: 'https://www.youtube.com/watch?v=t3fEoJQyhH4',
            content: `## Controle de Frota
Quantos agentes sua empresa tem? O que eles podem acessar?
Um painel de controle para ligar, desligar e auditar os agentes. Evitar que um agente "rogue" delete o banco de dados.`,
            quiz: [{ question: 'O que é vital na gestão de múltiplos agentes?', options: ['Nomes bonitos.', 'Governança centralizada de acessos, permissões e auditabilidade.', 'Deixar livres.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11-lead-l12',
            title: 'Lição 12: Custos de Agentes',
            videoUrl: 'https://www.youtube.com/watch?v=ad79nYk2keg',
            content: `## Tokenomics
Agentes gastam tokens (dinheiro) a cada pensamento.
O líder deve gerenciar o orçamento de "salário" dos agentes digitais.
Vale a pena gastar $5 num agente para agendar uma reunião? Cálculo de ROI.`,
            quiz: [{ question: 'Qual o custo operacional de agentes?', options: ['Eletricidade.', 'Custo de inferência (tokens/API) que deve ser gerido vs o valor entregue.', 'Zero.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11-lead-l13',
            title: 'Lição 13: O Futuro: Organizações Autônomas',
            videoUrl: 'https://www.youtube.com/watch?v=xSHqm8JsqkI',
            content: `## DAOs com IA
Empresas onde a operação é rodada por agentes e smart contracts, e humanos apenas definem a estratégia e recolhem o lucro.
O papel da liderança puramente estratégica.`,
            quiz: [{ question: 'Qual a visão extrema de futuro com agentes?', options: ['Fim do mundo.', 'Organizações Autônomas onde a operação é 100% digital e humanos focam em estratégia.', 'Voltar ao escritório.'], correctAnswerIndex: 1 }],
        },
    ],
};
