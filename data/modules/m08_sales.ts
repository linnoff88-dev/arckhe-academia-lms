
import { Module } from '../../types';
import { Wrench } from '../../components/icons';

export const M8_SALES: Module = {
    id: 'm8_sales',
    title: 'Módulo 8: Infraestrutura de Vendas (Sales Stack)',
    subtitle: 'As ferramentas e arquiteturas que sustentam a máquina de vendas.',
    icon: Wrench,
    lessons: [
      {
          id: 'm8_sales-l1',
          title: 'Lição 1: O Sales Stack Moderno',
          videoUrl: 'https://www.youtube.com/watch?v=3M2-vjJ_Wvk', // Modern Sales Tech Stack
          content: `## Além do CRM
O CRM é apenas o banco de dados. O stack moderno inclui:
- **Prospecção:** Apollo, ZoomInfo.
- **Engajamento:** Outreach, Salesloft.
- **Conversa:** Gong, Chorus.
- **Assinatura:** DocuSign, PandaDoc.`,
          quiz: [{ question: 'O CRM sozinho é suficiente para um time moderno?', options: ['Sim.', 'Não, é necessário um ecossistema de ferramentas integradas (Stack).', 'Depende do vendedor.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8_sales-l2',
          title: 'Lição 2: Integração (iPaaS)',
          videoUrl: 'https://www.youtube.com/watch?v=5dEZ_0s1F1c', // Zapier/Make Automation
          content: `## A Cola
Ferramentas como Zapier, Make ou Workato.
Elas conectam o formulário do site ao Slack do vendedor, e a assinatura do contrato à fatura no ERP.
Sem integração, os dados morrem em silos.`,
          quiz: [{ question: 'Qual a função do iPaaS em vendas?', options: ['Enviar e-mail.', 'Conectar e automatizar o fluxo de dados entre diferentes ferramentas do stack.', 'Fazer vídeo.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8_sales-l3',
          title: 'Lição 3: IA Embarcada vs. Standalone',
          videoUrl: 'https://www.youtube.com/watch?v=reUZRyXxUs4', // Embedding AI in SaaS
          content: `## Onde a IA vive?
- **Embarcada:** O Salesforce Einstein ou HubSpot AI (já vem na ferramenta).
- **Standalone:** Ferramentas de nicho específicas (ex: uma IA só para gerar vídeo de prospecção).
A tendência é a consolidação: plataformas grandes engolindo as features de IA.`,
          quiz: [{ question: 'O que é IA Embarcada?', options: ['IA num barco.', 'Funcionalidades de IA nativas dentro das plataformas de software existentes.', 'Robô físico.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8_sales-l4',
          title: 'Lição 4: Vector DBs para Vendas',
          videoUrl: 'https://www.youtube.com/watch?v=G2fqAlgmoPo', // Vector Databases
          content: `## Busca Semântica no CRM
Em vez de buscar por "Cliente X", buscar por "Clientes que reclamaram de preço na última semana".
Bancos vetoriais permitem armazenar o significado das conversas e documentos, habilitando buscas conceituais poderosas.`,
          quiz: [{ question: 'Como Vector DBs ajudam no CRM?', options: ['Não ajudam.', 'Permitem busca semântica e contextual em grandes volumes de texto não estruturado.', 'Fazem backup.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8_sales-l5',
          title: 'Lição 5: Ferramentas de Sales Engagement',
          videoUrl: 'https://www.youtube.com/watch?v=5dEZ_0s1F1c', // Sales Engagement Platforms
          content: `## Orquestrando o Toque
Plataformas que gerenciam a cadência. Elas dizem ao vendedor: "Hoje você tem que fazer X, Y e Z".
Garantem que nenhum lead seja abandonado e medem qual template de e-mail funciona melhor.`,
          quiz: [{ question: 'O que faz uma plataforma de Sales Engagement?', options: ['Engaja o RH.', 'Gerencia e automatiza as cadências de contato multicanal dos vendedores.', 'Vende sozinha.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8_sales-l6',
          title: 'Lição 6: Conversation Intelligence',
          videoUrl: 'https://www.youtube.com/watch?v=AJNBp-19_cM', // Gong Conversation Intelligence
          content: `## O Gravador Inteligente
Ferramentas que entram na call do Zoom, gravam, transcrevem e analisam.
Infraestrutura crítica para treinar IAs de vendas e para coaching humano.`,
          quiz: [{ question: 'Qual o input principal da Conversation Intelligence?', options: ['Texto.', 'Áudio e vídeo de reuniões de vendas.', 'Planilhas.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8_sales-l7',
          title: 'Lição 7: PLG Stack (Product-Led Growth)',
          videoUrl: 'https://www.youtube.com/watch?v=3M2-vjJ_Wvk', // PLG Tech Stack
          content: `## Dados de Uso
Ferramentas que conectam o *uso do produto* ao CRM.
Se o usuário atingiu o limite do plano gratuito, o vendedor recebe um alerta no Slack.
Requer infraestrutura de telemetria robusta (Segment, Mixpanel).`,
          quiz: [{ question: 'O que o PLG Stack conecta?', options: ['O mouse ao teclado.', 'O comportamento do usuário dentro do produto com as ferramentas de vendas.', 'O site ao Google.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8_sales-l8',
          title: 'Lição 8: Segurança e Acesso',
          videoUrl: 'https://www.youtube.com/watch?v=t3fEoJQyhH4', // Data Security
          content: `## Quem vê o quê?
Com IAs acessando o CRM, a gestão de permissões é vital.
Você não quer que o Chatbot de suporte tenha acesso aos dados de comissão dos vendedores.
RBAC (Role-Based Access Control) é mandatório.`,
          quiz: [{ question: 'Por que RBAC é importante com IA?', options: ['É bonito.', 'Para garantir que a IA e os usuários só acessem dados permitidos para sua função.', 'Para bloquear tudo.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8_sales-l9',
          title: 'Lição 9: Mobile Sales Apps',
          videoUrl: 'https://www.youtube.com/watch?v=1A_T4k6-X7A', // Salesforce Mobile
          content: `## Vendas no Bolso
O vendedor de campo precisa de acesso rápido.
Apps modernos com IA permitem ditar notas de reunião ("A reunião foi boa, ele quer proposta amanhã") e o app preenche o CRM e cria o lembrete sozinho.`,
          quiz: [{ question: 'Como a IA melhora apps móveis de vendas?', options: ['Jogos.', 'Entrada de dados por voz e acesso rápido a insights em campo.', 'Bateria.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8_sales-l10',
          title: 'Lição 10: E-signature e CLM',
          videoUrl: 'https://www.youtube.com/watch?v=gQddtTdmPOc', // DocuSign CLM
          content: `## Fechamento Digital
Infraestrutura para assinar contratos legalmente online.
Integrado ao CRM, dispara o contrato com um clique.
O CLM (Contract Lifecycle Management) usa IA para revisar cláusulas e alertar riscos antes de enviar.`,
          quiz: [{ question: 'O que o CLM gerencia?', options: ['O ciclo de vida do cliente.', 'O ciclo de vida do contrato, da criação à assinatura e renovação.', 'O estoque.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm8-sales-l11',
        title: 'Lição 11: Custo de Stack',
        videoUrl: 'https://www.youtube.com/watch?v=ad79nYk2keg', // SaaS FinOps
        content: `## Otimização de Licenças
O stack de vendas ficou caro ($500+/mês por vendedor).
A IA ajuda a identificar ferramentas subutilizadas ("Zombie SaaS") e consolidar funções em plataformas únicas para reduzir o TCO (Total Cost of Ownership).`,
        quiz: [{ question: 'Qual o desafio financeiro do Sales Stack?', options: ['É barato.', 'O alto custo por usuário e a proliferação de ferramentas não utilizadas.', 'Falta de opção.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm8-sales-l12',
        title: 'Lição 12: APIs e Webhooks',
        videoUrl: 'https://www.youtube.com/watch?v=5dEZ_0s1F1c', // APIs for Beginners
        content: `## A Linguagem da Integração
Entender o básico de como sistemas conversam.
- **API:** Pergunta e Resposta.
- **Webhook:** Notificação ("Ei, aconteceu algo aqui!").
Essencial para construir fluxos de automação em tempo real.`,
        quiz: [{ question: 'O que é um Webhook?', options: ['Um gancho de pesca.', 'Um sistema de notificação automática entre softwares quando ocorre um evento.', 'Um site.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm8-sales-l13',
        title: 'Lição 13: O Futuro do Stack',
        videoUrl: 'https://www.youtube.com/watch?v=reUZRyXxUs4', // Future of AI Stack
        content: `## Consolidação e Agentes
A tendência é que os Agentes de IA substituam várias ferramentas pontuais.
Em vez de ter uma ferramenta para pesquisar e outra para enviar e-mail, você terá um Agente que faz os dois. O stack vai encolher, mas ficará mais inteligente.`,
        quiz: [{ question: 'Qual a tendência futura para o Sales Stack?', options: ['Ficar maior.', 'Consolidação em plataformas unificadas e agentes autônomos que executam múltiplas funções.', 'Desaparecer.'], correctAnswerIndex: 1 }],
      },
    ],
};
