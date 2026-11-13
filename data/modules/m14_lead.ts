
import { Module } from '../../types';
import { BrainLightbulb } from '../../components/icons';

export const M14_LEAD: Module = {
    id: 'm14_lead',
    title: 'Módulo 14: Gestão de Conhecimento Corporativo',
    subtitle: 'Transformando informação dispersa em inteligência institucional.',
    icon: BrainLightbulb,
    lessons: [
        {
            id: 'm14_lead-l1',
            title: 'Lição 1: O Custo da Amnésia Corporativa',
            videoUrl: 'https://www.youtube.com/watch?v=jAEDrm7X_HI',
            content: `## Reinventando a Roda
Empresas perdem milhões resolvendo problemas que já foram resolvidos por outra pessoa no ano passado.
Gestão de Conhecimento (KM) não é arquivo morto, é garantir que a experiência passada informe a decisão futura.`,
            quiz: [{ question: 'Qual o principal custo da falta de KM?', options: ['Papel.', 'Ineficiência por retrabalho e perda de aprendizados passados.', 'Servidor.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm14_lead-l2',
            title: 'Lição 2: Do Tácito ao Explícito',
            videoUrl: 'https://www.youtube.com/watch?v=M49dw8KZGmA',
            content: `## Extraindo o Saber
Conhecimento Tácito (na cabeça do expert) vs Explícito (documentado).
O desafio do líder é criar rituais e sistemas que incentivem a externalização do saber antes que o expert se aposente ou saia.`,
            quiz: [{ question: 'Qual o desafio do KM?', options: ['Escrever bonito.', 'Transformar conhecimento tácito (cabeça) em explícito (sistema).', 'Comprar HD.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm14_lead-l3',
            title: 'Lição 3: RAG Enterprise (O Oráculo)',
            videoUrl: 'https://www.youtube.com/watch?v=TRjq7t2Ms5I',
            content: `## Busca Inteligente
Conectar uma IA (LLM) a todo o acervo da empresa (Sharepoint, Drive, Slack).
Permitir que qualquer funcionário pergunte: "Qual foi a estratégia de preços usada no projeto X em 2022?" e receba a resposta sintetizada.`,
            quiz: [{ question: 'O que o RAG permite na empresa?', options: ['Nada.', 'Busca semântica e respostas sintetizadas sobre todo o acervo documental da organização.', 'Apagar arquivos.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm14_lead-l4',
            title: 'Lição 4: Cultura de Documentação',
            videoUrl: 'https://www.youtube.com/watch?v=jl8kgAiP3V4',
            content: `## Default to Open
Em empresas remotas/híbridas, "se não está escrito, não aconteceu".
Liderar pelo exemplo: Escrever memos, gravar decisões e torná-las públicas internamente.
Transformar a escrita em ato de liderança.`,
            quiz: [{ question: 'Qual a base da cultura de documentação?', options: ['Escrever muito.', 'Tornar a documentação o padrão de comunicação e decisão (Async first).', 'Burocracia.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm14_lead-l5',
            title: 'Lição 5: Wikis Vivas (Notion/Confluence)',
            videoUrl: 'https://www.youtube.com/watch?v=K1xftIigIjE',
            content: `## Documento que Respira
Manuais em PDF morrem. Wikis são vivas, linkadas e colaborativas.
Estruturar a base de conhecimento como um jardim digital que precisa ser regado (atualizado) por todos, não como uma biblioteca empoeirada.`,
            quiz: [{ question: 'O que diferencia uma Wiki Viva?', options: ['É verde.', 'É colaborativa, fácil de atualizar e interconectada, mantendo-se relevante.', 'É impressa.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm14_lead-l6',
            title: 'Lição 6: IA na Curadoria',
            videoUrl: 'https://www.youtube.com/watch?v=vybwqOfuJnc',
            content: `## O Bibliotecário Digital
Ninguém tem tempo de organizar arquivos.
A IA pode ler, etiquetar (taggear) e organizar documentos automaticamente.
Ela também pode sinalizar documentos desatualizados ou conflitantes ("A política de viagens neste doc contradiz aquele outro").`,
            quiz: [{ question: 'Como a IA ajuda na manutenção do conhecimento?', options: ['Limpando pó.', 'Classificando, organizando e detectando inconsistências ou desatualizações automaticamente.', 'Não ajuda.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm14_lead-l7',
            title: 'Lição 7: Captura de Reuniões',
            videoUrl: 'https://www.youtube.com/watch?v=V2POyQVQuzA',
            content: `## Ativos de Vídeo
Reuniões gravadas são ativos de conhecimento inexplorados.
Transcrever e indexar vídeos permite que alguém pesquise "O que o CEO disse sobre bônus?" e vá direto ao minuto 14:30 da reunião do mês passado.`,
            quiz: [{ question: 'Como transformar reuniões em conhecimento duradouro?', options: ['Não fazendo.', 'Gravando, transcrevendo e tornando o conteúdo pesquisável.', 'Anotando à mão.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm14_lead-l8',
            title: 'Lição 8: Onboarding Acelerado',
            videoUrl: 'https://www.youtube.com/watch?v=TEUA2cAqdJs',
            content: `## Tempo até a Produtividade
Um bom sistema de KM permite que o novo funcionário aprenda sozinho ("Self-serve").
"Como configuro minha VPN?" "Quem é o cliente X?"
Reduz a carga de treinamento sobre os veteranos.`,
            quiz: [{ question: 'Qual o impacto do KM no onboarding?', options: ['Atrasa.', 'Acelera o aprendizado autônomo e reduz a dependência de mentoria constante.', 'Nenhum.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm14_lead-l9',
            title: 'Lição 9: Comunidades de Prática',
            videoUrl: 'https://www.youtube.com/watch?v=z5gwBiIDXcA',
            content: `## Conexão Humana
Conhecimento também flui nas conversas.
Criar espaços (Guildas, Capítulos) onde especialistas de áreas diferentes trocam experiências.
A tecnologia conecta, mas a comunidade engaja.`,
            quiz: [{ question: 'O que são Comunidades de Prática?', options: ['Clubes de lazer.', 'Grupos de profissionais que compartilham interesses e aprendizados técnicos transversais.', 'Reunião de diretoria.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm14_lead-l10',
            title: 'Lição 10: Gamificação do Compartilhamento',
            videoUrl: 'https://www.youtube.com/watch?v=pLw_rk6MX2E',
            content: `## Incentivos
Por que alguém gastaria tempo documentando?
Reconhecimento. Criar sistemas onde quem contribui com conhecimento é visto como autoridade e recompensado na avaliação de desempenho.`,
            quiz: [{ question: 'Como incentivar a documentação?', options: ['Obrigando.', 'Reconhecendo e recompensando quem compartilha conhecimento como parte da avaliação.', 'Pagando extra.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm14-lead-l11',
            title: 'Lição 11: Microlearning e Pílulas',
            videoUrl: 'https://www.youtube.com/watch?v=b9a2L-WkOpM',
            content: `## Conteúdo Consumível
Transformar manuais chatos em vídeos de 2 minutos ou cards visuais.
Usar IA para "fatiar" conteúdos longos em pílulas de conhecimento entregues no fluxo de trabalho (Slack/Teams).`,
            quiz: [{ question: 'O que é Microlearning?', options: ['Aprender pouco.', 'Conteúdo educacional fragmentado em pequenas doses fáceis de consumir.', 'Livros grandes.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm14-lead-l12',
            title: 'Lição 12: Expert Locator (Quem sabe o quê?)',
            videoUrl: 'https://www.youtube.com/watch?v=tW_Wv5tCq04',
            content: `## Mapa de Talentos
A IA analisa os documentos que as pessoas escrevem para inferir quem é especialista em quê.
"Quem na empresa entende de Blockchain?" O sistema aponta a Maria, mesmo que o cargo dela não diga isso.`,
            quiz: [{ question: 'O que um Expert Locator faz?', options: ['Localiza GPS.', 'Identifica quem detém conhecimento específico dentro da organização.', 'Contrata.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm14-lead-l13',
            title: 'Lição 13: A Empresa Inteligente',
            videoUrl: 'https://www.youtube.com/watch?v=hAQSLARIkgc',
            content: `## IQ Organizacional
O objetivo final: Uma empresa que não comete o mesmo erro duas vezes e onde o conhecimento de um vira o poder de todos instantaneamente.
A vantagem competitiva definitiva.`,
            quiz: [{ question: 'Qual a meta da Gestão de Conhecimento?', options: ['Organizar papel.', 'Aumentar o QI Organizacional, evitando erros repetidos e acelerando a inovação.', 'Vender livros.'], correctAnswerIndex: 1 }],
        },
    ],
};
