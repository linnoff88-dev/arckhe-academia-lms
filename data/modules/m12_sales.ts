
import { Module } from '../../types';
import { Repeat } from '../../components/icons';

export const M12_SALES: Module = {
    id: 'm12_sales',
    title: 'Módulo 12: Hiperautomação Comercial (RevOps)',
    subtitle: 'Orquestrando processos de receita de ponta a ponta.',
    icon: Repeat,
    lessons: [
      {
          id: 'm12_sales-l1',
          title: 'Lição 1: O que é RevOps?',
          videoUrl: 'https://www.youtube.com/watch?v=9t78YjV1Kz8', // What is RevOps (HubSpot/Salesforce)
          content: `## Quebrando Silos
Revenue Operations (RevOps) unifica Marketing, Vendas e CS.
A Hiperautomação é a ferramenta técnica do RevOps.
Garante que o dado flua sem atrito do lead (Marketing) ao fechamento (Vendas) e à renovação (CS).`,
          quiz: [{ question: 'Qual o objetivo do RevOps?', options: ['Criar silos.', 'Alinhar processos, dados e tecnologia de Marketing, Vendas e CS para maximizar receita.', 'Vender software.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm12_sales-l2',
          title: 'Lição 2: Quote-to-Cash Automatizado',
          videoUrl: 'https://www.youtube.com/watch?v=gQddtTdmPOc', // Quote-to-Cash Explained
          content: `## Do Pedido ao Dinheiro
O processo mais crítico.
Vendedor fecha -> Contrato gerado (CLM) -> Assinatura -> Fatura gerada (ERP) -> Acesso liberado -> Comissão calculada.
Hiperautomação conecta tudo isso, reduzindo o ciclo de recebimento de semanas para minutos.`,
          quiz: [{ question: 'O que é o ciclo Quote-to-Cash?', options: ['Cotação de ações.', 'O processo completo desde a proposta comercial até o recebimento do dinheiro.', 'Sacar dinheiro.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm12_sales-l3',
          title: 'Lição 3: Process Mining no Funil',
          videoUrl: 'https://www.youtube.com/watch?v=1A_T4k6-X7A', // Process Mining in Sales
          content: `## Onde os Leads Morrem?
Usar Process Mining nos logs do Salesforce para ver o caminho real dos leads.
Descobre gargalos: "Leads ficam parados 5 dias na etapa 'Proposta' porque o gerente demora para aprovar desconto".
Baseado em dados, você automatiza a aprovação.`,
          quiz: [{ question: 'Como Process Mining ajuda em vendas?', options: ['Minerando bitcoin.', 'Visualizando gargalos e ineficiências reais no fluxo do pipeline.', 'Criando leads.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm12_sales-l4',
          title: 'Lição 4: Orquestração de Dados',
          videoUrl: 'https://www.youtube.com/watch?v=5dEZ_0s1F1c', // Reverse ETL
          content: `## Sincronia Perfeita
Manter HubSpot, Salesforce e o ERP sincronizados em tempo real.
Ferramentas de Reverse ETL (Hightouch, Census) jogam dados do Data Warehouse de volta para o CRM, para que o vendedor veja "Uso do Produto" dentro do Salesforce.`,
          quiz: [{ question: 'O que é Reverse ETL?', options: ['Apagar dados.', 'Enviar dados do Data Warehouse para ferramentas operacionais (como CRM) para ação.', 'Backup.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm12_sales-l5',
          title: 'Lição 5: Aprovações Inteligentes',
          videoUrl: 'https://www.youtube.com/watch?v=reUZRyXxUs4', // Automated Approvals
          content: `## Desbloqueando Vendas
Em vez de o vendedor mandar e-mail pedindo desconto para o chefe.
O sistema analisa: Margem é positiva? Cliente é estratégico?
Se sim, a IA aprova automaticamente. Se não, escala para o humano certo via Slack.`,
          quiz: [{ question: 'Como agilizar aprovações de desconto?', options: ['Liberar tudo.', 'Usar regras e IA para aprovação automática de casos padrão, escalando apenas exceções.', 'Reunião presencial.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm12_sales-l6',
          title: 'Lição 6: Atribuição e Comissionamento',
          videoUrl: 'https://www.youtube.com/watch?v=ad79nYk2keg', // Commission Automation
          content: `## Cálculo sem Erro
Calcular comissão em planilha Excel gera erro e desconfiança.
Hiperautomação calcula comissão em tempo real baseado nas regras (complexas) da empresa e mostra para o vendedor no dashboard, aumentando a motivação.`,
          quiz: [{ question: 'Qual o benefício de automatizar comissões?', options: ['Pagar menos.', 'Precisão, transparência e visibilidade em tempo real para motivar o vendedor.', 'Esconder dados.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm12_sales-l7',
          title: 'Lição 7: Onboarding de Clientes Zero-Touch',
          videoUrl: 'https://www.youtube.com/watch?v=3M2-vjJ_Wvk', // Zero Touch Onboarding
          content: `## Experiência Instantânea
Para produtos SaaS PLG.
O cliente compra, recebe credenciais, acessa a universidade corporativa e recebe o primeiro guia de uso, tudo orquestrado sem intervenção de CS.
CS foca apenas em clientes Enterprise ou em risco.`,
          quiz: [{ question: 'O que é Onboarding Zero-Touch?', options: ['Sem tocar na tela.', 'Processo de ativação do cliente totalmente automatizado, sem intervenção humana.', 'Onboarding ruim.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm12_sales-l8',
          title: 'Lição 8: Gestão de Territórios Dinâmica',
          videoUrl: 'https://www.youtube.com/watch?v=273tZ2V-D9E', // Territory Management
          content: `## Equilíbrio Vivo
Territórios mudam. Vendedores saem.
Algoritmos rebalanceiam as carteiras automaticamente para garantir cobertura equitativa, transferindo contas de vendedores que saíram para os que têm capacidade, sem perder histórico.`,
          quiz: [{ question: 'Para que serve a gestão dinâmica de territórios?', options: ['Viajar.', 'Manter o equilíbrio de oportunidades e cobertura de mercado automaticamente.', 'Desenhar mapas.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm12_sales-l9',
          title: 'Lição 9: Monitoramento de SLAs',
          videoUrl: 'https://www.youtube.com/watch?v=0qQ2o1tR5jU', // SLAs in Sales
          content: `## Cumprindo Promessas
SLA (Service Level Agreement) entre Mkt e Vendas.
"Marketing deve entregar 50 leads. Vendas deve ligar em 2 horas."
A automação monitora o tempo de resposta e alerta (ou reatribui o lead) se o SLA furar.`,
          quiz: [{ question: 'Como garantir que Vendas trabalhe os leads do Marketing?', options: ['Gritando.', 'Monitorando SLAs de tempo de resposta automaticamente e escalando desvios.', 'Não tem como.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm12_sales-l10',
          title: 'Lição 10: Renovação Automática',
          videoUrl: 'https://www.youtube.com/watch?v=ACs5g9z8Kxo', // Renewal Automation
          content: `## Receita Recorrente
90 dias antes do contrato vencer, o sistema dispara a sequência de renovação.
Envia relatório de uso (gerado por IA) mostrando o valor entregue e a proposta de renovação (com índice de reajuste aplicado).`,
          quiz: [{ question: 'Como a automação ajuda na renovação?', options: ['Cancela o contrato.', 'Inicia o processo proativamente com dados de valor e propostas prontas.', 'Espera o cliente ligar.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm12-sales-l11',
        title: 'Lição 11: Prevenção de Fraude no Pagamento',
        videoUrl: 'https://www.youtube.com/watch?v=CTuFkkF5XQI', // Fraud Prevention AI
        content: `## Segurança na Venda
Em e-commerce B2B, validar CNPJ, crédito e risco de fraude em segundos para aprovar o pedido instantaneamente.
Usa APIs de bureau de dados e modelos de risco em tempo real.`,
        quiz: [{ question: 'O que permite a aprovação instantânea de crédito B2B?', options: ['Confiança cega.', 'Integração automatizada com bureaus de dados e modelos de risco.', 'Sorte.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm12-sales-l12',
        title: 'Lição 12: Integração de Parceiros (PRM)',
        videoUrl: 'https://www.youtube.com/watch?v=3M2-vjJ_Wvk', // PRM Systems
        content: `## Canal Indireto
Quando um parceiro registra um deal, o sistema valida se já não existe conflito (deal registration), aprova e libera materiais.
Tudo self-service para o parceiro, sem e-mails manuais.`,
        quiz: [{ question: 'O que a automação de PRM resolve?', options: ['Briga de canais.', 'Conflito de registro de leads e suporte self-service a parceiros.', 'Venda direta.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm12-sales-l13',
        title: 'Lição 13: A Cultura de RevOps',
        videoUrl: 'https://www.youtube.com/watch?v=Opa7Zkq-3pA', // Building RevOps Culture
        content: `## Dados Unificados
RevOps não é sobre ferramentas, é sobre a verdade única dos dados.
A hiperautomação força a empresa a ter definições claras ("O que é um cliente?") e processos limpos, alinhando toda a organização em prol da receita.`,
        quiz: [{ question: 'Qual a base cultural do RevOps?', options: ['Cada um por si.', 'Alinhamento total em torno de dados únicos e processos de receita integrados.', 'Usar Excel.'], correctAnswerIndex: 1 }],
      },
    ],
};
