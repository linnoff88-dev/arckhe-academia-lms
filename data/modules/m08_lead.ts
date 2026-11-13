
import { Module } from '../../types';
import { Wrench } from '../../components/icons';

export const M8_LEAD: Module = {
    id: 'm8_lead',
    title: 'Módulo 8: Infraestrutura de Trabalho Híbrido',
    subtitle: 'Ferramentas e plataformas para liderar equipes distribuídas.',
    icon: Wrench,
    lessons: [
      {
          id: 'm8_lead-l1',
          title: 'Lição 1: O Escritório Digital',
          videoUrl: 'https://www.youtube.com/watch?v=6W7G9qfVE74', // Future of Work / Hybrid
          content: `## HQ na Nuvem
O escritório não é o prédio, é o software.
Slack/Teams, Notion/Confluence, Zoom.
A infraestrutura deve garantir que a experiência de trabalho seja igual para quem está em casa ou na sede.`,
          quiz: [{ question: 'O que define o escritório digital?', options: ['Cadeira gamer.', 'O conjunto de ferramentas de software que permite colaboração independente do local.', 'Ar condicionado.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8_lead-l2',
          title: 'Lição 2: Colaboração Assíncrona',
          videoUrl: 'https://www.youtube.com/watch?v=jl8kgAiP3V4',
          content: `## Escrever > Falar
Ferramentas que privilegiam texto e vídeo gravado (Loom) em vez de reuniões ao vivo.
Permite trabalho focado e inclusão de fusos horários diferentes. Infraestrutura de documentação é vital.`,
          quiz: [{ question: 'Qual a base da colaboração assíncrona?', options: ['Reunião.', 'Comunicação por texto/vídeo gravado que não exige resposta imediata.', 'Telefone.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8_lead-l3',
          title: 'Lição 3: Gestão de Projetos Ágil',
          videoUrl: 'https://www.youtube.com/watch?v=l_KI8c370HA',
          content: `## Visibilidade
Jira, Asana, Monday.
O trabalho deve estar visível em um quadro, não escondido em e-mails.
A infraestrutura deve permitir ver "quem está fazendo o quê" sem precisar perguntar.`,
          quiz: [{ question: 'O que ferramentas de gestão ágil proporcionam?', options: ['Controle de horas.', 'Visibilidade transparente do fluxo de trabalho e responsabilidades.', 'Burocracia.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8_lead-l4',
          title: 'Lição 4: Segurança Zero Trust',
          videoUrl: 'https://www.youtube.com/watch?v=wIkBhzZ2oJI',
          content: `## Confie em Ninguém
No trabalho remoto, o perímetro de segurança sumiu.
Zero Trust: "Nunca confie, sempre verifique".
VPNs modernas, autenticação multifator (MFA) e gestão de identidade para proteger o acesso remoto.`,
          quiz: [{ question: 'O que é Zero Trust?', options: ['Paranoia.', 'Modelo de segurança que exige verificação contínua de identidade, independente da localização.', 'Confiança total.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8_lead-l5',
          title: 'Lição 5: Salas de Reunião Híbridas',
          videoUrl: 'https://www.youtube.com/watch?v=CCn3OJ-8ghs',
          content: `## Equidade de Presença
Hardware de sala (câmeras 360, microfones de teto) que garante que quem está remoto seja visto e ouvido tão bem quanto quem está presencial. Evita a exclusão dos remotos.`,
          quiz: [{ question: 'Qual o objetivo de salas híbridas equipadas?', options: ['Gastar dinheiro.', 'Garantir equidade de participação entre presenciais e remotos.', 'Filmes.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8_lead-l6',
          title: 'Lição 6: Whiteboards Digitais',
          videoUrl: 'https://www.youtube.com/watch?v=961LDe2SWTo',
          content: `## A Lousa Infinita
Miro, Mural.
Espaços visuais onde times podem fazer brainstorming, desenhar fluxos e colar post-its juntos, mesmo estando em continentes diferentes.`,
          quiz: [{ question: 'Para que servem Whiteboards Digitais?', options: ['Desenhar.', 'Colaboração visual, brainstorming e planejamento em tempo real.', 'Escrever texto.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8_lead-l7',
          title: 'Lição 7: Gestão de Conhecimento (Wiki)',
          videoUrl: 'https://www.youtube.com/watch?v=MOGyT7a3jaw',
          content: `## A Verdade Única
Notion, SharePoint.
Se não está escrito, não existe.
Cultura de documentação exige uma plataforma robusta e fácil de usar para centralizar processos e políticas.`,
          quiz: [{ question: 'Qual a regra de ouro do trabalho remoto?', options: ['Ligar sempre.', 'Documentar tudo em uma base de conhecimento centralizada.', 'Não escrever.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8_lead-l8',
          title: 'Lição 8: Employee Experience Platform (EXP)',
          videoUrl: 'https://www.youtube.com/watch?v=-_KbDTz0Bus',
          content: `## A Intranet Moderna
Microsoft Viva, Workday.
Uma plataforma que integra RH, Comunicação, Bem-estar e Aprendizado em um único app no celular do funcionário. O "Super App" da empresa.`,
          quiz: [{ question: 'O que é uma EXP?', options: ['Experiência ruim.', 'Plataforma integrada focada na experiência digital do colaborador.', 'Rede social.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8_lead-l9',
          title: 'Lição 9: Ferramentas de Bem-estar',
          videoUrl: 'https://www.youtube.com/watch?v=ZyXy6Nn96os',
          content: `## Cuidando de Longe
Apps de meditação, telemedicina e pausas ativas integrados ao pacote de trabalho.
Infraestrutura para suportar a saúde mental do time remoto.`,
          quiz: [{ question: 'Como a infraestrutura apoia o bem-estar?', options: ['Dando folga.', 'Oferecendo acesso digital a serviços de saúde mental e física.', 'Monitorando.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8_lead-l10',
          title: 'Lição 10: Hardware como Serviço',
          videoUrl: 'https://www.youtube.com/watch?v=F7gfvkknijQ',
          content: `## Logística de TI
Como entregar um notebook seguro para um funcionário no interior do país?
Serviços de DaaS (Device as a Service) que gerenciam a entrega, manutenção e troca de equipamentos remotamente.`,
          quiz: [{ question: 'O que é DaaS?', options: ['Dados.', 'Device as a Service: gestão terceirizada de hardware para times distribuídos.', 'Software.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm8-lead-l11',
        title: 'Lição 11: Cafés Virtuais e Socialização',
        videoUrl: 'https://www.youtube.com/watch?v=jl8kgAiP3V4',
        content: `## Serendipidade Programada
Donut (bot do Slack).
Ferramentas que agendam conversas aleatórias entre funcionários que não se conhecem para recriar o "papo do bebedouro" e fortalecer laços.`,
        quiz: [{ question: 'Para que servem bots como Donut?', options: ['Comer.', 'Promover interações sociais informais entre colegas remotos.', 'Trabalhar.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm8-lead-l12',
        title: 'Lição 12: Monitoramento vs. Confiança',
        videoUrl: 'https://www.youtube.com/watch?v=961LDe2SWTo',
        content: `## Bossware
Softwares que tiram print da tela ou contam cliques (tattleware).
Geralmente destroem a cultura.
A infraestrutura deve focar em medir entregas (output), não presença (input).`,
        quiz: [{ question: 'Qual a visão moderna sobre software de monitoramento?', options: ['Essencial.', 'Geralmente tóxico; deve-se focar em gestão por resultados/entregas.', 'Legal.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm8-lead-l13',
        title: 'Lição 13: O Futuro do Espaço de Trabalho',
        videoUrl: 'https://www.youtube.com/watch?v=MOGyT7a3jaw',
        content: `## Metaverso Corporativo?
Escritórios virtuais (Gather, Mesh).
Ambientes imersivos para reuniões e colaboração que tentam replicar a presença física. Ainda experimental, mas promissor.`,
        quiz: [{ question: 'O que são escritórios virtuais imersivos?', options: ['Jogos.', 'Ambientes digitais 3D para colaboração e presença remota.', 'Vídeo chamada.'], correctAnswerIndex: 1 }],
      },
    ],
};
