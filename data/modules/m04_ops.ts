
import { Module } from '../../types';
import { BookOpen } from '../../components/icons';

export const M4_OPS: Module = {
    id: 'm4_ops',
    title: 'Módulo 4: Dados Operacionais (OT Data)',
    subtitle: 'A convergência de IT e OT: Transformando sensores em estratégia.',
    icon: BookOpen,
    lessons: [
      {
          id: 'm4_ops-l1',
          title: 'Lição 1: IT vs. OT',
          videoUrl: 'https://www.youtube.com/watch?v=3P2hLdvP4ZA',
          content: `## Mundos Colidindo
- **IT (Information Technology):** Dados de escritório (ERP, E-mail). Foco em confidencialidade.
- **OT (Operational Technology):** Dados de máquinas (SCADA, PLC, Sensores). Foco em disponibilidade e segurança física.
A IA exige a união desses dois mundos.`,
          quiz: [{ question: 'Qual a diferença principal entre IT e OT?', options: ['Não tem.', 'IT foca em dados corporativos; OT foca em controle de máquinas e processos físicos.', 'IT é hardware.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4_ops-l2',
          title: 'Lição 2: IoT Industrial (IIoT)',
          videoUrl: 'https://www.youtube.com/watch?v=t3fEoJQyhH4',
          content: `## Tudo Conectado
Sensores baratos permitem conectar ativos que antes eram "mudos" (motores antigos, tanques).
A coleta massiva de dados (Temperatura, Pressão, Vibração) é a matéria-prima para a IA operacional.`,
          quiz: [{ question: 'Qual o papel da IIoT?', options: ['Ligar a luz.', 'Coletar dados granulares de ativos físicos para alimentar sistemas de análise.', 'Vender sensores.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4_ops-l3',
          title: 'Lição 3: Time-Series Data (Séries Temporais)',
          videoUrl: 'https://www.youtube.com/watch?v=3vrfdr5Fma0',
          content: `## O Dado do Tempo
Dados operacionais são quase sempre sequenciais no tempo.
Armazenar e processar bilhões de leituras de sensores exige bancos de dados específicos (Time-Series DBs como InfluxDB) e não SQL tradicional.`,
          quiz: [{ question: 'O que caracteriza dados de sensores?', options: ['São textos.', 'São séries temporais (valor + timestamp) de alta frequência.', 'São imagens.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4_ops-l4',
          title: 'Lição 4: Edge Computing',
          videoUrl: 'https://www.youtube.com/watch?v=yCTXWus2QTI',
          content: `## Processar na Ponta
Enviar todos os dados de vibração (20kHz) para a nuvem é caro e lento (latência).
Edge Computing processa os dados no próprio equipamento ou na fábrica, enviando para a nuvem apenas os insights ou anomalias.`,
          quiz: [{ question: 'Por que usar Edge Computing em operações?', options: ['A nuvem é ruim.', 'Para reduzir latência e custo de banda, processando dados perto da fonte.', 'Para esconder dados.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4_ops-l5',
          title: 'Lição 5: Historian vs. Data Lake',
          videoUrl: 'https://www.youtube.com/watch?v=q33K4FWo0Lk',
          content: `## Evolução do Armazenamento
- **PIMS/Historian:** Legado, caro, difícil de integrar com IA.
- **Data Lake Industrial:** Aberto, barato, escalável.
A modernização envolve extrair dados do Historian para o Lake para que cientistas de dados possam acessá-los.`,
          quiz: [{ question: 'Qual a vantagem do Data Lake sobre o Historian tradicional?', options: ['É mais velho.', 'Flexibilidade, custo e facilidade de integração com ferramentas de IA.', 'Nenhuma.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4_ops-l6',
          title: 'Lição 6: Qualidade de Dados de Sensores',
          videoUrl: 'https://www.youtube.com/watch?v=Opa7Zkq-3pA',
          content: `## Ruído e Falhas
Sensores falham, desconectam ou descalibram.
Antes de usar IA, é preciso limpar os dados: tratar "gaps" (buracos no tempo), remover outliers (ruído elétrico) e normalizar unidades.`,
          quiz: [{ question: 'O que é crítico antes de usar dados de sensores?', options: ['Imprimir.', 'Limpeza e tratamento de qualidade (gaps, ruído, calibração).', 'Aumentar o volume.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4_ops-l7',
          title: 'Lição 7: Contextualização de Dados',
          videoUrl: 'https://www.youtube.com/watch?v=CzIvofFYykY',
          content: `## O Que Aconteceu?
Saber que a temperatura foi 100°C não basta.
É preciso cruzar com dados de produção (ERP): "Estava 100°C enquanto produzíamos o Produto A ou B?".
Sem contexto (Contextualization), o dado do sensor é inútil para análise.`,
          quiz: [{ question: 'O que é contextualização de dados operacionais?', options: ['Escrever texto.', 'Cruzar dados brutos de sensores com dados de negócio (ordem de produção, produto).', 'Traduzir.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4_ops-l8',
          title: 'Lição 8: Protocolos Industriais (MQTT/OPC-UA)',
          videoUrl: 'https://www.youtube.com/watch?v=wIkBhzZ2oJI',
          content: `## A Língua das Máquinas
Máquinas falam línguas estranhas (Modbus, Profinet).
Para modernizar, usamos gateways que traduzem tudo para protocolos de TI modernos como MQTT ou OPC-UA, facilitando a ingestão de dados.`,
          quiz: [{ question: 'Para que serve o protocolo MQTT?', options: ['Enviar e-mail.', 'Comunicação leve e padronizada para dispositivos IoT.', 'Criar sites.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4_ops-l9',
          title: 'Lição 9: Dashboards Operacionais em Tempo Real',
          videoUrl: 'https://www.youtube.com/watch?v=Ri34OmpEpU8',
          content: `## Sala de Controle
Visualização de dados com latência sub-segundo.
Operadores precisam ver o estado da planta *agora*, não o de ontem (BI tradicional).
Uso de ferramentas como Grafana.`,
          quiz: [{ question: 'Qual a característica chave de um dashboard operacional?', options: ['Bonito.', 'Tempo real (baixa latência) para monitoramento crítico.', 'Impresso.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm4_ops-l10',
          title: 'Lição 10: Governança de Dados OT',
          videoUrl: 'https://www.youtube.com/watch?v=t3fEoJQyhH4',
          content: `## Segurança Física
Em IT, vazamento de dados gera multa. Em OT, hackear um dado pode explodir uma caldeira.
A governança de dados operacionais foca em integridade e segurança cibernética crítica.`,
          quiz: [{ question: 'Qual o risco principal na segurança de dados OT?', options: ['Spam.', 'Danos físicos a equipamentos e pessoas (segurança operacional).', 'Lentidão.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm4_ops-l11',
        title: 'Lição 11: OEE Digital',
        videoUrl: 'https://www.youtube.com/watch?v=G1pZdIq-a-w',
        content: `## Eficiência Global
OEE (Overall Equipment Effectiveness) mede a produtividade real.
Com IoT, o cálculo do OEE é automático e instantâneo, eliminando as planilhas de apontamento manual que os operadores preenchiam no fim do turno (e mentiam).`,
        quiz: [{ question: 'Como a digitalização melhora o OEE?', options: ['Aumenta a meta.', 'Garante precisão e tempo real, eliminando erro/fraude no apontamento manual.', 'Não melhora.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm4_ops-l12',
        title: 'Lição 12: Rastreabilidade (Traceability)',
        videoUrl: 'https://www.youtube.com/watch?v=933jvEBm5hE',
        content: `## A História do Produto
Gravar todos os dados de processo (temperatura, pressão, operador) associados a cada número de série produzido.
Se houver um recall, você sabe exatamente quais unidades foram afetadas, sem precisar recolher tudo.`,
        quiz: [{ question: 'Qual o valor da rastreabilidade granular?', options: ['Curiosidade.', 'Qualidade, gestão de recalls precisa e garantia de conformidade.', 'Nenhum.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm4_ops-l13',
        title: 'Lição 13: Cultura de Dados no Chão de Fábrica',
        videoUrl: 'https://www.youtube.com/watch?v=Opa7Zkq-3pA',
        content: `## Empoderando o Operador
Dar dados para quem opera a máquina.
Em vez de cobrar o operador, mostre a ele o painel: "Veja, quando você ajusta assim, a eficiência cai".
Transforma o operador em gestor do seu próprio ativo.`,
        quiz: [{ question: 'Como engajar operadores com dados?', options: ['Punindo.', 'Dando acesso aos dados para que eles mesmos otimizem seu trabalho.', 'Escondendo as telas.'], correctAnswerIndex: 1 }],
      },
    ],
};
