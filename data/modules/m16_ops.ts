
import { Module } from '../../types';
import { Users } from '../../components/icons';

export const M16_OPS: Module = {
    id: 'm16_ops',
    title: 'Módulo 16: Liderança Operacional 4.0',
    subtitle: 'Gerindo pessoas, segurança e cultura no chão de fábrica digital.',
    icon: Users,
    lessons: [
        {
            id: 'm16_ops-l1',
            title: 'Lição 1: O Líder Conectado',
            videoUrl: 'https://www.youtube.com/watch?v=jX33z1tGSQg',
            content: `## Gestão na Palma da Mão
O supervisor não fica mais na sala. Ele está na linha com um tablet, vendo a eficiência de cada máquina e operador em tempo real.
Liderança baseada em dados imediatos ("Gemba Digital"), não em relatórios de ontem.`,
            quiz: [{ question: 'O que muda para o líder operacional?', options: ['Trabalha menos.', 'Gestão em tempo real no local de trabalho (Gemba) com dados móveis.', 'Fica no escritório.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16_ops-l2',
            title: 'Lição 2: Gestão de Mudança na Fábrica',
            videoUrl: 'https://www.youtube.com/watch?v=EOx9Xhw1Y3Y',
            content: `## Vencendo a Resistência
"Sempre fizemos assim". O maior inimigo da IA.
Técnicas de Change Management: Envolver operadores no design da solução, mostrar ganhos rápidos (Quick Wins) e garantir que a IA facilite a vida deles, não complique.`,
            quiz: [{ question: 'Como vencer a resistência à tecnologia?', options: ['Impondo.', 'Envolvendo o usuário final no design e focando em facilitar o trabalho dele.', 'Demitindo.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16_ops-l3',
            title: 'Lição 3: Segurança Comportamental com IA',
            videoUrl: 'https://www.youtube.com/watch?v=gICuKa02KQA',
            content: `## Prevenção de Acidentes
IA analisa vídeos e dados para identificar comportamentos de risco (ex: pressa, fadiga, atalhos).
O líder usa isso para dar feedback educativo e prevenir acidentes, não apenas para punir. Foco em salvar vidas.`,
            quiz: [{ question: 'Qual o foco da IA na segurança?', options: ['Punir.', 'Identificar comportamentos de risco para prevenção e feedback educativo.', 'Vigiar.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16_ops-l4',
            title: 'Lição 4: O Operador 4.0',
            videoUrl: 'https://www.youtube.com/watch?v=2Y1jJMggZjY',
            content: `## Perfil do Profissional
Menos força física, mais capacidade analítica.
O operador deixa de alimentar a máquina e passa a monitorar e ajustar o robô.
Líderes precisam recrutar e treinar para resolução de problemas e afinidade digital.`,
            quiz: [{ question: 'Qual a principal skill do Operador 4.0?', options: ['Força.', 'Capacidade analítica e interação com sistemas digitais.', 'Correr.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16_ops-l5',
            title: 'Lição 5: Gamificação da Produção',
            videoUrl: 'https://www.youtube.com/watch?v=pLw_rk6MX2E',
            content: `## Engajamento
Placares digitais que mostram a meta vs. realizado em tempo real.
Competições saudáveis entre turnos ou linhas, com prêmios por qualidade e segurança (não só velocidade).
Tornar o trabalho visível e recompensador.`,
            quiz: [{ question: 'Como a gamificação ajuda na produção?', options: ['Distrai.', 'Aumenta engajamento e visibilidade de metas em tempo real.', 'Custa caro.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16_ops-l6',
            title: 'Lição 6: Retenção de Talentos Operacionais',
            videoUrl: 'https://www.youtube.com/watch?v=Y6DSn3HCCkU',
            content: `## Valorização
A rotatividade em operações é alta.
Usar IA para identificar operadores de alta performance e oferecer planos de carreira claros.
Ferramentas digitais modernas atraem jovens talentos que não querem trabalhar em fábricas "analógicas".`,
            quiz: [{ question: 'Como a tecnologia ajuda na retenção?', options: ['Não ajuda.', 'Moderniza o ambiente de trabalho, atraindo jovens e permitindo reconhecimento por dados.', 'Aumenta o salário.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16_ops-l7',
            title: 'Lição 7: Comunicação com a Linha de Frente',
            videoUrl: 'https://www.youtube.com/watch?v=BhgYoN3EbBE',
            content: `## Apps de Colaboradores
Mural de papel não funciona.
Apps corporativos onde o líder posta vídeos, avisos de segurança e reconhecimentos, e os operadores podem comentar e dar sugestões. Conexão direta Diretoria-Chão.`,
            quiz: [{ question: 'Qual a ferramenta moderna de comunicação interna?', options: ['Megafone.', 'Apps móveis de colaboradores para comunicação bidirecional.', 'Papel.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16_ops-l8',
            title: 'Lição 8: Ética e Privacidade do Operador',
            videoUrl: 'https://www.youtube.com/watch?v=l-BA-dXXCVA', // Privacy Ethics
            content: `## Big Brother?
Monitorar performance é bom. Monitorar idas ao banheiro é abusivo.
Líderes devem estabelecer limites claros e transparentes sobre quais dados são coletados e como são usados, garantindo a confiança do time.`,
            quiz: [{ question: 'Qual o limite ético no monitoramento?', options: ['Nenhum.', 'Respeitar a privacidade pessoal e focar na métrica de processo, não em vigilância invasiva.', 'Esconder as câmeras.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16_ops-l9',
            title: 'Lição 9: Tomada de Decisão Descentralizada',
            videoUrl: 'https://www.youtube.com/watch?v=w2-Y55tLwdk', // Empowerment
            content: `## Empoderamento
Com dados na mão, o operador não precisa chamar o supervisor para cada ajuste.
O líder define os limites de autonomia e treina o time para decidir. O líder vira coach, não gargalo de decisão.`,
            quiz: [{ question: 'O que os dados permitem na hierarquia?', options: ['Centralizar.', 'Descentralizar a tomada de decisão para quem está na ponta (empoderamento).', 'Eliminar gerentes.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16_ops-l10',
            title: 'Lição 10: Gestão de Terceiros',
            videoUrl: 'https://www.youtube.com/watch?v=Uqr1mZgxjiY',
            content: `## Extensão do Time
Terceiros de limpeza, manutenção e segurança.
Sistemas digitais para garantir que eles tenham o mesmo nível de treinamento, segurança e acesso à informação que os funcionários próprios. Integração cultural.`,
            quiz: [{ question: 'Como gerir terceiros na era digital?', options: ['Separadamente.', 'Integrando-os aos sistemas de segurança e comunicação da empresa.', 'Ignorando.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16-ops-l11',
            title: 'Lição 11: Liderança em Crise',
            videoUrl: 'https://www.youtube.com/watch?v=hD99Xd6utgQ',
            content: `## Sala de Guerra Digital
Quando a linha para, a IA provê os dados. O líder provê a calma e a direção.
Uso de ferramentas de colaboração para coordenar a resposta a incidentes em tempo real, com visibilidade para todos os stakeholders.`,
            quiz: [{ question: 'Qual o papel do líder na crise digital?', options: ['Gritar.', 'Coordenar a resposta baseada em dados e manter a comunicação clara.', 'Se esconder.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16-ops-l12',
            title: 'Lição 12: Upskilling Técnico',
            videoUrl: 'https://www.youtube.com/watch?v=b9a2L-WkOpM', // Upskilling
            content: `## Ensinando Dados
O líder deve capacitar seu time a ler gráficos e interpretar dashboards.
Alfabetização de dados (Data Literacy) é a competência base para qualquer promoção na área operacional.`,
            quiz: [{ question: 'Qual a competência técnica essencial a ensinar?', options: ['Soldar.', 'Alfabetização de dados (ler e interpretar dashboards).', 'Varrer.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm16-ops-l13',
            title: 'Lição 13: O Legado do Líder',
            videoUrl: 'https://www.youtube.com/watch?v=IMa8v4q_X_w', // Legacy and Culture
            content: `## Cultura de Excelência
A tecnologia muda, a cultura fica.
O papel final do líder é criar uma cultura onde a busca por eficiência, segurança e qualidade seja automática, com ou sem o supervisor olhando.`,
            quiz: [{ question: 'Qual o legado final?', options: ['Bater meta.', 'Uma cultura autossustentável de excelência e melhoria contínua.', 'Comprar robôs.'], correctAnswerIndex: 1 }],
        },
    ],
};
