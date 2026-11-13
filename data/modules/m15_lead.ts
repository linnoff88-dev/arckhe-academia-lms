
import { Module } from '../../types';
import { Sparkles } from '../../components/icons';

export const M15_LEAD: Module = {
    id: 'm15_lead',
    title: 'Módulo 15: Estratégia e Economia da IA',
    subtitle: 'ROI, Modelos de Negócio e Vantagem Competitiva.',
    icon: Sparkles,
    lessons: [
        {
            id: 'm15_lead-l1',
            title: 'Lição 1: A Economia da Predição',
            videoUrl: 'https://www.youtube.com/watch?v=reUZRyXxUs4',
            content: `## Barateando a Previsão
A IA derruba o custo de fazer previsões.
Quando a previsão fica barata, usamos ela em tudo (não só em clima, mas em recomendação de música, estoque, contratação).
Isso muda o valor dos bens complementares: Dados (input) e Julgamento (ação).`,
            quiz: [{ question: 'O que a IA torna barato economicamente?', options: ['Computadores.', 'A predição/previsão.', 'A eletricidade.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15_lead-l2',
            title: 'Lição 2: ROI de Projetos de IA',
            videoUrl: 'https://www.youtube.com/watch?v=3WBIrqbN5zA',
            content: `## Medindo o Retorno
Projetos de IA falham por falta de métrica clara.
Tipos de ROI:
1. Eficiência (Redução de Custo/Tempo).
2. Eficácia (Aumento de Qualidade/Venda).
3. Inovação (Novas Receitas).
Defina o KPI antes de começar o código.`,
            quiz: [{ question: 'Qual o erro comum ao calcular ROI de IA?', options: ['Não calcular.', 'Não definir a métrica de sucesso antes do projeto.', 'Usar calculadora.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15_lead-l3',
            title: 'Lição 3: Build vs. Buy na Estratégia',
            videoUrl: 'https://www.youtube.com/watch?v=70XDqiDB_wE',
            content: `## Comprar ou Fazer?
Compre (SaaS) se for commodity (ex: OCR de nota fiscal, Chatbot de RH).
Faça (Build) se for Core Business (ex: Algoritmo de recomendação do Netflix).
Não gaste energia reinventando o que o mercado já vende barato.`,
            quiz: [{ question: 'Quando construir IA internamente?', options: ['Sempre.', 'Quando for diferencial competitivo central (Core Business).', 'Nunca.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15_lead-l4',
            title: 'Lição 4: Fosso Defensivo (Moat)',
            videoUrl: 'https://www.youtube.com/watch?v=hAQSLARIkgc',
            content: `## Dados como Defesa
O algoritmo é commodity (todos têm GPT-4). O hardware é nuvem.
O único "moat" defensável são seus **dados proprietários** e como você os integra ao fluxo de trabalho.
Quem tem os melhores dados treina os melhores modelos.`,
            quiz: [{ question: 'Qual a vantagem competitiva sustentável em IA?', options: ['O modelo.', 'Dados proprietários exclusivos e integração profunda no workflow.', 'O servidor.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15_lead-l5',
            title: 'Lição 5: Cadeia de Valor da IA',
            videoUrl: 'https://www.youtube.com/watch?v=5ek53A7DKog',
            content: `## Quem ganha dinheiro?
- Infraestrutura (Nvidia/Cloud): Vendedores de picaretas.
- Modelos (OpenAI): Plataformas.
- Aplicações (SaaS): Onde a maioria das empresas joga.
Entenda onde sua empresa se encaixa para não ser esmagada pelas plataformas.`,
            quiz: [{ question: 'Onde a maioria das empresas não-tech atua?', options: ['Hardware.', 'Aplicação da IA para resolver problemas de negócio (Camada de Aplicação).', 'Pesquisa pura.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15_lead-l6',
            title: 'Lição 6: Transformação de Modelos de Negócio',
            videoUrl: 'https://www.youtube.com/watch?v=gqkWf2A1zyU',
            content: `## De Produto para Serviço
IA permite monitorar produtos e cobrar por resultado (Outcome economy).
Ex: Rolls Royce cobra por "hora de voo" da turbina, não pela venda da turbina, usando manutenção preditiva para garantir lucro.`,
            quiz: [{ question: 'Como a IA habilita novos modelos de negócio?', options: ['Vendendo dados.', 'Permitindo cobrança por resultado/uso (Servitização) através de monitoramento inteligente.', 'Aumentando preço.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15_lead-l7',
            title: 'Lição 7: Custos Ocultos da IA (TCO)',
            videoUrl: 'https://www.youtube.com/watch?v=gagld9HrVXs',
            content: `## A Conta da Nuvem
Treinar é caro, mas inferir (rodar) pode ser mais ainda.
Total Cost of Ownership inclui: Nuvem, Limpeza de Dados, MLOps, Re-treino e Gestão de Mudança.
Muitos projetos morrem porque o custo de rodar supera o benefício.`,
            quiz: [{ question: 'O que compõe o TCO da IA?', options: ['Só o software.', 'Infraestrutura, dados, manutenção contínua e custos humanos.', 'Energia.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15_lead-l8',
            title: 'Lição 8: O Dilema da Inovação',
            videoUrl: 'https://www.youtube.com/watch?v=EzTNFV-s6XU',
            content: `## Canibalização
A IA pode tornar seu produto atual obsoleto.
O líder deve ter coragem de canibalizar o próprio negócio antes que um concorrente o faça.
Ex: Kodak e a câmera digital.`,
            quiz: [{ question: 'Qual a atitude correta diante da ruptura?', options: ['Esconder.', 'Auto-disrupção controlada para liderar o novo mercado.', 'Proibir a inovação.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15_lead-l9',
            title: 'Lição 9: Ecossistemas e Parcerias',
            videoUrl: 'https://www.youtube.com/watch?v=wIkBhzZ2oJI',
            content: `## Não vá sozinho
O cenário muda rápido demais.
Estratégia de parcerias com startups, universidades e big techs é vital para acessar inovação sem ter que construir tudo dentro de casa.`,
            quiz: [{ question: 'Por que parcerias são vitais em IA?', options: ['Para dividir conta.', 'Para acessar inovação rápida e talento especializado que é difícil contratar.', 'Para almoçar.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15_lead-l10',
            title: 'Lição 10: Estratégia de Dados (Data Strategy)',
            videoUrl: 'https://www.youtube.com/watch?v=t3fEoJQyhH4',
            content: `## O Alicerce
Sem estratégia de dados, não há estratégia de IA.
Definir: Governança, Arquitetura (Cloud/Lake), Qualidade e Cultura.
Tratar dados como ativo estratégico, não subproduto de TI.`,
            quiz: [{ question: 'Qual o pré-requisito para estratégia de IA?', options: ['Dinheiro.', 'Uma estratégia de dados robusta e saneada.', 'Sorte.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15-lead-l11',
            title: 'Lição 11: FinOps para IA',
            videoUrl: 'https://www.youtube.com/watch?v=Q0bbYCQLw6s',
            content: `## Controlando a Torneira
Custos de API (tokens) podem explodir.
FinOps é a prática de monitorar e otimizar o gasto de nuvem em tempo real.
Escolher o modelo certo (GPT-4 vs GPT-3.5) para a tarefa certa economiza milhões.`,
            quiz: [{ question: 'O que é FinOps em IA?', options: ['Financiar.', 'Gestão e otimização financeira do consumo de recursos de nuvem e IA.', 'Contabilidade.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15-lead-l12',
            title: 'Lição 12: Valorização da Empresa (Valuation)',
            videoUrl: 'https://www.youtube.com/watch?v=hAQSLARIkgc',
            content: `## O Prêmio da IA
Empresas "AI-Native" ou que incorporam IA com sucesso tendem a ter múltiplos de valuation maiores.
Investidores buscam escalabilidade e margem, duas coisas que a IA entrega.`,
            quiz: [{ question: 'Como a IA impacta o valuation?', options: ['Reduz.', 'Tende a aumentar devido à promessa de escalabilidade e eficiência.', 'Não afeta.'], correctAnswerIndex: 1 }],
        },
        {
            id: 'm15-lead-l13',
            title: 'Lição 13: Planejamento de Cenários Futuros',
            videoUrl: 'https://www.youtube.com/watch?v=xSHqm8JsqkI',
            content: `## Visão de Longo Prazo
O mundo muda exponencialmente.
Usar IA para simular cenários futuros e testar a robustez da estratégia.
Estar preparado para pivotar rápido. Resiliência estratégica.`,
            quiz: [{ question: 'Qual a competência estratégica final?', options: ['Adivinhar.', 'Agilidade e preparação para múltiplos cenários futuros.', 'Ficar parado.'], correctAnswerIndex: 1 }],
        },
    ],
};
