
import { Module } from '../../types';
import { Repeat } from '../../components/icons';

export const M12: Module = {
    id: 'm12',
    title: 'Módulo 12: Hiperautomação',
    subtitle: 'A convergência de tecnologias para automação de ponta a ponta.',
    icon: Repeat,
    lessons: [
        {
            id: 'm12-l1',
            title: 'Lição 1: A Força da Hiperautomação',
            videoUrl: 'https://www.youtube.com/shorts/rch4de56tig',
            content: `## Além da Tarefa
RPA automatiza tarefas isoladas (ex: copiar dados). A Hiperautomação automatiza processos inteiros e decisões complexas.
É a combinação orquestrada de RPA + IA + Process Mining + Low Code para eliminar o atrito operacional de ponta a ponta, permitindo que a empresa opere em velocidade digital.`,
            quiz: [{ question: 'Qual a diferença de Hiperautomação para automação simples?', options: ['É mais cara.', 'Usa múltiplas tecnologias integradas para automatizar processos completos e decisões.', 'É apenas marketing.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12-l2',
            title: 'Lição 2: Process Mining como Base',
            videoUrl: 'https://www.youtube.com/watch?v=32yeeX2HkyU',
            content: `## O GPS da Automação
Você não pode automatizar o que não vê. O Process Mining conecta-se aos logs dos sistemas corporativos (SAP, Salesforce) para visualizar o fluxo real de trabalho (não o imaginado).
Ele revela gargalos invisíveis, retrabalhos e violações de conformidade, indicando exatamente onde o ROI da automação é maior.`,
            quiz: [{ question: 'O que o Process Mining revela?', options: ['Senhas.', 'O fluxo real dos processos baseado em dados de log, não em opiniões.', 'Vírus.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12-l3',
            title: 'Lição 3: IDP 2.0 (Intelligent Doc. Processing)',
            videoUrl: 'https://www.youtube.com/watch?v=w2-Y55tLwdk',
            content: `## Dados Não Estruturados
A maior parte dos dados corporativos (80%) está presa em documentos (PDFs, Imagens, E-mails).
O IDP 2.0 utiliza LLMs multimodais para "ler" esses documentos com compreensão humana, extraindo dados para o ERP sem a necessidade de templates rígidos ou OCR tradicional.`,
            quiz: [{ question: 'Qual a inovação do IDP 2.0?', options: ['Usa scanner.', 'Usa IA generativa para entender documentos sem necessidade de templates fixos.', 'Imprime.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12-l4',
            title: 'Lição 4: Automação Cognitiva e DPA',
            videoUrl: 'https://www.youtube.com/watch?v=Uqr1mZgxjiY',
            content: `## Digital Process Automation
DPA foca na orquestração do fluxo de trabalho (Workflow) entre humanos e robôs.
A Automação Cognitiva insere IA nos pontos de decisão desse fluxo (ex: Aprovar ou não um reembolso baseado na política e histórico, classificar um ticket de suporte pelo sentimento do cliente).`,
            quiz: [{ question: 'Onde a Automação Cognitiva atua?', options: ['No mouse.', 'Nos pontos de tomada de decisão complexa dentro de um processo.', 'No servidor.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12-l5',
            title: 'Lição 5: Governança da Força de Trabalho Autônoma',
            videoUrl: 'https://www.youtube.com/watch?v=_DbBD8XW7lY',
            content: `## Gerenciando Bots
Bots quebram, mudam e precisam de acesso seguro.
A governança de RPA envolve controle de versão, gestão de credenciais (quem o robô pode acessar?) e monitoramento de "saúde" dos agentes digitais, tratando-os como funcionários que precisam de supervisão e manutenção.`,
            quiz: [{ question: 'Por que governar a força de trabalho digital?', options: ['Para cobrar imposto.', 'Para garantir segurança, manutenção e continuidade operacional.', 'Para desligar tudo.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12-l6',
            title: 'Lição 6: ROI Real da Hiperautomação',
            videoUrl: 'https://www.youtube.com/watch?v=3WBIrqbN5zA',
            content: `## Valor Estratégico
O ROI não deve ser medido apenas em "horas economizadas" (FTEs).
Os ganhos reais são: Escalabilidade (crescer receita sem aumentar custo fixo), Velocidade (Time-to-market), Qualidade (redução de erro humano) e Conformidade (Auditabilidade total de cada passo do processo).`,
            quiz: [{ question: 'Qual um benefício estratégico da hiperautomação?', options: ['Gastar energia.', 'Escalabilidade das operações desvinculada do aumento de headcount.', 'Comprar software.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12-l7',
            title: 'Lição 7: DTO Digital Twin & Orquestração',
            videoUrl: 'https://www.youtube.com/watch?v=s8Lims4xYnE',
            content: `## Simulando a Empresa
Digital Twin of an Organization (DTO) é uma réplica digital dinâmica dos processos da empresa.
Permite simular cenários ("E se a demanda dobrar amanhã?", "E se mudarmos o fornecedor?") antes de implementar mudanças no mundo real, reduzindo drasticamente o risco operacional.`,
            quiz: [{ question: 'Para que serve um DTO?', options: ['Jogar The Sims.', 'Simular cenários operacionais e testar impactos antes da implementação.', 'Backup de arquivos.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12-l8',
            title: 'Lição 8: ESP Autônomo',
            videoUrl: 'https://www.youtube.com/watch?v=XkCtCFArEEg',
            content: `## Auto-Resolução
Enterprise Service Platforms que evoluem de "abrir tickets" para "resolver problemas".
A IA analisa o incidente, consulta a base de conhecimento, executa scripts de correção (ex: reiniciar servidor, liberar acesso) e notifica o usuário, tudo em segundos e sem intervenção humana.`,
            quiz: [{ question: 'O que caracteriza um ESP Autônomo?', options: ['Abre chamados.', 'Resolve incidentes automaticamente usando IA e automação.', 'Encaminha e-mail.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12-l9',
            title: 'Lição 9: Coreografia/Regulação/I-AI',
            videoUrl: 'https://www.youtube.com/watch?v=_DbBD8XW7lY',
            content: `## Compliance Automático (Regtech)
A hiperautomação garante que cada transação siga rigorosamente as regras de negócio e a legislação vigente.
Ao codificar a regulação no processo, a conformidade deixa de ser uma verificação "post-mortem" e passa a ser "by design", com auditoria em tempo real.`,
            quiz: [{ question: 'Como a automação ajuda na Regulação?', options: ['Escondendo dados.', 'Garantindo execução padronizada e auditável dos processos conforme a lei.', 'Criando leis.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12-l10',
            title: 'Lição 10: Task Mining',
            videoUrl: 'https://www.youtube.com/watch?v=G1pZdIq-a-w',
            content: `## A Última Milha da Produtividade
Enquanto o Process Mining olha os logs do servidor, o Task Mining observa o desktop do usuário.
Ele grava cliques, rolagens e atalhos para descobrir micro-ineficiências (ex: "o time copia dados do Excel para o ERP 500 vezes por dia") que são invisíveis para a TI, mas candidatas perfeitas para RPA.`,
            quiz: [{ question: 'Qual a diferença de Task Mining?', options: ['Olha logs.', 'Monitora a interação do usuário no desktop (cliques/teclas) para achar gargalos manuais.', 'Minerar tarefas.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12-l11',
            title: 'Lição 11: Automação de Comandos',
            videoUrl: 'https://www.youtube.com/watch?v=zxwgurDJs9g',
            content: `## CLI para o Povo (Natural Language Action)
Interfaces onde o usuário simplesmente digita o que quer ("Gere o relatório de vendas de ontem e envie para a diretoria") e a IA traduz isso para uma sequência de scripts de automação e queries complexas, executando a tarefa instantaneamente.`,
            quiz: [{ question: 'O que é automação via linguagem natural?', options: ['Falar sozinho.', 'Traduzir comandos de texto humano para scripts executáveis.', 'Comando de voz.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12-l12',
            title: 'Lição 12: API Orchestration (PaaS)',
            videoUrl: 'https://www.youtube.com/watch?v=Uqr1mZgxjiY',
            content: `## A Cola Digital
iPaaS (Integration Platform as a Service) como MuleSoft, Workato ou Make.
É a infraestrutura que conecta as APIs de sistemas legados e modernos, permitindo que os dados fluam livremente entre silos. Sem integração robusta, não há hiperautomação.`,
            quiz: [{ question: 'Qual a função do iPaaS?', options: ['Hospedar sites.', 'Integrar e orquestrar APIs de diferentes sistemas.', 'Criar logos.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm12-l13',
            title: 'Lição 13: Cultura “Automation First”',
            videoUrl: 'https://www.youtube.com/watch?v=EzTNFV-s6XU',
            content: `## Mudança de Mindset
Antes de contratar mais pessoas ou comprar mais software para resolver um problema de escala, a pergunta padrão deve ser: "Podemos automatizar isso?".
Isso transforma a automação de um "projeto de TI" esporádico para uma competência organizacional central e contínua.`,
            quiz: [{ question: 'O que é o mindset Automation First?', options: ['Demitir todos.', 'Considerar a automação como a solução primária para novos desafios operacionais.', 'Comprar robôs.'], correctAnswerIndex: 1 }],
        },
    ],
};
