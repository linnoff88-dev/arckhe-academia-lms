
import { Module } from '../../types';
import { Repeat } from '../../components/icons';

export const M12_OPS: Module = {
    id: 'm12_ops',
    title: 'Módulo 12: Hiperautomação Industrial e Gêmeos Digitais',
    subtitle: 'Simulação, integração total e a fábrica do futuro.',
    icon: Repeat,
    lessons: [
        {
            id: 'm12_ops-l1',
            title: 'Lição 1: Hiperautomação em Operações',
            videoUrl: 'https://www.youtube.com/shorts/rch4de56tig',
            content: `## A Convergência
Não é apenas colocar um robô. É integrar o robô (físico) com o RPA (software), a IA (decisão) e o ERP (dados).
Hiperautomação industrial é o fluxo de dados contínuo do pedido do cliente até a entrega do produto, sem gaps manuais.`,
            quiz: [{ question: 'O que define a hiperautomação industrial?', options: ['Muitos robôs.', 'A integração total de tecnologias físicas e digitais para automatizar o fluxo de valor.', 'Internet rápida.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12_ops-l2',
            title: 'Lição 2: O Que é Digital Twin?',
            videoUrl: 'https://www.youtube.com/watch?v=s8Lims4xYnE',
            content: `## Réplica Viva
Um modelo digital de um ativo físico que é alimentado com dados em tempo real.
Não é apenas um desenho 3D (CAD). Se o motor real esquenta, o gêmeo digital esquenta na tela. Permite monitoramento remoto imersivo.`,
            quiz: [{ question: 'Qual a diferença de um modelo 3D para um Digital Twin?', options: ['A cor.', 'O Digital Twin é conectado a dados reais e reflete o estado do ativo vivo.', 'O preço.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12_ops-l3',
            title: 'Lição 3: Simulação de Cenários (What-if)',
            videoUrl: 'https://www.youtube.com/watch?v=Uqr1mZgxjiY',
            content: `## Prever o Futuro
Com o Gêmeo Digital, você pode perguntar: "O que acontece se eu aumentar a velocidade da esteira em 15%?".
O sistema simula a física e prevê: "A produção sobe 10%, mas o motor superaquece em 2 horas". Decisão informada sem risco.`,
            quiz: [{ question: 'Para que serve a simulação What-if?', options: ['Jogar.', 'Testar mudanças operacionais em ambiente virtual para prever impactos e riscos.', 'Desenhar.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12_ops-l4',
            title: 'Lição 4: DTO (Digital Twin of Organization)',
            videoUrl: 'https://www.youtube.com/watch?v=_DbBD8XW7lY',
            content: `## Gêmeo do Processo
Não apenas gêmeos de máquinas, mas da organização inteira.
Mapeia como os departamentos interagem. Permite ver como um atraso em Compras afeta a Entrega, visualizando o fluxo de valor completo.`,
            quiz: [{ question: 'O que um DTO modela?', options: ['Prédios.', 'Processos organizacionais e interações entre departamentos.', 'Pessoas.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12_ops-l5',
            title: 'Lição 5: Comissionamento Virtual',
            videoUrl: 'https://www.youtube.com/watch?v=3WBIrqbN5zA',
            content: `## Testar Antes de Construir
Ao montar uma nova linha de produção, você constrói primeiro no virtual.
Testa o código dos PLCs e a lógica dos robôs no simulador. Quando as máquinas reais chegam, o software já está validado. Reduz o tempo de startup em meses.`,
            quiz: [{ question: 'Qual a vantagem do comissionamento virtual?', options: ['É um jogo.', 'Validar software e lógica antes da instalação física, reduzindo tempo e erros.', 'É barato.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12_ops-l6',
            title: 'Lição 6: Integração IT/OT na Hiperautomação',
            videoUrl: 'https://www.youtube.com/watch?v=t3fEoJQyhH4',
            content: `## Loop Fechado
O sensor (OT) detecta defeito -> IA analisa -> ERP (IT) bloqueia o lote -> CRM (IT) avisa o cliente do atraso -> PLM (Engenharia) recebe alerta para revisar design.
Tudo conectado automaticamente.`,
            quiz: [{ question: 'O que é o Loop Fechado na hiperautomação?', options: ['Um círculo.', 'O fluxo automático de dados e ações entre o chão de fábrica (OT) e os sistemas corporativos (IT).', 'Uma falha.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12_ops-l7',
            title: 'Lição 7: Process Mining para Otimização',
            videoUrl: 'https://www.youtube.com/watch?v=32yeeX2HkyU',
            content: `## Mineração Contínua
O Process Mining não é um projeto de uma vez. É um monitor contínuo.
Ele alerta quando o processo real desvia do processo ideal (Compliance).
"Alerta: A etapa de inspeção foi pulada em 5% dos casos hoje."`,
            quiz: [{ question: 'Como usar Process Mining de forma contínua?', options: ['Como auditoria pontual.', 'Como monitoramento de conformidade em tempo real, alertando desvios.', 'Não usar.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12_ops-l8',
            title: 'Lição 8: Automação de Decisões Complexas',
            videoUrl: 'https://www.youtube.com/watch?v=w2-Y55tLwdk',
            content: `## Decision Intelligence
Decisões que envolvem muitas variáveis (Qual pedido priorizar? Qual máquina parar?).
A IA recomenda a melhor decisão baseada na função objetivo (Maximizar lucro? Minimizar atraso?) e o humano aprova ou o sistema executa.`,
            quiz: [{ question: 'O que a Decision Intelligence automatiza?', options: ['Cálculos simples.', 'Tomadas de decisão complexas com múltiplas variáveis e objetivos conflitantes.', 'Nada.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12_ops-l9',
            title: 'Lição 9: AR/VR na Manutenção (Metaverso Industrial)',
            videoUrl: 'https://www.youtube.com/watch?v=s8Lims4xYnE', // Digital Twin/AR
            content: `## Teletransporte de Expert
Um técnico júnior usa óculos de Realidade Aumentada. Um especialista na Alemanha vê o que ele vê e desenha setas no campo de visão dele: "Gire este parafuso".
Manutenção remota colaborativa.`,
            quiz: [{ question: 'Como AR/VR ajuda na manutenção?', options: ['Jogando.', 'Permitindo suporte remoto especializado e visualização de instruções sobrepostas.', 'Assistindo TV.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12_ops-l10',
            title: 'Lição 10: RPA Cognitivo em Logística',
            videoUrl: 'https://www.youtube.com/watch?v=933jvEBm5hE',
            content: `## Documentação de Fronteira
Despacho aduaneiro envolve milhares de papéis.
RPA Cognitivo lê, classifica e preenche formulários de alfândega, verificando HS Codes automaticamente. Reduz tempo de liberação de carga.`,
            quiz: [{ question: 'O que o RPA Cognitivo faz na alfândega?', options: ['Suborna.', 'Processa documentação complexa automaticamente, agilizando a liberação.', 'Esconde carga.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12-ops-l11',
            title: 'Lição 11: Plataformas de Hiperautomação',
            videoUrl: 'https://www.youtube.com/watch?v=EzTNFV-s6XU',
            content: `## O Sistema Operacional
Plataformas como UiPath ou Power Automate que unificam RPA, IA, Process Mining e API em um único ambiente.
Permite gerenciar todo o parque de automação de forma centralizada e segura.`,
            quiz: [{ question: 'Qual a função de uma plataforma de hiperautomação?', options: ['Hospedar site.', 'Centralizar e orquestrar as diversas ferramentas de automação da empresa.', 'Vender peças.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12-ops-l12',
            title: 'Lição 12: ROI e KPI de Gêmeos Digitais',
            videoUrl: 'https://www.youtube.com/watch?v=XkCtCFArEEg',
            content: `## Medindo o Valor
Digital Twin é caro. O ROI vem de:
- Redução de tempo de setup.
- Otimização energética.
- Aumento de throughput (vazão).
KPIs devem focar em eficiência global e redução de desperdício.`,
            quiz: [{ question: 'Onde está o ROI do Digital Twin?', options: ['Na beleza.', 'Na otimização operacional, redução de tempo de parada e economia de energia.', 'No hardware.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12-ops-l13',
            title: 'Lição 13: A Fábrica Definida por Software',
            videoUrl: 'https://www.youtube.com/watch?v=G1pZdIq-a-w',
            content: `## Flexibilidade Total
O futuro: O hardware é genérico. O software define o que a fábrica faz.
Mudar de produzir Carro A para Carro B é uma atualização de software (download), não uma reengenharia física completa. Hiper-flexibilidade.`,
            quiz: [{ question: 'O que é uma fábrica definida por software?', options: ['Uma simulação.', 'Uma planta flexível onde a funcionalidade é alterada via software, não hardware.', 'Fábrica de CD.'], correctAnswerIndex: 1 }],
        },
    ],
};
