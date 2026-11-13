
import { Module } from '../../types';
import { Blocks } from '../../components/icons';

export const M13_SALES: Module = {
    id: 'm13_sales',
    title: 'Módulo 13: Low-Code para Vendas',
    subtitle: 'Construindo ferramentas comerciais sem depender da TI.',
    icon: Blocks,
    lessons: [
      {
          id: 'm13_sales-l1',
          title: 'Lição 1: O Vendedor Maker',
          videoUrl: 'https://www.youtube.com/watch?v=ad79nYk2keg', // Introduction to No-Code
          content: `## Autonomia
Vendas é dinâmico. Esperar meses pela TI para mudar um campo no CRM ou criar um formulário é inaceitável.
Low-Code permite que Operations ou Gerentes de Vendas criem suas próprias ferramentas e automações com agilidade.`,
          quiz: [{ question: 'Por que Low-Code é vital para vendas?', options: ['Porque é barato.', 'Agilidade para adaptar processos e ferramentas sem depender do backlog da TI.', 'Para aprender a programar.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm13_sales-l2',
          title: 'Lição 2: Criando Portais de Cliente',
          videoUrl: 'https://www.youtube.com/watch?v=5dEZ_0s1F1c', // Softr/Glide Tutorials
          content: `## Experiência VIP
Usar ferramentas como Softr ou Glide para criar, em horas, um portal onde o cliente pode ver status do projeto, baixar faturas e abrir chamados.
Conectado diretamente ao seu CRM (Airtable/Salesforce).`,
          quiz: [{ question: 'O que é possível criar rapidamente com Low-Code?', options: ['Um sistema operacional.', 'Portais de cliente e dashboards conectados a dados reais.', 'Um robô físico.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm13_sales-l3',
          title: 'Lição 3: Dashboards Customizados',
          videoUrl: 'https://www.youtube.com/watch?v=1A_T4k6-X7A', // Looker Studio Basics
          content: `## Visão Específica
O CRM padrão não mostra a métrica específica do seu nicho?
Use Power BI ou Looker Studio (Low-Code de dados) para criar visualizações personalizadas que misturam dados de vendas, marketing e financeiro.`,
          quiz: [{ question: 'Qual a vantagem de dashboards Low-Code?', options: ['São mais difíceis.', 'Flexibilidade total para cruzar dados e criar visualizações não nativas do CRM.', 'Nenhuma.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm13_sales-l4',
          title: 'Lição 4: Calculadoras de ROI',
          videoUrl: 'https://www.youtube.com/watch?v=3M2-vjJ_Wvk', // Building ROI Calculators
          content: `## Ferramenta de Venda
Clientes adoram ver o valor.
Crie uma calculadora de ROI interativa (usando Outgrow ou planilha + interface web) que o vendedor usa na call ou o cliente usa no site para simular a economia.`,
          quiz: [{ question: 'Como uma calculadora de ROI ajuda na venda?', options: ['Faz contas.', 'Tangibiliza o valor da solução e engaja o cliente com dados personalizados.', 'Confunde o cliente.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm13_sales-l5',
          title: 'Lição 5: Automações no Zapier/Make',
          videoUrl: 'https://www.youtube.com/watch?v=5dEZ_0s1F1c', // Zapier/Make Automation
          content: `## Conectando Tudo
A skill #1 de Ops.
"Quando chegar lead no Facebook -> Manda para o Slack -> Cria no Pipedrive -> Manda e-mail."
Criar esses fluxos visuais no Make (antigo Integromat) ou Zapier automatiza a rotina.`,
          quiz: [{ question: 'Para que servem Zapier e Make?', options: ['Fazer sites.', 'Criar fluxos de automação e integração entre diferentes softwares (Cola da Internet).', 'Editar vídeo.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm13_sales-l6',
          title: 'Lição 6: Apps de Campo',
          videoUrl: 'https://www.youtube.com/watch?v=1A_T4k6-X7A', // PowerApps for Sales
          content: `## Mobilidade
Seu time externo precisa coletar dados na visita (fotos, check-in, estoque).
Com Power Apps ou AppSheet, você cria um app móvel em dias que roda no celular do vendedor e salva tudo no banco de dados central.`,
          quiz: [{ question: 'Como o Low-Code apoia vendas externas?', options: ['Dando um celular.', 'Permitindo a criação rápida de apps móveis customizados para coleta de dados em campo.', 'Comprando carros.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm13_sales-l7',
          title: 'Lição 7: Geradores de Proposta',
          videoUrl: 'https://www.youtube.com/watch?v=gQddtTdmPOc', // Document Automation
          content: `## Adeus Word
Criar um sistema onde o vendedor preenche um formulário (Produtos, Descontos) e o sistema gera um PDF lindo, padronizado e sem erros de cálculo, pronto para assinatura.
Pode ser feito com DocuSign + Make + CRM.`,
          quiz: [{ question: 'Qual o benefício de automatizar propostas?', options: ['Gastar tinta.', 'Padronização, eliminação de erros e velocidade na emissão.', 'Demorar mais.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm13_sales-l8',
          title: 'Lição 8: Chatbots Customizados (Flowise)',
          videoUrl: 'https://www.youtube.com/watch?v=jEn_Lg3jJPU', // Flowise/LangFlow Tutorial
          content: `## Seu Próprio GPT
Usar ferramentas Low-Code (Flowise, LangFlow) para criar um chatbot interno treinado nos seus PDFs de vendas.
O vendedor pergunta no Slack: "O produto X tem integração com Y?" e o bot responde.`,
          quiz: [{ question: 'O que o Flowise permite criar?', options: ['Fluxogramas estáticos.', 'Aplicações de LLM (chatbots) customizadas arrastando componentes visualmente.', 'Sites.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm13_sales-l9',
          title: 'Lição 9: Scraping de Leads',
          videoUrl: 'https://www.youtube.com/watch?v=7N9772cW4', // No-Code Scraping Automation
          content: `## Coleta de Dados
Ferramentas como Bardeen ou PhantomBuster (No-Code) permitem raspar dados do LinkedIn ou diretórios públicos para montar listas de prospecção automaticamente.`,
          quiz: [{ question: 'Para que serve o Web Scraping em vendas?', options: ['Hackear.', 'Coletar dados públicos de potenciais clientes de forma automatizada para gerar listas.', 'Navegar na web.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm13_sales-l10',
          title: 'Lição 10: Formulários Inteligentes',
          videoUrl: 'https://www.youtube.com/watch?v=reUZRyXxUs4', // Smart Forms
          content: `## Qualificação na Entrada
Typeform ou Tally com lógica condicional.
Se o cliente responde "Orçamento < 5k", o form diz "Baixe nosso E-book".
Se responde "> 50k", o form diz "Agende com Consultor".
Filtra os curiosos automaticamente.`,
          quiz: [{ question: 'O que é lógica condicional em formulários?', options: ['Matemática.', 'Mudar as perguntas ou o destino final com base nas respostas anteriores do usuário.', 'Cor do botão.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm13-sales-l11',
        title: 'Lição 11: Excel como Backend',
        videoUrl: 'https://www.youtube.com/watch?v=ad79nYk2keg', // Excel/Sheets as Database
        content: `## A Ferramenta que Todos Sabem
Muitos apps Low-Code usam Google Sheets ou Excel Online como banco de dados.
Isso permite que gestores editem preços ou produtos na planilha, e o aplicativo do vendedor atualize instantaneamente.`,
        quiz: [{ question: 'Qual a vantagem de usar planilhas como backend?', options: ['Segurança militar.', 'Facilidade de gestão e edição de dados por usuários de negócio não-técnicos.', 'Velocidade extrema.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm13-sales-l12',
        title: 'Lição 12: Integração com WhatsApp',
        videoUrl: 'https://www.youtube.com/watch?v=yY1QZ9o3x_0', // WhatsApp No-Code
        content: `## O Canal do Brasil
Usar ferramentas Low-Code para conectar o CRM ao WhatsApp.
Quando o lead cai no CRM, envia um "Oi" automático no Zap.
Quando o cliente responde no Zap, salva a conversa no CRM.`,
        quiz: [{ question: 'O que a integração CRM-WhatsApp permite?', options: ['Mandar memes.', 'Centralizar a comunicação e agilizar o primeiro contato no canal preferido do cliente.', 'Bloquear o cliente.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm13-sales-l13',
        title: 'Lição 13: O Limite do Low-Code',
        videoUrl: 'https://www.youtube.com/watch?v=0qQ2o1tR5jU', // When to Code
        content: `## Quando Chamar a TI?
Low-Code é ótimo para processos internos e protótipos.
Para o core product ou sistemas com milhões de dados, código tradicional ainda pode ser necessário. Saber quando migrar é vital.`,
        quiz: [{ question: 'Qual o limite do Low-Code?', options: ['Não tem.', 'Escala extrema e complexidade de core business podem exigir código tradicional.', 'Não serve para nada.'], correctAnswerIndex: 1 }],
      },
    ],
};
