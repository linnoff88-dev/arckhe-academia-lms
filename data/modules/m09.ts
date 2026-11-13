
import { Module } from '../../types';
import { FileText } from '../../components/icons';

export const M9: Module = {
    id: 'm9',
    title: 'Módulo 9: Governança de IA',
    subtitle: 'Maturidade, Regulação, Risco e Estratégia Corporativa.',
    icon: FileText,
    lessons: [
      {
          id: 'm9-l1',
          title: 'Lição 1: Modelo de Maturidade e Estrutura',
          videoUrl: 'https://www.youtube.com/watch?v=9v0K5wkAZ6A',
          content: `## Onde você está?
Empresas passam por fases:
1. **Tática:** Experimentos isolados (Shadow AI).
2. **Estratégica:** CoE formado, casos de uso priorizados.
3. **Transformacional:** IA no core do negócio.
Pular da fase 1 para a 3 sem estrutura gera dívida técnica e risco.`,
          quiz: [{ question: 'O que caracteriza a fase Tática/Experimental?', options: ['Governança total.', 'Iniciativas isoladas e dispersas sem padrão central.', 'IA em todos os produtos.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9-l2',
          title: 'Lição 2: CoE (Centro de Excelência)',
          videoUrl: 'https://www.youtube.com/watch?v=fuIvnHWHwC8',
          content: `## Hub and Spoke
O modelo ideal de organização.
Um centro (Hub) define padrões, ferramentas e segurança.
As pontas (Spokes/Áreas de Negócio) executam os projetos com agilidade.
O CoE evita que cada área contrate seu próprio ChatGPT Enterprise duplicado.`,
          quiz: [{ question: 'Qual o papel do CoE no modelo Hub and Spoke?', options: ['Fazer tudo sozinho.', 'Definir padrões e habilitar as áreas de negócio.', 'Proibir IA.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9-l3',
          title: 'Lição 3: AI TPM (Gestão de Risco)',
          videoUrl: 'https://www.youtube.com/watch?v=hD99Xd6utgQ',
          content: `## AI TRiSM
Trust, Risk, and Security Management.
Novos riscos exigem nova gestão:
- **Envenenamento de dados:** Inimigos alterando seu treino.
- **Ataques Adversariais:** Prompts que quebram as regras da IA.
- **Viés:** IA discriminando clientes.`,
          quiz: [{ question: 'O que é AI TRiSM?', options: ['Um novo modelo de IA.', 'Gestão de Confiança, Risco e Segurança em IA.', 'Um turista.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9-l4',
          title: 'Lição 4: Priorização de Portfólio',
          videoUrl: 'https://www.youtube.com/watch?v=JQoDwj2kFFc',
          content: `## Matriz de Valor
Não faça IA por fazer.
Cruze **Viabilidade Técnica** (temos os dados?) com **Impacto no Negócio** (dá dinheiro?).
- Alto Impacto / Alta Viabilidade: Quick Wins (Faça agora).
- Baixo Impacto / Baixa Viabilidade: Esqueça.`,
          quiz: [{ question: 'Quais os eixos da matriz de priorização?', options: ['Beleza e Custo.', 'Viabilidade Técnica e Impacto no Negócio.', 'Hype e Medo.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9-l5',
          title: 'Lição 5: Ciclo de Vida de Produto',
          videoUrl: 'https://www.youtube.com/watch?v=gagld9HrVXs',
          content: `## MLOps
Software tradicional: Você escreve, ele não muda.
IA: O modelo degrada (Drift). Se o comportamento do consumidor muda, a IA erra.
O ciclo de vida inclui monitoramento contínuo e re-treinamento automático.`,
          quiz: [{ question: 'O que é Data Drift?', options: ['Carro derrapando.', 'Quando os dados do mundo real mudam e o modelo desatualizado perde precisão.', 'Backup.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9-l6',
          title: 'Lição 6: Métricas de Negócio e Time to Market',
          videoUrl: 'https://www.youtube.com/watch?v=Zm6xYKnJE_Y',
          content: `## ROI Tangível
Métricas de modelo (Acurácia, F1-Score) não importam para o CEO.
Traduza para métricas de negócio:
- Redução de tempo de atendimento.
- Aumento de conversão de vendas.
- Economia de custos operacionais.`,
          quiz: [{ question: 'Qual a métrica mais importante para a diretoria?', options: ['Perplexidade do modelo.', 'Impacto financeiro/operacional no negócio.', 'Número de neurônios.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9-l7',
          title: 'Lição 7: Talentos',
          videoUrl: 'https://www.youtube.com/watch?v=HXLqcKcVgks',
          content: `## O Time Híbrido
Você não precisa só de PhDs em Matemática.
Precisa de:
- **AI Engineers:** Conectam modelos via API.
- **Data Engineers:** Limpam os dados.
- **Domain Experts:** Entendem do negócio e avaliam se a IA está falando bobagem.`,
          quiz: [{ question: 'Além de técnicos, quem é essencial no time de IA?', options: ['Ninguém.', 'Especialistas de Domínio (negócio) para validar e guiar a IA.', 'Advogados apenas.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9-l8',
          title: 'Lição 8: Plano de Trabalho e Upskilling',
          videoUrl: 'https://www.youtube.com/watch?v=b9a2L-WkOpM', // Upskilling for Future of Work
          content: `## Fluência em IA
O maior gargalo não é tecnologia, é cultura.
Programas de Upskilling para ensinar a empresa inteira a usar IA Generativa no dia a dia.
Transformar "medo de substituição" em "superpoderes de produtividade".`,
          quiz: [{ question: 'Qual o objetivo do Upskilling?', options: ['Demitir pessoas.', 'Capacitar a força de trabalho atual para usar novas ferramentas.', 'Aumentar salários.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9-l9',
          title: 'Lição 9: EU AI Act e Regulação',
          videoUrl: 'https://www.youtube.com/watch?v=nFEGjW06cxo',
          content: `## O Efeito Bruxelas
O EU AI Act classifica IA por risco:
- **Risco Inaceitável:** Banido (Social Scoring).
- **Alto Risco:** Exige auditoria pesada (Recrutamento, Medicina).
- **Risco Limitado:** Transparência (Chatbots devem dizer que são IAs).
Mesmo no Brasil, empresas globais seguirão esse padrão.`,
          quiz: [{ question: 'O EU AI Act regula a IA baseado em quê?', options: ['Custo.', 'Nível de Risco da aplicação.', 'País de origem.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9-l10',
          title: 'Lição 10: Vida Algorítmica e Falhas',
          videoUrl: 'https://www.youtube.com/watch?v=hkAmnbzwqXY',
          content: `## Responsabilidade Civil
Quem paga se a IA errar?
Se um algoritmo nega crédito injustamente ou causa um acidente, a empresa é responsável.
Governança Algorítmica é a capacidade de auditar e explicar essas decisões em tribunal.`,
          quiz: [{ question: 'O que é Governança Algorítmica?', options: ['Governar robôs.', 'Processos para garantir responsabilidade, transparência e auditoria de decisões de IA.', 'Política.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm9-l11',
        title: 'Lição 11: Shadow AI',
        videoUrl: 'https://www.youtube.com/watch?v=Kx6M5XlZqOE', // Shadow AI Security Risks
        content: `## BYOAI (Bring Your Own AI)
Funcionários usando ChatGPT gratuito para resumir atas de reunião confidenciais.
O risco de vazamento de dados é enorme.
A solução não é bloquear, é oferecer uma versão corporativa segura (Enterprise) sancionada pela TI.`,
        quiz: [{ question: 'Como combater o Shadow AI?', options: ['Bloqueando a internet.', 'Oferecendo ferramentas de IA corporativas seguras e aprovadas.', 'Ignorando.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm9-l12',
        title: 'Lição 12: Corpo de Tecnologia Própria',
        videoUrl: 'https://www.youtube.com/watch?v=70XDqiDB_wE',
        content: `## Dependência vs Soberania
Construir (Build) ou Comprar (Buy)?
Se a IA é o core do seu negócio, não dependa 100% de uma API que pode mudar de preço ou regras amanhã (Risco de Plataforma). Tenha modelos open source internos como backup.`,
        quiz: [{ question: 'Qual o risco de depender 100% de APIs proprietárias?', options: ['Nenhum.', 'Risco de plataforma (preço, regras, descontinuidade).', 'Vírus.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm9-l13',
        title: 'Lição 13: Ética Digital como Vantagem Competitiva',
        videoUrl: 'https://www.youtube.com/watch?v=cf522e5e1eE', // Ethics in AI
        content: `## Trust Premium
Em um mundo de deepfakes e spam, ser uma empresa "Human First" e transparente sobre o uso de IA gera confiança.
A ética não é apenas compliance, é branding.`,
        quiz: [{ question: 'Como a ética em IA vira vantagem competitiva?', options: ['Não vira.', 'Gerando confiança e reputação de marca perante consumidores preocupados.', 'Reduzindo impostos.'], correctAnswerIndex: 1 }],
      },
    ],
};
