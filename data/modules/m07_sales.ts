
import { Module } from '../../types';
import { Database } from '../../components/icons';

export const M7_SALES: Module = {
    id: 'm7_sales',
    title: 'Módulo 7: Engenharia de Dados de Clientes',
    subtitle: 'Transformando o CRM em uma fonte de verdade confiável.',
    icon: Database,
    lessons: [
      {
          id: 'm7_sales-l1',
          title: 'Lição 1: CRM Hygiene',
          videoUrl: 'https://www.youtube.com/watch?v=1A_T4k6-X7A', // CRM Data Cleaning
          content: `## O Básico Bem Feito
A IA é inútil se os dados do CRM estão sujos (telefones errados, nomes duplicados).
Estratégias de limpeza de dados:
1. Validação na entrada (impedir lixo).
2. Deduplicação automática.
3. Enriquecimento periódico.`,
          quiz: [{ question: 'O que é CRM Hygiene?', options: ['Limpar a tela.', 'Manter os dados do CRM limpos, atualizados e sem duplicatas.', 'Comprar novo CRM.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7_sales-l2',
          title: 'Lição 2: Enriquecimento de Leads',
          videoUrl: 'https://www.youtube.com/watch?v=0qQ2o1tR5jU', // Data Enrichment
          content: `## Dados Externos
Conectar o CRM a fontes como Apollo, Clearbit ou LinkedIn Sales Navigator.
Quando o lead entra apenas com o e-mail, a automação busca: Cargo, Tamanho da Empresa, Tecnologias que usam e Faturamento estimado.`,
          quiz: [{ question: 'Para que serve o enriquecimento?', options: ['Gastar dinheiro.', 'Completar o perfil do lead com dados externos para melhor segmentação.', 'Apagar dados.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7_sales-l3',
          title: 'Lição 3: Intent Data (Dados de Intenção)',
          videoUrl: 'https://www.youtube.com/watch?v=5dEZ_0s1F1c', // Intent Data Explained
          content: `## O Sinal de Compra
Dados de terceira parte (Bombora, G2) que mostram que uma empresa está pesquisando ativamente sobre "Software de Vendas".
Saber quem está "In-Market" antes deles levantarem a mão permite uma abordagem proativa e oportuna.`,
          quiz: [{ question: 'O que Intent Data revela?', options: ['Quem visitou seu site.', 'Empresas que estão pesquisando ativamente sobre soluções similares à sua.', 'Endereço de IP.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7_sales-l4',
          title: 'Lição 4: Single Source of Truth',
          videoUrl: 'https://www.youtube.com/watch?v=ad79nYk2keg', // Data Warehouse vs Lake
          content: `## Unificando a Visão
O marketing usa HubSpot, Vendas usa Salesforce, CS usa Zendesk.
Como ter uma visão 360º do cliente?
A engenharia de dados unifica esses silos em um Data Warehouse ou CDP (Customer Data Platform) para que a IA possa ver a jornada completa.`,
          quiz: [{ question: 'O que é Single Source of Truth?', options: ['Uma mentira.', 'Uma fonte única e unificada de dados confiáveis sobre o cliente.', 'Um arquivo Excel.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7_sales-l5',
          title: 'Lição 5: Atribuição de Marketing',
          videoUrl: 'https://www.youtube.com/watch?v=3M2-vjJ_Wvk', // Marketing Attribution
          content: `## Rastreando a Origem
Modelos de atribuição (First Touch, Last Touch, Multi-touch).
Entender quais canais (Ads, Blog, Eventos) realmente contribuem para o fechamento da venda, para alocar o orçamento de forma inteligente.`,
          quiz: [{ question: 'Qual o objetivo da atribuição?', options: ['Culpar o marketing.', 'Identificar quais canais geram receita real.', 'Criar banners.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7_sales-l6',
          title: 'Lição 6: Governança de Pipeline',
          videoUrl: 'https://www.youtube.com/watch?v=9t78YjV1Kz8', // Sales Pipeline Management
          content: `## Regras do Jogo
Definir padrões claros: Quando um lead vira oportunidade? Quais campos são obrigatórios na fase de negociação?
A governança garante que os relatórios de previsão de vendas sejam baseados em critérios objetivos, não na opinião do vendedor.`,
          quiz: [{ question: 'Por que a governança de pipeline é importante?', options: ['Para burocratizar.', 'Para garantir consistência e confiabilidade nos dados de previsão de vendas.', 'Para demitir.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7_sales-l7',
          title: 'Lição 7: Privacidade e LGPD na Prospecção',
          videoUrl: 'https://www.youtube.com/watch?v=l-BA-dXXCVA', // GDPR Compliance
          content: `## Cold Mail Legal
Como prospectar sem violar a lei?
Uso de bases legítimas (B2B), interesse legítimo, oferecer opt-out claro e não armazenar dados sensíveis desnecessários.
A engenharia de dados deve automatizar a exclusão de quem pede para sair.`,
          quiz: [{ question: 'Qual prática é essencial na prospecção B2B sob a LGPD?', options: ['Esconder o remetente.', 'Oferecer opção clara de descadastro (Opt-out).', 'Comprar listas ilegais.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7_sales-l8',
          title: 'Lição 8: Data Visualization para Vendas',
          videoUrl: 'https://www.youtube.com/watch?v=1A_T4k6-X7A', // Effective Dashboards
          content: `## Dashboards Acionáveis
Vendedores não querem tabelas, querem saber: "Quem eu ligo agora?".
Visualizações eficazes mostram funil, gargalos e metas em tempo real.
Menos métricas de vaidade, mais métricas de ação.`,
          quiz: [{ question: 'O que caracteriza um bom dashboard de vendas?', options: ['Muitas cores.', 'Foco em métricas acionáveis que orientam o comportamento do vendedor.', 'Animações.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7_sales-l9',
          title: 'Lição 9: Integração de Voz (VoIP)',
          videoUrl: 'https://www.youtube.com/watch?v=fNxaJSZwYoc', // Sales Voice Analytics
          content: `## Dados de Áudio
Integrar o sistema de telefonia (VoIP) ao Data Lake.
Isso permite que a IA analise não apenas o texto dos e-mails, mas também a duração das chamadas, horários de conexão e metadados de voz.`,
          quiz: [{ question: 'O que a integração VoIP permite?', options: ['Ligar de graça.', 'Capturar e analisar dados de chamadas telefônicas para inteligência de vendas.', 'Ouvir música.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7_sales-l10',
          title: 'Lição 10: Monitoramento de Qualidade',
          videoUrl: 'https://www.youtube.com/watch?v=Opa7Zkq-3pA', // Data Quality
          content: `## DQ (Data Quality)
Scripts automáticos que rodam à noite procurando anomalias: "Oportunidades sem valor", "Leads sem e-mail", "Datas de fechamento no passado".
Alertas automáticos para os gerentes corrigirem.`,
          quiz: [{ question: 'Como garantir a qualidade dos dados continuamente?', options: ['Manualmente.', 'Com scripts de monitoramento automático que alertam sobre anomalias.', 'Ignorando erros.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm7-sales-l11',
        title: 'Lição 11: Segmentação Dinâmica',
        videoUrl: 'https://www.youtube.com/watch?v=3M2-vjJ_Wvk', // Dynamic Segmentation
        content: `## Listas Vivas
Em vez de listas estáticas ("Leads de SP"), usar segmentos dinâmicos baseados em comportamento.
"Leads que visitaram a página de preços nos últimos 7 dias e não têm reunião agendada". A lista se atualiza sozinha.`,
        quiz: [{ question: 'O que é uma lista dinâmica?', options: ['Lista de papel.', 'Um segmento que se atualiza automaticamente com base em critérios comportamentais em tempo real.', 'Lista VIP.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm7-sales-l12',
        title: 'Lição 12: Identity Resolution',
        videoUrl: 'https://www.youtube.com/watch?v=ad79nYk2keg', // Identity Resolution
        content: `## Quem é Quem?
O lead usa o e-mail pessoal no LinkedIn e o corporativo no formulário. É a mesma pessoa?
Identity Resolution usa algoritmos para unificar esses perfis, evitando duplicidade e permitindo uma visão única do histórico.`,
        quiz: [{ question: 'O que a Resolução de Identidade resolve?', options: ['Esquecimento de senha.', 'A unificação de múltiplos perfis/contatos de uma mesma pessoa em um único registro.', 'Problemas de login.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm7-sales-l13',
        title: 'Lição 13: O Futuro dos Dados de Vendas',
        videoUrl: 'https://www.youtube.com/watch?v=roprbjQh1Hw', // Future of Data
        content: `## Dados Sintéticos
Treinar IAs de vendas com dados reais é arriscado (privacidade).
O futuro é usar dados sintéticos (gerados por IA) que imitam estatisticamente os clientes reais para treinar novos modelos e testar estratégias sem risco.`,
        quiz: [{ question: 'Qual a vantagem de dados sintéticos?', options: ['São mais baratos.', 'Protegem a privacidade e permitem treinar modelos sem expor dados reais de clientes.', 'São falsos.'], correctAnswerIndex: 1 }],
      },
    ],
};
