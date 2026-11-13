
import { Module } from '../../types';
import { Sparkles } from '../../components/icons';

export const M5_SALES: Module = {
    id: 'm5_sales',
    title: 'Módulo 5: Economia de Vendas com IA',
    subtitle: 'Novos modelos de negócio, custo marginal zero e escala infinita.',
    icon: Sparkles,
    lessons: [
      {
          id: 'm5_sales-l1',
          title: 'Lição 1: CAC Marginal Zero',
          videoUrl: 'https://www.youtube.com/watch?v=hAQSLARIkgc', // Ark Invest: AI Cost Decline
          content: `## Escala sem Custo Linear
Tradicionalmente, para dobrar as vendas, você precisava dobrar o time (SDRs).
Com Agentes de IA, o custo de fazer 1.000 ou 100.000 contatos é quase o mesmo.
Isso derruba o Custo de Aquisição de Clientes (CAC) drasticamente.`,
          quiz: [{ question: 'Como a IA afeta o CAC?', options: ['Aumenta.', 'Reduz drasticamente ao permitir escala de prospecção sem aumento linear de equipe.', 'Não muda.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5_sales-l2',
          title: 'Lição 2: Economia da Atenção B2B',
          videoUrl: 'https://www.youtube.com/watch?v=9t78YjV1Kz8', // Attention Economy in Sales
          content: `## O Novo Ouro
Se é fácil gerar conteúdo (e-mails, posts), a caixa de entrada do cliente fica lotada.
A escassez muda da "Informação" para a "Atenção".
Vence quem consegue ser **hiper-relevante**, não quem grita mais alto. Personalização é a moeda da atenção.`,
          quiz: [{ question: 'O que se torna escasso na era da IA Generativa?', options: ['Conteúdo.', 'A atenção do prospect.', 'E-mails.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5_sales-l3',
          title: 'Lição 3: PLG (Product-Led Growth) e IA',
          videoUrl: 'https://www.youtube.com/watch?v=3M2-vjJ_Wvk', // PLG Explained
          content: `## O Produto Vende
Em PLG, o usuário testa o produto antes de falar com vendas.
A IA atua como um "vendedor dentro do produto", guiando o usuário, tirando dúvidas e sugerindo o upgrade no momento exato de valor (Aha moment).`,
          quiz: [{ question: 'Qual o papel da IA no PLG?', options: ['Bloquear o uso.', 'Assistir e converter o usuário dentro do produto sem intervenção humana.', 'Fazer o produto.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5_sales-l4',
          title: 'Lição 4: Alucinação como Risco de Marca',
          videoUrl: 'https://www.youtube.com/watch?v=cf522e5e1eE', // AI Risk Brand
          content: `## O Custo do Erro
Um bot que xinga um cliente ou promete algo falso pode viralizar e destruir a reputação da marca (Caso Air Canada).
Economicamente, o custo de mitigação de risco (Guardrails) deve ser incluído no projeto de IA.`,
          quiz: [{ question: 'Qual o risco econômico da alucinação em vendas?', options: ['Nenhum.', 'Danos à reputação e passivos legais por promessas falsas.', 'O cliente ficar feliz.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5_sales-l5',
          title: 'Lição 5: Gestão de Conhecimento de Vendas',
          videoUrl: 'https://www.youtube.com/watch?v=TRjq7t2Ms5I', // AI Knowledge Management
          content: `## Playbook Vivo
O "Playbook de Vendas" costumava ser um PDF que ninguém lia.
Com IA, o Playbook é uma base de conhecimento viva. O vendedor pergunta: "Como contorno a objeção de preço?" e a IA responde com o melhor argumento atualizado.`,
          quiz: [{ question: 'Como a IA transforma o Playbook de Vendas?', options: ['Imprime melhor.', 'Torna-o uma ferramenta de consulta ativa e instantânea.', 'Apaga ele.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5_sales-l6',
          title: 'Lição 6: O Vendedor Engenheiro',
          videoUrl: 'https://www.youtube.com/watch?v=1A_T4k6-X7A', // The Future Sales Rep
          content: `## Nova Competência
O vendedor mais valioso não é mais o que fala mais bonito, é o que sabe montar seus próprios fluxos de automação.
Saber conectar o Zapier no ChatGPT para automatizar seu follow-up vale mais que técnicas de fechamento antigas.`,
          quiz: [{ question: 'Qual nova habilidade valoriza o profissional de vendas?', options: ['Lábia.', 'Capacidade de construir suas próprias automações e fluxos de IA.', 'Digitação.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5_sales-l7',
          title: 'Lição 7: Multimodalidade em Vendas',
          videoUrl: 'https://www.youtube.com/watch?v=yY1QZ9o3x_0', // Multimodal AI
          content: `## Vídeo Prospecting em Escala
Ferramentas como Tavus ou HeyGen permitem gravar um vídeo e a IA altera o movimento da boca para dizer o nome de 1000 clientes diferentes.
A taxa de resposta de vídeo é muito maior que texto. A economia de produção permite fazer isso para todos.`,
          quiz: [{ question: 'O que a multimodalidade permite na prospecção?', options: ['Nada.', 'Vídeos personalizados em escala massiva.', 'Apenas áudio.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5_sales-l8',
          title: 'Lição 8: Marketing 1:1 Real',
          videoUrl: 'https://www.youtube.com/watch?v=0qQ2o1tR5jU', // Hyper-personalization Marketing
          content: `## O Sonho Realizado
O sonho do marketing sempre foi tratar cada cliente como único. Era caro demais.
Com IA, o custo de gerar uma landing page única, um e-mail único e uma oferta única para cada lead tende a zero. A economia da massificação inverte para a economia da individualização.`,
          quiz: [{ question: 'Qual a mudança econômica no marketing?', options: ['Fica mais caro.', 'Viabilidade econômica da personalização individual (1:1) em massa.', 'Fim do marketing.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5_sales-l9',
          title: 'Lição 9: MaaS (Model as a Service) em Vendas',
          videoUrl: 'https://www.youtube.com/watch?v=reUZRyXxUs4', // API Economy
          content: `## Alugando Cérebros
Em vez de contratar 10 juniores para qualificar leads, você "aluga" instâncias de um modelo de IA especializado em vendas.
O custo vira variável (por lead qualificado) em vez de fixo (salário), dando flexibilidade financeira para a empresa.`,
          quiz: [{ question: 'Como o modelo MaaS altera o custo de pessoal?', options: ['Aumenta o fixo.', 'Flexibiliza o custo, transformando salário fixo em custo variável por performance.', 'Não altera.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5_sales-l10',
          title: 'Lição 10: Agentes de Negociação',
          videoUrl: 'https://www.youtube.com/watch?v=xSHqm8JsqkI', // AI Agents Negotiating
          content: `## Compras vs. Vendas
No futuro, o Agente de Compras do cliente (IA) negociará com o seu Agente de Vendas (IA).
Eles trocarão dados e chegarão ao preço ótimo de mercado em milissegundos. A economia de vendas B2B transactional será máquina-a-máquina.`,
          quiz: [{ question: 'Qual o futuro das vendas transacionais B2B?', options: ['Almoços de negócio.', 'Negociação automatizada entre Agentes de Compra e Agentes de Venda.', 'Fax.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm5_sales-l11',
        title: 'Lição 11: A Morte do SDR Humano?',
        videoUrl: 'https://www.youtube.com/watch?v=5dEZ_0s1F1c', // Evolution of SDR Role
        content: `## Evolução da Função
O papel de "apenas agendar reunião" será engolido pela IA.
O SDR humano precisa evoluir para um papel mais estratégico de pesquisa de contas (Account Research) e relacionamento de alto nível que a IA ainda não consegue mimetizar perfeitamente.`,
        quiz: [{ question: 'O que acontece com a função de SDR tradicional?', options: ['Desaparece ou evolui.', 'Fica igual.', 'Ganha aumento.'], correctAnswerIndex: 0 }],
      },
      {
        id: 'm5_sales-l12',
        title: 'Lição 12: Propriedade de Dados de Clientes',
        videoUrl: 'https://www.youtube.com/watch?v=l-BA-dXXCVA', // Data as Asset
        content: `## O Novo Petróleo
Seu modelo de IA é tão bom quanto os dados que ele consumiu.
Empresas que têm histórico de vendas, gravações de calls e dados de CRM organizados têm um ativo econômico gigantesco. Quem não tem, terá que pagar caro para usar modelos genéricos piores.`,
        quiz: [{ question: 'Qual o ativo mais valioso para treinar IA de vendas?', options: ['Computadores.', 'Dados históricos proprietários de interações com clientes.', 'Eletricidade.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm5_sales-l13',
        title: 'Lição 13: Vídeo e Demo Automatizada',
        videoUrl: 'https://www.youtube.com/watch?v=273tZ2V-D9E', // Interactive Demos
        content: `## Demos Interativas
Ferramentas como Navattic ou Arcade usam IA para criar demos de produto guiadas.
O cliente navega sozinho, e a IA narra e explica os benefícios. Reduz a necessidade de um Engenheiro de Vendas em cada call inicial, baixando o custo de venda.`,
        quiz: [{ question: 'Como demos automatizadas ajudam na economia de vendas?', options: ['São mais bonitas.', 'Reduzem a necessidade de horas humanas de pré-vendas em estágios iniciais.', 'Não ajudam.'], correctAnswerIndex: 1 }],
      },
    ],
};
