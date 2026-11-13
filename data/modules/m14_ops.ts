
import { Module } from '../../types';
import { BrainLightbulb } from '../../components/icons';

export const M14_OPS: Module = {
    id: 'm14_ops',
    title: 'Módulo 14: Gestão de Conhecimento Operacional',
    subtitle: 'Retendo o conhecimento tribal e digitalizando procedimentos.',
    icon: BrainLightbulb,
    lessons: [
      {
          id: 'm14_ops-l1',
          title: 'Lição 1: O Problema do Aposentado',
          videoUrl: 'https://www.youtube.com/watch?v=M49dw8KZGmA',
          content: `## Retenção de Talento
Operadores sêniores estão se aposentando e levando o conhecimento ("O segredo da caldeira") com eles.
Sistemas de PKM industrial capturam esse conhecimento tácito antes que ele saia da porta, transformando-o em ativo da empresa.`,
          quiz: [{ question: 'Qual o maior risco de gestão de conhecimento na indústria?', options: ['Falta de papel.', 'A perda de conhecimento tácito quando especialistas se aposentam (Brain Drain).', 'Internet lenta.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm14_ops-l2',
          title: 'Lição 2: SOPs Digitais e Vivos',
          videoUrl: 'https://www.youtube.com/watch?v=TEUA2cAqdJs',
          content: `## Procedimentos que Funcionam
Ninguém lê manuais em papel de 500 páginas.
SOPs (Standard Operating Procedures) digitais são interativos, com vídeos curtos, acessíveis via QR Code na máquina. A IA mantém eles atualizados baseado no feedback do operador.`,
          quiz: [{ question: 'Como modernizar SOPs?', options: ['Plastificar.', 'Torná-los digitais, interativos, com vídeo e acessíveis no ponto de uso (QR Code).', 'Escrever mais.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm14_ops-l3',
          title: 'Lição 3: Captura de Vídeo "Hands-Free"',
          videoUrl: 'https://www.youtube.com/watch?v=vybwqOfuJnc',
          content: `## Go-Pro na Fábrica
O técnico usa óculos inteligentes ou câmera no capacete para gravar o conserto complexo.
A IA transcreve, segmenta o vídeo e cria um tutorial passo-a-passo automático para treinar os juniores.`,
          quiz: [{ question: 'Como capturar conhecimento de manutenção?', options: ['Escrevendo.', 'Gravando a execução real (vídeo) e usando IA para gerar tutoriais.', 'Desenhando.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm14_ops-l4',
          title: 'Lição 4: Busca Semântica de Manuais',
          videoUrl: 'https://www.youtube.com/watch?v=Ufd0cYzeaks',
          content: `## O Google da Fábrica
Em vez de folhear manuais, o operador pergunta: "Qual o torque do parafuso da bomba X?".
O sistema busca em milhares de PDFs técnicos e entrega a resposta exata com a referência da página.`,
          quiz: [{ question: 'O que a busca semântica resolve na operação?', options: ['Tédio.', 'O tempo perdido procurando informações técnicas específicas em grandes manuais.', 'Nada.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm14_ops-l5',
          title: 'Lição 5: Lições Aprendidas (Post-Mortem)',
          videoUrl: 'https://www.youtube.com/watch?v=z5gwBiIDXcA',
          content: `## Aprendendo com a Falha
Após um acidente ou parada, o time faz a análise.
O sistema de PKM garante que essa "Lição Aprendida" não fique num e-mail esquecido, mas seja ativamente sugerida na próxima vez que uma situação similar ocorrer.`,
          quiz: [{ question: 'Onde devem ficar as Lições Aprendidas?', options: ['Na gaveta.', 'Em um sistema ativo que sugere o conhecimento quando o contexto se repete.', 'No lixo.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm14_ops-l6',
          title: 'Lição 6: Wiki de Engenharia',
          videoUrl: 'https://www.youtube.com/watch?v=K1xftIigIjE',
          content: `## Conhecimento Colaborativo
Uma base de conhecimento onde engenharia, manutenção e operação colaboram.
Se a engenharia muda o design, a manutenção é avisada. Se a manutenção acha um defeito de design, a engenharia sabe. Quebra de silos.`,
          quiz: [{ question: 'Qual o objetivo de uma Wiki de Engenharia?', options: ['Fofoca.', 'Colaboração e fluxo de conhecimento bidirecional entre design, operação e manutenção.', 'Backup.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm14_ops-l7',
          title: 'Lição 7: Curadoria de Normas Técnicas',
          videoUrl: 'https://www.youtube.com/watch?v=hkAmnbzwqXY', // AI Compliance
          content: `## Compliance Ativo
Normas (ISO, NR) mudam.
Agentes de IA monitoram atualizações regulatórias e avisam quais procedimentos internos precisam ser revisados para manter a conformidade.`,
          quiz: [{ question: 'Como a IA ajuda com Normas Técnicas?', options: ['Ignorando.', 'Monitorando mudanças e sugerindo atualizações nos procedimentos internos.', 'Imprimindo.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm14_ops-l8',
          title: 'Lição 8: Realidade Aumentada para Treinamento',
          videoUrl: 'https://www.youtube.com/watch?v=jaW1x4nOodM',
          content: `## Aprender Fazendo
Treinar novos operadores em ambiente virtual ou com sobreposição digital na máquina real.
Reduz o tempo de treinamento e o risco de acidentes ou quebra de equipamento durante o aprendizado.`,
          quiz: [{ question: 'Qual a vantagem de RA no treinamento?', options: ['É divertido.', 'Acelera a curva de aprendizado e reduz riscos operacionais.', 'É barato.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm14_ops-l9',
          title: 'Lição 9: Histórico de Ativos (Asset Health)',
          videoUrl: 'https://www.youtube.com/watch?v=3WBIrqbN5zA',
          content: `## O Prontuário da Máquina
Cada máquina tem um "diário" digital completo: quando foi instalada, quem operou, quais peças trocou, quais alertas emitiu.
Essencial para diagnóstico rápido e valor de revenda do ativo.`,
          quiz: [{ question: 'O que é o Histórico de Ativo?', options: ['Uma foto.', 'O registro completo e centralizado de todos os eventos da vida útil do equipamento.', 'Um manual.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm14_ops-l10',
          title: 'Lição 10: Comunidade de Prática',
          videoUrl: 'https://www.youtube.com/watch?v=TEUA2cAqdJs',
          content: `## Conectando Fábricas
Em empresas multi-site, o problema da Fábrica A já foi resolvido pela Fábrica B.
Plataformas de comunidade interna conectam os especialistas ("Quem sabe sobre bomba de vácuo?") para troca de soluções.`,
          quiz: [{ question: 'Como conectar conhecimento em multinacionais?', options: ['E-mail geral.', 'Comunidades de prática digitais que conectam especialistas de diferentes plantas.', 'Viagens.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm14_ops-l11',
          title: 'Lição 11: Assistentes de Turno (Shift Handoff)',
          videoUrl: 'https://www.youtube.com/watch?v=c68fnfyDEy4',
          content: `## O Fim do Telefone Sem Fio
A passagem de turno é crítica.
A IA resume automaticamente os eventos do turno anterior, destaca pendências e cria um briefing de áudio para o operador que está chegando.`,
          quiz: [{ question: 'O que a IA melhora na passagem de turno?', options: ['Nada.', 'Garante que informações críticas sejam transmitidas de forma estruturada e não esquecidas.', 'Aumenta o tempo.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm14_ops-l12',
          title: 'Lição 12: Gestão de Ferramental',
          videoUrl: 'https://www.youtube.com/watch?v=Opa7Zkq-3pA',
          content: `## Onde está a furadeira?
Rastreamento de ferramentas especiais.
Saber quem pegou, quando deve calibrar e onde está guardado. Evita perda de tempo procurando itens críticos.`,
          quiz: [{ question: 'Por que gerir conhecimento de ferramental?', options: ['Para cobrar.', 'Para garantir disponibilidade e calibração, evitando paradas por falta de ferramenta.', 'Para limpar.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm14_ops-l13',
          title: 'Lição 13: O Futuro do Conhecimento Operacional',
          videoUrl: 'https://www.youtube.com/watch?v=z5gwBiIDXcA',
          content: `## Inteligência Coletiva Híbrida
O sistema aprende com a operação.
Cada vez que um operador resolve um problema inédito, o sistema captura a solução e atualiza o modelo global, tornando todas as fábricas mais inteligentes instantaneamente.`,
          quiz: [{ question: 'Qual o futuro do PKM industrial?', options: ['Papel.', 'Aprendizado de máquina contínuo baseado na resolução de problemas humana em tempo real.', 'Esquecimento.'], correctAnswerIndex: 1 }],
      },
    ],
};
