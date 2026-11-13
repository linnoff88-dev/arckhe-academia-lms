import { Module } from '../../types';
import { BrainCircuit } from '../../components/icons';

export const M1: Module = {
  id: 'm1',
  title: 'Módulo 1: Fundamentos da IA para Negócios: Desvendando o Potencial',
  subtitle: 'Introdução aos conceitos essenciais, focando na identificação de oportunidades e ROI.',
  icon: BrainCircuit,
  lessons: [
    {
      id: 'm1-l1',
      title: '1. O Que é IA e Por Que Seu Negócio Precisa Dela?',
      videoUrl: '', 
      content: `## Visão Geral
* Definição de Inteligência Artificial e suas vertentes.
* Aplicações disruptivas da IA no mercado atual.
* Identificação de dores empresariais que a IA pode resolver.
* Benefícios competitivos da adoção de IA.

A IA revoluciona negócios transformando dados em decisões otimizadas.`,
      quiz: [
        { question: 'Qual o principal foco da adoção da IA nos negócios atuais?', options: ['Automação física.', 'Identificação e resolução de dores empresariais, gerando competitividade.', 'Armazenamento de arquivos.'], correctAnswerIndex: 1 }
      ],
    },
    {
      id: 'm1-l2',
      title: '2. Tipos de IA: Entendendo as Ferramentas para Cada Desafio Empresarial',
      videoUrl: '', 
      content: `## Visão Geral
* Diferença entre IA Fraca, Geral e Forte.
* IA Reativa, Memória Limitada, Teoria da Mente e Autoconsciente.
* Exemplos práticos de cada tipo de IA em negócios.
* Escolha da abordagem de IA mais adequada para problemas específicos.`,
      quiz: [
        { question: 'Que tipo de IA a maioria das empresas usa hoje para resolver problemas de negócio?', options: ['IA Forte e Autoconsciente.', 'IA Fraca (Estreita) baseada em Memória Limitada ou Reativa.', 'Teoria da Mente.'], correctAnswerIndex: 1 }
      ],
    },
    {
      id: 'm1-l3',
      title: '3. Desmistificando o Machine Learning: Como Aprender com Dados para Decisões Inteligentes',
      videoUrl: '', 
      content: `## Visão Geral
* Introdução ao Machine Learning (ML) e seus algoritmos.
* Aprendizado supervisionado, não supervisionado e por reforço.
* Casos de uso de ML em análise preditiva e classificação.
* Como o ML otimiza a tomada de decisão empresarial.`,
      quiz: [
        { question: 'Para que serve o aprendizado supervisionado?', options: ['Prever resultados baseados em dados históricos e rótulos conhecidos.', 'Aprender sem nenhum dado prévio.', 'Fazer o computador desligar.'], correctAnswerIndex: 0 }
      ],
    },
    {
      id: 'm1-l4',
      title: '4. Visão Computacional e Reconhecimento de Padrões: Aplicações para Otimização',
      videoUrl: '', 
      content: `## Visão Geral
* Fundamentos da Visão Computacional (VC).
* Detecção de objetos, reconhecimento facial e análise de imagens.
* Otimização de processos industriais e controle de qualidade com VC.
* Aplicações em segurança, varejo e saúde.`,
      quiz: [
        { question: 'Qual uma aplicação clássica da Visão Computacional na indústria?', options: ['Processar folha de pagamentos.', 'Controle de qualidade por inspeção automatizada', 'Traduzir textos em e-mails.'], correctAnswerIndex: 1 }
      ],
    },
    {
      id: 'm1-l5',
      title: '5. Processamento de Linguagem Natural (PLN): Comunicação e Análise de Texto',
      videoUrl: '', 
      content: `## Visão Geral
* O que é PLN e como ele processa a linguagem humana.
* Análise de sentimento, chatbots e tradução automática.
* Otimização do atendimento ao cliente e análise de feedback.
* Extração de informações valiosas de grandes volumes de texto.`,
      quiz: [
        { question: 'O que o PLN permite fazer com grandes volumes de avaliações de clientes?', options: ['Medir o tamanho do texto.', 'Extrair sentimentos e tendências de satisfação.', 'Criar planilhas financeiras.'], correctAnswerIndex: 1 }
      ],
    },
    {
      id: 'm1-l6',
      title: '6. IA Generativa: Criatividade e Eficiência na Geração de Conteúdo e Soluções',
      videoUrl: '', 
      content: `## Visão Geral
* Conceitos de IA Generativa e redes neurais generativas (GANs).
* Geração de texto, imagens e vídeos em escala.
* Aplicações em marketing, design de produtos e desenvolvimento.
* Potencial para acelerar a inovação e a personalização.`,
      quiz: [
        { question: 'A IA Generativa é especialmente útil para qual finalidade?', options: ['Gerar textos e imagens inéditos baseados em instruções.', 'Classificar planilhas do Excel.', 'Realizar backups noturnos.'], correctAnswerIndex: 0 }
      ],
    },
    {
      id: 'm1-l7',
      title: '7. Identificando Oportunidades de IA na Sua Empresa: Mapeando Problemas de Negócio',
      videoUrl: '', 
      content: `## Visão Geral
* Frameworks para identificar gargalos e ineficiências.
* Priorização de problemas com maior impacto de IA.
* Workshops de ideação para soluções baseadas em IA.
* Como transformar problemas em projetos de IA viáveis.`,
      quiz: [
        { question: 'Qual é o primeiro passo para identificar oportunidades de IA?', options: ['Comprar o software mais caro.', 'Mapear gargalos e problemas de negócio com mais impacto.', 'Contratar 100 cientistas de dados.'], correctAnswerIndex: 1 }
      ],
    },
    {
      id: 'm1-l8',
      title: '8. O Valor de Negócio da IA: Como Traduzir Tecnologia em ROI',
      videoUrl: '', 
      content: `## Visão Geral
* Métricas de sucesso e indicadores-chave de desempenho (KPIs) para IA.
* Cálculo do Retorno sobre o Investimento (ROI) em projetos de IA.
* Casos de sucesso de ROI comprovado em diferentes indústrias.
* Estratégias para justificar investimentos em IA para a liderança.`,
      quiz: [
        { question: 'Como se prova o valor de uma iniciativa de IA?', options: ['Mostrando linhas de código.', 'Por meio de cálculo de ROI e KPIs de negócio atrelados ao projeto.', 'Dizendo que a IA é a tecnologia do futuro.'], correctAnswerIndex: 1 }
      ],
    },
    {
      id: 'm1-l9',
      title: '9. Estudos de Caso de Sucesso: IA em Diferentes Setores (Varejo, Saúde, Finanças)',
      videoUrl: '', 
      content: `## Visão Geral
* Análise de implementações de IA no varejo (personalização, gestão de estoque).
* IA na saúde (diagnóstico, descoberta de medicamentos, atendimento).
* Finanças (detecção de fraudes, trading algorítmico, scoring de crédito).
* Lições aprendidas e melhores práticas de cada setor.`,
      quiz: [
        { question: 'Como a IA é tipicamente usada em Finanças?', options: ['Scoring de crédito e detecção de fraudes.', 'Construção de prédios.', 'Impressão 3D de processos físicos.'], correctAnswerIndex: 0 }
      ],
    },
    {
      id: 'm1-l10',
      title: '10. Avaliação da Maturidade Digital da Empresa para IA',
      videoUrl: '', 
      content: `## Visão Geral
* Ferramentas de avaliação da prontidão para IA.
* Identificação de gaps em dados, tecnologia e cultura.
* Criação de um plano de desenvolvimento da maturidade digital.
* Alinhamento da estratégia de IA com a estratégia de negócio.`,
      quiz: [
        { question: 'O que avalia a "Maturidade Digital" para IA?', options: ['A idade dos softwares instalados.', 'A infraestrutura de dados, adoção tecnológica e cultura orientada a dados na empresa.', 'O nível de bateria dos notebooks.'], correctAnswerIndex: 1 }
      ],
    },
    {
      id: 'm1-l11',
      title: '11. Mitos e Verdades sobre a IA nos Negócios',
      videoUrl: '', 
      content: `## Visão Geral
* Desmistificando a IA: realidade vs. ficção.
* Superando o medo da substituição do trabalho humano.
* O papel da IA como ferramenta de empoderamento humano.
* Abordagens realistas para expectativas de IA.`,
      quiz: [
        { question: 'A IA nos negócios serve principalmente como:', options: ['Um substituto completo para 100% dos humanos.', 'Uma ferramenta de empoderamento humano e aumento de produtividade.', 'Uma entidade legal da empresa.'], correctAnswerIndex: 1 }
      ],
    },
    {
      id: 'm1-l12',
      title: '12. Fundamentos Éticos e Responsáveis da IA',
      videoUrl: '', 
      content: `## Visão Geral
* Bias em algoritmos e como mitigá-lo.
* Privacidade e segurança de dados na IA.
* Transparência e explicabilidade dos modelos de IA.
* A importância da IA responsável para a confiança do consumidor.`,
      quiz: [
        { question: 'Por que o Bias (viés) é perigoso em IA?', options: ['Causa lentidão na resposta.', 'Pode perpetuar discriminação ou gerar decisões injustas e enviesadas.', 'Aumenta o custo na AWS.'], correctAnswerIndex: 1 }
      ],
    },
    {
      id: 'm1-l13',
      title: '13. Começando com IA: Primeiro Passo para a Transformação',
      videoUrl: '', 
      content: `## Visão Geral
* Como iniciar um projeto piloto de IA com baixo risco.
* Definição de escopo e objetivos para o projeto inicial.
* Escolha das ferramentas e tecnologias adequadas para iniciantes.
* Formação de uma equipe multidisciplinar para o projeto.`,
      quiz: [
        { question: 'Qual a melhor abordagem para iniciar o uso corporativo de IA?', options: ['Fazer um projeto piloto de baixo risco e escopo bem definido.', 'Anotar toda e qualquer IA em produção ao mesmo tempo.', 'Delegar para quem não conhece do negócio.'], correctAnswerIndex: 0 }
      ],
    }
  ],
};
