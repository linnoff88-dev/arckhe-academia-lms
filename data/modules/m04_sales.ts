
import { Module } from '../../types';
import { BookOpen } from '../../components/icons';

export const M4_SALES: Module = {
    id: 'm4_sales',
    title: 'Módulo 4: Dados de Receita (Revenue Data)',
    subtitle: 'Dominando os números que fazem a máquina de vendas girar.',
    icon: BookOpen,
    lessons: [
      {
          id: 'm4_sales-l1',
          title: 'Lição 1: Alfabetização de Dados Comerciais',
          videoUrl: 'https://www.youtube.com/watch?v=roprbjQh1Hw', // Data Literacy Qlik/TED
          content: `## Fluência em Métricas
Todo vendedor moderno precisa ser um analista de dados.
Não basta "vender muito". É preciso entender CAC (Custo de Aquisição), LTV (Lifetime Value), Taxa de Conversão e Ciclo de Vendas.
Quem não mede, não gerencia.`,
          quiz: [{ question: 'Qual a habilidade essencial do vendedor moderno?', options: ['Falar alto.', 'Entender e analisar métricas de funil (Data Literacy).', 'Usar fax.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4_sales-l2',
          title: 'Lição 2: A Saúde do Pipeline',
          videoUrl: 'https://www.youtube.com/watch?v=9t78YjV1Kz8', // Pipeline Management
          content: `## Higiene de Dados
"Lixo entra, lixo sai". Se o vendedor não atualiza o CRM, a IA não funciona.
Cultura de dados em vendas significa registrar cada interação.
Pipeline saudável tem dados atualizados, datas de fechamento realistas e valores corretos.`,
          quiz: [{ question: 'O que compromete a IA em vendas?', options: ['Internet rápida.', 'Dados desatualizados ou incorretos no CRM (Garbage in, Garbage out).', 'Muitos leads.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4_sales-l3',
          title: 'Lição 3: LTV/CAC: A Fórmula de Ouro',
          videoUrl: 'https://www.youtube.com/watch?v=ad79nYk2keg', // Unit Economics
          content: `## A Máquina de Dinheiro
- **CAC:** Quanto custa trazer um cliente? (Mkt + Vendas).
- **LTV:** Quanto ele gasta na vida útil?
Se LTV/CAC > 3, sua máquina imprime dinheiro. Se < 1, você quebra.
A IA otimiza ambos: reduz CAC (automação) e aumenta LTV (upsell).`,
          quiz: [{ question: 'Qual a relação LTV/CAC ideal para crescimento saudável?', options: ['1 para 1.', 'Maior que 3 para 1.', 'Menor que zero.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4_sales-l4',
          title: 'Lição 4: Cohort Analysis',
          videoUrl: 'https://www.youtube.com/watch?v=3M2-vjJ_Wvk', // Cohort Analysis Explained
          content: `## Análise de Safras
Não olhe apenas a média geral. Analise "safras" (Cohorts).
"Os clientes que entraram em Janeiro retiveram mais que os de Fevereiro?"
Isso isola o impacto de mudanças no produto ou na estratégia de vendas ao longo do tempo.`,
          quiz: [{ question: 'O que é Cohort Analysis?', options: ['Análise de vinhos.', 'Agrupar clientes por data de entrada para analisar comportamento ao longo do tempo.', 'Reunião de time.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4_sales-l5',
          title: 'Lição 5: Dashboards que Funcionam',
          videoUrl: 'https://www.youtube.com/watch?v=1A_T4k6-X7A', // Creating Effective Dashboards
          content: `## Menos é Mais
Um bom dashboard de vendas não mostra tudo. Mostra o que exige ação.
- Vermelho: Onde estou perdendo?
- Verde: Onde estou ganhando?
Data Storytelling para convencer a diretoria ou motivar o time.`,
          quiz: [{ question: 'Qual o objetivo de um dashboard de vendas?', options: ['Ser bonito.', 'Mostrar informações acionáveis para tomada de decisão rápida.', 'Preencher tela.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4_sales-l6',
          title: 'Lição 6: Enriquecimento de Dados',
          videoUrl: 'https://www.youtube.com/watch?v=0qQ2o1tR5jU', // Data Enrichment
          content: `## Completando o Quebra-Cabeça
Você tem o e-mail. Ferramentas de Enriquecimento (Clearbit, Apollo) usam esse e-mail para trazer: Cargo, Tamanho da Empresa, Tecnologias que usam, Faturamento.
Transforma um lead frio em um perfil completo para abordagem contextual.`,
          quiz: [{ question: 'O que faz o enriquecimento de dados?', options: ['Deixa o dado caro.', 'Adiciona informações externas (cargo, empresa, faturamento) a um contato básico.', 'Criptografa.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4_sales-l7',
          title: 'Lição 7: Intent Data (Dados de Intenção)',
          videoUrl: 'https://www.youtube.com/watch?v=5dEZ_0s1F1c', // Intent Data
          content: `## Lendo a Mente do Mercado
Dados de "Terceira Parte".
Saber que a Empresa X está pesquisando "Software de CRM" no Google ou lendo reviews no G2.
Saber quem está "In-Market" antes deles levantarem a mão permite uma abordagem proativa e oportuna.`,
          quiz: [{ question: 'O que Intent Data revela?', options: ['Quem visitou seu site.', 'Empresas que estão pesquisando ativamente sobre soluções similares à sua.', 'Endereço de IP.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4_sales-l8',
          title: 'Lição 8: Atribuição de Receita',
          videoUrl: 'https://www.youtube.com/watch?v=gQddtTdmPOc', // Attribution Models
          content: `## O Fim da Briga Marketing x Vendas
Quem trouxe o cliente? O anúncio ou o vendedor?
Modelos de atribuição baseados em dados mostram a jornada completa.
Marketing aquece, Vendas fecha. Ambos compartilham a meta de receita.`,
          quiz: [{ question: 'Para que serve a Atribuição de Receita?', options: ['Para culpar alguém.', 'Para entender quais canais e toques contribuíram para o fechamento do negócio.', 'Para dividir comissão.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4_sales-l9',
          title: 'Lição 9: Previsibilidade de Receita',
          videoUrl: 'https://www.youtube.com/watch?v=GFeXcafDPlY', // Predictable Revenue
          content: `## A Bíblia do SaaS
Baseado no livro "Predictable Revenue".
Usar dados para transformar vendas de "arte" em "ciência".
Se eu sei minhas taxas de conversão em cada etapa, sei exatamente quantos leads preciso no topo para bater a meta no fundo. Engenharia reversa.`,
          quiz: [{ question: 'Como alcançar previsibilidade em vendas?', options: ['Sorte.', 'Conhecendo as taxas de conversão do funil e alimentando o topo consistentemente.', 'Contratando videntes.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4_sales-l10',
          title: 'Lição 10: Privacidade e LGPD em Vendas',
          videoUrl: 'https://www.youtube.com/watch?v=l-BA-dXXCVA', // GDPR for Sales
          content: `## Prospecção Legal
Como usar dados para vender sem violar a lei?
- Legítimo Interesse vs Consentimento.
- A importância de permitir Opt-out (descadastro) fácil.
- Higiene de listas compradas (cuidado!).`,
          quiz: [{ question: 'Qual prática é essencial para conformidade na prospecção?', options: ['Esconder o botão de sair.', 'Oferecer Opt-out claro e respeitar a privacidade do titular.', 'Enviar spam infinito.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm4-sales-l11',
        title: 'Lição 11: Visualização de Territórios',
        videoUrl: 'https://www.youtube.com/watch?v=273tZ2V-D9E', // Sales Territory Mapping
        content: `## Mapas de Oportunidade
Usar geo-analytics para visualizar onde estão seus clientes e onde estão os "espaços em branco" (White Space).
Ajuda a posicionar vendedores de campo ou focar campanhas regionais.`,
        quiz: [{ question: 'O que é análise de White Space?', options: ['Folha em branco.', 'Identificar regiões ou contas onde você ainda não tem penetração de vendas.', 'Espaço sideral.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm4-sales-l12',
        title: 'Lição 12: Unit Economics',
        videoUrl: 'https://www.youtube.com/watch?v=ad79nYk2keg', // Unit Economics Explained
        content: `## A Matemática do Lucro
Entender a rentabilidade por unidade (cliente).
Se você vende um produto de R$ 100, mas gasta R$ 80 em marketing e R$ 30 em entrega, você cresce e quebra ao mesmo tempo.
Dados ajudam a corrigir o modelo antes de escalar.`,
        quiz: [{ question: 'Por que Unit Economics é vital?', options: ['Para contadores.', 'Para garantir que cada venda contribua positivamente para o lucro (margem de contribuição).', 'É irrelevante.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm4-sales-l13',
        title: 'Lição 13: Cultura Data-Driven em Vendas',
        videoUrl: 'https://www.youtube.com/watch?v=Opa7Zkq-3pA', // Creating a Data Culture
        content: `## Do Cowboy ao Cientista
A transição do vendedor "lobo solitário" que odeia processos para o vendedor "cientista" que usa dados para vender mais com menos esforço.
O papel da liderança em cobrar métricas, não apenas atividades.`,
        quiz: [{ question: 'O que define uma cultura Data-Driven em vendas?', options: ['Muitas reuniões.', 'Decisões e estratégias baseadas em evidências e métricas, não apenas intuição.', 'Usar computador.'], correctAnswerIndex: 1 }],
      },
    ],
};
