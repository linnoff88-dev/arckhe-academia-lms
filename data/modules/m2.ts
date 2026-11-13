import { Module } from '../../types';
import { BrainCircuit } from '../../components/icons';

export const M2: Module = {
  id: 'm2',
  title: 'Módulo 2: Preparação de Dados e Infraestrutura para IA: A Base do Sucesso',
  subtitle: 'Coleta, armazenamento, governança e ferramentas para IA escalável.',
  icon: BrainCircuit,
  lessons: [
    {
      id: 'm2-l1',
      title: '1. A Importância dos Dados: O Combustível para a IA',
      videoUrl: '', 
      content: `## Visão Geral
* Dados como ativo estratégico de negócio.
* Qualidade dos dados e seu impacto nos modelos de IA.
* Tipos de dados relevantes para projetos de IA (estruturados, não estruturados).
* Como a disponibilidade de dados impulsiona a inovação.`,
      quiz: [
        { question: 'Por que a qualidade dos dados é fundamental para modelos de IA?', options: ['Porque dados ruins (lixo entra, lixo sai) afetam negativamente a precisão dos modelos.', 'Porque os dados bonitos são mais fáceis de ler.', 'A IA melhora sozinha os dados ruins.'], correctAnswerIndex: 0 }
      ]
    },
    {
      id: 'm2-l2',
      title: '2. Coleta de Dados Estratégicos: Onde Buscar e Como Capturar Valor',
      videoUrl: '', 
      content: `## Visão Geral
* Fontes de dados internas e externas.
* Estratégias de coleta de dados (APIs, web scraping, bancos de dados).
* Ferramentas e técnicas para aquisição eficiente de dados.
* Desafios na coleta de dados e como superá-los.`,
      quiz: [
        { question: 'O que são APIs em termos de coleta de dados?', options: ['Estratégias de marketing.', 'Interfaces padronizadas que conectam sistemas e permitem o fluxo automatizado de dados institucionais e externos.', 'Redes anti-spam.'], correctAnswerIndex: 1 }
      ]
    },
    {
      id: 'm2-l3',
      title: '3. Limpeza e Pré-processamento de Dados: Garantindo Qualidade para Modelos Robustos',
      videoUrl: '', 
      content: `## Visão Geral
* Técnicas de limpeza de dados (tratamento de valores ausentes, inconsistências).
* Normalização e padronização de dados.
* Detecção e tratamento de outliers.
* A importância da engenharia de features para o desempenho da IA.`,
      quiz: [
        { question: 'Qual processo mitiga falhas com dados extremos (fora da curva)?', options: ['Geração de planilhas.', 'Detecção e tratamento de outliers.', 'Substituição completa do hardware.'], correctAnswerIndex: 1 }
      ]
    },
    {
      id: 'm2-l4',
      title: '4. Armazenamento e Gerenciamento de Dados: Data Lakes e Warehouses para IA',
      videoUrl: '', 
      content: `## Visão Geral
* Diferenças entre Data Warehouses e Data Lakes.
* Escolha da melhor arquitetura de armazenamento para diferentes necessidades de IA.
* Ferramentas de gerenciamento de banco de dados (SQL, NoSQL).
* Estratégias para garantir o acesso eficiente e seguro aos dados.`,
      quiz: [
        { question: 'A principal diferença entre Data Lakes e Warehouses consiste em:', options: ['Lakes lidam melhor com dados não estruturados de múltiplas origens; Warehouses são otimizados para consultas de dados já estruturados.', 'Lakes são estáticos.', 'Não há diferença real.'], correctAnswerIndex: 0 }
      ]
    },
    {
      id: 'm2-l5',
      title: '5. Ferramentas e Plataformas de Dados para IA (Ex: AWS, Azure, Google Cloud)',
      videoUrl: '', 
      content: `## Visão Geral
* Visão geral das principais plataformas de nuvem para IA.
* Serviços de dados em nuvem (armazenamento, processamento, análise).
* Como escolher a plataforma ideal com base em requisitos e custos.
* Benefícios da escalabilidade e flexibilidade da nuvem para IA.`,
      quiz: [
        { question: 'A grande vantagem de infraestrutura de IA baseada em Cloud é:', options: ['Não exige internet.', 'Elevada flexibilidade e capacidade de escalabilidade de processamento pago por uso.', 'Usa Windows obrigatóriamente.'], correctAnswerIndex: 1 }
      ]
    },
    {
      id: 'm2-l6',
      title: '6. Governança de Dados: Segurança e Conformidade (LGPD) em Projetos de IA',
      videoUrl: '', 
      content: `## Visão Geral
* Princípios de governança de dados.
* Estratégias para garantir a privacidade e segurança dos dados (LGPD, GDPR).
* Gerenciamento de acesso e controle de versões de dados.
* Auditoria e conformidade em ecossistemas de dados para IA.`,
      quiz: [
        { question: 'Qual papel regras como a LGPD exercem num projeto de IA?', options: ['Ignoram projetos de tecnologia.', 'Asseguram conformidade e segurança na forma que dados de usuários são captados e usados na construção de modelos.', 'Incentiva a venda de dados.'], correctAnswerIndex: 1 }
      ]
    },
    {
      id: 'm2-l7',
      title: '7. Visualização de Dados para Insights de Negócio',
      videoUrl: '', 
      content: `## Visão Geral
* Importância da visualização para comunicar resultados de IA.
* Ferramentas de BI e visualização de dados (Tableau, Power BI, Google Data Studio).
* Criação de dashboards e relatórios eficazes.
* Como a visualização ajuda na tomada de decisão estratégica.`,
      quiz: [
        { question: 'Ferramentas de BI colaboram nos resultados de IA ao...', options: ['Esconder códigos-fontes.', 'Traduzirem as decisões dos modelos algoritmicos em visões e gráficos estratégicos compreensíveis pelos executivos.', 'Apagar a base histórica.'], correctAnswerIndex: 1 }
      ]
    },
    {
      id: 'm2-l8',
      title: '8. Entendendo APIs e Integrações: Conectando Sistemas para a IA',
      videoUrl: '', 
      content: `## Visão Geral
* O que são APIs e seu papel na integração de sistemas.
* Tipos de APIs (REST, SOAP) e como utilizá-las.
* Estratégias de integração de dados e modelos de IA.
* Garantindo a conectividade e o fluxo de dados em tempo real.`,
      quiz: [
        { question: 'Por que o fluxo de integração em tempo real é vital?', options: ['Evita o engarrafamento do disco.', 'Permite com que uma arquitetura inteligente de IA aja rapidamente baseada em informações recentes por vias integradas.', 'Garante que os sistemas sejam pagos.'], correctAnswerIndex: 1 }
      ]
    },
    {
      id: 'm2-l9',
      title: '9. Escalabilidade da Infraestrutura: Preparando o Ambiente para o Crescimento da IA',
      videoUrl: '', 
      content: `## Visão Geral
* Planejamento para o crescimento dos dados e modelos de IA.
* Estratégias de escalabilidade horizontal e vertical.
* Uso de contêineres (Docker) e orquestradores (Kubernetes) para IA.
* Otimização de custos em infraestrutura de IA.`,
      quiz: [
        { question: 'O que o Kubernetes faz?', options: ['Faz orquestramento e dimensionamento de containers para a infraestrutura moderna de IA escalar ou não sob demanda.', 'É um dashboard web.', 'Um modelo neurológico.'], correctAnswerIndex: 0 }
      ]
    },
    {
      id: 'm2-l10',
      title: '10. Introdução a Bancos de Dados NoSQL para IA',
      videoUrl: '', 
      content: `## Visão Geral
* Características e vantagens dos bancos de dados NoSQL.
* Tipos de bancos NoSQL (documento, chave-valor, coluna, grafo).
* Casos de uso para dados não estruturados e IA.
* Seleção do banco de dados NoSQL adequado para diferentes projetos de IA.`,
      quiz: [
        { question: 'Bancos NoSQL baseados em grafos funcionam melhor em:', options: ['Sistemas de relacionamento não estruturados entre enormes volumes de itens complexos.', 'Gerar cálculos mensais de horas', 'Saldos estáticos de relatórios tabulares simples.'], correctAnswerIndex: 0 }
      ]
    },
    {
      id: 'm2-l11',
      title: '11. Engenharia de Features: Otimizando Dados para Algoritmos de IA',
      videoUrl: '', 
      content: `## Visão Geral
* O que é engenharia de features e sua importância.
* Técnicas para criar novas features a partir de dados existentes.
* Seleção de features para melhorar o desempenho do modelo.
* Melhores práticas e ferramentas para engenharia de features.`,
      quiz: [
        { question: 'Criação ou refinamento de dados para realçar qualidades e sinais num algoritmo ocorre na fase de:', options: ['Governança de Dados', 'Engenharia de Features', 'Contratos de SLA.'], correctAnswerIndex: 1 }
      ]
    },
    {
      id: 'm2-l12',
      title: '12. Arquitetura de Soluções de IA: Componentes Essenciais',
      videoUrl: '', 
      content: `## Visão Geral
* Elementos de uma arquitetura de solução de IA.
* Ciclo de vida de um projeto de IA: da experimentação à produção.
* Considerações de design para sistemas de IA robustos e manuteníveis.
* Padrões de arquitetura para diferentes tipos de aplicações de IA.`,
      quiz: [
        { question: 'Por que deve-se focar na sustentabilidade do design do sistema? ', options: ['Para manter os custos baixos via projetos monolíticos.', 'Porque soluções reais de IA precisarão de gestão em ciclos contínuos da pesquisa ao retreinamento sistémico (Produção).', 'Ganha prêmios visuais.'], correctAnswerIndex: 1 }
      ]
    },
    {
      id: 'm2-l13',
      title: '13. Orçamento e Recursos para Infraestrutura de Dados e IA',
      videoUrl: '', 
      content: `## Visão Geral
* Como planejar o orçamento para infraestrutura de IA.
* Estimativa de custos de armazenamento, processamento e licenças.
* Otimização de recursos e escolha entre on-premise e nuvem.
* Gerenciamento de gastos para maximizar o ROI da infraestrutura.`,
      quiz: [
        { question: 'Como otimizar custos iniciais?', options: ['Comprando supercomputadores proprietários de pronto.', 'Optando por Nuvem para dimensionar custos ao escopo testado e licenças temporárias.', 'Recusando pagar hardware de processamento.'], correctAnswerIndex: 1 }
      ]
    }
  ]
};
