
import { Module } from '../../types';
import { Blocks } from '../../components/icons';

export const M13_OPS: Module = {
    id: 'm13_ops',
    title: 'Módulo 13: Low-Code em Operações',
    subtitle: 'Empoderando engenheiros e técnicos a criar suas próprias ferramentas digitais.',
    icon: Blocks,
    lessons: [
        {
            id: 'm13_ops-l1',
            title: 'Lição 1: O Engenheiro Cidadão',
            videoUrl: 'https://www.youtube.com/watch?v=wsBf6Pd37Ho',
            content: `## O Fim do "Excel do Engenheiro"
Engenheiros criam planilhas complexas (e frágeis) para controlar produção.
Low-Code permite transformar essas planilhas em Apps robustos, seguros e móveis, criados pelos próprios engenheiros, sem depender da TI.`,
            quiz: [{ question: 'Por que substituir planilhas por Low-Code?', options: ['Porque é mais bonito.', 'Para ter segurança, mobilidade e integridade de dados, mantendo a agilidade de criação.', 'Porque a TI mandou.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13_ops-l2',
            title: 'Lição 2: Apps de Coleta de Dados (Chão de Fábrica)',
            videoUrl: 'https://www.youtube.com/watch?v=FiflZzoo91A',
            content: `## Adeus Prancheta
Substituir formulários de papel por tablets.
Apps criados em PowerApps/AppSheet para: Check-list de empilhadeira, Auditoria de 5S, Apontamento de refugo.
Dados nascem digitais e vão direto para o dashboard.`,
            quiz: [{ question: 'Qual a vantagem de apps de coleta?', options: ['Gastam bateria.', 'Eliminam papel e digitam o dado direto na fonte, em tempo real.', 'São pesados.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13_ops-l3',
            title: 'Lição 3: Painéis Andon Digitais',
            videoUrl: 'https://www.youtube.com/watch?v=XpRIRJo6i9I',
            content: `## Gestão à Vista Customizada
Telas caras de SCADA são rígidas.
Com Low-Code, a equipe pode criar telas de Andon (status da linha) personalizadas em horas, mostrando exatamente as métricas que importam para aquele time naquela semana.`,
            quiz: [{ question: 'O que Low-Code permite em gestão visual?', options: ['Nada.', 'Criar painéis customizados e flexíveis de forma rápida e barata.', 'Desligar telas.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13_ops-l4',
            title: 'Lição 4: Workflow de Aprovação',
            videoUrl: 'https://www.youtube.com/watch?v=6gn8yFcMnU4',
            content: `## Desburocratização
Processos de requisição de compra ou mudança de engenharia (MOC) costumam travar em e-mails.
Apps Low-Code automatizam o fluxo: Pedido -> Notifica Gerente -> Aprova no Celular -> Atualiza ERP. Rastreabilidade total.`,
            quiz: [{ question: 'Como Low-Code ajuda em aprovações?', options: ['Burocratizando.', 'Automatizando o fluxo e permitindo aprovação móvel com rastreabilidade.', 'Perdendo e-mails.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13_ops-l5',
            title: 'Lição 5: Integração com Hardware (IoT)',
            videoUrl: 'https://www.youtube.com/watch?v=mXp2PKrTlzU',
            content: `## O Botão Digital
Plataformas Low-Code modernas (Node-RED, Tulip) conectam direto com sensores e PLCs.
Você pode criar uma lógica: "Se o sensor de temperatura passar de 80°C, envie um SMS para o técnico e abra um chamado". Sem código complexo.`,
            quiz: [{ question: 'O que ferramentas como Node-RED permitem?', options: ['Jogar.', 'Conectar hardware (IoT) a serviços digitais visualmente.', 'Editar texto.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13_ops-l6',
            title: 'Lição 6: Gestão de Inventário Ágil',
            videoUrl: 'https://www.youtube.com/watch?v=gLjL6x5oyy0',
            content: `## Controle na Mão
Apps para conferência de estoque usando a câmera do celular como leitor de código de barras.
Criados internamente para se adaptar ao processo específico do armazém, custando uma fração de coletores industriais dedicados.`,
            quiz: [{ question: 'Qual a vantagem de usar celulares com apps Low-Code no armazém?', options: ['Jogar.', 'Custo reduzido e flexibilidade para criar processos de conferência customizados.', 'Quebram fácil.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13_ops-l7',
            title: 'Lição 7: Portais de Fornecedores',
            videoUrl: 'https://www.youtube.com/watch?v=zXibieP_E2A',
            content: `## Colaboração Externa
Criar portais seguros (Softr, Bubble) onde fornecedores podem subir notas fiscais, ver previsões de demanda e atualizar datas de entrega.
Integra a cadeia sem dar acesso direto ao seu ERP.`,
            quiz: [{ question: 'Para que serve um portal de fornecedor Low-Code?', options: ['Fofoca.', 'Interface segura para troca de dados e colaboração com parceiros externos.', 'Vender dados.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13_ops-l8',
            title: 'Lição 8: Governança de Apps (Shadow IT)',
            videoUrl: 'https://www.youtube.com/watch?v=T3LxKDUPu-4',
            content: `## TI como Facilitadora
O medo da TI: "Vão criar apps inseguros".
A solução: A TI provê a plataforma e segurança. A engenharia cria os apps.
Governança centralizada, inovação descentralizada.`,
            quiz: [{ question: 'Qual o papel da TI no Low-Code industrial?', options: ['Proibir.', 'Prover governança, segurança e infraestrutura para que a operação inove.', 'Fazer tudo.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13_ops-l9',
            title: 'Lição 9: Manutenção Mobile',
            videoUrl: 'https://www.youtube.com/watch?v=FiflZzoo91A',
            content: `## O Técnico Conectado
O técnico recebe a OS no celular, consulta o manual, tira foto do defeito, dita o relatório e fecha a ordem.
Tudo offline-first (funciona sem wi-fi e sincroniza depois). Essencial para áreas remotas.`,
            quiz: [{ question: 'O que é funcionalidade Offline-First?', options: ['Não funciona.', 'Capacidade do app funcionar sem internet e sincronizar dados quando conectar.', 'Internet lenta.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13_ops-l10',
            title: 'Lição 10: Qualidade e Rastreabilidade',
            videoUrl: 'https://www.youtube.com/watch?v=0YXyvBcysLg',
            content: `## Registro Digital
Apps que obrigam o operador a seguir o roteiro de inspeção.
Se ele marcar "Não Conforme", o app exige uma foto e abre um plano de ação.
Garante que o processo de qualidade foi seguido.`,
            quiz: [{ question: 'Como apps Low-Code garantem qualidade?', options: ['Não garantem.', 'Forçando o cumprimento de fluxos de trabalho e coleta de evidências (fotos).', 'Sendo bonitos.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13-ops-l11',
            title: 'Lição 11: Automação de Etiquetas',
            videoUrl: 'https://www.youtube.com/watch?v=gGt1Nq3zA1Q',
            content: `## Impressão Inteligente
Apps que conectam com impressoras térmicas.
O operador scaneia o produto e clica "Imprimir Etiqueta de Expedição". O sistema gera o ZPL correto com dados do ERP e imprime na hora.`,
            quiz: [{ question: 'O que apps de etiqueta resolvem?', options: ['Erro de digitação.', 'Geração automática de etiquetas corretas integradas ao sistema.', 'Colar etiqueta.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13-ops-l12',
            title: 'Lição 12: Treinamento com Apps',
            videoUrl: 'https://www.youtube.com/watch?v=Q0rh6O35djI',
            content: `## Onboarding Digital
Apps simples de treinamento e quiz para novos operadores.
Antes de operar a máquina, ele deve passar no quiz de segurança do dia no tablet. Registro digital de competência.`,
            quiz: [{ question: 'Como usar apps para segurança?', options: ['Jogando.', 'Verificando conhecimento de segurança antes de liberar operação.', 'Tirando foto.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13-ops-l13',
            title: 'Lição 13: O Futuro: App Generation',
            videoUrl: 'https://www.youtube.com/watch?v=XpRIRJo6i9I',
            content: `## Fale e Crie
O futuro do Low-Code é a IA Generativa.
O engenheiro dirá: "Crie um app para inspecionar extintores com leitor de QR Code e geolocalização".
A IA gera o app pronto para uso em segundos.`,
            quiz: [{ question: 'Qual o futuro do desenvolvimento de apps operacionais?', options: ['Contratar dev.', 'Geração de aplicativos via prompt de linguagem natural (IA + Low-Code).', 'Excel.'], correctAnswerIndex: 1 }],
        },
    ],
};
