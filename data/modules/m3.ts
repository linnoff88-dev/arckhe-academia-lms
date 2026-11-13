import { Module } from '../../types';
import { BrainCircuit } from '../../components/icons';

export const M3: Module = {
  id: 'm3',
  title: 'Módulo 3: IA na Otimização de Processos Operacionais: Eficiência e Redução de Custos',
  subtitle: 'Exploração da IA na cadeia de suprimento, logística, RH e eficiência empresarial.',
  icon: BrainCircuit,
  lessons: [
    {
      id: 'm3-l1',
      title: '1. Mapeamento de Processos: Identificando Gargalos para Intervenção da IA',
      videoUrl: '', 
      content: `## Visão Geral
* Metodologias de mapeamento de processos (BPMN, fluxogramas).
* Análise de processos para identificar ineficiências e oportunidades de IA.
* Quantificação do impacto dos gargalos nos custos e tempo.
* Ferramentas para modelagem e análise de processos.`,
      quiz: [
        { question: 'A análise de processos ajuda os modelos de IA por quê?', options: ['Revela gargalos crônicos onde modelos podem otimizar tempo e recursos com quantificável impacto.', 'Troca gestores humanos por gerentes virtuais', 'Elimina a governança de dados.'], correctAnswerIndex: 0 }
      ]
    },
    {
      id: 'm3-l2',
      title: '2. Automação Robótica de Processos (RPA) vs. IA: Complementaridade para Eficiência',
      videoUrl: '', 
      content: `## Visão Geral
* Diferenças fundamentais entre RPA e IA.
* Como RPA e IA podem ser combinados para automação inteligente (Hyperautomation).
* Casos de uso onde RPA é mais adequado e onde a IA se destaca.
* Estratégias para implementar RPA e IA em conjunto.`,
      quiz: [
        { question: 'Combinar a precisão autônoma da RPA com os insights cognitivos preditivos da IA gera:', options: ['Sistemas manuais de arquivamento.', 'Automação Inteligente ou Hyperautomation permitindo agir não apenas no transacional como em cenários de decisão de máquina.', 'Perda de velocidade corporativa'], correctAnswerIndex: 1 }
      ]
    },
    {
      id: 'm3-l3',
      title: '3. Otimização da Cadeia de Suprimentos com IA: Previsão e Gestão de Estoque',
      videoUrl: '', 
      content: `## Visão Geral
* IA na previsão de demanda e otimização de estoque.
* Rastreamento e visibilidade em tempo real da cadeia de suprimentos.
* Gestão de riscos e resiliência da cadeia com IA.
* Redução de custos de estoque e melhoria no serviço ao cliente.`,
      quiz: [
        { question: 'Modelos logísticos de IA minimizam gargalos com eficácia calculada via:', options: ['Detecção preditiva avançada que prevê anomalias, variações de demanda de ponta de cadeia em tempo real.', 'Trocando frotas por drones.', 'Revisões anuais'], correctAnswerIndex: 0 }
      ]
    },
    {
      id: 'm3-l4',
      title: '4. Manutenção Preditiva: Reduzindo Custos e Aumentando a Vida Útil de Ativos',
      videoUrl: '', 
      content: `## Visão Geral
* Conceitos de manutenção preditiva baseada em IA.
* Sensores e coleta de dados de ativos (IoT).
* Algoritmos de ML para prever falhas e otimizar intervenções.
* Redução de tempo de inatividade e custos de manutenção.`,
      quiz: [
        { question: 'Sensores em fábrica permitem à manutenção preditiva baseada em IA a...', options: ['Prever quando um recurso pode falhar antecipando manutenções e o alto-custo do inatividade de operações industriais.', 'Apagar equipamentos sujos via web.', 'Monitorar pausas para funcionários'], correctAnswerIndex: 0 }
      ]
    },
    {
      id: 'm3-l5',
      title: '5. IA na Gestão de Operações e Logística: Roteirização e Alocação de Recursos',
      videoUrl: '', 
      content: `## Visão Geral
* Otimização de rotas de entrega e logística de última milha.
* Alocação eficiente de frota e pessoal.
* IA para gestão de armazéns e centros de distribuição.
* Redução de custos de transporte e melhoria nos prazos de entrega.`,
      quiz: [
        { question: 'Um software de inteligência gerencia melhor logística e trânsito quando...', options: ['Ignora clima e GPS.', 'Modela roteirização em tempo baseando-se em variáveis de última milha promovendo forte controle de frotas e pessoal.', 'Depende exclusivamente da análise do motorista humano'], correctAnswerIndex: 1 }
      ]
    },
    {
      id: 'm3-l6',
      title: '6. Controle de Qualidade Automatizado com Visão Computacional',
      videoUrl: '', 
      content: `## Visão Geral
* Inspeção visual automatizada em linhas de produção.
* Detecção de defeitos e não conformidades com IA.
* Redução de erros humanos e aumento da precisão.
* Aplicações em manufatura, alimentos e bebidas.`,
      quiz: [
        { question: 'Na manufatura, detectam-se não conformidades microscópicas sem pausas via:', options: ['Sistemas guiados de Visão Computacional.', 'Relatórios da qualidade via e-mail.', 'Modelos de NLP'], correctAnswerIndex: 0 }
      ]
    },
    {
      id: 'm3-l7',
      title: '7. IA no Atendimento ao Cliente: Chatbots e Assistentes Virtuais Inteligentes',
      videoUrl: '', 
      content: `## Visão Geral
* Implementação de chatbots para suporte e FAQ.
* Assistentes virtuais para personalização da experiência.
* Análise de conversas e sentimentos para aprimorar o serviço.
* Redução de custos de atendimento e aumento da satisfação do cliente.`,
      quiz: [
        { question: 'A análise de sentimentos acoplada a chatbots aprimora a assistência provendo:', options: ['Pausas curtas para os atendentes lerem.', 'Reconhecimento das emoções e direcionando para assistentes humanos casos de aborrecimento complexos, e retendo resolução ágil via IA do dia a dia.', 'Demissões na central'], correctAnswerIndex: 1 }
      ]
    },
    {
      id: 'm3-l8',
      title: '8. Otimização de Força de Trabalho e Agendamento com IA',
      videoUrl: '', 
      content: `## Visão Geral
* IA para otimização de escalas e agendamentos.
* Previsão de demanda de pessoal em tempo real.
* Gestão de recursos humanos mais eficiente com IA.
* Aumento da produtividade e satisfação da equipe.`,
      quiz: [
        { question: 'Qual resultado central em dimensionamento de equipes via IA?', options: ['Superar e otimizar lacunas de pico de escalas e agendamento prevenindo escassez de serviço por demanda pontual.', 'Reavaliação semestral engessada.', 'Nenhuma mudança prática.'], correctAnswerIndex: 0 }
      ]
    },
    {
      id: 'm3-l9',
      title: '9. Segurança Operacional Aprimorada por IA: Detecção de Anomalias',
      videoUrl: '', 
      content: `## Visão Geral
* IA para monitoramento de sistemas de segurança (CFTV).
* Detecção de comportamentos incomuns e ameaças.
* Prevenção de acidentes e incidentes de segurança.
* Aplicações em infraestrutura crítica e espaços públicos.`,
      quiz: [
        { question: 'No monitoramento de circuitos os algoritmos conseguem detectar proativamente:', options: ['A velocidade real dos ventos globais.', 'Ameaças, irregularidades operacionais críticas ou comportamentos maliciosos (Detecção de Anomalias).', 'Nomes dos cidadãos sem dados federais'], correctAnswerIndex: 1 }
      ]
    },
    {
      id: 'm3-l10',
      title: '10. Redução de Custos Operacionais através de Insights de IA',
      videoUrl: '', 
      content: `## Visão Geral
* Identificação de oportunidades de economia com análise de IA.
* Otimização do consumo de energia e recursos.
* Melhoria na utilização de ativos e infraestrutura.
* Casos de sucesso de redução de custos com IA.`,
      quiz: [
        { question: 'Sistemas inteligentes analisam infraestruturas gerando alertas precisos que resultam em:', options: ['Otimização do consumo produtivo (como eficiência de energia) além e focado para contenção imediata de gastos via Insights algorítmicos.', 'Maior necessidade de contratar fiscais com planilhas de luz', 'Menos luzes.'], correctAnswerIndex: 0 }
      ]
    },
    {
      id: 'm3-l11',
      title: '11. Automação de Back-office: Contabilidade, RH e Legal com IA',
      videoUrl: '', 
      content: `## Visão Geral
* IA para automação de tarefas repetitivas em finanças e contabilidade.
* Processamento de documentos e folha de pagamento com IA no RH.
* Análise de contratos e pesquisa jurídica com PLN.
* Aumento da eficiência e redução de erros em funções de suporte.`,
      quiz: [
        { question: 'A pesquisa jurídica foi impulsionada primariamente nos escritórios devido aos avanços de IA focados em:', options: ['Geração de gráficos operacionais de finanças.', 'Processamento Inteligente de Linguagem (NLP/PLN) mapeando minutas legais vastamente de forma super-ágil.', 'Visão computacional em fóruns.'], correctAnswerIndex: 1 }
      ]
    },
    {
      id: 'm3-l12',
      title: '12. Medindo o Impacto da IA na Eficiência Operacional',
      videoUrl: '', 
      content: `## Visão Geral
* KPIs para medir a eficiência (tempo de ciclo, custo por unidade, taxa de erro).
* Ferramentas de monitoramento e análise de performance.
* Estabelecimento de baselines e metas para projetos de IA.
* Como demonstrar o valor da IA para a liderança.`,
      quiz: [
        { question: 'As baselines estáticas são...', options: ['Métricas contínuas avaliadas pós IA.', 'Metricas estabelecidas no status quo antes de começar que demonstram clareza nas discrepâncias positivas promovidas pelas automações da IA.', 'Indicadores sem número práticos.'], correctAnswerIndex: 1 }
      ]
    },
    {
      id: 'm3-l13',
      title: '13. Desenvolvendo um Roadmap de Otimização de Processos com IA',
      videoUrl: '', 
      content: `## Visão Geral
* Passos para criar um roadmap estratégico de IA para operações.
* Priorização de projetos e alocação de recursos.
* Construção de um portfólio de iniciativas de IA.
* Planejamento da implementação e escalonamento de soluções.`,
      quiz: [
        { question: 'Tratando do percurso analítico a priorização e adoção da IA requer...', options: ['Começar pelas que têm mais risco associado aos custos.', 'Que o roadmap defina e dimensione um mapa viável focado nas pequenas vitórias (Quick Wins), recursos dispostos antes dos saltos ousados.', 'Alinhamento aleatório setorial.'], correctAnswerIndex: 1 }
      ]
    }
  ]
};
