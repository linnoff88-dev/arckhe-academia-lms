
import { Module } from '../../types';
import { Bot } from '../../components/icons';

export const M6_LEAD: Module = {
    id: 'm6_lead',
    title: 'Módulo 6: Automação de Processos de RH',
    subtitle: 'Eliminando a burocracia para focar em gente.',
    icon: Bot,
    lessons: [
      {
          id: 'm6_lead-l1',
          title: 'Lição 1: RPA no Departamento Pessoal',
          videoUrl: 'https://www.youtube.com/watch?v=YevFxH3n02s',
          content: `## Folha sem Erro
Automação de fechamento de folha, admissão e demissão.
Robôs conferem dados, enviam para o eSocial e geram holerites.
Zero erro de cálculo, zero multa, zero atraso.`,
          quiz: [{ question: 'O que o RPA resolve no DP?', options: ['Calcula errado.', 'Automatiza tarefas repetitivas e críticas como folha e eSocial, eliminando erros.', 'Contrata.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6_lead-l2',
          title: 'Lição 2: Triagem de Currículos com IA',
          videoUrl: 'https://www.youtube.com/watch?v=Z5W7-3W3N4o', // AI in Recruitment
          content: `## Filtro Inteligente
Receber 1000 currículos para uma vaga.
A IA lê e ranqueia os candidatos baseado no "match" com a descrição da vaga, não apenas palavras-chave.
Libera o recrutador para entrevistar os 10 melhores.`,
          quiz: [{ question: 'Qual a função da IA na triagem?', options: ['Sorteio.', 'Ranqueamento inteligente de candidatos por fit técnico e cultural.', 'Apagar tudo.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6_lead-l3',
          title: 'Lição 3: Agendamento de Entrevistas',
          videoUrl: 'https://www.youtube.com/watch?v=0iC5sIgZuOs',
          content: `## Fim do "Ping-Pong"
Agentes de agendamento conversam com o candidato e com o gestor para achar o horário comum.
Envia convite, link do Zoom e lembretes automaticamente.`,
          quiz: [{ question: 'O que a automação de agendamento elimina?', options: ['A entrevista.', 'A troca interminável de e-mails para conciliar agendas.', 'O candidato.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6_lead-l4',
          title: 'Lição 4: Onboarding Digital',
          videoUrl: 'https://www.youtube.com/watch?v=w2-Y55tLwdk',
          content: `## Do "Sim" ao "Produtivo"
Workflow automático: O candidato aceita -> Sistema cria e-mail -> Solicita notebook -> Libera acessos -> Envia kit de boas-vindas -> Agenda treinamento.
Experiência incrível desde o dia 1.`,
          quiz: [{ question: 'O que um workflow de onboarding garante?', options: ['Atraso.', 'Que o novo colaborador tenha tudo pronto (equipamentos, acessos) no primeiro dia.', 'Burocracia.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6_lead-l5',
          title: 'Lição 5: Gestão de Férias e Ausências',
          videoUrl: 'https://www.youtube.com/watch?v=CzIvofFYykY',
          content: `## Self-Service
Funcionário pede férias no app.
O sistema verifica saldo, política da equipe (não pode sair todo mundo junto) e aprova automaticamente ou escala para o gestor. Atualiza o calendário do time.`,
          quiz: [{ question: 'Como automatizar férias?', options: ['Proibindo.', 'Com portais self-service e validação automática de regras e saldos.', 'Papel.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6_lead-l6',
          title: 'Lição 6: Offboarding Seguro',
          videoUrl: 'https://www.youtube.com/watch?v=GFeXcafDPlY',
          content: `## Desligamento
Ao demitir, é crítico revogar acessos imediatamente.
A automação desliga o e-mail, bloqueia o Salesforce e agenda a entrevista de desligamento em um clique, garantindo segurança da informação.`,
          quiz: [{ question: 'Qual a prioridade na automação de desligamento?', options: ['Festa.', 'Segurança (revogação imediata de acessos) e conformidade legal.', 'Nada.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6_lead-l7',
          title: 'Lição 7: Respostas a Dúvidas (Helpdesk RH)',
          videoUrl: 'https://www.youtube.com/watch?v=jX33z1tGSQg',
          content: `## FAQ Inteligente
Bot de RH treinado nas políticas da empresa.
Responde "Como funciona o reembolso?" 24/7.
Reduz drasticamente os chamados para o time de RH.`,
          quiz: [{ question: 'O que o Helpdesk de RH com IA resolve?', options: ['Dúvidas de amor.', 'Perguntas frequentes sobre benefícios e políticas, instantaneamente.', 'Demissão.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6_lead-l8',
          title: 'Lição 8: Documentação Legal Automática',
          videoUrl: 'https://www.youtube.com/watch?v=nHYGdAch_YA',
          content: `## Contratos e Aditivos
Gerar contratos de trabalho personalizados sem erro.
A IA preenche os campos com os dados do candidato e da vaga, e envia para assinatura digital (DocuSign).`,
          quiz: [{ question: 'Como a automação ajuda em documentos legais?', options: ['Escrevendo lei.', 'Geração automática e sem erros de contratos padrão integrados à assinatura digital.', 'Demorando.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6_lead-l9',
          title: 'Lição 9: Benefícios Flexíveis',
          videoUrl: 'https://www.youtube.com/watch?v=X6vp2oyU8L8',
          content: `## Escolha do Usuário
Plataformas onde o funcionário monta seu pacote de benefícios (pontos).
A automação gere o saldo, desconta na folha e comunica os fornecedores (plano de saúde, vale), sem planilha manual do RH.`,
          quiz: [{ question: 'O que permite a gestão de benefícios flexíveis?', options: ['Planilha.', 'Plataformas automatizadas que gerem a escolha do colaborador e o impacto na folha.', 'Rigidez.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6_lead-l10',
          title: 'Lição 10: Feedback Contínuo Automatizado',
          videoUrl: 'https://www.youtube.com/watch?v=SC5Fj0_cKho',
          content: `## Nudges
O sistema lembra o gestor: "Você não dá feedback para a Maria há 30 dias. Que tal marcar um 1:1?".
Pequenos empurrões (Nudges) automáticos para manter a cultura de feedback viva.`,
          quiz: [{ question: 'O que são Nudges de RH?', options: ['Empurrões físicos.', 'Lembretes automáticos comportamentais para gestores e times (ex: dar feedback).', 'Multas.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm6-lead-l11',
        title: 'Lição 11: Análise de Equidade Salarial',
        videoUrl: 'https://www.youtube.com/watch?v=Q7OJenx_dbc',
        content: `## Auditoria Constante
Robôs que varrem a folha de pagamento buscando disparidades salariais injustificadas entre gêneros ou etnias para a mesma função e alertam a diretoria.`,
        quiz: [{ question: 'Como a automação promove equidade?', options: ['Ignorando.', 'Monitorando dados salariais continuamente para detectar e alertar sobre disparidades injustas.', 'Reduzindo salário.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm6-lead-l12',
        title: 'Lição 12: Gestão de Terceiros e Freelancers',
        videoUrl: 'https://www.youtube.com/watch?v=Uqr1mZgxjiY',
        content: `## Força Estendida
Automatizar o pagamento, contrato e acesso de freelancers.
Garantir que eles tenham acesso apenas ao necessário e que o pagamento seja liberado mediante entrega aprovada.`,
        quiz: [{ question: 'O que é crítico na gestão de freelancers?', options: ['Chamar para festa.', 'Automação de contratos, acessos temporários e pagamentos ágeis.', 'Contratar CLT.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm6-lead-l13',
        title: 'Lição 13: O Futuro do RH Tech',
        videoUrl: 'https://www.youtube.com/watch?v=fCjnoPdNfgI',
        content: `## RH Invisível
Processos administrativos somem (ficam invisíveis/automáticos).
O RH aparece apenas nos momentos de verdade: Contratação, Desenvolvimento, Promoção e Apoio Pessoal. High Tech, High Touch.`,
        quiz: [{ question: 'Qual a visão de futuro do RH?', options: ['Mais papel.', 'Processos burocráticos invisíveis (automáticos) e foco total no humano.', 'Extinção.'], correctAnswerIndex: 1 }],
      },
    ],
};
