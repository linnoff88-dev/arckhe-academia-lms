
import { Module } from '../../types';
import { MessageSquare } from '../../components/icons';

export const M2_LEAD: Module = {
    id: 'm2_lead',
    title: 'Módulo 2: NLP e Comunicação para Líderes',
    subtitle: 'Usando IA para entender e melhorar a comunicação organizacional.',
    icon: MessageSquare,
    lessons: [
      {
          id: 'm2_lead-l1',
          title: 'Lição 1: Análise de Sentimento Organizacional',
          videoUrl: 'https://www.youtube.com/watch?v=BCgm7YLZ2wg',
          content: `## O Pulso da Empresa
NLP permite analisar canais públicos (Slack, pesquisas) anonimizados para medir o clima em tempo real.
Detectar focos de toxicidade ou burnout antes que virem demissões.`,
          quiz: [{ question: 'O que a análise de sentimento revela?', options: ['Segredos.', 'O clima emocional e tendências de engajamento da equipe.', 'Senhas.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm2_lead-l2',
          title: 'Lição 2: Feedback Aumentado',
          videoUrl: 'https://www.youtube.com/watch?v=gICuKa02KQA',
          content: `## Escrevendo Melhor
Ferramentas que ajudam líderes a escreverem feedbacks mais construtivos e menos enviesados.
"Reescreva este feedback para ser mais empático e focado em comportamento, não personalidade."`,
          quiz: [{ question: 'Como a IA melhora o feedback?', options: ['Escreve sozinha.', 'Ajuda a estruturar a mensagem para ser mais clara, empática e acionável.', 'Elogia sempre.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm2_lead-l3',
          title: 'Lição 3: Resumo de Reuniões e Atas',
          videoUrl: 'https://www.youtube.com/watch?v=jX33z1tGSQg',
          content: `## Fim das Reuniões Inúteis?
IA que transcreve reuniões, extrai compromissos e distribui a ata.
Permite que quem não precisava falar não participe, apenas leia o resumo depois (Assincronia).`,
          quiz: [{ question: 'Qual o benefício da ata automática?', options: ['Nenhum.', 'Permite participação assíncrona e garante registro fiel das decisões.', 'Gravar voz.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm2_lead-l4',
          title: 'Lição 4: Tradução e Equipes Globais',
          videoUrl: 'https://www.youtube.com/watch?v=lI7Vj3NfF6E',
          content: `## Liderança Sem Fronteiras
Gerir times que falam línguas diferentes.
Tradução em tempo real em chats e vídeos permite contratar o melhor talento, não importa onde ele more.`,
          quiz: [{ question: 'O que a tradução IA permite na gestão?', options: ['Viajar.', 'Formar equipes globais e inclusivas, superando a barreira do idioma.', 'Aprender inglês.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm2_lead-l5',
          title: 'Lição 5: Chatbots de RH',
          videoUrl: 'https://www.youtube.com/watch?v=SC5Fj0_cKho',
          content: `## Autoatendimento
"Quantos dias de férias eu tenho?" "Como funciona o plano de saúde?"
Chatbots resolvem 80% das dúvidas repetitivas, liberando o RH para cuidar de pessoas, não de burocracia.`,
          quiz: [{ question: 'Qual a função do bot de RH?', options: ['Demitir.', 'Responder dúvidas frequentes e automatizar processos burocráticos.', 'Contratar.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm2_lead-l6',
          title: 'Lição 6: Análise de Redes Organizacionais (ONA)',
          videoUrl: 'https://www.youtube.com/watch?v=tW_Wv5tCq04',
          content: `## Quem Influencia Quem?
Analisar metadados de comunicação (quem fala com quem) para desenhar o organograma real (informal).
Identificar os "hubs" de colaboração e os silos isolados.`,
          quiz: [{ question: 'O que é ONA?', options: ['Organização das Nações.', 'Organizational Network Analysis: Mapear fluxos de comunicação informais.', 'Uma ONG.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm2_lead-l7',
          title: 'Lição 7: Detecção de Viés em Job Descriptions',
          videoUrl: 'https://www.youtube.com/watch?v=nHYGdAch_YA',
          content: `## Linguagem Inclusiva
NLP que analisa descrições de vagas e alerta sobre termos que podem afastar candidatos de certos grupos (ex: linguagem muito agressiva afastando mulheres).`,
          quiz: [{ question: 'Como NLP ajuda na diversidade?', options: ['Cotas.', 'Identificando e corrigindo linguagem enviesada em anúncios de vagas.', 'Sorteio.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm2_lead-l8',
          title: 'Lição 8: Pesquisa de Clima com IA',
          videoUrl: 'https://www.youtube.com/watch?v=z8vSg8z0_aI',
          content: `## Análise Qualitativa em Escala
Em vez de apenas notas (1-5), pergunte "Como você se sente?".
A IA lê milhares de respostas abertas e categoriza os temas principais: "30% reclamam de falta de ferramentas".`,
          quiz: [{ question: 'Qual a vantagem da IA em pesquisas de clima?', options: ['Ler rápido.', 'Processar respostas abertas (qualitativas) em escala para extrair insights.', 'Ignorar respostas.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm2_lead-l9',
          title: 'Lição 9: RAG para Políticas Internas',
          videoUrl: 'https://www.youtube.com/watch?v=74UZux9HpSE',
          content: `## Manual do Colaborador Vivo
Ninguém lê o PDF de compliance.
Um chat RAG onde o funcionário pergunta: "Posso aceitar presente de cliente?" e o bot responde baseado na política atualizada.`,
          quiz: [{ question: 'O que o RAG resolve em compliance?', options: ['Burocracia.', 'Facilita o acesso e entendimento das regras internas via perguntas naturais.', 'Cria regras.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm2_lead-l10',
        title: 'Lição 10: Fine-Tuning de Cultura',
        videoUrl: 'https://www.youtube.com/watch?v=Q0rh6O35djI',
        content: `## O Tom da Empresa
Treinar modelos internos com a comunicação da liderança para que os comunicados automáticos reflitam os valores e o tom de voz da cultura da empresa.`,
        quiz: [{ question: 'Para que serve Fine-Tuning cultural?', options: ['Música.', 'Garantir que a IA comunique-se alinhada aos valores e tom da organização.', 'Nada.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm2_lead-l11',
        title: 'Lição 11: Coaching de Comunicação',
        videoUrl: 'https://www.youtube.com/watch?v=1VOoYGr7-lk',
        content: `## O Treinador de Oratória
Apps que ouvem o líder treinando uma apresentação e dão feedback: "Você falou muito rápido", "Usou muitos vícios de linguagem", "Pareceu inseguro".`,
        quiz: [{ question: 'Como a IA ajuda na oratória?', options: ['Escrevendo discurso.', 'Dando feedback objetivo sobre ritmo, tom e clareza da fala.', 'Falando por você.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm2_lead-l12',
        title: 'Lição 12: Resolução de Conflitos',
        videoUrl: 'https://www.youtube.com/watch?v=mJFNcP-Q62c',
        content: `## Mediação
Usar IA para analisar trocas de e-mail hostis e sugerir uma resposta desarmante (Comunicação Não-Violenta) para reestabelecer o diálogo.`,
        quiz: [{ question: 'Qual o papel da IA em conflitos?', options: ['Julgar.', 'Sugerir reformulações de comunicação para reduzir a hostilidade.', 'Ignorar.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm2_lead-l13',
        title: 'Lição 13: O Futuro da Comunicação Executiva',
        videoUrl: 'https://www.youtube.com/watch?v=hAQSLARIkgc',
        content: `## Avatares e Presença
CEOs usando avatares digitais para enviar mensagens de vídeo personalizadas para milhares de funcionários em seus idiomas nativos. Escala da presença.`,
        quiz: [{ question: 'O que permitem os avatares executivos?', options: ['Férias.', 'Comunicação de vídeo personalizada e escalável em múltiplos idiomas.', 'Anonimato.'], correctAnswerIndex: 1 }],
      },
    ],
};
