
import { Module } from '../../types';
import { Repeat } from '../../components/icons';

export const M12_LEAD: Module = {
    id: 'm12_lead',
    title: 'Módulo 12: Hiperautomação para Gestores',
    subtitle: 'Escalando a operação sem escalar o headcount.',
    icon: Repeat,
    lessons: [
        {
            id: 'm12_lead-l1',
            title: 'Lição 1: O Mindset de Automação First',
            videoUrl: 'https://www.youtube.com/shorts/rch4de56tig',
            content: `## Antes de Contratar
Diante de um aumento de demanda, o reflexo antigo era "abrir vaga".
O novo reflexo: "Podemos automatizar?".
O líder deve desafiar o time a eliminar o trabalho manual antes de pedir mais braços.`,
            quiz: [{ question: 'Qual o princípio do Automation First?', options: ['Contratar rápido.', 'Buscar soluções de automação antes de considerar aumento de equipe humana.', 'Não crescer.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12_lead-l2',
            title: 'Lição 2: Identificando Oportunidades (Heatmap)',
            videoUrl: 'https://www.youtube.com/watch?v=32yeeX2HkyU',
            content: `## Onde dói?
Mapear os processos do time. Onde gastamos mais horas em tarefas repetitivas de baixo valor?
Usar ferramentas de Task Mining ou workshops para criar um mapa de calor de ineficiência. O ROI está ali.`,
            quiz: [{ question: 'Como encontrar o que automatizar?', options: ['Adivinhando.', 'Mapeando onde o time gasta mais tempo em tarefas repetitivas e de baixo valor cognitivo.', 'Sorteio.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12_lead-l3',
            title: 'Lição 3: RPA vs IA vs Integração',
            videoUrl: 'https://www.youtube.com/watch?v=YevFxH3n02s',
            content: `## A Ferramenta Certa
- **Integração (API):** Sistemas conversando (Melhor opção).
- **RPA:** Robô clicando na tela (Quando não tem API).
- **IA:** Ler documentos ou tomar decisões (Quando o dado não é estruturado).
O líder não precisa programar, mas precisa saber o que pedir.`,
            quiz: [{ question: 'Quando usar RPA?', options: ['Sempre.', 'Quando sistemas não têm integração (API) e exigem interação na interface.', 'Nunca.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12_lead-l4',
            title: 'Lição 4: Automatizando Relatórios',
            videoUrl: 'https://www.youtube.com/watch?v=1A_T4k6-X7A',
            content: `## Fim do Excel Manual
Se alguém do seu time gasta 4 horas por semana "montando relatório", isso é um desperdício.
Conectar fontes de dados (Data Lake) a visualizadores (PowerBI) para que o relatório esteja sempre pronto e vivo.`,
            quiz: [{ question: 'Qual o objetivo da automação de relatórios?', options: ['Ficar bonito.', 'Ter dados em tempo real e liberar horas humanas gastas em "copiar e colar".', 'Gastar licença.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12_lead-l5',
            title: 'Lição 5: Workflows de Aprovação',
            videoUrl: 'https://www.youtube.com/watch?v=6gn8yFcMnU4',
            content: `## Desbloqueando a Chefia
Você é o gargalo? E-mails de "Aprovar compra" ou "Aprovar férias" parados na sua caixa.
Automatizar fluxos de aprovação (no Slack/Teams) onde você clica em um botão "Aprovar" e o sistema faz o resto.`,
            quiz: [{ question: 'Como workflows ajudam o líder?', options: ['Dando poder.', 'Eliminando gargalos de decisão e centralizando aprovações em interfaces rápidas.', 'Escondendo pedidos.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12_lead-l6',
            title: 'Lição 6: Governança de Automação',
            videoUrl: 'https://www.youtube.com/watch?v=T3LxKDUPu-4',
            content: `## Quem cuida do robô?
Se o robô quebra, quem conserta?
Definir donos para as automações.
Evitar "Shadow Automation" (robôs que ninguém sabe que existem e executam processos críticos).`,
            quiz: [{ question: 'O que é vital na gestão de automações?', options: ['Dar nomes.', 'Definir propriedade e manutenção clara para evitar falhas silenciosas.', 'Desligar à noite.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12_lead-l7',
            title: 'Lição 7: Onboarding e Offboarding Zero Touch',
            videoUrl: 'https://www.youtube.com/watch?v=w2-Y55tLwdk',
            content: `## Fluxo de Gente
Entrada e saída de funcionários gera centenas de tarefas (TI, RH, Financeiro).
Orquestrar isso para que, com um clique no RH, todos os sistemas (Slack, Google, Jira) provisionem ou revoguem acessos automaticamente.`,
            quiz: [{ question: 'O que é Zero Touch no ciclo de vida do funcionário?', options: ['Sem contato físico.', 'Provisionamento e desprovisionamento de acessos totalmente automatizado.', 'Não contratar.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12_lead-l8',
            title: 'Lição 8: Gestão de Processos de Negócio (BPM)',
            videoUrl: 'https://www.youtube.com/watch?v=Uqr1mZgxjiY',
            content: `## Processo antes da Tecnologia
Automatizar um processo ruim apenas gera problemas mais rápido.
O líder deve primeiro simplificar e otimizar o processo (Lean) antes de aplicar a tecnologia de hiperautomação.`,
            quiz: [{ question: 'Qual o passo anterior à automação?', options: ['Comprar software.', 'Otimização e simplificação do processo (Lean).', 'Contratar dev.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12_lead-l9',
            title: 'Lição 9: Democratização (Citizen Developer)',
            videoUrl: 'https://www.youtube.com/watch?v=wsBf6Pd37Ho',
            content: `## Poder na Ponta
Incentivar que o próprio time crie suas automações simples (usando Zapier/Power Automate).
O líder cria o espaço seguro e a governança, o time inova na ponta.`,
            quiz: [{ question: 'Quem é o Citizen Developer?', options: ['Cidadão comum.', 'Funcionário não-técnico empoderado para criar suas próprias automações.', 'O prefeito.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12_lead-l10',
            title: 'Lição 10: Métricas de Sucesso da Automação',
            videoUrl: 'https://www.youtube.com/watch?v=3WBIrqbN5zA',
            content: `## Além do Tempo
Não meça apenas horas salvas.
Meça: Redução de erros, aumento da satisfação do funcionário (menos trabalho chato) e velocidade de entrega (SLA).`,
            quiz: [{ question: 'Qual uma métrica qualitativa de automação?', options: ['Dinheiro.', 'Satisfação do time por eliminar trabalho repetitivo.', 'Número de robôs.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12-lead-l11',
            title: 'Lição 11: Resiliência e Dependência',
            videoUrl: 'https://www.youtube.com/watch?v=fCjnoPdNfgI',
            content: `## E se a API cair?
Criar sistemas resilientes.
O líder deve questionar: "O que acontece se a automação falhar?". Ter planos de contingência manual ou redundância.`,
            quiz: [{ question: 'O que o líder deve garantir na arquitetura?', options: ['Beleza.', 'Resiliência e planos de contingência para falhas de automação.', 'Nada.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12-lead-l12',
            title: 'Lição 12: Gestão de Exceções',
            videoUrl: 'https://www.youtube.com/watch?v=KO6kr7oOHXI',
            content: `## A Regra 80/20
Automatize os 80% padrão. Deixe os 20% de exceções para humanos.
Tentar automatizar 100% das exceções custa caro demais. O líder define o corte de viabilidade.`,
            quiz: [{ question: 'Qual a estratégia para exceções complexas?', options: ['Automatizar tudo.', 'Deixar para tratamento humano (Human-in-the-loop) e focar a automação no padrão.', 'Ignorar.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12-lead-l13',
            title: 'Lição 13: A Empresa Autônoma (Visão)',
            videoUrl: 'https://www.youtube.com/watch?v=gqkWf2A1zyU',
            content: `## O Futuro Operacional
Uma empresa onde os processos operacionais rodam sozinhos e a inteligência humana é focada 100% em inovação, estratégia e relacionamento.
O líder deixa de ser "capataz" para ser "arquiteto".`,
            quiz: [{ question: 'Qual a visão final da hiperautomação?', options: ['Fim do trabalho.', 'Empresa autônoma onde humanos focam exclusivamente em valor estratégico.', 'Skynet.'], correctAnswerIndex: 1 }],
        },
    ],
};
