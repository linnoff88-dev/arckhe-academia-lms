
import { Module } from '../../types';
import { MessageSquare } from '../../components/icons';

export const M2_OPS: Module = {
    id: 'm2_ops',
    title: 'Módulo 2: NLP em Processos (IDP & Backoffice)',
    subtitle: 'Lendo documentos, contratos e e-mails automaticamente.',
    icon: MessageSquare,
    lessons: [
      {
          id: 'm2_ops-l1',
          title: 'Lição 1: O Papel na Era Digital',
          videoUrl: 'https://www.youtube.com/watch?v=w2-Y55tLwdk',
          content: `## Dados Não Estruturados
Operações lidam com milhares de PDFs: Faturas, Conhecimentos de Transporte, Contratos.
NLP é a chave para transformar esses documentos em dados de ERP sem digitação humana.`,
          quiz: [{ question: 'Qual o problema de dados em PDF?', options: ['São pesados.', 'São não-estruturados e difíceis de processar automaticamente sem NLP.', 'São feios.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm2_ops-l2',
          title: 'Lição 2: IDP (Intelligent Document Processing)',
          videoUrl: 'https://www.youtube.com/watch?v=xMDNieNBvyg',
          content: `## Além do OCR
OCR apenas lê os caracteres. IDP entende o significado.
Ele sabe que aquele número no canto é o "Valor Total" e aquela data é o "Vencimento", mesmo que o layout da fatura mude.`,
          quiz: [{ question: 'Qual a diferença de IDP para OCR simples?', options: ['Nenhuma.', 'IDP entende o contexto semântico e extrai campos específicos.', 'IDP é mais lento.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm2_ops-l3',
          title: 'Lição 3: Extração de Entidades em Contratos',
          videoUrl: 'https://www.youtube.com/watch?v=tW_Wv5tCq04',
          content: `## Auditoria Automática
Usar NER (Named Entity Recognition) para ler 10.000 contratos e extrair: Data de Renovação, Índice de Reajuste e Multas.
Permite ao setor de Compras renegociar em massa.`,
          quiz: [{ question: 'Como o NER ajuda em contratos?', options: ['Assina sozinho.', 'Extrai dados chave (datas, valores) para gestão em massa.', 'Escreve contratos.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm2_ops-l4',
          title: 'Lição 4: Classificação de Tickets de Suporte',
          videoUrl: 'https://www.youtube.com/watch?v=BCgm7YLZ2wg',
          content: `## Roteamento Inteligente
Quando um chamado chega no Service Desk, o NLP lê o texto, classifica (TI, RH, Manutenção) e atribui a prioridade baseada no sentimento do usuário (está bravo?).`,
          quiz: [{ question: 'O que o NLP faz no Service Desk?', options: ['Conserta o PC.', 'Lê, classifica e roteia o chamado para a fila correta.', 'Apaga o ticket.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm2_ops-l5',
          title: 'Lição 5: Análise de Logs de Manutenção',
          videoUrl: 'https://www.youtube.com/watch?v=X1IpNUs1PV8',
          content: `## Lendo o Diário de Bordo
Técnicos escrevem relatórios de manutenção em texto livre ("Troquei a peça X que estava com ruído").
NLP minera esses textos para descobrir padrões: "A peça X sempre falha depois de ruído".`,
          quiz: [{ question: 'O que o NLP extrai de relatórios técnicos?', options: ['Erros de português.', 'Padrões de falha e insights de manutenção a partir de texto livre.', 'Nada.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm2_ops-l6',
          title: 'Lição 6: Chatbots para Chão de Fábrica',
          videoUrl: 'https://www.youtube.com/watch?v=jAEDrm7X_HI',
          content: `## Interface de Voz
Operadores com luvas ou mãos sujas não podem digitar.
Interfaces de voz (NLP) permitem que eles ditem comandos ou relatem problemas ("Parada na linha 2 por falta de material") sem largar a ferramenta.`,
          quiz: [{ question: 'Qual a vantagem de chatbots de voz na fábrica?', options: ['Cantar.', 'Permitir interação "hands-free" (mãos livres) para operadores.', 'Falar alto.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm2_ops-l7',
          title: 'Lição 7: Tradução de Manuais Técnicos',
          videoUrl: 'https://www.youtube.com/watch?v=lI7Vj3NfF6E',
          content: `## Conhecimento Global
Máquina alemã, manual em alemão, operador brasileiro.
IA traduz manuais técnicos mantendo a precisão do vocabulário de engenharia, garantindo que a operação siga o padrão correto.`,
          quiz: [{ question: 'O desafio na tradução de manuais é:', options: ['O tamanho.', 'Manter a precisão técnica do vocabulário específico.', 'A cor.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm2_ops-l8',
          title: 'Lição 8: Resumo de Incidentes',
          videoUrl: 'https://www.youtube.com/watch?v=74UZux9HpSE',
          content: `## Post-Mortem Rápido
Após um incidente grave, há centenas de e-mails e logs.
A IA resume a timeline do evento e sugere a causa raiz baseada na documentação gerada durante a crise.`,
          quiz: [{ question: 'Como a IA ajuda após um incidente?', options: ['Escondendo provas.', 'Resumindo a documentação para facilitar a análise de causa raiz.', 'Demitindo culpados.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm2_ops-l9',
          title: 'Lição 9: RAG para Procedimentos (SOPs)',
          videoUrl: 'https://www.youtube.com/watch?v=UglOlJCG8xI',
          content: `## O Oráculo da Operação
O operador pergunta: "Qual a pressão correta da caldeira B?"
O sistema RAG busca no PDF do manual atualizado e responde: "45 PSI".
Garante que ninguém opere com informação de memória (que pode estar errada).`,
          quiz: [{ question: 'O que o RAG garante na operação?', options: ['Diversão.', 'Acesso à informação técnica correta e atualizada direto da fonte.', 'Rapidez apenas.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm2_ops-l10',
        title: 'Lição 10: Conformidade Regulatória',
        videoUrl: 'https://www.youtube.com/watch?v=hkAmnbzwqXY',
        content: `## Auditoria Contínua
NLP lê todas as comunicações e transações para garantir que a empresa não está violando regras ambientais ou trabalhistas.
Detecta palavras-chave de risco em e-mails corporativos.`,
        quiz: [{ question: 'Como o NLP atua no Compliance?', options: ['Espionando fofoca.', 'Monitorando comunicações em busca de riscos regulatórios e violações.', 'Bloqueando e-mail.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm2_ops-l11',
        title: 'Lição 11: Emails de Fornecedores',
        videoUrl: 'https://www.youtube.com/watch?v=nHYGdAch_YA',
        content: `## Automação de Compras
O fornecedor manda e-mail: "O pedido vai atrasar 2 dias".
A IA lê, entende o impacto, atualiza a data no ERP e avisa a produção para reprogramar. Tudo automático.`,
        quiz: [{ question: 'O que a IA faz com e-mails de fornecedores?', options: ['Deleta.', 'Extrai informações logísticas (atrasos, datas) e atualiza o ERP.', 'Responde com piada.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm2_ops-l12',
        title: 'Lição 12: Limpeza de Dados de Cadastro',
        videoUrl: 'https://www.youtube.com/watch?v=Opa7Zkq-3pA',
        content: `## Mestre de Materiais
Cadastros duplicados ("Parafuso 10mm" vs "Paraf. 10 milimetros") causam estoque fantasma.
NLP identifica que são a mesma coisa pela descrição semântica e sugere unificação.`,
        quiz: [{ question: 'Como o NLP ajuda no cadastro de materiais?', options: ['Tirando foto.', 'Identificando duplicatas semânticas (nomes diferentes, mesmo item).', 'Pesando o item.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm2_ops-l13',
        title: 'Lição 13: O Futuro da Documentação',
        videoUrl: 'https://www.youtube.com/watch?v=mJFNcP-Q62c',
        content: `## Documentação Viva
Manuais que se escrevem sozinhos.
A IA observa o técnico trabalhando (via vídeo/voz) e gera o procedimento escrito automaticamente. O conhecimento tácito vira explícito.`,
        quiz: [{ question: 'Qual o futuro dos manuais técnicos?', options: ['Papel.', 'Geração automática a partir da observação do trabalho real.', 'Extinção.'], correctAnswerIndex: 1 }],
      },
    ],
};
