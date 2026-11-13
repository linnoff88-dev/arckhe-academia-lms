
import { Module } from '../../types';
import { Users } from '../../components/icons';

export const M16_LEAD: Module = {
    id: 'm16_lead',
    title: 'Módulo 16: O Líder do Futuro',
    subtitle: 'Humanidade, adaptabilidade e a nova essência da gestão.',
    icon: Users,
    lessons: [
        {
            id: 'm16_lead-l1',
            title: 'Lição 1: O Paradoxo da Tecnologia',
            videoUrl: 'https://www.youtube.com/watch?v=IMa8v4q_X_w',
            content: `## Quanto mais Tech, mais Humano
À medida que a IA assume a lógica, a análise e a tarefa, o valor do humano se concentra no que a máquina não tem: Empatia, Ética, Criatividade e Conexão.
O líder do futuro é um especialista em humanidade.`,
            quiz: [{ question: 'Qual o paradoxo da liderança com IA?', options: ['Ficar robótico.', 'Quanto mais a tecnologia avança, mais as competências puramente humanas se valorizam.', 'Estudar código.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16_lead-l2',
            title: 'Lição 2: Inteligência Emocional (EQ) > QI',
            videoUrl: 'https://www.youtube.com/watch?v=jX33z1tGSQg',
            content: `## O Diferencial
A IA tem QI infinito. Ela resolve problemas lógicos melhor que nós.
O líder deve focar no EQ: Gerir emoções, motivar, resolver conflitos e criar segurança psicológica. Isso a máquina não faz.`,
            quiz: [{ question: 'Por que o EQ supera o QI na liderança futura?', options: ['Porque é moda.', 'Porque o QI (lógica/análise) se torna commodity via IA, enquanto o EQ permanece humano.', 'Não supera.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16_lead-l3',
            title: 'Lição 3: Liderando Centauros',
            videoUrl: 'https://www.youtube.com/watch?v=reUZRyXxUs4',
            content: `## A Nova Equipe
Você não vai liderar apenas pessoas. Vai liderar "Centauros" (Pessoas aumentadas por IA).
O desafio é criar processos que integrem o melhor dos dois mundos, sem deixar o humano ficar preguiçoso ou a máquina ficar solta.`,
            quiz: [{ question: 'O que é liderar centauros?', options: ['Mitologia.', 'Gerir equipes que trabalham em simbiose profunda com inteligência artificial.', 'Liderar cavalos.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16_lead-l4',
            title: 'Lição 4: Pensamento Crítico e Curiosidade',
            videoUrl: 'https://www.youtube.com/watch?v=cf522e5e1eE',
            content: `## Questionar as Respostas
Num mundo onde a resposta é instantânea (ChatGPT), o valor está na **pergunta**.
O líder deve cultivar o pensamento crítico para desafiar as alucinações da IA e a curiosidade para explorar novos caminhos.`,
            quiz: [{ question: 'Qual a habilidade cognitiva mais importante?', options: ['Memorizar.', 'Pensamento crítico para fazer as perguntas certas e avaliar as respostas da IA.', 'Cálculo.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16_lead-l5',
            title: 'Lição 5: Gestão da Incerteza (Antifrágil)',
            videoUrl: 'https://www.youtube.com/watch?v=xSHqm8JsqkI',
            content: `## Navegando no Caos
O ritmo de mudança só vai acelerar.
Líderes antifrágeis não tentam prever o futuro perfeitamente, mas constroem times adaptáveis que se fortalecem com a mudança e o estresse.`,
            quiz: [{ question: 'O que é liderança antifrágil?', options: ['Ser duro.', 'Prosperar e crescer diante da incerteza e do caos, em vez de apenas resistir.', 'Quebrar fácil.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16_lead-l6',
            title: 'Lição 6: O Fim da Média Gerência?',
            videoUrl: 'https://www.youtube.com/watch?v=0chlwnUKoHA',
            content: `## Achatamento
Gerentes cujo trabalho é apenas "repassar informação" ou "cobrar tarefa" serão substituídos por dashboards e agentes.
O gerente sobrevivente é o **Coach**: aquele que desenvolve pessoas e remove obstáculos.`,
            quiz: [{ question: 'Qual o destino da gerência média burocrática?', options: ['Promoção.', 'Substituição por automação; evolução para papéis de coaching e desbloqueio.', 'Aposentadoria.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16_lead-l7',
            title: 'Lição 7: Lifelong Learning (Aprendizado Contínuo)',
            videoUrl: 'https://www.youtube.com/watch?v=b9a2L-WkOpM',
            content: `## A Meta-Habilidade
O que você sabe hoje estará obsoleto em 3 anos.
A única competência durável é a capacidade de aprender, desaprender e reaprender constantemente. O líder deve ser o "Chief Learner".`,
            quiz: [{ question: 'O que é Lifelong Learning?', options: ['Estudar até os 20.', 'Compromisso com o aprendizado e renovação de competências durante toda a vida.', 'Repetir de ano.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16_lead-l8',
            title: 'Lição 8: Design Organizacional Líquido',
            videoUrl: 'https://www.youtube.com/watch?v=z8vSg8z0_aI',
            content: `## Além do Organograma
Estruturas rígidas são lentas.
Organizações líquidas montam e desmontam times (squads) conforme o projeto, misturando internos, freelancers e IAs.
O líder é um orquestrador de talentos fluidos.`,
            quiz: [{ question: 'Como são as organizações do futuro?', options: ['Rígidas.', 'Líquidas, baseadas em projetos e redes de talentos flexíveis.', 'De pedra.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16_lead-l9',
            title: 'Lição 9: Propósito e Significado',
            videoUrl: 'https://www.youtube.com/watch?v=N-i5kI5kzac',
            content: `## O "Porquê"
Quando a máquina faz o "como", o humano busca o "porquê".
Líderes devem ser exímios em conectar o trabalho diário a um propósito maior para manter o engajamento em um mundo automatizado.`,
            quiz: [{ question: 'Qual o papel do propósito?', options: ['Marketing.', 'Dar sentido ao trabalho e engajar humanos em um ambiente cada vez mais automatizado.', 'Nenhum.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16_lead-l10',
            title: 'Lição 10: Saúde Mental e Desconexão',
            videoUrl: 'https://www.youtube.com/watch?v=BhgYoN3EbBE',
            content: `## Direito de Desligar
Em um mundo always-on, o líder deve proteger a saúde mental do time.
Estabelecer rituais de desconexão e foco profundo. A produtividade criativa depende de descanso, não de burnout.`,
            quiz: [{ question: 'Qual a responsabilidade do líder sobre saúde mental?', options: ['Pagar terapia.', 'Criar limites saudáveis e cultura de desconexão para preservar a capacidade cognitiva.', 'Mandar trabalhar mais.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16-lead-l11',
            title: 'Lição 11: Ética como Bússola',
            videoUrl: 'https://www.youtube.com/watch?v=cf522e5e1eE',
            content: `## Fazendo a Coisa Certa
Com grande poder (IA), vem grande responsabilidade.
O líder deve ser a bússola moral que impede o uso da tecnologia para manipulação ou dano, mesmo que isso custe lucro no curto prazo.`,
            quiz: [{ question: 'Por que ética é competência de liderança?', options: ['Para ser legal.', 'Para guiar o uso responsável da tecnologia potente, preservando a reputação e a sociedade.', 'Para evitar multa.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16-lead-l12',
            title: 'Lição 12: Liderança Distribuída',
            videoUrl: 'https://www.youtube.com/watch?v=6gn8yFcMnU4',
            content: `## Todos são Líderes
A complexidade é alta demais para um herói solitário no topo decidir tudo.
Distribuir a autoridade para as pontas (onde a informação está) e capacitar todos a liderarem em seus contextos.`,
            quiz: [{ question: 'O que é liderança distribuída?', options: ['Sem chefe.', 'Empoderar pessoas em todos os níveis para tomar decisões e liderar iniciativas.', 'Caos.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16-lead-l13',
            title: 'Lição 13: Legado',
            videoUrl: 'https://www.youtube.com/watch?v=hAQSLARIkgc',
            content: `## O Que Fica
No final, a tecnologia passa. O que fica é o impacto que você teve nas pessoas e na cultura.
Use a IA para liberar tempo para construir esse legado humano.`,
            quiz: [{ question: 'Qual o objetivo final da liderança com IA?', options: ['Ser rico.', 'Usar a eficiência para investir em impacto humano duradouro e cultura.', 'Ser famoso.'], correctAnswerIndex: 1 }],
        },
    ],
};
