
import { Module } from '../../types';
import { FileText } from '../../components/icons';

export const M9_SALES: Module = {
    id: 'm9_sales',
    title: 'Módulo 9: Governança e Compliance em Vendas',
    subtitle: 'Vendendo com ética, segurança e conformidade na era da IA.',
    icon: FileText,
    lessons: [
      {
          id: 'm9_sales-l1',
          title: 'Lição 1: LGPD na Prospecção',
          videoUrl: 'https://www.youtube.com/watch?v=l-BA-dXXCVA', // LGPD em Vendas
          content: `## O Limite do Cold Mail
Você pode mandar e-mail para quem não pediu?
Sim, em B2B, sob a base legal do "Legítimo Interesse".
Mas é obrigatório:
1. Ter relevância real (não ser spam genérico).
2. Oferecer descadastro fácil.
3. Não usar dados pessoais sensíveis.`,
          quiz: [{ question: 'Qual a base legal comum para prospecção B2B?', options: ['Consentimento.', 'Legítimo Interesse (com requisitos).', 'Nenhuma, é proibido.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9_sales-l2',
          title: 'Lição 2: Ética em IA Generativa',
          videoUrl: 'https://www.youtube.com/watch?v=N-i5kI5kzac', // AI Ethics
          content: `## Deepfakes e Confiança
Usar a voz clonada de um CEO para vender é tecnicamente possível, mas eticamente condenável (e ilegal em muitos lugares).
A transparência é chave. Se é um bot, diga que é um bot. A quebra de confiança é irreversível.`,
          quiz: [{ question: 'Qual o princípio ético ao usar bots?', options: ['Enganar o cliente.', 'Transparência (identificar-se como IA).', 'Falar gírias.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9_sales-l3',
          title: 'Lição 3: Alucinação e Responsabilidade',
          videoUrl: 'https://www.youtube.com/watch?v=cf522e5e1eE', // AI Liability
          content: `## Quem Paga a Conta?
Se seu chatbot promete um desconto de 99% por erro ("alucinação"), a empresa pode ser obrigada a honrar.
Governança exige "Guardrails" (barreiras de segurança) no prompt e revisão humana em contratos gerados por IA.`,
          quiz: [{ question: 'Quem é responsável pelos erros da IA?', options: ['O robô.', 'A empresa que utiliza a IA.', 'O cliente.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9_sales-l4',
          title: 'Lição 4: Gravação de Calls',
          videoUrl: 'https://www.youtube.com/watch?v=AJNBp-19_cM', // Call Recording Compliance
          content: `## Aviso Obrigatório
Para usar ferramentas de Revenue Intelligence (Gong), você *deve* avisar que a call está sendo gravada.
Em muitos países, é ilegal gravar sem consentimento de ambas as partes. A governança garante que esse aviso seja automático.`,
          quiz: [{ question: 'O que é obrigatório ao gravar calls de vendas?', options: ['Ter microfone bom.', 'Obter consentimento ou notificar as partes sobre a gravação.', 'Falar baixo.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9_sales-l5',
          title: 'Lição 5: Gestão de Acesso (Dados de Clientes)',
          videoUrl: 'https://www.youtube.com/watch?v=t3fEoJQyhH4', // Access Control
          content: `## Need to Know
Vendedores devem ver apenas os seus leads? Ou a base toda?
Em tempos de vazamento de dados, a política de "menor privilégio" é a mais segura. Evita que um vendedor saia da empresa levando a lista completa de clientes.`,
          quiz: [{ question: 'Qual a melhor política de acesso a dados?', options: ['Liberar tudo.', 'Princípio do Menor Privilégio (acesso apenas ao necessário).', 'Bloquear tudo.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9_sales-l6',
          title: 'Lição 6: Viés em Algoritmos de Venda',
          videoUrl: 'https://www.youtube.com/watch?v=reUZRyXxUs4', // AI Bias
          content: `## Discriminação Digital
Se o seu modelo de Lead Scoring aprendeu com dados históricos enviesados, ele pode dar notas baixas para empresas de certas regiões ou setores injustamente.
Auditoria de viés é necessária para garantir oportunidades justas e não perder mercado.`,
          quiz: [{ question: 'O que é viés algorítmico em vendas?', options: ['Erro de conta.', 'Discriminação injusta baseada em padrões históricos preconceituosos nos dados.', 'Vírus.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9_sales-l7',
          title: 'Lição 7: Segurança de Prompts',
          videoUrl: 'https://www.youtube.com/watch?v=eC6Hd1hUPtU', // Prompt Injection
          content: `## Não Vaze Segredos
Nunca coloque dados confidenciais de clientes (cartão, senhas, segredos industriais) em prompts de IAs públicas (ChatGPT Free).
Use versões Enterprise ou sanitização de dados antes de enviar para a IA.`,
          quiz: [{ question: 'O que nunca colocar no ChatGPT público?', options: ['Perguntas.', 'Dados confidenciais, PII ou segredos comerciais.', 'Textos em inglês.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9_sales-l8',
          title: 'Lição 8: Opt-in e Opt-out',
          videoUrl: 'https://www.youtube.com/watch?v=gQddtTdmPOc', // Email Compliance
          content: `## Respeito ao Canal
O "Não" é sagrado.
Se um lead pede para sair da lista (Opt-out), todos os sistemas (CRM, Marketing, Sales) devem respeitar isso instantaneamente e sincronizadamente. Falhar nisso gera multas e danos à marca.`,
          quiz: [{ question: 'O que fazer após um pedido de Opt-out?', options: ['Mandar mais um e-mail.', 'Cessar comunicações imediatamente em todos os canais.', 'Ligar para perguntar porquê.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9_sales-l9',
          title: 'Lição 9: Shadow AI no Comercial',
          videoUrl: 'https://www.youtube.com/watch?v=Kx6M5XlZqOE', // Shadow AI Risks
          content: `## O Perigo Oculto
Vendedores usando extensões de browser não homologadas para "achar e-mails".
Muitas dessas ferramentas roubam dados ou violam termos de serviço do LinkedIn.
A governança deve homologar ferramentas seguras para o time.`,
          quiz: [{ question: 'O que é Shadow AI em vendas?', options: ['IA ninja.', 'Uso de ferramentas de IA não autorizadas pela TI pelos vendedores.', 'IA desligada.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9_sales-l10',
          title: 'Lição 10: Documentação e Auditoria',
          videoUrl: 'https://www.youtube.com/watch?v=t3fEoJQyhH4', // IT Auditing
          content: `## Rastro Digital
Manter registro de *como* e *por que* a IA tomou uma decisão (ex: negou crédito ou priorizou um lead).
Em setores regulados, a "explicabilidade" é obrigatória por lei.`,
          quiz: [{ question: 'Por que documentar decisões da IA?', options: ['Para gastar papel.', 'Para auditoria, conformidade legal e entender falhas.', 'Não precisa.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm9-sales-l11',
        title: 'Lição 11: Termos de Uso e IA',
        videoUrl: 'https://www.youtube.com/watch?v=N-i5kI5kzac', // AI Legal Terms (Transparency)
        content: `## Contratos Atualizados
Seus contratos com clientes permitem que você use os dados deles para treinar sua IA?
É necessário atualizar os Termos de Serviço para ser transparente sobre o uso de dados para melhoria de produto via Machine Learning.`,
        quiz: [{ question: 'O que deve constar nos contratos sobre IA?', options: ['Nada.', 'Cláusulas transparentes sobre o uso de dados para treinamento e melhoria de serviços.', 'Segredos.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm9-sales-l12',
        title: 'Lição 12: Spam Filters e Entregabilidade',
        videoUrl: 'https://www.youtube.com/watch?v=gQddtTdmPOc', // Email Deliverability
        content: `## A Polícia do E-mail
Google e Yahoo apertaram as regras.
Enviar milhares de e-mails gerados por IA sem aquecimento de domínio (Warm-up) e configurações técnicas (DKIM, SPF) vai te jogar na caixa de spam. Governança técnica é vital.`,
        quiz: [{ question: 'O que garante que o e-mail chegue na caixa de entrada?', options: ['Sorte.', 'Configuração técnica (DKIM/SPF), aquecimento de domínio e relevância.', 'Escrever em maiúsculas.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm9-sales-l13',
        title: 'Lição 13: Cultura de Ética',
        videoUrl: 'https://www.youtube.com/watch?v=cf522e5e1eE', // Ethical Leadership
        content: `## O Humano no Comando
A tecnologia permite fazer spam massivo. A ética diz para não fazer.
Treinar o time de vendas para usar a superpotência da IA com responsabilidade, focando em valor para o cliente, não em exploração.`,
        quiz: [{ question: 'Qual o pilar final da governança?', options: ['Lucro.', 'Cultura ética e responsabilidade humana no uso da ferramenta.', 'Medo.'], correctAnswerIndex: 1 }],
      },
    ],
};
