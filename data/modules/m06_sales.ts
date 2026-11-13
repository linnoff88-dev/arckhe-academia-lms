
import { Module } from '../../types';
import { Bot } from '../../components/icons';

export const M6_SALES: Module = {
    id: 'm6_sales',
    title: 'Módulo 6: Automação Inteligente de Vendas',
    subtitle: 'Eliminando o trabalho manual do CRM e das cadências.',
    icon: Bot,
    lessons: [
      {
          id: 'm6_sales-l1',
          title: 'Lição 1: O Fim do Data Entry',
          videoUrl: 'https://www.youtube.com/watch?v=1A_T4k6-X7A', // HubSpot CRM Automation
          content: `## CRM Zero-Toque
A maior causa de falha em CRMs é que vendedores não preenchem dados.
Automação Inteligente conecta e-mail, calendário e LinkedIn ao CRM para registrar atividades automaticamente.
O vendedor foca em vender, o robô foca em anotar.`,
          quiz: [{ question: 'Qual o principal benefício do CRM Zero-Toque?', options: ['É mais barato.', 'Elimina a entrada manual de dados, garantindo atualização automática.', 'É mais bonito.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6_sales-l2',
          title: 'Lição 2: Cadências Automatizadas',
          videoUrl: 'https://www.youtube.com/watch?v=5dEZ_0s1F1c', // Outreach Sales Engagement
          content: `## Persistência Digital
Ferramentas de Sales Engagement (Outreach, Apollo) automatizam a sequência de toques:
Dia 1: E-mail.
Dia 3: LinkedIn.
Dia 5: Ligação.
Se o cliente responder, a automação para. Se não, ela continua até o limite definido. Ninguém é esquecido.`,
          quiz: [{ question: 'O que acontece se o cliente responder a uma cadência automatizada?', options: ['Ela continua mandando e-mail.', 'Ela pausa automaticamente para o humano assumir.', 'Ela deleta o lead.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6_sales-l3',
          title: 'Lição 3: Rotas de Leads (Lead Routing)',
          videoUrl: 'https://www.youtube.com/watch?v=9t78YjV1Kz8', // Salesforce Lead Routing
          content: `## Speed to Lead
Quando um lead levanta a mão no site, cada minuto conta.
Sistemas de roteamento usam regras (Tamanho da empresa, Região) para atribuir o lead instantaneamente ao vendedor certo e já agendar a reunião no calendário dele.`,
          quiz: [{ question: 'Por que a velocidade de roteamento (Lead Routing) é crítica?', options: ['Para cansar o vendedor.', 'Porque a chance de conversão cai drasticamente após os primeiros 5 minutos.', 'Não é importante.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6_sales-l4',
          title: 'Lição 4: Automação de Contratos',
          videoUrl: 'https://www.youtube.com/watch?v=gQddtTdmPOc', // Contract Automation
          content: `## Assinatura Sem Atrito
Gerar o contrato, preencher os dados do cliente, enviar para assinatura e cobrar follow-up.
Tudo isso pode ser automatizado (CLM - Contract Lifecycle Management).
O vendedor clica em "Fechado" no CRM e o contrato aparece na caixa de entrada do cliente.`,
          quiz: [{ question: 'O que o CLM automatiza?', options: ['O café.', 'O ciclo de vida do contrato, da geração à assinatura.', 'A demissão.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6_sales-l5',
          title: 'Lição 5: Enriquecimento Automático',
          videoUrl: 'https://www.youtube.com/watch?v=0qQ2o1tR5jU', // Data Enrichment Tools
          content: `## Dados ao seu Alcance
Você digita o domínio "tesla.com" no CRM.
A automação busca na web: Faturamento, Nº de Funcionários, Tecnologias que usam e LinkedIn dos diretores.
O registro é populado em segundos sem pesquisa manual.`,
          quiz: [{ question: 'Qual a função do Enriquecimento Automático?', options: ['Deixar o CRM lento.', 'Preencher dados firmográficos e de contato automaticamente a partir de fontes externas.', 'Apagar dados.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6_sales-l6',
          title: 'Lição 6: Priorização de Tarefas',
          videoUrl: 'https://www.youtube.com/watch?v=GFeXcafDPlY', // Sales Task Prioritization
          content: `## O Que Fazer Agora?
O vendedor chega de manhã e tem 50 tarefas.
A automação reordena a lista baseada no engajamento recente (quem abriu e-mail hoje?) e na probabilidade de fechamento, garantindo que o tempo seja gasto onde há mais retorno.`,
          quiz: [{ question: 'Como a automação ajuda na gestão do dia?', options: ['Escondendo tarefas.', 'Priorizando atividades baseadas em sinais de engajamento e valor do deal.', 'Aleatoriamente.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6_sales-l7',
          title: 'Lição 7: Follow-up de Reunião',
          videoUrl: 'https://www.youtube.com/watch?v=V2POyQVQuzA', // Meeting AI Summary
          content: `## Nunca Mais Esqueça
Assim que a reunião no Zoom acaba, a IA transcreve, resume e a automação cria um rascunho de e-mail de "Obrigado" com os pontos discutidos, pronto para enviar.
Garante consistência e profissionalismo.`,
          quiz: [{ question: 'O que é automatizado no pós-reunião?', options: ['O almoço.', 'Transcrição, resumo e rascunho de e-mail de follow-up.', 'Nada.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6_sales-l8',
          title: 'Lição 8: Trigger Events',
          videoUrl: 'https://www.youtube.com/watch?v=3M2-vjJ_Wvk', // Sales Triggers
          content: `## Venda no Momento Certo
Automação que monitora o LinkedIn.
Se um "Champion" (cliente fã) muda de emprego, o sistema avisa o vendedor: "Sua conta X acabou de contratar seu ex-cliente Y. Ligue agora." É o momento perfeito para vender.`,
          quiz: [{ question: 'O que são Trigger Events?', options: ['Eventos de gatilho (mudança de emprego, notícia) que sinalizam oportunidade de venda.', 'Festas da empresa.', 'Erros de sistema.'], correctAnswerIndex: 0 }],
      },
      {
          id: 'm6_sales-l9',
          title: 'Lição 9: Onboarding de Cliente',
          videoUrl: 'https://www.youtube.com/watch?v=ad79nYk2keg', // Customer Onboarding Automation
          content: `## Handover Perfeito
Quando a venda fecha ("Won"), a automação dispara:
1. E-mail de boas-vindas.
2. Criação de projeto no time de CS.
3. Envio de fatura.
4. Liberação de acesso ao software.
Experiência do cliente sem falhas.`,
          quiz: [{ question: 'O que a automação de Handover garante?', options: ['Burocracia.', 'Transição suave e imediata de Vendas para Sucesso do Cliente (CS).', 'Atraso.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6_sales-l10',
          title: 'Lição 10: WhatsApp Business API',
          videoUrl: 'https://www.youtube.com/watch?v=yY1QZ9o3x_0', // WhatsApp Automation
          content: `## Conversa em Escala
Usar a API do WhatsApp para enviar mensagens de recuperação de carrinho, lembretes de reunião ou ofertas, mas permitindo que um humano assuma se o cliente responder.
Taxas de abertura de 98% vs 20% do e-mail.`,
          quiz: [{ question: 'Qual a vantagem do WhatsApp API?', options: ['É verde.', 'Altíssimas taxas de abertura e possibilidade de automação conversacional.', 'É de graça.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm6_sales-l11',
        title: 'Lição 11: Limpeza de Pipeline',
        videoUrl: 'https://www.youtube.com/watch?v=ACs5g9z8Kxo', // Pipeline Management
        content: `## Fechando a Torneira
Deals estagnados poluem a previsão de vendas.
Automação de "Stale Deals": Se um negócio não tem atividade há 30 dias, o sistema move automaticamente para "Nurture" (Nutrição) ou envia um e-mail de "Break-up" para tentar reativar ou encerrar.`,
        quiz: [{ question: 'Para que serve a automação de Stale Deals?', options: ['Para perder vendas.', 'Para manter o pipeline limpo e focado em oportunidades reais.', 'Para encher o CRM.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm6_sales-l12',
        title: 'Lição 12: Automação de Parceiros',
        videoUrl: 'https://www.youtube.com/watch?v=3M2-vjJ_Wvk', // Partner Relationship Management
        content: `## Canal Indireto
PRM (Partner Relationship Management).
Automatizar o registro de leads vindos de parceiros, cálculo de comissões e envio de materiais de marketing.
Permite escalar canais indiretos sem aumentar o time de gerentes de canal.`,
        quiz: [{ question: 'O que o PRM automatiza?', options: ['Parceiros de dança.', 'A gestão, registro de leads e comissionamento de canais de vendas parceiros.', 'O RH.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm6_sales-l13',
        title: 'Lição 13: AIOps para Vendas',
        videoUrl: 'https://www.youtube.com/watch?v=reUZRyXxUs4', // AIOps explained
        content: `## Monitorando a Máquina
Usar IA para monitorar se as integrações (Zapier, APIs) estão funcionando.
Se o lead do Facebook não caiu no CRM, o AIOps detecta e avisa a TI antes que o time de vendas perca o dia.`,
        quiz: [{ question: 'Qual a função de AIOps em vendas?', options: ['Vender.', 'Monitorar a saúde técnica das integrações e automações de vendas.', 'Fazer café.'], correctAnswerIndex: 1 }],
      },
    ],
};
