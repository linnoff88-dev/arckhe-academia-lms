
import { Module } from '../../types';
import { Database } from '../../components/icons';

export const M7_LEAD: Module = {
    id: 'm7_lead',
    title: 'Módulo 7: Engenharia de Dados de Pessoas',
    subtitle: 'Construindo a infraestrutura para People Analytics.',
    icon: Database,
    lessons: [
      {
          id: 'm7_lead-l1',
          title: 'Lição 1: Dados de RH Fragmentados',
          videoUrl: 'https://www.youtube.com/watch?v=3P2hLdvP4ZA',
          content: `## O Silo de Gente
Dados de folha estão no sistema A, avaliação no B, recrutamento no C.
O primeiro passo da engenharia é criar um Data Lake de RH unificado para cruzar essas informações.`,
          quiz: [{ question: 'Qual o maior problema técnico em People Analytics?', options: ['Falta de gente.', 'Dados fragmentados em sistemas isolados (Silos).', 'Computador lento.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7_lead-l2',
          title: 'Lição 2: LGPD e Dados de Funcionários',
          videoUrl: 'https://www.youtube.com/watch?v=l-BA-dXXCVA',
          content: `## Dado Sensível
Dados de saúde, salário e performance são altamente sensíveis.
Engenharia de privacidade: Anonimização, criptografia e controle de acesso rigoroso são pré-requisitos para qualquer análise.`,
          quiz: [{ question: 'O que é mandatório ao lidar com dados de pessoas?', options: ['Publicar.', 'Rigorosa conformidade com LGPD, segurança e anonimização.', 'Vender.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7_lead-l3',
          title: 'Lição 3: Taxonomia de Skills',
          videoUrl: 'https://www.youtube.com/watch?v=Opa7Zkq-3pA',
          content: `## O que as pessoas sabem?
Padronizar os nomes das habilidades.
"Excel Avançado" = "Planilhas Complexas"?
Criar uma ontologia (dicionário) de skills unificado para mapear a competência da organização.`,
          quiz: [{ question: 'Para que serve uma taxonomia de skills?', options: ['Para biologia.', 'Padronizar a linguagem sobre competências para permitir análise e busca de talentos.', 'Para complicar.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7_lead-l4',
          title: 'Lição 4: Integração ATS e LMS',
          videoUrl: 'https://www.youtube.com/watch?v=q33K4FWo0Lk',
          content: `## Do Candidato ao Aluno
Conectar o sistema de recrutamento (ATS) com o de treinamento (LMS).
Entender: "Candidatos que fizeram o curso X durante o processo seletivo performam melhor depois de contratados?".`,
          quiz: [{ question: 'O que a integração ATS-LMS permite?', options: ['Nada.', 'Analisar a jornada de aprendizado desde a candidatura até a contratação.', 'Pagar salário.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7_lead-l5',
          title: 'Lição 5: Data Quality em RH',
          videoUrl: 'https://www.youtube.com/watch?v=t3fEoJQyhH4',
          content: `## Limpeza de Cadastro
Se o cargo do funcionário está errado no sistema, todo o plano de cargos e salários falha.
Scripts de verificação de qualidade de dados (DQ) para garantir que a hierarquia e os dados cadastrais estejam corretos.`,
          quiz: [{ question: 'Por que Data Quality é vital em RH?', options: ['Para o chefe ver.', 'Porque decisões de carreira e salário dependem da precisão desses dados.', 'Não é importante.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7_lead-l6',
          title: 'Lição 6: Dashboards de Headcount',
          videoUrl: 'https://www.youtube.com/watch?v=Ri34OmpEpU8',
          content: `## Visão da Força
Quantos somos? Onde estamos? Quanto custamos?
Visualização em tempo real da força de trabalho, incluindo terceiros e temporários, para planejamento orçamentário.`,
          quiz: [{ question: 'O que um dashboard de Headcount mostra?', options: ['Cabeças.', 'A distribuição, custo e movimentação da força de trabalho em tempo real.', 'Fotos.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7_lead-l7',
          title: 'Lição 7: Dados de Rede (Metadados)',
          videoUrl: 'https://www.youtube.com/watch?v=3vrfdr5Fma0',
          content: `## O Grafo Social
Extrair metadados de e-mail/calendário (quem reúne com quem?) sem ler o conteúdo.
Permite desenhar o grafo social da empresa para entender colaboração e silos, respeitando a privacidade.`,
          quiz: [{ question: 'O que são metadados de comunicação?', options: ['O conteúdo do e-mail.', 'Dados sobre a comunicação (quem, quando, quanto) sem revelar o conteúdo.', 'Fofoca.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7_lead-l8',
          title: 'Lição 8: Pesquisas de Pulso Automatizadas',
          videoUrl: 'https://www.youtube.com/watch?v=CzIvofFYykY',
          content: `## Coleta Contínua
Sistemas que disparam perguntas curtas no Slack/Teams periodicamente.
A engenharia de dados coleta, anonimiza e agrega essas respostas em dashboards de clima em tempo real.`,
          quiz: [{ question: 'Qual a vantagem da coleta automatizada de pulso?', options: ['Irritar.', 'Dados de clima frequentes e integrados ao fluxo de trabalho.', 'Demorar.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7_lead-l9',
          title: 'Lição 9: Benchmarking Salarial',
          videoUrl: 'https://www.youtube.com/watch?v=rNmRcU9A0O0',
          content: `## Comparação de Mercado
Ingerir dados de pesquisas salariais de mercado e cruzar automaticamente com a folha interna.
Identificar quem está abaixo da faixa e corre risco de sair por salário.`,
          quiz: [{ question: 'Como dados ajudam na remuneração?', options: ['Pagando menos.', 'Comparando salários internos com o mercado para garantir competitividade.', 'Sorteando.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7_lead-l10',
          title: 'Lição 10: Modelagem de Turnover',
          videoUrl: 'https://www.youtube.com/watch?v=Q0bbYCQLw6s',
          content: `## Prevendo Saídas
Criar datasets históricos de quem saiu (Exit Interviews + Dados de perfil).
Treinar modelos para identificar os fatores preditores de saída na sua empresa específica.`,
          quiz: [{ question: 'O que alimenta o modelo de turnover?', options: ['Comida.', 'Dados históricos de funcionários que saíram e suas características.', 'Futuro.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm7-lead-l11',
        title: 'Lição 11: Dados de Bem-Estar (Wearables?)',
        videoUrl: 'https://www.youtube.com/watch?v=yCTXWus2QTI',
        content: `## A Fronteira Ética
Algumas empresas usam dados de smartwatches (passos, sono) em programas de saúde.
Exige engenharia de consentimento extremo e separação total entre dados de saúde e avaliação de desempenho.`,
        quiz: [{ question: 'Qual o cuidado com dados de wearables?', options: ['Nenhum.', 'Separação total de dados de saúde da gestão de performance (Ética/Privacidade).', 'Vender.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm7-lead-l12',
        title: 'Lição 12: Self-Service BI para Gestores',
        videoUrl: 'https://www.youtube.com/watch?v=SPq3OSbg8IM',
        content: `## Dados na Ponta
O gestor não deve pedir relatório para o RH.
Ele deve ter um dashboard onde vê as férias, aniversários e performance do seu time.
Engenharia de dados entregando autonomia.`,
        quiz: [{ question: 'O que é Self-Service BI no RH?', options: ['Café.', 'Gestores acessando dados de suas equipes diretamente sem depender de analistas.', 'Esconder dados.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm7-lead-l13',
        title: 'Lição 13: O Futuro do Data Lake de Gente',
        videoUrl: 'https://www.youtube.com/watch?v=gICuKa02KQA', // Talent Intelligence
        content: `## Talent Intelligence
Um lago de dados que mistura dados internos com dados externos (LinkedIn, GitHub).
Visão total do talento disponível dentro e fora da empresa.`,
        quiz: [{ question: 'O que é Talent Intelligence?', options: ['QI.', 'Inteligência de dados combinando fontes internas e externas sobre o mercado de talentos.', 'Espionagem.'], correctAnswerIndex: 1 }],
      },
    ],
};
