
import { Module } from '../../types';
import { Database } from '../../components/icons';

export const M7_OPS: Module = {
    id: 'm7_ops',
    title: 'Módulo 7: Engenharia de Dados Industriais',
    subtitle: 'IoT, Historians e a convergência IT/OT.',
    icon: Database,
    lessons: [
      {
          id: 'm7_ops-l1',
          title: 'Lição 1: O Desafio dos Dados de Sensores',
          videoUrl: 'https://www.youtube.com/watch?v=3P2hLdvP4ZA',
          content: `## Volume e Velocidade
Uma turbina gera terabytes de dados por dia.
Bancos de dados comuns (SQL) não aguentam.
Precisamos de Time-Series Databases (InfluxDB, Timescale) projetados para ingerir e consultar dados sequenciais de alta frequência.`,
          quiz: [{ question: 'Qual o tipo de banco de dados ideal para sensores?', options: ['Planilha.', 'Time-Series Database (Séries Temporais).', 'Banco relacional comum.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7_ops-l2',
          title: 'Lição 2: PIMS e Historians',
          videoUrl: 'https://www.youtube.com/watch?v=t3fEoJQyhH4',
          content: `## O Legado
Sistemas como PI System (OSIsoft) guardam dados industriais há décadas.
O desafio da engenharia moderna é "libertar" esses dados do Historian e levá-los para a nuvem (Data Lake) para aplicar Machine Learning avançado.`,
          quiz: [{ question: 'O que é um Historian Industrial?', options: ['Um professor.', 'Um banco de dados especializado em armazenar histórico de processos industriais.', 'Um museu.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7_ops-l3',
          title: 'Lição 3: Protocolos de Comunicação (MQTT)',
          videoUrl: 'https://www.youtube.com/watch?v=wIkBhzZ2oJI',
          content: `## A Língua da IoT
MQTT é o padrão leve para enviar dados de sensores instáveis.
OPC-UA é o padrão para interoperabilidade entre máquinas de fabricantes diferentes (Siemens fala com Rockwell).
A engenharia de dados precisa traduzir tudo isso.`,
          quiz: [{ question: 'Para que serve o protocolo MQTT?', options: ['Enviar vídeo.', 'Transmissão leve de dados de sensores (IoT) com baixa banda.', 'Imprimir.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7_ops-l4',
          title: 'Lição 4: Contextualização de Dados',
          videoUrl: 'https://www.youtube.com/watch?v=CzIvofFYykY',
          content: `## Dado vs. Informação
Saber que a temperatura é 100°C é inútil sem contexto.
Engenharia de dados cruza o sensor (OT) com o ERP (IT): "Estava 100°C enquanto fabricávamos o Lote X do Produto Y". Isso permite análise de qualidade.`,
          quiz: [{ question: 'O que é contextualização em dados industriais?', options: ['Escrever texto.', 'Cruzar dados brutos de sensores com dados de produção/negócio para dar significado.', 'Traduzir.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7_ops-l5',
          title: 'Lição 5: Data Lake Industrial',
          videoUrl: 'https://www.youtube.com/watch?v=q33K4FWo0Lk',
          content: `## Repositório Unificado
Jogar dados de vibração, imagens de câmeras de qualidade, logs de manutenção e ordens de produção no mesmo lugar.
Só assim é possível descobrir correlações complexas ("A máquina vibra mais quando usamos a matéria-prima do fornecedor B").`,
          quiz: [{ question: 'Qual a vantagem do Data Lake Industrial?', options: ['É bonito.', 'Centralizar dados heterogêneos (sensores, imagens, texto) para análise correlecionada.', 'É caro.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7_ops-l6',
          title: 'Lição 6: Edge to Cloud Pipelines',
          videoUrl: 'https://www.youtube.com/watch?v=yCTXWus2QTI',
          content: `## Arquitetura Híbrida
Não dá para enviar tudo para a nuvem (custo/latência).
O pipeline começa na Borda (Edge), que filtra e agrega os dados (ex: média por minuto), e envia apenas o resumo limpo para o Data Lake na nuvem.`,
          quiz: [{ question: 'Qual a função do Edge no pipeline de dados?', options: ['Nenhuma.', 'Filtrar, agregar e processar dados localmente antes de enviar para a nuvem.', 'Guardar tudo.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7_ops-l7',
          title: 'Lição 7: Qualidade de Dados de Sensores',
          videoUrl: 'https://www.youtube.com/watch?v=Opa7Zkq-3pA',
          content: `## Limpeza de Ruído
Sensores mentem. Eles têm ruído elétrico, perdem sinal ou descalibram.
Pipelines de dados industriais precisam de algoritmos robustos de limpeza (remoção de outliers, interpolação de gaps) antes de qualquer análise.`,
          quiz: [{ question: 'Por que limpar dados de sensores?', options: ['Para ficar bonito.', 'Para remover ruídos e falhas de leitura que distorceriam a análise.', 'Para ocupar menos espaço.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7_ops-l8',
          title: 'Lição 8: Digital Thread',
          videoUrl: 'https://www.youtube.com/watch?v=rNmRcU9A0O0',
          content: `## O Fio Digital
Conectar o dado do design (CAD), da fabricação (CAM), da qualidade e do uso em campo.
Permite rastreabilidade total: "Este defeito em campo foi causado por uma mudança de design feita há 2 anos?".`,
          quiz: [{ question: 'O que é Digital Thread?', options: ['Um cabo.', 'O fluxo contínuo de dados que conecta o ciclo de vida do produto, do design ao descarte.', 'Costura.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7_ops-l9',
          title: 'Lição 9: Dashboards de Chão de Fábrica',
          videoUrl: 'https://www.youtube.com/watch?v=Ri34OmpEpU8',
          content: `## Gestão Visual 4.0
Substituir o quadro branco por telas em tempo real.
Mas cuidado: O operador precisa de dados "At a Glance" (bater o olho e entender). Semáforos, medidores simples. Nada de tabelas complexas na linha.`,
          quiz: [{ question: 'Qual a regra para dashboards de operação?', options: ['Complexidade.', 'Simplicidade e leitura imediata (At a Glance) para tomada de decisão rápida.', 'Texto pequeno.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7_ops-l10',
          title: 'Lição 10: Integração ERP-MES',
          videoUrl: 'https://www.youtube.com/watch?v=l_KI8c370HA',
          content: `## A Conexão Vital
ERP (Planejamento) diz "O que fazer". MES (Execução) diz "Como foi feito".
A engenharia de dados deve garantir que essa sincronia seja perfeita e bidirecional para que o estoque e o custo estejam sempre reais.`,
          quiz: [{ question: 'O que a integração ERP-MES garante?', options: ['Nada.', 'Alinhamento entre o planejamento de negócios e a execução real da produção.', 'Mais trabalho.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm7-ops-l11',
        title: 'Lição 11: Segurança de Dados OT',
        videoUrl: 'https://www.youtube.com/watch?v=t3fEoJQyhH4',
        content: `## Air Gap e Data Diodes
Historicamente, redes de fábrica eram isoladas (Air Gap).
Para conectar na nuvem com segurança, usamos Data Diodes (hardware que só permite o dado sair, nunca entrar) para impedir que um hacker na nuvem controle a máquina.`,
        quiz: [{ question: 'O que é um Data Diode?', options: ['Um LED.', 'Dispositivo de segurança que permite fluxo de dados em apenas uma direção (fábrica -> nuvem).', 'Um vírus.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm7-ops-l12',
        title: 'Lição 12: Catálogo de Dados Operacional',
        videoUrl: 'https://www.youtube.com/watch?v=t3fEoJQyhH4',
        content: `## O que é a Tag "TI-304"?
Sensores têm nomes crípticos.
Um catálogo de dados é essencial para traduzir "TI-304" para "Temperatura de Entrada da Caldeira 2", permitindo que humanos (e IAs) entendam o dado.`,
        quiz: [{ question: 'Para que serve o catálogo de dados em OT?', options: ['Vender produtos.', 'Traduzir códigos técnicos de sensores para nomes de negócio compreensíveis.', 'Organizar livros.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm7-ops-l13',
        title: 'Lição 13: Cultura Data-Driven na Manutenção',
        videoUrl: 'https://www.youtube.com/watch?v=Opa7Zkq-3pA',
        content: `## Do "Eu Acho" para "O Dado Mostra"
Mudar a mentalidade do mecânico experiente que "ouve" a máquina para confiar no gráfico de vibração.
Exige UX amigável e provas de conceito que mostrem que o dado ajuda, não substitui a experiência.`,
        quiz: [{ question: 'Como implementar cultura de dados na manutenção?', options: ['Impondo.', 'Mostrando como os dados complementam a experiência técnica, facilitando o diagnóstico.', 'Demitindo os antigos.'], correctAnswerIndex: 1 }],
      },
    ],
};
