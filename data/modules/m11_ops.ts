
import { Module } from '../../types';
import { Agent } from '../../components/icons';

export const M11_OPS: Module = {
    id: 'm11_ops',
    title: 'Módulo 11: Agentes Autônomos em Operações',
    subtitle: 'Sistemas que monitoram, decidem e agem para manter a fábrica rodando.',
    icon: Agent,
    lessons: [
        {
            id: 'm11_ops-l1',
            title: 'Lição 1: Agentes de Monitoramento',
            videoUrl: 'https://www.youtube.com/watch?v=xSHqm8JsqkI',
            content: `## Sentinelas 24/7
Agentes que vigiam fluxos de dados (IoT, Logs). Diferente de um alerta simples ("Temperatura > 50"), o agente analisa o contexto: "Temperatura subiu, mas a carga também subiu, então é normal. Não alertar."
Reduz falsos positivos e fadiga de alarme.`,
            quiz: [{ question: 'Qual a vantagem de um Agente sobre um alarme simples?', options: ['Toca música.', 'Analisa contexto e correlações para evitar falsos positivos.', 'Custa mais.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11_ops-l2',
            title: 'Lição 2: Auto-Correção (Self-Healing)',
            videoUrl: 'https://www.youtube.com/watch?v=BSv_i92-oE8',
            content: `## Ação Autônoma
Agentes de TI/OT que detectam um travamento de serviço e executam o script de reinicialização sozinhos.
Ou um agente logístico que detecta atraso e re-roteia a entrega automaticamente.
Resolve o problema antes do humano notar.`,
            quiz: [{ question: 'O que é Self-Healing?', options: ['Curar feridas.', 'Capacidade do sistema detectar falhas e aplicar correções automaticamente.', 'Backup.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11_ops-l3',
            title: 'Lição 3: Agentes de Compras (Procurement)',
            videoUrl: 'https://www.youtube.com/watch?v=Oo5E_wgvtjE',
            content: `## Reposição Automática
Monitoram o estoque. Quando atinge o nível crítico, o agente:
1. Cota preços com 3 fornecedores homologados via API/E-mail.
2. Seleciona o melhor.
3. Emite o pedido (até um valor limite pré-aprovado).
Humano só aprova exceções.`,
            quiz: [{ question: 'O que um agente de compras pode fazer autonomamente?', options: ['Gastar tudo.', 'Cotar e emitir pedidos de reposição padrão dentro de regras pré-definidas.', 'Viajar.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11_ops-l4',
            title: 'Lição 4: Orquestração de Cadeia (Supply Chain)',
            videoUrl: 'https://www.youtube.com/watch?v=2c_k_BsuBv4',
            content: `## Multi-Agentes
Um agente na Fábrica conversa com um agente no Armazém e outro na Transportadora.
Se a produção atrasa, o agente Fábrica avisa o Transporte para vir mais tarde, evitando custo de espera. Coordenação descentralizada.`,
            quiz: [{ question: 'Como multi-agentes melhoram a Supply Chain?', options: ['Brigando.', 'Coordenando ações entre diferentes elos da cadeia em tempo real.', 'Usando papel.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11_ops-l5',
            title: 'Lição 5: Assistentes de Campo',
            videoUrl: 'https://www.youtube.com/watch?v=Wp95PxRoMS0',
            content: `## Copiloto do Técnico
Agente no tablet do técnico de campo.
O técnico fala: "Estou na frente da máquina X com erro Y".
O agente busca o manual, o histórico de manutenção dessa máquina específica e sugere: "Tente trocar o fusível Z, isso resolveu o problema na última vez."`,
            quiz: [{ question: 'Qual a função do assistente de campo?', options: ['Carregar a mala.', 'Fornecer conhecimento contextual e histórico para acelerar o reparo.', 'Dirigir.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11_ops-l6',
            title: 'Lição 6: Agentes de Qualidade',
            videoUrl: 'https://www.youtube.com/watch?v=cvba_dYjdEI',
            content: `## Inspeção Contínua
Agentes de visão computacional que não apenas detectam o defeito, mas classificam o tipo, registram a ocorrência e, se o erro for recorrente, pausam a linha e chamam o supervisor.
Decisão na borda.`,
            quiz: [{ question: 'O que um agente de qualidade pode fazer além de detectar?', options: ['Nada.', 'Classificar, registrar estatísticas e tomar ações de bloqueio/alerta.', 'Limpar a peça.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11_ops-l7',
            title: 'Lição 7: Human-in-the-Loop Operacional',
            videoUrl: 'https://www.youtube.com/watch?v=Wp95PxRoMS0',
            content: `## Aprovação Crítica
O agente sugere: "Aumentar a pressão da caldeira para compensar a demanda".
Como é crítico, ele não executa. Ele manda uma notificação para o engenheiro: "Recomendo X por causa de Y. Aprovar?". Segurança em primeiro lugar.`,
            quiz: [{ question: 'Quando o Human-in-the-Loop é obrigatório em operações?', options: ['Nunca.', 'Em decisões de segurança crítica ou alto impacto financeiro.', 'Sempre.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11_ops-l8',
            title: 'Lição 8: Agentes de Agendamento',
            videoUrl: 'https://www.youtube.com/watch?v=Oo5E_wgvtjE',
            content: `## Tetris Dinâmico
Agentes que gerenciam a agenda da doca de carregamento.
Recebem solicitações de transportadoras, encaixam nos horários livres, consideram o tempo de carga previsto e re-otimizam tudo se um caminhão atrasar.`,
            quiz: [{ question: 'O que agentes de agendamento resolvem?', options: ['Quebra-cabeça.', 'A alocação dinâmica de recursos (docas, salas, técnicos) lidando com imprevistos.', 'Nada.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11_ops-l9',
            title: 'Lição 9: Swarm Robotics',
            videoUrl: 'https://www.youtube.com/watch?v=Ok5iL2cE7Qk', // Swarm Robotics
            content: `## Robôs em Enxame
AGVs (robôs de armazém) que não têm um computador central dizendo onde ir.
Eles "conversam" entre si para evitar colisões e decidir quem pega qual pacote, como formigas. Sistema resiliente e escalável.`,
            quiz: [{ question: 'Qual a característica da robótica de enxame?', options: ['Controle central.', 'Descentralização e coordenação local entre robôs autônomos.', 'São voadores.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11_ops-l10',
            title: 'Lição 10: Agentes de Eficiência Energética',
            videoUrl: 'https://www.youtube.com/watch?v=RPoQQtDKTY0',
            content: `## Smart Grid Interno
Agentes que monitoram o preço da energia (horário de ponta) e o consumo.
Eles decidem desligar cargas não essenciais (ar condicionado, carregadores) nos horários caros para reduzir a fatura automaticamente.`,
            quiz: [{ question: 'Como agentes economizam energia?', options: ['Gerando luz.', 'Gerenciando o consumo de cargas em função de tarifas e demanda em tempo real.', 'Trocando lâmpada.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11-ops-l11',
            title: 'Lição 11: Simulação e Treinamento de Agentes',
            videoUrl: 'https://www.youtube.com/watch?v=2c_k_BsuBv4',
            content: `## O Ginásio
Antes de soltar um agente na planta real, ele treina em um Gêmeo Digital (simulador).
Ele tenta milhões de estratégias para otimizar o fluxo e aprende quais causam acidentes, sem risco real. Reinforcement Learning.`,
            quiz: [{ question: 'Onde agentes complexos são treinados?', options: ['Na rua.', 'Em ambientes de simulação (Gêmeos Digitais) via aprendizado por reforço.', 'Lendo livros.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11-ops-l12',
            title: 'Lição 12: Protocolos de Comunicação entre Agentes',
            videoUrl: 'https://www.youtube.com/watch?v=cvba_dYjdEI',
            content: `## Esperanto das Máquinas
Para o Agente de Compras falar com o Agente do Fornecedor, eles precisam de um protocolo comum.
Padrões emergentes permitem negociação e transação automática entre empresas diferentes.`,
            quiz: [{ question: 'Para que servem protocolos de agentes?', options: ['Para segurança.', 'Para permitir interoperabilidade e negociação entre agentes de organizações diferentes.', 'Para criptografar.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm11-ops-l13',
            title: 'Lição 13: O Futuro: A Fábrica Autônoma',
            videoUrl: 'https://www.youtube.com/watch?v=BSv_i92-oE8',
            content: `## Lights Out Manufacturing
A visão de longo prazo: Uma fábrica gerida por uma hierarquia de agentes, do sensor ao ERP, com intervenção humana apenas para inovação e manutenção estratégica.`,
            quiz: [{ question: 'Qual a visão da Fábrica Autônoma?', options: ['Sem humanos nunca.', 'Operação gerida por agentes com humanos focados em estratégia e exceções.', 'Fábrica velha.'], correctAnswerIndex: 1 }],
        },
    ],
};
