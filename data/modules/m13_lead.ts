
import { Module } from '../../types';
import { Blocks } from '../../components/icons';

export const M13_LEAD: Module = {
    id: 'm13_lead',
    title: 'Módulo 13: Estratégia Low-Code',
    subtitle: 'Acelerando a inovação digital sem depender da fila da TI.',
    icon: Blocks,
    lessons: [
        {
            id: 'm13_lead-l1',
            title: 'Lição 1: O Gargalo da TI',
            videoUrl: 'https://www.youtube.com/watch?v=wsBf6Pd37Ho',
            content: `## Fila de Espera
Toda empresa tem um backlog de TI de 2 anos.
O Low-Code permite que as áreas de negócio (Marketing, RH, Finanças) criem suas próprias soluções para problemas departamentais agora, sem esperar pela TI central.`,
            quiz: [{ question: 'Qual problema o Low-Code resolve para o negócio?', options: ['Falta de computadores.', 'Dependência da fila de prioridade da TI central para soluções departamentais.', 'Preço do Windows.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13_lead-l2',
            title: 'Lição 2: Governança Federada',
            videoUrl: 'https://www.youtube.com/watch?v=6gn8yFcMnU4',
            content: `## Controle vs. Liberdade
TI centralizada é lenta. "Shadow IT" (cada um faz o que quer) é perigoso.
Governança Federada: A TI dá a plataforma segura e os padrões. O Negócio constrói.
O líder deve negociar esse modelo com o CIO.`,
            quiz: [{ question: 'O que é Governança Federada?', options: ['Anarquia.', 'TI provê a plataforma/segurança, Negócio desenvolve as soluções.', 'Ditadura da TI.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13_lead-l3',
            title: 'Lição 3: Prototipagem Rápida (MVP)',
            videoUrl: 'https://www.youtube.com/watch?v=ad79nYk2keg',
            content: `## Erre Rápido
Em vez de especificar um software por meses, monte um protótipo funcional em 2 dias com Low-Code.
Teste com o usuário, valide a ideia e só depois invista em código robusto se necessário. Cultura de experimentação.`,
            quiz: [{ question: 'Como o Low-Code apoia a inovação?', options: ['Gastando muito.', 'Permitindo criar e testar MVPs funcionais em dias, acelerando o ciclo de aprendizado.', 'Não apoia.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13_lead-l4',
            title: 'Lição 4: Ferramentas de Gestão Visual',
            videoUrl: 'https://www.youtube.com/watch?v=1A_T4k6-X7A',
            content: `## Dashboards Customizados
Não aceite "o sistema não gera esse relatório".
Com ferramentas Low-Code de dados (Power BI, Looker), líderes podem cruzar dados e criar suas próprias visões gerenciais sem pedir para um desenvolvedor.`,
            quiz: [{ question: 'O que o líder ganha com BI Low-Code?', options: ['Dor de cabeça.', 'Autonomia para criar visões e relatórios gerenciais customizados.', 'Nada.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13_lead-l5',
            title: 'Lição 5: Automação de Processos (BPA)',
            videoUrl: 'https://www.youtube.com/watch?v=5dEZ_0s1F1c',
            content: `## Adeus Processo Manual
Aprovação de despesa, solicitação de viagem, onboarding.
Líderes podem desenhar o fluxo e implementar a automação em ferramentas como Pipefy ou ServiceNow, garantindo que o processo seja seguido e medido.`,
            quiz: [{ question: 'O que plataformas de BPA permitem?', options: ['Desenhar.', 'Modelar, automatizar e controlar processos de negócio sem código complexo.', 'Viajar.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13_lead-l6',
            title: 'Lição 6: Integração de Sistemas',
            videoUrl: 'https://www.youtube.com/watch?v=reUZRyXxUs4',
            content: `## Conectando Pontas
O CRM não fala com o Financeiro?
Ferramentas como Zapier ou Make permitem que gestores criem "pontes" simples entre sistemas para garantir a fluidez da informação, sem projeto de integração caro.`,
            quiz: [{ question: 'Para que servem ferramentas como Zapier?', options: ['Fazer site.', 'Conectar sistemas diferentes para troca de dados e automação simples.', 'Editar vídeo.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13_lead-l7',
            title: 'Lição 7: Apps Internos',
            videoUrl: 'https://www.youtube.com/watch?v=1A_T4k6-X7A',
            content: `## Soluções Sob Medida
App para reservar sala, app para feedback, app para checar meta.
Criar micro-apps internos que resolvem dores específicas do time, aumentando a produtividade e o engajamento.`,
            quiz: [{ question: 'O que são micro-apps internos?', options: ['Jogos.', 'Aplicativos simples focados em resolver tarefas específicas dos colaboradores.', 'Vírus.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13_lead-l8',
            title: 'Lição 8: O Risco de Escala',
            videoUrl: 'https://www.youtube.com/watch?v=T3LxKDUPu-4',
            content: `## Sucesso Catastrófico
O app que o estagiário fez virou crítico para a empresa inteira e agora está lento e inseguro.
O líder deve saber quando migrar uma solução Low-Code para uma arquitetura profissional ("Graduação" do app).`,
            quiz: [{ question: 'Qual o risco de sucesso no Low-Code?', options: ['Nenhum.', 'Uma solução amadora virar crítica sem ter arquitetura para escala e segurança.', 'Ficar rico.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13_lead-l9',
            title: 'Lição 9: Seleção de Ferramentas',
            videoUrl: 'https://www.youtube.com/watch?v=0qQ2o1tR5jU',
            content: `## O Dilema da Escolha
Existem milhares de ferramentas.
O líder deve padronizar o stack (ex: "Aqui usamos Microsoft Power Platform") para evitar que cada área use uma ferramenta diferente, criando uma torre de babel tecnológica.`,
            quiz: [{ question: 'Qual a responsabilidade do líder na seleção de tools?', options: ['Comprar a mais cara.', 'Padronizar o stack tecnológico para garantir compatibilidade e manutenção.', 'Deixar livre.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13_lead-l10',
            title: 'Lição 10: Upskilling do Time',
            videoUrl: 'https://www.youtube.com/watch?v=b9a2L-WkOpM',
            content: `## Todos são Tech
Incentivar que analistas de negócio, marketing e RH aprendam fundamentos de Low-Code.
Transformar a equipe de "usuários de software" em "criadores de soluções".`,
            quiz: [{ question: 'Qual o objetivo do upskilling em Low-Code?', options: ['Virar TI.', 'Capacitar profissionais de negócio a criar suas próprias soluções digitais.', 'Gastar tempo.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13-lead-l11',
            title: 'Lição 11: Documentação e Continuidade',
            videoUrl: 'https://www.youtube.com/watch?v=G2fqAlgmoPo',
            content: `## Se o criador sair?
O risco de quem criou a automação sair da empresa e ninguém saber como funciona.
Exigir documentação (que a própria IA pode gerar) e propriedade compartilhada das automações.`,
            quiz: [{ question: 'Como mitigar o risco de saída do criador?', options: ['Proibindo sair.', 'Exigindo documentação e evitando que automações críticas dependam de uma só pessoa.', 'Não automatizar.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13-lead-l12',
            title: 'Lição 12: IA Generativa + Low Code',
            videoUrl: 'https://www.youtube.com/watch?v=XpRIRJo6i9I',
            content: `## Fale para Criar
A nova geração de ferramentas cria o app a partir de um prompt.
"Crie um app de gestão de despesas onde eu subo a foto e ele extrai o valor".
A barreira de entrada caiu a zero. O limite é a imaginação do líder.`,
            quiz: [{ question: 'Como a IA impacta o Low-Code?', options: ['Destrói.', 'Acelera a criação permitindo gerar apps e fluxos a partir de linguagem natural.', 'Complica.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13-lead-l13',
            title: 'Lição 13: O Futuro da TI Corporativa',
            videoUrl: 'https://www.youtube.com/watch?v=csyL9EC0S0c',
            content: `## TI como Plataforma
A TI deixa de ser "Fábrica de Software" e vira "Habilitadora".
Ela cuida da infra e segurança, o negócio cuida da aplicação.
Modelo de responsabilidade compartilhada ágil.`,
            quiz: [{ question: 'Qual o novo papel da TI?', options: ['Fábrica lenta.', 'Plataforma habilitadora que fornece segurança e ferramentas para o negócio inovar.', 'Suporte técnico.'], correctAnswerIndex: 1 }],
        },
    ],
};
