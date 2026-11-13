
import { Module } from '../../types';
import { BrainCog } from '../../components/icons';

export const M3_LEAD: Module = {
    id: 'm3_lead',
    title: 'Módulo 3: People Analytics e ML para Gestão',
    subtitle: 'Tomada de decisão sobre pessoas baseada em dados, não em "feeling".',
    icon: BrainCog,
    lessons: [
      {
          id: 'm3_lead-l1',
          title: 'Lição 1: Do RH Operacional ao Estratégico',
          videoUrl: 'https://www.youtube.com/watch?v=Y6DSn3HCCkU',
          content: `## A Era dos Dados
RH costumava ser sobre folha de pagamento e festas.
Com People Analytics, RH vira parceiro estratégico, prevendo quais talentos contratar e quem promover para maximizar o lucro.`,
          quiz: [{ question: 'Qual a transformação do RH com dados?', options: ['Fica mais chato.', 'Deixa de ser suporte operacional para ser parceiro estratégico de negócio.', 'Vira TI.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3_lead-l2',
          title: 'Lição 2: Preditores de Performance',
          videoUrl: 'https://www.youtube.com/watch?v=gICuKa02KQA',
          content: `## O que faz um Top Performer?
ML analisa dados de vendedores de sucesso (background, testes psicométricos, comportamento) para identificar quais características realmente correlacionam com vendas altas.
Muitas vezes, não é "formação em faculdade de ponta".`,
          quiz: [{ question: 'O que o ML descobre sobre performance?', options: ['Quem chega cedo.', 'As características reais (e muitas vezes surpreendentes) que predizem sucesso na função.', 'Nada.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3_lead-l3',
          title: 'Lição 3: Previsão de Rotatividade (Retention)',
          videoUrl: 'https://www.youtube.com/watch?v=Q7OJenx_dbc',
          content: `## Flight Risk
Algoritmos que alertam: "O funcionário X tem 85% de chance de sair nos próximos 3 meses".
Baseado em: Salário defasado, tempo sem promoção, queda de engajamento.
Permite retenção proativa.`,
          quiz: [{ question: 'Para que serve a previsão de Flight Risk?', options: ['Demitir antes.', 'Agir proativamente para reter talentos em risco de saída.', 'Comprar passagens.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3_lead-l4',
          title: 'Lição 4: Diversidade e Inclusão com Dados',
          videoUrl: 'https://www.youtube.com/watch?v=nHYGdAch_YA',
          content: `## Medindo o Progresso
Não basta "querer" diversidade. É preciso medir o funil de contratação e promoção.
Onde as mulheres estão caindo no processo? Na triagem? Na entrevista técnica?
Dados mostram onde está o viés estrutural.`,
          quiz: [{ question: 'Como dados ajudam na D&I?', options: ['Criando cotas.', 'Identificando gargalos e vieses específicos em cada etapa do funil de talentos.', 'Escondendo problemas.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3_lead-l5',
          title: 'Lição 5: Otimização de Benefícios',
          videoUrl: 'https://www.youtube.com/watch?v=0iC5sIgZuOs',
          content: `## Valor Percebido
Análise de dados para entender quais benefícios (Gympass, Plano de Saúde, Creche) realmente impactam a satisfação e retenção de cada perfil demográfico.
Personalização do pacote de compensação.`,
          quiz: [{ question: 'Qual o objetivo da otimização de benefícios?', options: ['Cortar custo.', 'Maximizar o valor percebido pelo colaborador e o impacto na retenção.', 'Padronizar.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3_lead-l6',
          title: 'Lição 6: Planejamento de Força de Trabalho',
          videoUrl: 'https://www.youtube.com/watch?v=2Y1jJMggZjY',
          content: `## Workforce Planning
"Se crescermos 20% ano que vem, quantas pessoas precisamos contratar e em quais funções?"
Modelos preditivos ajudam a dimensionar o time e o orçamento de pessoal com precisão.`,
          quiz: [{ question: 'O que é Workforce Planning?', options: ['Festa da firma.', 'Planejamento estratégico de dimensionamento e competências da equipe futura.', 'Fazer escala.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3_lead-l7',
          title: 'Lição 7: Análise de Redes (ONA) para Liderança',
          videoUrl: 'https://www.youtube.com/watch?v=tW_Wv5tCq04',
          content: `## Líderes Ocultos
ONA revela quem são as pessoas centrais na rede de confiança da empresa, que não necessariamente são os gerentes.
São os influenciadores chave para disseminar mudanças culturais.`,
          quiz: [{ question: 'Quem o ONA identifica?', options: ['O chefe.', 'Influenciadores informais e gargalos de comunicação na rede.', 'Quem trabalha mais.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3_lead-l8',
          title: 'Lição 8: Matching de Mentoria',
          videoUrl: 'https://www.youtube.com/watch?v=nHYGdAch_YA',
          content: `## Tinder Corporativo
Algoritmos que conectam mentores e mentorados baseados em skills complementares, objetivos de carreira e perfil, aumentando a eficácia dos programas de desenvolvimento.`,
          quiz: [{ question: 'Como a IA melhora a mentoria?', options: ['Sorteando.', 'Fazendo o matching ideal entre perfis e objetivos de aprendizado.', 'Dando aula.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3_lead-l9',
          title: 'Lição 9: Detecção de Burnout',
          videoUrl: 'https://www.youtube.com/watch?v=BhgYoN3EbBE',
          content: `## Saúde Mental
Padrões de e-mail fora de hora, excesso de reuniões e falta de férias.
A IA pode sinalizar áreas onde o risco de burnout é alto, permitindo intervenção da liderança para reequilibrar a carga.`,
          quiz: [{ question: 'O que a IA monitora para prevenir burnout?', options: ['Batimentos cardíacos.', 'Padrões de trabalho excessivo e sobrecarga digital (meta-dados).', 'Nada.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm3_lead-l10',
          title: 'Lição 10: Mobilidade Interna',
          videoUrl: 'https://www.youtube.com/watch?v=gICuKa02KQA',
          content: `## Mercado de Talentos
Sugerir vagas internas para funcionários antes que eles procurem fora.
"Baseado no seu perfil, você seria ótimo para esta vaga que abriu no Marketing".
Retém o talento na empresa.`,
          quiz: [{ question: 'Qual a vantagem da mobilidade interna guiada por IA?', options: ['Pagar menos.', 'Aumentar a retenção oferecendo novas oportunidades alinhadas ao perfil do colaborador.', 'Mudar de mesa.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm3-lead-l11',
        title: 'Lição 11: Avaliação de Desempenho Justa',
        videoUrl: 'https://www.youtube.com/watch?v=reUZRyXxUs4', // Bias in Performance Reviews
        content: `## Calibragem
A IA ajuda a identificar gerentes que são "bonzinhos demais" ou "rígidos demais" nas notas, sugerindo calibração para garantir equidade na avaliação entre áreas.`,
        quiz: [{ question: 'Como a IA apoia a justiça na avaliação?', options: ['Dando nota 10.', 'Identificando vieses de avaliadores e sugerindo calibração.', 'Ignorando.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm3-lead-l12',
        title: 'Lição 12: Learning Analytics',
        videoUrl: 'https://www.youtube.com/watch?v=2Y1jJMggZjY',
        content: `## ROI de Treinamento
Correlacionar dados de treinamento (quem fez o curso?) com dados de performance (quem vendeu mais?).
Descobrir quais treinamentos realmente impactam o negócio.`,
        quiz: [{ question: 'O que o Learning Analytics mede?', options: ['Horas de aula.', 'O impacto real do treinamento nos resultados de negócio.', 'Notas de prova.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm3-lead-l13',
        title: 'Lição 13: Ética em People Analytics',
        videoUrl: 'https://www.youtube.com/watch?v=0chlwnUKoHA',
        content: `## Pessoas não são Números
O risco de reduzir humanos a métricas.
Transparência sobre quais dados são coletados.
Garantia de que a decisão final sobre pessoas (contratar/demitir) seja sempre humana, com a IA apenas como suporte.`,
        quiz: [{ question: 'Qual o princípio fundamental em People Analytics?', options: ['Lucro máximo.', 'Ética, transparência e centralidade humana na decisão final.', 'Vigilância total.'], correctAnswerIndex: 1 }],
      },
    ],
};
