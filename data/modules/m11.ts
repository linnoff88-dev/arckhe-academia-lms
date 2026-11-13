
import { Module } from '../../types';
import { Agent } from '../../components/icons';

export const M11: Module = {
    id: 'm11',
    title: 'Módulo 11: Agentes Autônomos',
    subtitle: 'Sistemas que percebem, raciocinam e agem para atingir objetivos.',
    icon: Agent,
    lessons: [
        {
            id: 'm11-l1',
            title: 'Lição 1: O que é Agente?',
            videoUrl: 'https://www.youtube.com/watch?v=xSHqm8JsqkI',
            content: `## Além do Chat
Um Chatbot espera você perguntar. Um Agente tem iniciativa.
**Agente = LLM (Cérebro) + Memória + Ferramentas + Planejamento.**
Ele recebe um objetivo ("Aumente minhas vendas") e decide quais passos tomar para chegar lá.`,
            quiz: [{ question: 'Qual a principal característica de um Agente?', options: ['Responde rápido.', 'Tem autonomia e capacidade de agir para atingir objetivos.', 'Tem voz bonita.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11-l2',
            title: 'Lição 2: Reason + Act (ReAct)',
            videoUrl: 'https://www.youtube.com/watch?v=BSv_i92-oE8',
            content: `## Monólogo Interior
A técnica ReAct faz o modelo "falar consigo mesmo" em um loop:
1. **Pensamento:** "Preciso saber o preço do Bitcoin."
2. **Ação:** [Chamar API de Preço]
3. **Observação:** "O preço é $90k."
4. **Resposta:** "O Bitcoin está $90k."
Isso evita alucinação e permite uso de ferramentas.`,
            quiz: [{ question: 'O que significa ReAct em agentes?', options: ['Reagir a erros.', 'Reason (Raciocinar) + Act (Agir).', 'ReactJS.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11-l3',
            title: 'Lição 3: Function Calling (Tool Use)',
            videoUrl: 'https://www.youtube.com/watch?v=Oo5E_wgvtjE',
            content: `## Mãos Digitais
LLMs só geram texto. Para agirem no mundo real, precisam de "Tools".
Function Calling é a capacidade do modelo de estruturar um JSON para chamar uma API externa (Google Calendar, Stripe, CRM), efetivamente "apertando botões" de software.`,
            quiz: [{ question: 'O que permite a um LLM "usar" um software?', options: ['Mágica.', 'Function Calling (chamar APIs via saídas estruturadas).', 'Mouse virtual.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11-l4',
            title: 'Lição 4: Planejamento e Decomposição',
            videoUrl: 'https://www.youtube.com/watch?v=Wp95PxRoMS0',
            content: `## Gerente de Projeto
Diante de uma tarefa complexa ("Crie um app"), o agente primeiro quebra em subtarefas (Design, Backend, Frontend).
Pode usar técnicas como *Chain of Density* ou *Tree of Thoughts* para planejar a sequência de execução antes de agir.`,
            quiz: [{ question: 'Por que a decomposição é vital para agentes?', options: ['Para demorar mais.', 'Porque modelos lidam melhor com tarefas pequenas e sequenciais do que com objetivos vagos.', 'Para gastar tokens.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11-l5',
            title: 'Lição 5: Memória de Longo Prazo',
            videoUrl: 'https://www.youtube.com/watch?v=Wp95PxRoMS0',
            content: `## Aprendendo com a Experiência
Chatbots esquecem quando a janela fecha.
Agentes usam Bancos de Dados Vetoriais para armazenar experiências passadas, regras de negócio e feedback do usuário, tornando-se mais inteligentes com o tempo.`,
            quiz: [{ question: 'Onde agentes armazenam sua memória de longo prazo?', options: ['No disco rígido.', 'Em Bancos de Dados Vetoriais (Vector DBs).', 'Na nuvem apenas.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11-l6',
            title: 'Lição 6: Multi-Agent Systems (Coordenação)',
            videoUrl: 'https://www.youtube.com/watch?v=2c_k_BsuBv4',
            content: `## A Firma Digital
Um agente sozinho se perde ("context window overload").
Melhor ter vários agentes especialistas:
- Um "Pesquisador" busca dados.
- Um "Escritor" gera o texto.
- Um "Crítico" revisa.
Um agente "Gerente" coordena o fluxo. Frameworks: CrewAI, AutoGen.`,
            quiz: [{ question: 'Qual a vantagem de sistemas Multi-Agentes?', options: ['É mais barato.', 'Especialização e melhor controle de qualidade via revisão entre pares.', 'Mais rápido.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11-l7',
            title: 'Lição 7: Human-in-the-Loop para Agentes',
            videoUrl: 'https://www.youtube.com/watch?v=Wp95PxRoMS0',
            content: `## O Botão de Pânico
Agentes podem entrar em loops infinitos ou tomar decisões perigosas (ex: gastar dinheiro).
Human-in-the-Loop exige aprovação humana antes de ações críticas ("Enviar e-mail para 1000 pessoas? Sim/Não").`,
            quiz: [{ question: 'Para que serve a intervenção humana em agentes?', options: ['Para atrapalhar.', 'Segurança e aprovação de ações críticas.', 'Para ensinar a ler.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11-l8',
            title: 'Lição 8: AutoGPT e BabyAGI',
            videoUrl: 'https://www.youtube.com/watch?v=Oo5E_wgvtjE',
            content: `## Os Primeiros Passos
Projetos open-source que demonstraram o conceito de loops autônomos.
O usuário dá um objetivo ("Aumente meu Twitter") e o agente gera tarefas, executa, avalia o resultado e cria novas tarefas, rodando indefinidamente.`,
            quiz: [{ question: 'O que o AutoGPT popularizou?', options: ['Jogos.', 'O conceito de loops de tarefas autônomos recursivos.', 'Carros.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11-l9',
            title: 'Lição 9: Swarm Intelligence e Enxame',
            videoUrl: 'https://www.youtube.com/watch?v=xSHqm8JsqkI',
            content: `## Inteligência Emergente
Inspirado na natureza (formigas).
Muitos agentes simples, seguindo regras locais, resolvem problemas complexos sem um controle central.
OpenAI Swarm é um exemplo de framework leve e educacional para isso.`,
            quiz: [{ question: 'Swarm Intelligence foca em:', options: ['Um robô gigante.', 'Comportamento emergente de muitos agentes simples.', 'Controle central rígido.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11-l10',
            title: 'Lição 10: Agentes Econômicos',
            videoUrl: 'https://www.youtube.com/watch?v=xSHqm8JsqkI',
            content: `## Máquinas com Carteira
Agentes que possuem carteiras cripto (ou acesso a cartão de crédito) para contratar outros agentes.
Ex: Um agente de design contrata um agente de tradução por micro-centavos para entregar um projeto.`,
            quiz: [{ question: 'O que define um Agente Econômico?', options: ['Sabe investir.', 'A capacidade de realizar transações financeiras autônomas.', 'É barato.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11-l11',
            title: 'Lição 11: Agent Protocols (Pedrosi)',
            videoUrl: 'https://www.youtube.com/watch?v=RPoQQtDKTY0',
            content: `## A Linguagem dos Robôs
Para criar uma economia de agentes, eles precisam de um padrão para se comunicar.
Protocolos definem como um agente descobre outro, negocia serviço e entrega resultado, independente de quem o criou.`,
            quiz: [{ question: 'Por que precisamos de protocolos de agentes?', options: ['Para segurança.', 'Interoperabilidade (permitir que agentes diferentes conversem).', 'Para taxar.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11-l12',
            title: 'Lição 12: Breeding Agents (Phyware/OpenAI)',
            videoUrl: 'https://www.youtube.com/watch?v=2c_k_BsuBv4',
            content: `## Evolução Artificial
Conceitos onde agentes "criam" ou "treinam" outros agentes menores e especializados para resolver problemas específicos, simulando evolução darwiniana de software.`,
            quiz: [{ question: 'O conceito de Breeding Agents envolve:', options: ['Biologia.', 'Agentes criando ou otimizando outros agentes.', 'Plantas.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11-l13',
            title: 'Lição 13: LAMs (Large Action Models)',
            videoUrl: 'https://www.youtube.com/watch?v=cvba_dYjdEI',
            content: `## Navegadores de UI
Diferente de LLMs (texto), LAMs são treinados para entender interfaces gráficas (botões, menus).
Eles conseguem navegar em sites e apps feitos para humanos (ex: Rabbit R1) para executar tarefas onde não há API disponível.`,
            quiz: [{ question: 'Qual a especialidade de um LAM?', options: ['Gerar texto.', 'Navegar e interagir com interfaces gráficas de usuário (UI).', 'Falar.'], correctAnswerIndex: 1 }],
        },
    ],
};
