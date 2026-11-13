import { Module } from '../../types';
import { BrainCircuit } from '../../components/icons';

export const M4: Module = {
  id: 'm4',
  title: 'Módulo 4: IA para Vendas, Marketing e Experiência do Cliente: Maximizando Receita',
  subtitle: 'Personalização, vendas complexas, churn e otimização de campanhas digitais.',
  icon: BrainCircuit,
  lessons: [
    {
      id: 'm4-l1',
      title: '1. Personalização em Massa com IA: Entregando o Conteúdo Certo para a Pessoa Certa',
      videoUrl: '', 
      content: `## Visão Geral
* Como a IA permite a personalização hiper-segmentada.
* Recomendação de produtos e conteúdo com algoritmos de IA.
* Criação de jornadas do cliente personalizadas.
* Aumento do engajamento e da conversão através da personalização.`,
      quiz: [
        { question: 'A principal vantagem da IA frente os métodos antigos de campanhas radica em:', options: ['Produzir personalizações generalistas num público restrito.', 'Fazer modelagem hiper-segmentada em massa convertendo interações em recomendações direcionadas impulsionando fortes elevações da conversão.', 'Gerar custos exorbitantes na agência.'], correctAnswerIndex: 1 }
      ]
    },
    {
      id: 'm4-l2',
      title: '2. Previsão de Vendas e Lead Scoring Inteligente',
      videoUrl: '', 
      content: `## Visão Geral
* Modelos preditivos para prever o volume de vendas.
* IA na identificação e pontuação de leads qualificados.
* Otimização do funil de vendas com insights de IA.
* Melhora na alocação de recursos da equipe de vendas.`,
      quiz: [
        { question: 'Lead Scoring baseado em machine learning resolve problemas antigos permitindo...', options: ['Atirar para todos os contatos captados para provar taxas.', 'Priorização inteligente modelando comportamentalmente quais conversões e contatos estão num estágio altamente propensos gerando ROI rápido as equipes.', 'Paralisar os recursos por excesso de contatos diretos.'], correctAnswerIndex: 1 }
      ]
    },
    {
      id: 'm4-l3',
      title: '3. Otimização de Campanhas de Marketing Digital com IA: Segmentação e Atribuição',
      videoUrl: '', 
      content: `## Visão Geral
* Segmentação avançada de público-alvo com IA.
* Otimização de lances e orçamentos em campanhas.
* Modelagem de atribuição multicanal baseada em IA.
* Maximização do ROI de campanhas de marketing digital.`,
      quiz: [
        { question: 'A Modelagem da Atribuição resolve majoritariamente o que no marketing?', options: ['Revela o ROI específico alocando precisamente o real valor estratégico a certas ações, campanhas e comportamentos originadores nos multicanais provando lucros.', 'Encontra designers gráficos no mercado interno das redes.', 'Ignora as frentes de atribuição originais com criativos simples.'], correctAnswerIndex: 0 }
      ]
    },
    {
      id: 'm4-l4',
      title: '4. Análise de Sentimento: Compreendendo a Voz do Cliente',
      videoUrl: '', 
      content: `## Visão Geral
* Técnicas de PLN para análise de sentimento em reviews, mídias sociais.
* Identificação de emoções e opiniões dos clientes.
* Utilização de insights de sentimento para melhorar produtos e serviços.
* Monitoramento da reputação da marca em tempo real.`,
      quiz: [
        { question: 'Ao fazer varreduras PLN nas Redes a Análise do Sentimento gera os seguintes benefícios:', options: ['Traduções em idiomas globais somente na Europa.', 'Um pulso em Tempo Real de detecção preventiva em redes para compreender reputações latentes contendo menções e defende marcas em grandes reviews virais desaprovadas rapidamente.', 'Nada efetivo ao público novo.'], correctAnswerIndex: 1 }
      ]
    },
    {
      id: 'm4-l5',
      title: '5. Sistemas de Recomendação: Aumentando o Engajamento e a Receita',
      videoUrl: '', 
      content: `## Visão Geral
* Tipos de sistemas de recomendação (colaborativos, baseados em conteúdo).
* Como plataformas como Netflix e Amazon utilizam IA para recomendação.
* Implementação de recomendações personalizadas em e-commerce.
* Aumento do valor médio do pedido (AOV) e retenção de clientes.`,
      quiz: [
        { question: 'Um e-commerce utilizando Filtro Colaborativo alcançara qual pilar crucial?', options: ['Mostrando estoques esgotados que voltaram em tempo médio.', 'Expansão considerável do Ticket ou Valor Médio por transação (AOV) unindo correlação implícita por pares com hábitos afins alavancando os índices da retenção nos mercados atrativos modernos.', 'Menos tempo no site principal, reduzindo conversões.'], correctAnswerIndex: 1 }
      ]
    },
    {
      id: 'm4-l6',
      title: '6. Detecção de Churn (Evasão) de Clientes: Estratégias de Retenção',
      videoUrl: '', 
      content: `## Visão Geral
* Modelos de IA para prever a probabilidade de churn.
* Identificação dos fatores que levam à evasão de clientes.
* Desenvolvimento de estratégias proativas de retenção.
* Redução do Custo de Aquisição de Cliente (CAC) pela retenção.`,
      quiz: [
        { question: 'Retenção focada em previsões algorítmicas alivia problemas de CAC ao...', options: ['Ignorar aquisição temporariamente gastando menos com os novos.', 'Modelar em variáveis iniciais os perfis dos leads desgastados que pretendem desistir impedido evasão na contramedida reavendo fidelidade retida.', 'Cortando gastos de publicidade.'], correctAnswerIndex: 1 }
      ]
    },
    {
      id: 'm4-l7',
      title: '7. IA na Otimização de Preços e Estratégias de Receita',
      videoUrl: '', 
      content: `## Visão Geral
* Modelos de precificação dinâmica baseados em demanda e concorrência.
* Personalização de preços para diferentes segmentos de clientes.
* Otimização de promoções e descontos com IA.
* Maximização da receita por cliente (ARPU).`,
      quiz: [
        { question: 'Exemplo evidente na Precificação Dinâmica regida por Demanda Ativa seria:', options: ['O comércio tradicional de bairro tabelado uniformemente.', 'Aplicações logísticas aéreas e transportadoras on-demand subindo picos instantaneamente ou aliviando os valores perante horários do ciclo de faturamento dinâmico do comportamento de consumo flutuante.', 'Os faturamentos engessados sazonais.'], correctAnswerIndex: 1 }
      ]
    },
    {
      id: 'm4-l8',
      title: '8. Chatbots Avançados e Assistentes Virtuais para Vendas e Suporte',
      videoUrl: '', 
      content: `## Visão Geral
* Chatbots com capacidade de entender intenções complexas.
* Automação de perguntas frequentes e qualificação de leads.
* Assistentes virtuais para suporte 24/7 e vendas assistidas.
* Melhora da experiência do cliente e eficiência do atendimento.`,
      quiz: [
        { question: 'Assistentes de Vendas com IA atuam perante intenções por intermédio das ferramentas:', options: ['Automação frias estritamente.', 'Disponibilidade e filtragem autônoma complexa nutrindo qualificações e encaminhamento maduro via 24/7 ao gestor executivo gerando a sustentação nos fechamentos reais contínuos.', 'Enviando boletos de falhas sistêmicas de clientes em massa.'], correctAnswerIndex: 1 }
      ]
    },
    {
      id: 'm4-l9',
      title: '9. Aprimorando a Experiência do Cliente (CX) com IA',
      videoUrl: '', 
      content: `## Visão Geral
* Mapeamento da jornada do cliente e pontos de contato.
* Uso da IA para criar experiências fluidas e preditivas.
* Análise do feedback do cliente em tempo real.
* Aumento da satisfação e lealdade do cliente.`,
      quiz: [
        { question: 'A predição de cenários aplicados a fluída experiência da jornada CX assegura essencialmente...', options: ['Atendimentos robotizados robóticos e cansativos para quem ouve.', 'Engajar, cativar e solucionar dores no ponto e tempo correto do contato elevando NPS global, superando a jornada tradicional, aumentando satisfação orgânica do sistema unificado de ponta a ponta sem atritos ou barreiras.', 'Diminuir gastos apenas escondendo telefones e páginas de clientes e chats com respostas cortadas.'], correctAnswerIndex: 1 }
      ]
    },
    {
      id: 'm4-l10',
      title: '10. Criação de Conteúdo Automatizado para Marketing com IA Generativa',
      videoUrl: '', 
      content: `## Visão Geral
* IA generativa para redação de textos de marketing (e-mails, posts, ads).
* Criação de imagens e vídeos para campanhas.
* Personalização de conteúdo em escala.
* Redução de tempo e custo na produção de conteúdo.`,
      quiz: [
        { question: 'A Geração Múltipla Autonoma em Campanhas promove:', options: ['Bons e-mails isolados do time visual.', 'Expansão radical customizada por persona, em massa cruzada de modelos generativos testados a/b sem requerer times complexos e gerando a diminuição crucial de verba no tempo total dos criadores diários e posts.', 'Nenhuma conversão orgânica'], correctAnswerIndex: 1 }
      ]
    },
    {
      id: 'm4-l11',
      title: '11. Análise Preditiva do Comportamento do Consumidor',
      videoUrl: '', 
      content: `## Visão Geral
* Modelagem do comportamento do cliente (preferências, padrões de compra).
* Previsão de próximas compras e necessidades futuras.
* Identificação de segmentos de clientes de alto valor.
* Desenvolvimento de ofertas e campanhas mais eficazes.`,
      quiz: [
        { question: 'Clientes alto-valor detectados através dos cálculos de modelagens auxiliam por...:', options: ['Abaixar a receita bruta global das ofertas.', 'Oferecer aos departamentos insights proativos contundentes sobre padrões de recompra assegurando conversões por meio orgânico sem depender exclusivamente das intuições não fundamentadas.', 'Prever dados dos clientes da concorrência nas ruas com visão.'], correctAnswerIndex: 1 }
      ]
    },
    {
      id: 'm4-l12',
      title: '12. Medindo o ROI de IA em Vendas e Marketing',
      videoUrl: '', 
      content: `## Visão Geral
* KPIs específicos para vendas e marketing (taxa de conversão, CAC, LTV).
* Como quantificar o impacto da IA no funil de vendas e receita.
* Modelos de atribuição de valor para IA.
* Apresentação de resultados e justificação de investimentos.`,
      quiz: [
        { question: 'Quais KPIs norteiam as métricas exclusivas do Marketing orientados à IA?', options: ['Engajamento, curtidas isoladas.', 'Lucro Líquido gerado vs Descontos de equipe.', 'Custo P/ Aquisição de Consumidores (CAC), Ticket médio e o Ciclo Global Retido Financeiro vitalício do Valor do Cliente (LTV), atribuindo o retorno da IA focado ao fechamento no funil medido precisamente contra ineficiência histórica original.'], correctAnswerIndex: 2 }
      ]
    },
    {
      id: 'm4-l13',
      title: '13. Estratégias de Fidelização de Clientes Baseadas em IA',
      videoUrl: '', 
      content: `## Visão Geral
* Programas de fidelidade personalizados com IA.
* Comunicação proativa e ofertas exclusivas.
* Previsão de necessidades e proatividade no suporte.
* Aumento do Lifetime Value (LTV) do cliente.`,
      quiz: [
        { question: 'Fidelidade modernizada eleva vertiginosamente:', options: ['O LTV (Lifetime Value) de perfis leais ativando os gatilhos emocionais customizados por predições proativas dos sistemas automatizados.', 'Fugas indesejadas a sistemas menos responsivos aos usuários finais insatisfeitos.', 'Custos e as taxas operacionais exclusivas dos clubes corporativos passivos.'], correctAnswerIndex: 0 }
      ]
    }
  ]
};
