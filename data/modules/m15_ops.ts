
import { Module } from '../../types';
import { Sparkles } from '../../components/icons';

export const M15_OPS: Module = {
    id: 'm15_ops',
    title: 'Módulo 15: Escalabilidade e Resiliência Operacional',
    subtitle: 'Saindo do piloto para a escala global com estratégias avançadas.',
    icon: Sparkles,
    lessons: [
        {
            id: 'm15_ops-l1',
            title: 'Lição 1: O Purgatório dos Pilotos',
            videoUrl: 'https://www.youtube.com/watch?v=reUZRyXxUs4', // Strategy and Scale
            content: `## Por que a IA trava?
Muitas empresas fazem 10 POCs (Provas de Conceito) de sucesso, mas zero deploys globais.
Causas: Falta de arquitetura robusta, custo de escala não calculado e resistência cultural.
A estratégia deve ser "Think Big, Start Small, Scale Fast".`,
            quiz: [{ question: 'O que é o "Pilot Purgatory"?', options: ['Um lugar ruim.', 'Ficar preso em provas de conceito infinitas sem conseguir escalar para produção.', 'Piloto de avião.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15_ops-l2',
            title: 'Lição 2: Resiliência de Supply Chain',
            videoUrl: 'https://www.youtube.com/watch?v=933jvEBm5hE',
            content: `## Antifrágil
Cadeias eficientes são frágeis (Just-in-Time extremo).
IA ajuda a construir cadeias resilientes: Múltiplos fornecedores, rotas alternativas ativadas automaticamente e estoques estratégicos dinâmicos para absorver choques (como pandemias).`,
            quiz: [{ question: 'Qual o foco da resiliência em Supply Chain?', options: ['Ser mais rápido.', 'Capacidade de absorver choques e se recuperar rapidamente de interrupções.', 'Gastar menos.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15_ops-l3',
            title: 'Lição 3: Padronização vs. Adaptação Local',
            videoUrl: 'https://www.youtube.com/watch?v=3WBIrqbN5zA',
            content: `## O Dilema Global
Ao escalar IA para 50 fábricas, o modelo da fábrica A funciona na B?
Provavelmente não (sensores diferentes, clima diferente).
Estratégias de MLOps para "Transfer Learning" permitem adaptar o modelo central para a realidade local com pouco esforço.`,
            quiz: [{ question: 'Qual o desafio de escalar modelos de IA entre fábricas?', options: ['A língua.', 'Variações locais de equipamento e ambiente que exigem adaptação do modelo.', 'O horário.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15_ops-l4',
            title: 'Lição 4: Centros de Comando Remoto',
            videoUrl: 'https://www.youtube.com/watch?v=Ri34OmpEpU8',
            content: `## Torre de Controle
Centralizar a monitoria de operações globais em uma sala.
Especialistas de alto nível suportam operadores locais em tempo real, guiados por alertas preditivos da IA. Otimiza o uso de talento escasso.`,
            quiz: [{ question: 'O que é uma Torre de Controle Operacional?', options: ['Aeroporto.', 'Central unificada de monitoramento e decisão para múltiplas operações remotas.', 'Vigilância.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15_ops-l5',
            title: 'Lição 5: Manufatura como Serviço (MaaS)',
            videoUrl: 'https://www.youtube.com/watch?v=Q0rh6O35djI',
            content: `## Fábrica Flexível
Usar a capacidade ociosa da fábrica para produzir para terceiros, ou terceirizar picos de demanda.
Plataformas digitais conectam quem tem máquina parada com quem precisa produzir, criando um "Uber da Indústria".`,
            quiz: [{ question: 'O que é Manufacturing as a Service?', options: ['Alugar galpão.', 'Compartilhamento flexível de capacidade produtiva sob demanda via plataforma.', 'Vender máquina.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15_ops-l6',
            title: 'Lição 6: Economia Circular e IA',
            videoUrl: 'https://www.youtube.com/watch?v=hAQSLARIkgc',
            content: `## Logística Reversa Inteligente
Usar IA para classificar resíduos e otimizar a desmontagem de produtos para reciclagem.
Design de produto otimizado por IA para durabilidade e facilidade de reparo, reduzindo o desperdício total do ciclo.`,
            quiz: [{ question: 'Como a IA apoia a economia circular?', options: ['Jogando fora.', 'Otimizando o design para reuso e automatizando a triagem de reciclagem.', 'Queimando lixo.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15_ops-l7',
            title: 'Lição 7: Gestão de Energia Distribuída (DER)',
            videoUrl: 'https://www.youtube.com/watch?v=yCTXWus2QTI',
            content: `## Fábrica Usina
Gerenciar painéis solares, baterias e geradores da fábrica com IA.
Decidir automaticamente: "Agora a energia da rede está cara, vamos usar a bateria. Agora está barata, vamos carregar". Redução brutal de custo.`,
            quiz: [{ question: 'O que a IA gerencia em DER?', options: ['A luz do banheiro.', 'A geração, armazenamento e consumo inteligente de energia local.', 'O ar condicionado.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15_ops-l8',
            title: 'Lição 8: Qualidade Preditiva 4.0',
            videoUrl: 'https://www.youtube.com/watch?v=_NKQCzuZbKc',
            content: `## Zero Defeito
Não apenas detectar o defeito (Controle), mas prever que ele vai acontecer baseando-se nas condições do processo e ajustar a máquina automaticamente para evitá-lo (Garantia).`,
          quiz: [{ question: 'Qual a evolução do controle de qualidade?', options: ['Inspecionar mais.', 'Prever e evitar o defeito antes que ele ocorra ajustando o processo.', 'Ignorar defeitos.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15_ops-l9',
            title: 'Lição 9: Operações em Nuvem (Cloud Mfg)',
            videoUrl: 'https://www.youtube.com/watch?v=-_KbDTz0Bus',
            content: `## O MES na Nuvem
Mover o sistema de execução de manufatura (MES) para a nuvem permite visibilidade global e atualização constante.
Desafio: Garantir latência e segurança (Edge Computing como backup).`,
            quiz: [{ question: 'Qual a vantagem do Cloud Manufacturing?', options: ['É moda.', 'Visibilidade unificada global e escalabilidade de software.', 'Não precisa de internet.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15_ops-l10',
            title: 'Lição 10: Simulação de Eventos Discretos',
            videoUrl: 'https://www.youtube.com/watch?v=s8Lims4xYnE',
            content: `## Otimização de Fluxo
Simular o movimento de cada peça e empilhadeira na fábrica ao longo do tempo.
Identificar gargalos dinâmicos: "Às 14h, a empilhadeira 3 causa fila na máquina 5". Ajustar o layout ou a escala.`,
            quiz: [{ question: 'Para que serve a simulação de eventos discretos?', options: ['Fazer filmes.', 'Analisar e otimizar o fluxo temporal de itens e recursos na operação.', 'Calcular lucro.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15-ops-l11',
            title: 'Lição 11: Estratégia de Dados Mestre (MDM)',
            videoUrl: 'https://www.youtube.com/watch?v=Opa7Zkq-3pA',
            content: `## A Base da Escala
Para escalar, "Parafuso" tem que ter o mesmo código no Brasil e na China.
Projetos globais de Master Data Management (MDM) com IA para limpar e unificar cadastros são o pré-requisito para compras globais e benchmarks.`,
            quiz: [{ question: 'Por que MDM é vital para escala?', options: ['Burocracia.', 'Garante linguagem comum e dados consistentes entre unidades, permitindo sinergia global.', 'Não serve.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15-ops-l12',
            title: 'Lição 12: Modelos de Negócio Servitizados',
            videoUrl: 'https://www.youtube.com/watch?v=gqkWf2A1zyU',
            content: `## Equipamento como Serviço
Em vez de vender a máquina, vender a disponibilidade (uptime) ou a peça produzida.
Isso só é possível com IoT e IA monitorando o uso e a saúde do ativo remotamente para cobrar e manter.`,
            quiz: [{ question: 'O que habilita o modelo "As a Service" na indústria?', options: ['Contrato.', 'Monitoramento remoto IoT e manutenção preditiva para garantir disponibilidade.', 'Marketing.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15-ops-l13',
            title: 'Lição 13: A Jornada da Autonomia',
            videoUrl: 'https://www.youtube.com/watch?v=jX33z1tGSQg',
            content: `## O Mapa do Futuro
Nível 1: Monitoramento (Ver).
Nível 2: Controle (Agir).
Nível 3: Otimização (Melhorar).
Nível 4: Autonomia (Decidir).
Definir onde cada processo está e qual o próximo passo lógico de investimento.`,
            quiz: [{ question: 'Qual o objetivo final da jornada de operações?', options: ['Ver tudo.', 'Sistemas autônomos que se otimizam e decidem dentro de limites seguros.', 'Comprar software.'], correctAnswerIndex: 1 }],
        },
    ],
};
