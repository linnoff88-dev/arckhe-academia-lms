
import { Module } from '../../types';
import { BrainLightbulb } from '../../components/icons';

export const M14: Module = {
    id: 'm14',
    title: 'Módulo 14: Gestão de Conhecimento (PKM)',
    subtitle: 'Segundo Cérebro, CODE, PARA e a organização da vida digital.',
    icon: BrainLightbulb,
    lessons: [
        {
            id: 'm14-l1',
            title: 'Lição 1: O Conceito de Segundo Cérebro',
            videoUrl: 'https://www.youtube.com/watch?v=M49dw8KZGmA',
            content: `## Memória Externa Confiável
Seu cérebro biológico é otimizado para ter ideias, não para armazená-las.
Um "Segundo Cérebro" é um sistema digital externo (Notas, Arquivos, Calendar) onde você confia a guarda da informação. Isso libera sua mente para focar exclusivamente no processamento, conexão e criatividade.`,
            quiz: [{ question: 'Qual a função principal do Segundo Cérebro?', options: ['Pensar por você.', 'Armazenar informações para liberar a mente biológica para criatividade.', 'Fazer contas.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm14-l2',
            title: 'Lição 2: Método CODE',
            videoUrl: 'https://www.youtube.com/watch?v=TEUA2cAqdJs',
            content: `## O Fluxo da Criatividade
Metodologia proposta por Tiago Forte para operacionalizar o conhecimento:
- **C**apture (Capturar): Guardar o que ressoa imediatamente.
- **O**rganize (Organizar): Estruturar pensando na ação futura.
- **D**istill (Destilar): Encontrar a essência e resumir.
- **E**xpress (Expressar): Usar o conhecimento para criar algo novo.`,
            quiz: [{ question: 'O que significa a sigla CODE?', options: ['Código.', 'Capture, Organize, Distill, Express.', 'Comer, Orar, Dormir, Esquecer.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm14-l3',
            title: 'Lição 3: Organização PARA',
            videoUrl: 'https://www.youtube.com/watch?v=_8c6XvqZaPA',
            content: `## Organizar para a Ação
A maioria organiza por assunto (errado). O PARA organiza por *acionabilidade*:
- **P**rojects (Projetos): Tem prazo e objetivo definido.
- **A**reas (Áreas): Responsabilidades contínuas sem prazo.
- **R**esources (Recursos): Temas de interesse e referência.
- **A**rchives (Arquivos): Coisas inativas concluídas.`,
            quiz: [{ question: 'No método PARA, qual a diferença de Projeto e Área?', options: ['Nenhuma.', 'Projeto tem fim/prazo; Área é manutenção contínua.', 'Área é maior.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm14-l4',
            title: 'Lição 4: IA como Parceira de PKM',
            videoUrl: 'https://www.youtube.com/watch?v=vybwqOfuJnc',
            content: `## Curadoria e Síntese Assistida
A IA não substitui o pensamento, ela o acelera.
No PKM, use a IA para:
- Resumir notas longas e extrair insights (Destilar).
- Encontrar conexões entre ideias aparentemente desconexas.
- Transformar rascunhos brutos em textos finais polidos (Expressar).`,
            quiz: [{ question: 'Qual o papel da IA no PKM?', options: ['Criar tudo do zero.', 'Auxiliar na síntese, conexão e refinamento de ideias já capturadas.', 'Organizar pastas.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm14-l5',
            title: 'Lição 5: A Neurociência do Foco',
            videoUrl: 'https://www.youtube.com/watch?v=z5gwBiIDXcA',
            content: `## Reduzindo a Carga Cognitiva
Manter informações "na cabeça" consome energia metabólica e gera ansiedade de fundo (Efeito Zeigarnik: o cérebro fica lembrando de tarefas incompletas).
Sistemas de PKM fecham esses "loops abertos", reduzindo o estresse cortisol e aumentando a capacidade de foco profundo.`,
            quiz: [{ question: 'Como o PKM ajuda biologicamente o cérebro?', options: ['Aumenta neurônios.', 'Reduz a carga cognitiva e ansiedade ao externalizar a memória de curto prazo.', 'Dá sono.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm14-l6',
            title: 'Lição 6: Leitura Sintópica com IA',
            videoUrl: 'https://www.youtube.com/watch?v=Ufd0cYzeaks',
            content: `## Conversa entre Autores
Leitura sintópica é ler vários livros sobre o mesmo tema para criar uma síntese original.
A IA pode ingerir esses 5 livros e ajudar a criar uma tabela comparativa de conceitos em minutos, destacando onde os autores concordam e onde divergem, acelerando a compreensão profunda.`,
            quiz: [{ question: 'O que é Leitura Sintópica?', options: ['Ler rápido.', 'Ler/analisar várias fontes sobre o mesmo tema para criar uma nova síntese comparativa.', 'Ler em voz alta.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm14-l7',
            title: 'Lição 7: Obsidian e Lógica (Networked PKM)',
            videoUrl: 'https://www.youtube.com/watch?v=K1xftIigIjE',
            content: `## Pensamento em Grafo
Pastas são rígidas e hierárquicas. O cérebro funciona por associações em rede.
Ferramentas como Obsidian usam "Links Bidirecionais" ([[Link]]) para conectar notas, criando uma rede de conhecimento que cresce organicamente, permitindo navegar pelas ideias como em uma Wikipédia pessoal.`,
            quiz: [{ question: 'Qual a vantagem de ferramentas como Obsidian?', options: ['São bonitas.', 'Links bidirecionais que imitam a associação não-linear de ideias do cérebro.', 'Têm nuvem.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm14-l8',
            title: 'Lição 8: Zettelkasten Moderno',
            videoUrl: 'https://www.youtube.com/playlist?list=PLysFHFkYkc00NoH6NQBInnKu5t6NAjMyA',
            content: `## Notas Atômicas
O princípio de uma nota = uma ideia.
Em vez de documentos longos e monolíticos, crie pequenos blocos de conhecimento autônomos que podem ser recombinados em contextos diferentes.
É como ter peças de Lego de pensamento, prontas para construir qualquer coisa.`,
            quiz: [{ question: 'Qual o princípio do Zettelkasten?', options: ['Escrever muito.', 'Notas atômicas (uma ideia por nota) interligadas.', 'Usar cadernos.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm14-l9',
            title: 'Lição 9: Capture Active/Agent (Next)',
            videoUrl: 'https://www.youtube.com/watch?v=TEUA2cAqdJs',
            content: `## Fricção Zero
A captura deve ser instantânea para não perder o insight.
O uso de widgets, atalhos de teclado e assistentes de voz permite capturar a ideia no momento exato em que ela surge, sem interromper o fluxo de trabalho principal. "Quick Capture" agora, processamento depois.`,
            quiz: [{ question: 'O que é essencial na fase de Captura?', options: ['Beleza.', 'Baixa fricção e velocidade para não perder o insight.', 'Organização imediata.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm14-l10',
            title: 'Lição 10: Automatização de Consulta',
            videoUrl: 'https://www.youtube.com/watch?v=vybwqOfuJnc',
            content: `## Recuperação Ativa
Não adianta guardar se você não consegue encontrar.
O uso de OCR (para ler imagens), Transcrição (para áudio/vídeo) e Busca Semântica (IA) permite encontrar a informação pelo seu significado ou contexto, não apenas pela palavra-chave exata do arquivo.`,
            quiz: [{ question: 'Como a tecnologia melhora a consulta?', options: ['Imprimindo.', 'Tornando mídias (áudio, vídeo) pesquisáveis e usando busca semântica.', 'Usando pastas.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm14-l11',
            title: 'Lição 11: IA Pessoal (Chat com PKM)',
            videoUrl: 'https://www.youtube.com/watch?v=Ufd0cYzeaks',
            content: `## RAG Pessoal
A capacidade de rodar uma IA local (como Llama ou GPT4All) que lê suas notas privadas (Obsidian/Notion).
Você pode perguntar: "Quais foram minhas ideias sobre marketing no último ano?" e obter uma resposta sintetizada baseada estritamente no *seu* conhecimento acumulado.`,
            quiz: [{ question: 'O que é "Chat com seu PKM"?', options: ['Conversar com amigos.', 'Usar IA para interagir com sua base de conhecimento pessoal (RAG).', 'Chatbot de suporte.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm14-l12',
            title: 'Lição 12: Jauling/Estático com Dados',
            videoUrl: 'https://www.youtube.com/watch?v=K1xftIigIjE',
            content: `## Arquitetura de Informação
A distinção vital entre "Conhecimento em Desenvolvimento" (Notas, Rascunhos, Ideias) e "Dados Estáticos" (PDFs, Referências, Recibos).
Cada um exige um sistema diferente. Misturar tudo na mesma pasta gera ruído e dificulta a criatividade.`,
            quiz: [{ question: 'Por que separar dados estáticos de notas dinâmicas?', options: ['Porque sim.', 'Para manter o espaço de pensamento limpo e focado na criação ativa.', 'Para gastar espaço.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm14-l13',
            title: 'Lição 13: O Futuro',
            videoUrl: 'https://www.youtube.com/watch?v=z5gwBiIDXcA',
            content: `## Exocortex e Serendipidade
O PKM está evoluindo de um arquivo passivo para uma extensão proativa da mente.
No futuro, a IA não apenas responderá perguntas, mas sugerirá conexões proativamente enquanto você escreve: "Você está escrevendo sobre X, sabia que você anotou Y sobre isso há 2 anos?".`,
            quiz: [{ question: 'Qual a tendência futura do PKM com IA?', options: ['Virar papel.', 'Assistência proativa e sugestão de conexões (Serendipidade Artificial).', 'Fim da escrita.'], correctAnswerIndex: 1 }],
        },
    ],
};
