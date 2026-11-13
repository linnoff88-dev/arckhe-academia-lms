
import { Module } from '../../types';
import { Sparkles } from '../../components/icons';

export const M5_LEAD: Module = {
    id: 'm5_lead',
    title: 'Módulo 5: Economia da IA na Gestão de Talentos',
    subtitle: 'ROI de RH, eficiência operacional e novos modelos de trabalho.',
    icon: Sparkles,
    lessons: [
      {
          id: 'm5_lead-l1',
          title: 'Lição 1: Custo de Rotatividade (Turnover)',
          videoUrl: 'https://www.youtube.com/watch?v=Z5W7-3W3N4o', // HR Trends & Turnover
          content: `## O Custo Invisível
Perder um talento custa 1.5x a 2x o salário anual dele (Recrutamento + Treinamento + Perda de Produtividade).
Investir em IA para retenção tem um ROI financeiro direto e massivo.`,
          quiz: [{ question: 'Qual o impacto financeiro do turnover?', options: ['Pequeno.', 'Alto custo de reposição e perda de produtividade (até 2x o salário anual).', 'Economia de salário.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5_lead-l2',
          title: 'Lição 2: Eficiência Operacional em RH',
          videoUrl: 'https://www.youtube.com/watch?v=3WBIrqbN5zA',
          content: `## Menos Braço, Mais Cérebro
Automatizar tarefas transacionais (folha, benefícios, dúvidas) reduz o custo do departamento de RH e libera os Business Partners para atuar na estratégia.
Redução de OPEX administrativo.`,
          quiz: [{ question: 'Como a IA afeta o custo do RH?', options: ['Aumenta.', 'Reduz custos operacionais automatizando tarefas transacionais.', 'Não afeta.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5_lead-l3',
          title: 'Lição 3: Economia da Aprendizagem (L&D)',
          videoUrl: 'https://www.youtube.com/watch?v=Q0rh6O35djI',
          content: `## Treinamento Personalizado
Treinamento de sala de aula é caro e ineficiente ("One size fits all").
IA permite microlearning personalizado e barato.
O custo de *não* treinar (obsolescência) é maior que o custo de treinar com IA.`,
          quiz: [{ question: 'Qual a vantagem econômica do treino com IA?', options: ['Nenhuma.', 'Personalização em escala e redução de custos logísticos de treinamento presencial.', 'É mais caro.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5_lead-l4',
          title: 'Lição 4: Gig Economy e Talentos Sob Demanda',
          videoUrl: 'https://www.youtube.com/watch?v=z8vSg8z0_aI',
          content: `## Força de Trabalho Líquida
Plataformas de talentos (freelancers, experts) conectadas por IA.
Transformar custo fixo (folha) em custo variável (projetos).
A gestão de talentos híbrida (CLT + Gig) exige novas competências de liderança.`,
          quiz: [{ question: 'O que é a "Talent Cloud"?', options: ['Nuvem de dados.', 'Acesso flexível a talentos externos sob demanda para projetos específicos.', 'Escritório na nuvem.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5_lead-l5',
          title: 'Lição 5: Valor da Marca Empregadora',
          videoUrl: 'https://www.youtube.com/watch?v=jAEDrm7X_HI',
          content: `## Atração Mais Barata
Empresas inovadoras em IA atraem os melhores talentos orgânicos.
Reduz o custo de recrutamento e marketing de atração.
Ser "AI-First" é um diferencial competitivo no mercado de trabalho.`,
          quiz: [{ question: 'Como a IA impacta o Employer Branding?', options: ['Assusta.', 'Atrai talentos inovadores e reduz o custo de aquisição de candidatos.', 'É irrelevante.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5_lead-l6',
          title: 'Lição 6: Produtividade Aumentada',
          videoUrl: 'https://www.youtube.com/watch?v=jAEDrm7X_HI',
          content: `## O Super-Funcionário
Equipar o time com Copilots aumenta a produtividade em 30-50% (codificação, escrita, análise).
O desafio econômico: Manter a equipe do mesmo tamanho e produzir mais (margem maior) ou reduzir a equipe?`,
          quiz: [{ question: 'Qual o efeito econômico dos Copilots?', options: ['Preguiça.', 'Aumento significativo da produtividade individual e da margem operacional.', 'Custo alto.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5_lead-l7',
          title: 'Lição 7: Redução de Passivo Trabalhista',
          videoUrl: 'https://www.youtube.com/watch?v=3WBIrqbN5zA',
          content: `## Compliance Automático
Sistemas que garantem que horas extras sejam pagas, intervalos respeitados e normas seguidas.
Prevenção de processos trabalhistas através de auditoria contínua por IA. Economia de risco legal.`,
          quiz: [{ question: 'Como a IA reduz risco trabalhista?', options: ['Escondendo provas.', 'Monitorando conformidade com a lei em tempo real e prevenindo infrações.', 'Subornando.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5_lead-l8',
          title: 'Lição 8: Bem-estar como Investimento',
          videoUrl: 'https://www.youtube.com/watch?v=hAQSLARIkgc',
          content: `## O Custo da Doença
Burnout e afastamentos custam bilhões.
Programas de bem-estar preventivos guiados por dados têm ROI positivo: Para cada R$ 1 investido, R$ 3 retornam em produtividade e redução de custos de saúde.`,
          quiz: [{ question: 'Qual o ROI do bem-estar?', options: ['Negativo.', 'Positivo, via redução de custos de saúde e aumento de produtividade.', 'Neutro.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5_lead-l9',
          title: 'Lição 9: Realocação de Recursos',
          videoUrl: 'https://www.youtube.com/watch?v=Q0rh6O35djI',
          content: `## Dinamismo
A IA identifica quais projetos estão dando retorno e quais skills estão ociosas.
Permite realocar pessoas rapidamente de áreas em declínio para áreas em crescimento, otimizando a folha de pagamento.`,
          quiz: [{ question: 'O que é alocação dinâmica de talentos?', options: ['Demitir.', 'Mover pessoas agilmente para onde geram mais valor baseando-se em dados.', 'Ficar parado.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5_lead-l10',
          title: 'Lição 10: O Valor do Capital Intelectual',
          videoUrl: 'https://www.youtube.com/watch?v=3WBIrqbN5zA',
          content: `## Ativo Intangível
Com a automação do trabalho braçal, o valor da empresa reside no conhecimento único de seus colaboradores.
Sistemas de PKM preservam esse valor (ativo) dentro da empresa, evitando depreciação quando pessoas saem.`,
          quiz: [{ question: 'Onde reside o valor na era da IA?', options: ['Nos prédios.', 'No capital intelectual e dados proprietários da organização.', 'Nas máquinas.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm5-lead-l11',
        title: 'Lição 11: Modelos de Remuneração Variável',
        videoUrl: 'https://www.youtube.com/watch?v=6vN3FDaw6hw',
        content: `## Meritocracia de Dados
Sair do bônus discricionário ("O chefe gosta de mim") para bônus baseado em métricas claras e auditáveis.
IA ajuda a desenhar modelos de incentivo complexos que alinham comportamento individual com resultado da empresa.`,
        quiz: [{ question: 'Como a IA melhora a remuneração variável?', options: ['Paga menos.', 'Permite modelos baseados em dados objetivos, justos e alinhados à estratégia.', 'Sorteio.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm5-lead-l12',
        title: 'Lição 12: Custo de Oportunidade',
        videoUrl: 'https://www.youtube.com/watch?v=g8Gwp3rk1oI',
        content: `## O Preço de Não Inovar
Empresas que demoram a adotar IA na gestão perdem os melhores talentos e ficam lentas.
O custo de oportunidade de não usar IA é a irrelevância no mercado em 5 anos.`,
        quiz: [{ question: 'Qual o risco de ignorar a IA na gestão?', options: ['Nenhum.', 'Perda de competitividade e incapacidade de atrair talentos (Irrelevância).', 'Economizar.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm5-lead-l13',
        title: 'Lição 13: O Futuro da Economia do Trabalho',
        videoUrl: 'https://www.youtube.com/watch?v=hAQSLARIkgc',
        content: `## Renda e Significado
Se a IA faz o trabalho, como remuneramos?
Discussões sobre semana de 4 dias e novos contratos sociais.
O líder deve pensar em como distribuir os ganhos de produtividade da IA para manter a sociedade (e o mercado consumidor) funcionando.`,
        quiz: [{ question: 'Qual o debate econômico futuro?', options: ['Preço do café.', 'Distribuição dos ganhos de produtividade da IA e novos modelos de jornada de trabalho.', 'Voltar ao passado.'], correctAnswerIndex: 1 }],
      },
    ],
};
