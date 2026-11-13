
import { Module } from '../../types';
import { Blocks } from '../../components/icons';

export const M13: Module = {
    id: 'm13',
    title: 'Módulo 13: Low-Code & No-Code',
    subtitle: 'Desenvolvimento democratizado e agilidade na criação de software.',
    icon: Blocks,
    lessons: [
        {
            id: 'm13-l1',
            title: 'Lição 1: O Paradigma LCNC',
            videoUrl: 'https://www.youtube.com/watch?v=wsBf6Pd37Ho',
            content: `## Desenvolvimento Visual
Low-Code/No-Code abstrai a complexidade da sintaxe de programação em interfaces visuais (arrastar e soltar).
- **No-Code:** Para usuários de negócio ("Citizen Developers"). Foco em resolver problemas rápidos sem escrever uma linha de código.
- **Low-Code:** Para desenvolvedores profissionais. Acelera o trabalho repetitivo (boilerplate), mas permite injeção de código customizado para lógica complexa.`,
            quiz: [{ question: 'Qual o objetivo principal do LCNC?', options: ['Eliminar programadores.', 'Acelerar o desenvolvimento e democratizar a criação de software.', 'Deixar o software lento.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13-l2',
            title: 'Lição 2: Governança Federada',
            videoUrl: 'https://www.youtube.com/watch?v=6gn8yFcMnU4',
            content: `## Liberdade com Responsabilidade
Se todos criarem apps sem controle, cria-se o caos da "Shadow IT" (sistemas inseguros e não monitorados).
A Governança Federada é o equilíbrio: A TI Central define a plataforma, a segurança e os padrões de dados ("Guardrails"). As Áreas de Negócio (Federadas) constroem as soluções livremente dentro dessas margens seguras.`,
            quiz: [{ question: 'Como evitar o caos no Low-Code?', options: ['Proibindo o uso.', 'Governança Federada (TI define regras, Negócio executa).', 'Deixando livre.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13-l3',
            title: 'Lição 3: Generative UI (Prompt-to-UI)',
            videoUrl: 'https://www.youtube.com/watch?v=XpRIRJo6i9I',
            content: `## Design Instantâneo
A fusão de IA Generativa com Low-Code.
Em vez de arrastar botões, você descreve o app: "Quero um CRM para corretores de imóveis com dashboard de vendas".
A IA gera o esquema do banco de dados, o layout da interface e os fluxos lógicos iniciais em segundos, agindo como um programador par.`,
            quiz: [{ question: 'O que é Generative UI?', options: ['Um designer robô.', 'Criação de interfaces de usuário completas a partir de prompts de texto.', 'Pintura digital.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13-l4',
            title: 'Lição 4: Composable Enterprise',
            videoUrl: 'https://www.youtube.com/watch?v=zXibieP_E2A',
            content: `## Blocos de Construção
O fim dos ERPs monolíticos. A empresa moderna é "componível", construída conectando microsserviços e pequenos aplicativos focados (PBCs - Packaged Business Capabilities).
O Low-code atua como a "cola" ágil ideal para integrar e orquestrar esses diferentes blocos de funcionalidade.`,
            quiz: [{ question: 'O que caracteriza uma Composable Enterprise?', options: ['Prédio de tijolos.', 'Arquitetura modular feita de componentes independentes e conectáveis.', 'Software antigo.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13-l5',
            title: 'Lição 5: AI Inside PaaS',
            videoUrl: 'https://www.youtube.com/watch?v=mXp2PKrTlzU',
            content: `## Inteligência na Caixa
As plataformas Low-Code modernas já vêm com componentes de IA pré-construídos.
Você pode arrastar um componente de "Leitura de Recibo (OCR)", "Análise de Sentimento" ou "Chatbot" para o seu app tão facilmente quanto arrasta um botão, democratizando o acesso a recursos avançados de IA.`,
            quiz: [{ question: 'Como o Low-Code facilita o uso de IA?', options: ['Não facilita.', 'Oferecendo componentes de IA pré-construídos e fáceis de integrar.', 'Escrevendo Python.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13-l6',
            title: 'Lição 6: Citizen Data Scientist',
            videoUrl: 'https://www.youtube.com/watch?v=FiflZzoo91A',
            content: `## Análise para Todos
Ferramentas No-Code de Data Science (AutoML).
Elas permitem que um analista de marketing ou gerente de produto crie modelos de previsão de churn, segmentação de clientes ou previsão de vendas sem precisar saber estatística avançada ou programação em Python/R.`,
            quiz: [{ question: 'O que faz um Citizen Data Scientist?', options: ['Cientista político.', 'Usa ferramentas No-Code/AutoML para criar modelos preditivos sem programar.', 'Limpa dados.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13-l7',
            title: 'Lição 7: Internal Developer Platform',
            videoUrl: 'https://www.youtube.com/watch?v=gLjL6x5oyy0',
            content: `## Engenharia de Plataforma
Grandes empresas estão criando suas próprias plataformas Low-Code internas (IDPs).
Isso padroniza a infraestrutura, segurança e deploy, permitindo que os desenvolvedores foquem exclusivamente na lógica de negócio, sem perder tempo configurando servidores ou pipelines.`,
            quiz: [{ question: 'Qual o benefício de uma IDP?', options: ['Menos trabalho.', 'Padronização e aceleração do desenvolvimento interno.', 'Mais servidores.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13-l8',
            title: 'Lição 8: Tech-to-SQL',
            videoUrl: 'https://www.youtube.com/watch?v=0YXyvBcysLg',
            content: `## Conversando com Dados
Interfaces de linguagem natural onde qualquer colaborador pode fazer perguntas ao banco de dados em português ("Quantas vendas tivemos em SP mês passado?"), e a IA traduz isso para SQL otimizado.
Isso remove o gargalo do time de BI para relatórios simples.`,
            quiz: [{ question: 'O que a tecnologia Text-to-SQL resolve?', options: ['Erro de digitação.', 'A barreira técnica de consultar bancos de dados relacionais.', 'Armazenamento.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13-l9',
            title: 'Lição 9: Escalabilidade no No-Code',
            videoUrl: 'https://www.youtube.com/watch?v=7N9772cW4', // Scalability in Low-Code
            content: `## O Fim do "Só pra MVP"
Antigamente, No-Code era só para protótipos. Hoje, plataformas modernas (Xano, Supabase, FlutterFlow) permitem criar apps que escalam para milhões de usuários.
O segredo é uma arquitetura que desacopla o Frontend (Visual) do Backend (Lógica e Dados).`,
            quiz: [{ question: 'É possível escalar com No-Code?', options: ['Não, é só para protótipo.', 'Sim, usando arquiteturas modernas e backends robustos.', 'Talvez.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13-l10',
            title: 'Lição 10: Vendor Lock-in',
            videoUrl: 'https://www.youtube.com/watch?v=T3LxKDUPu-4',
            content: `## A Armadilha
O risco de ficar preso a uma plataforma proprietária que aumenta preços ou fecha.
Estratégias de mitigação:
- Escolher plataformas que permitem exportar código limpo (ex: Flutter, React).
- Usar padrões abertos e APIs.
- Manter a lógica de negócio e dados separados da interface visual.`,
            quiz: [{ question: 'Como mitigar o Vendor Lock-in no Low-Code?', options: ['Rezar.', 'Escolher ferramentas que exportam código e usar padrões abertos.', 'Usar papel.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13-l11',
            title: 'Lição 11: Excel como No-Code',
            videoUrl: 'https://www.youtube.com/watch?v=T3LxKDUPu-4', // Excel to App
            content: `## O Pioneiro
Excel foi a primeira ferramenta No-Code do mundo.
Hoje, ferramentas como Power Apps transformam planilhas estáticas em aplicativos móveis dinâmicos e seguros, aproveitando o conhecimento de lógica de negócios que as equipes já possuem no Excel.`,
            quiz: [{ question: 'Por que o Excel é considerado o "pai" do No-Code?', options: ['É velho.', 'Permite que não-programadores criem lógica de negócio e manipulem dados.', 'Tem células.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13-l12',
            title: 'Lição 12: Testes Automatizados e QA',
            videoUrl: 'https://www.youtube.com/watch?v=gGt1Nq3zA1Q',
            content: `## Confiança e Qualidade
Só porque foi feito "arrastando caixas", não significa que está livre de bugs.
O uso de ferramentas de teste visual e automação de QA é essencial para garantir a robustez de aplicações Low-Code, especialmente em processos críticos de negócio.`,
            quiz: [{ question: 'Aplicações Low-Code precisam de QA?', options: ['Não.', 'Sim, testes automatizados são essenciais para garantia de qualidade.', 'Só visual.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm13-l13',
            title: 'Lição 13: O Futuro do Programador',
            videoUrl: 'https://www.youtube.com/watch?v=csyL9EC0S0c', // Jensen Huang: Everyone is a programmer
            content: `## Codificação vs Engenharia
O "coder" (quem apenas digita sintaxe) perde valor. O "Engenheiro de Software" (quem resolve problemas e desenha sistemas) ganha valor.
Low-Code e IA tornam-se as novas IDEs superpoderosas, permitindo que um único engenheiro faça o trabalho de dez.`,
            quiz: [{ question: 'Como o papel do programador evolui?', options: ['Desaparece.', 'Foca menos em sintaxe e mais em arquitetura e solução de problemas.', 'Vira gerente.'], correctAnswerIndex: 1 }],
        },
    ],
};
