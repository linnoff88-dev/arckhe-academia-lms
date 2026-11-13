
import { Module } from '../../types';
import { Sparkles } from '../../components/icons';

export const M5_OPS: Module = {
    id: 'm5_ops',
    title: 'Módulo 5: Economia da Automação e IA',
    subtitle: 'ROI, CAPEX vs OPEX e a viabilidade financeira de projetos de eficiência.',
    icon: Sparkles,
    lessons: [
      {
          id: 'm5_ops-l1',
          title: 'Lição 1: Além da Redução de FTE',
          videoUrl: 'https://www.youtube.com/watch?v=3WBIrqbN5zA',
          content: `## O Erro Comum
Justificar automação apenas cortando cabeças (FTEs - Full Time Equivalents) é limitado.
O valor real vem de: Aumento de capacidade (fazer mais com o mesmo time), Redução de Erros (custo da não-qualidade) e Agilidade.`,
          quiz: [{ question: 'Qual a visão limitada de ROI em automação?', options: ['Aumentar qualidade.', 'Focar apenas na redução de custo de mão de obra (FTE).', 'Aumentar velocidade.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5_ops-l2',
          title: 'Lição 2: Custo da Não-Qualidade',
          videoUrl: 'https://www.youtube.com/watch?v=_NKQCzuZbKc',
          content: `## O Preço do Erro
Quanto custa um recall? Quanto custa parar a linha por falta de peça?
A IA preventiva evita esses custos gigantes.
Muitas vezes, evitar *uma* parada não planejada paga o projeto de IA inteiro.`,
          quiz: [{ question: 'Como a IA paga seu investimento em manutenção?', options: ['Vendendo sucata.', 'Evitando custos catastróficos de paradas não planejadas e falhas de qualidade.', 'Não paga.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5_ops-l3',
          title: 'Lição 3: CAPEX vs. OPEX em Tecnologia',
          videoUrl: 'https://www.youtube.com/watch?v=Q0rh6O35djI',
          content: `## Mudança de Modelo
Antigamente: Comprar servidor e licença perpétua (CAPEX - Investimento).
Agora: Pagar nuvem e SaaS por uso (OPEX - Despesa).
Isso facilita a aprovação financeira (começar pequeno) mas exige controle para não estourar o orçamento mensal.`,
          quiz: [{ question: 'Qual a vantagem do modelo OPEX (SaaS/Cloud)?', options: ['É de graça.', 'Baixa barreira de entrada e flexibilidade, sem grande investimento inicial.', 'É ativo fixo.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5_ops-l4',
          title: 'Lição 4: Economia de Escala com IA',
          videoUrl: 'https://www.youtube.com/watch?v=hAQSLARIkgc',
          content: `## Custo Marginal Decrescente
Um humano analisando contratos tem custo linear (mais contratos = mais humanos).
Uma IA analisando contratos tem custo marginal quase zero.
Isso permite analisar 100% dos documentos, não apenas uma amostra, mudando a economia da conformidade.`,
          quiz: [{ question: 'O que acontece com o custo de análise com IA?', options: ['Sobe linearmente.', 'O custo marginal de analisar itens adicionais tende a zero.', 'Fica fixo.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5_ops-l5',
          title: 'Lição 5: O Valor dos Dados (Data Asset)',
          videoUrl: 'https://www.youtube.com/watch?v=jAEDrm7X_HI',
          content: `## Ativo no Balanço?
Dados operacionais históricos e organizados valem dinheiro.
Eles são o pré-requisito para treinar modelos. Uma empresa com 10 anos de dados de sensores tem uma barreira de entrada competitiva contra uma startup que não tem histórico.`,
          quiz: [{ question: 'Por que dados históricos são um ativo econômico?', options: ['Ocupam espaço.', 'São insumo insubstituível para treinar modelos preditivos proprietários.', 'Para arquivo morto.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5_ops-l6',
          title: 'Lição 6: Custo de Implementação vs. Manutenção',
          videoUrl: 'https://www.youtube.com/watch?v=gagld9HrVXs',
          content: `## O Iceberg
O custo de *criar* o modelo de IA é a ponta do iceberg.
O custo de *manter* (MLOps, re-treino, monitoramento) é a base submersa.
Projetos falham porque orçam o desenvolvimento mas esquecem o custo operacional de manter a IA rodando.`,
          quiz: [{ question: 'O que é frequentemente subestimado em projetos de IA?', options: ['O custo do hardware.', 'O custo contínuo de manutenção, monitoramento e re-treino (MLOps).', 'O salário.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5_ops-l7',
          title: 'Lição 7: Build vs. Buy',
          videoUrl: 'https://www.youtube.com/watch?v=70XDqiDB_wE',
          content: `## Comprar ou Fazer?
- **Commodity:** Reconhecer texto em nota fiscal. Compre uma API pronta (Google/AWS). Mais barato e rápido.
- **Core:** Prever demanda do seu produto único. Construa internamente. É sua vantagem competitiva.`,
          quiz: [{ question: 'Quando construir uma IA interna (Build)?', options: ['Sempre.', 'Quando for uma vantagem competitiva core e não houver solução pronta adequada.', 'Nunca.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5_ops-l8',
          title: 'Lição 8: O Custo da Complexidade',
          videoUrl: 'https://www.youtube.com/watch?v=wsBf6Pd37Ho',
          content: `## Dívida Técnica
Adicionar IA aumenta a complexidade do sistema.
Se não for bem gerenciado, o custo de manter esse sistema complexo pode superar os ganhos de eficiência.
Simplicidade e arquitetura robusta são vitais para o ROI.`,
          quiz: [{ question: 'O que é Dívida Técnica em IA?', options: ['Dívida no banco.', 'Custo futuro de manutenção gerado por soluções rápidas e complexas sem arquitetura.', 'Pagar depois.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5_ops-l9',
          title: 'Lição 9: Monetização de Dados',
          videoUrl: 'https://www.youtube.com/watch?v=rNmRcU9A0O0',
          content: `## Nova Receita
Seus dados operacionais podem valer dinheiro para outros?
Ex: Uma empresa de logística vendendo dados agregados de trânsito e tempos de espera em portos para o mercado financeiro.
Transformar o centro de custo (Dados) em centro de lucro.`,
          quiz: [{ question: 'O que é monetização de dados externa?', options: ['Vender leads.', 'Criar produtos de dados ou insights para vender a terceiros.', 'Cobrar acesso.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm5_ops-l10',
          title: 'Lição 10: Eficiência de Estoque (Working Capital)',
          videoUrl: 'https://www.youtube.com/watch?v=1VOoYGr7-lk',
          content: `## Dinheiro na Prateleira
Reduzir o estoque em 10% sem afetar o serviço libera milhões em capital de giro (caixa).
A IA melhora a previsão, permitindo operar com estoques mais magros. O ROI aqui é financeiro direto no fluxo de caixa.`,
          quiz: [{ question: 'Como a IA libera capital de giro?', options: ['Imprimindo dinheiro.', 'Otimizando estoques para reduzir o capital imobilizado em mercadoria parada.', 'Vendendo ativos.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm5-ops-l11',
        title: 'Lição 11: Otimização de Energia como Receita',
        videoUrl: 'https://www.youtube.com/watch?v=hAQSLARIkgc',
        content: `## Vendendo Energia
Grandes consumidores industriais podem usar IA para prever picos e vender "não-consumo" (Demand Response) para a rede elétrica, ganhando créditos.
Transforma a gestão de energia em um trading ativo.`,
        quiz: [{ question: 'O que é Demand Response?', options: ['Responder e-mail.', 'Ajustar o consumo de energia em resposta a sinais da rede para ganhar incentivos financeiros.', 'Apagar a luz.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm5-ops-l12',
        title: 'Lição 12: Riscos Seguráveis e IA',
        videoUrl: 'https://www.youtube.com/watch?v=hkAmnbzwqXY',
        content: `## Prêmio de Seguro
Empresas com monitoramento preditivo de IA têm menos acidentes e falhas.
Isso pode ser usado para negociar prêmios de seguro industrial mais baixos, gerando uma economia direta recorrente.`,
        quiz: [{ question: 'Como a IA impacta o seguro industrial?', options: ['Aumenta o risco.', 'Pode reduzir prêmios ao comprovar menor risco operacional e monitoramento ativo.', 'Não impacta.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm5-ops-l13',
        title: 'Lição 13: O Futuro do Trabalho Operacional',
        videoUrl: 'https://www.youtube.com/watch?v=0chlwnUKoHA',
        content: `## Augmented Worker
O operador do futuro não desaparece, ele ganha superpoderes.
Óculos de RA, assistentes de voz e análises em tempo real.
O investimento migra de "máquinas melhores" para "ferramentas que tornam o humano melhor".`,
        quiz: [{ question: 'Qual o foco do investimento futuro?', options: ['Substituição total.', 'Augmentation (Aumento) da capacidade humana com tecnologia.', 'Voltar ao manual.'], correctAnswerIndex: 1 }],
      },
    ],
};
