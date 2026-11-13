
import { Module } from '../../types';
import { BrainCircuit } from '../../components/icons';

export const M1_OPS: Module = {
  id: 'm1_ops',
  title: 'Módulo 1: Fundamentos de IA em Operações',
  subtitle: 'Eficiência, redução de erro e a nova fronteira da produtividade industrial e administrativa.',
  icon: BrainCircuit,
  lessons: [
      {
        id: 'm1_ops-l1',
        title: 'Lição 1: O COO Aumentado',
        videoUrl: 'https://www.youtube.com/watch?v=3WBIrqbN5zA', // McKinsey on AI in Ops
        content: `## Mais com Menos
A IA em operações não é sobre "futurismo", é sobre margem.
O objetivo é fazer mais (output) com menos (input: tempo, energia, material, erro).
O gestor de operações aumentado usa IA para monitorar processos 24/7 e prever falhas antes que ocorram.`,
        quiz: [
          { question: 'Qual o foco principal da IA em operações?', options: ['Criar arte.', 'Aumentar a eficiência e margem reduzindo inputs e erros.', 'Vender mais.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_ops-l2',
        title: 'Lição 2: Evolução da Automação',
        videoUrl: 'https://www.youtube.com/watch?v=F7gfvkknijQ', // Evolution of Automation
        content: `## Do Mecânico ao Cognitivo
- **Era 1 (Mecânica):** Linha de montagem física.
- **Era 2 (Digital):** ERPs e planilhas.
- **Era 3 (RPA):** Robôs de software que clicam.
- **Era 4 (Cognitiva):** IA que lê, decide e orquestra processos complexos sem intervenção humana.`,
        quiz: [
          { question: 'O que define a Era Cognitiva da automação?', options: ['Robôs físicos.', 'Sistemas que tomam decisões e processam dados não estruturados (como leitura).', 'Planilhas.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_ops-l3',
        title: 'Lição 3: Tipos de IA na Indústria e Backoffice',
        videoUrl: 'https://www.youtube.com/watch?v=Uqr1mZgxjiY', // Industrial AI Use Cases
        content: `## As Ferramentas Certas
- **Visão Computacional:** Controle de qualidade visual (detectar defeitos).
- **Preditiva:** Prever demanda de estoque e falha de máquinas.
- **NLP:** Ler notas fiscais e contratos automaticamente.
- **Generativa:** Escrever relatórios de turno e procedimentos (SOPs).`,
        quiz: [
            { question: 'Qual IA é usada para controle de qualidade visual?', options: ['NLP.', 'Visão Computacional.', 'Chatbot.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_ops-l4',
        title: 'Lição 4: O Conceito de Dark Factory',
        videoUrl: 'https://www.youtube.com/watch?v=gqkWf2A1zyU', // Fully Automated Factory
        content: `## Operação no Escuro
Fábricas ou data centers totalmente automatizados que não precisam de luz, ar condicionado ou banheiros, pois não há humanos no loop operacional direto.
A IA gerencia o fluxo, e humanos atuam apenas na manutenção e estratégia.`,
        quiz: [
            { question: 'O que é uma Dark Factory?', options: ['Fábrica ilegal.', 'Uma operação 100% automatizada que pode funcionar sem luz/presença humana constante.', 'Fábrica de chocolate.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_ops-l5',
        title: 'Lição 5: Lean Six Sigma + IA',
        videoUrl: 'https://www.youtube.com/watch?v=_NKQCzuZbKc', // Quality Control AI
        content: `## Melhoria Contínua 2.0
O Six Sigma busca reduzir a variabilidade. A IA é a ferramenta suprema para isso.
Ela monitora 100% das transações (não apenas amostras) para detectar desvios minúsculos de padrão em tempo real, permitindo correção instantânea.`,
        quiz: [
            { question: 'Como a IA potencializa o Six Sigma?', options: ['Ignorando erros.', 'Monitorando 100% dos dados em tempo real para eliminar variabilidade.', 'Criando novos processos.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_ops-l6',
        title: 'Lição 6: Gêmeos Digitais (Intro)',
        videoUrl: 'https://www.youtube.com/watch?v=s8Lims4xYnE', // Digital Twin Explained
        content: `## O Espelho Virtual
Um modelo digital exato de um ativo físico (motor, fábrica, processo).
Permite testar "E se aumentarmos a velocidade da linha em 20%?" no simulador, sem risco de quebrar a máquina real.`,
        quiz: [
            { question: 'Para que serve um Gêmeo Digital?', options: ['Jogar videogame.', 'Simular cenários e prever comportamentos de ativos físicos sem risco.', 'Imprimir 3D.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_ops-l7',
        title: 'Lição 7: Process Mining (Intro)',
        videoUrl: 'https://www.youtube.com/watch?v=32yeeX2HkyU', // Process Mining Celonis
        content: `## A Verdade dos Dados
Não confie no fluxograma desenhado na parede.
O Process Mining lê os logs do sistema para desenhar o processo *real*, mostrando onde as ordens de compra travam e onde há retrabalho invisível.`,
        quiz: [
            { question: 'O que o Process Mining revela?', options: ['O futuro.', 'O fluxo real dos processos baseado em logs de sistema, identificando gargalos.', 'A senha do wi-fi.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_ops-l8',
        title: 'Lição 8: Manutenção Preditiva vs. Preventiva',
        videoUrl: 'https://www.youtube.com/watch?v=fCjnoPdNfgI', // Predictive Maintenance
        content: `## Só quando precisa
- **Preventiva:** Trocar óleo a cada 10.000km (mesmo se estiver bom).
- **Preditiva (IA):** Trocar óleo porque os sensores indicam degradação química real.
Economiza peças e evita paradas não planejadas.`,
        quiz: [
            { question: 'Qual a vantagem da manutenção preditiva com IA?', options: ['É mais barata que não fazer nada.', 'Realiza manutenção apenas quando necessário, baseado no estado real do ativo.', 'Troca peças todo dia.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_ops-l9',
        title: 'Lição 9: Aplicações em Logística',
        videoUrl: 'https://www.youtube.com/watch?v=933jvEBm5hE', // Logistics AI
        content: `## Otimização de Rota
Algoritmos genéticos que calculam a rota perfeita para 500 entregas considerando trânsito, janela de entrega e capacidade do caminhão.
Redução de combustível e tempo de entrega.`,
        quiz: [
            { question: 'Como a IA otimiza a logística?', options: ['Dirigindo rápido.', 'Calculando rotas ótimas considerando múltiplas variáveis complexas.', 'Comprando caminhões.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_ops-l10',
        title: 'Lição 10: Desafios de Implementação',
        videoUrl: 'https://www.youtube.com/watch?v=t3fEoJQyhH4', // OT Security/Challenges
        content: `## O Legado
O maior inimigo da IA em operações são os sistemas legados (máquinas antigas sem sensores, ERPs dos anos 90).
O desafio é a conectividade (IoT) e a extração de dados desses silos.`,
        quiz: [
            { question: 'Qual um grande desafio para IA em operações?', options: ['Falta de eletricidade.', 'Sistemas legados e dificuldade de extração de dados.', 'Falta de robôs.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_ops-l11',
        title: 'Lição 11: Segurança Operacional (HSE)',
        videoUrl: 'https://www.youtube.com/watch?v=tWYImjxHM3M', // Computer Vision Safety
        content: `## Olhos que Protegem
Câmeras com Visão Computacional que detectam se um funcionário não está usando EPI (capacete) ou se entrou em uma zona perigosa, parando a máquina automaticamente.
Salva vidas.`,
        quiz: [
            { question: 'Como a IA ajuda na segurança do trabalho?', options: ['Escrevendo normas.', 'Monitorando visualmente o uso de EPIs e zonas de risco em tempo real.', 'Dando multas.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_ops-l12',
        title: 'Lição 12: O Futuro da Cadeia de Suprimentos',
        videoUrl: 'https://www.youtube.com/watch?v=jaW1x4nOodM', // Autonomous Supply Chain
        content: `## Supply Chain Autônomo
Uma cadeia que se auto-regula. Se a previsão do tempo indica tempestade que atrasará o navio, o sistema automaticamente dispara pedidos para um fornecedor local alternativo para evitar ruptura.`,
        quiz: [
            { question: 'O que é um Supply Chain autônomo?', options: ['Cadeia sem gerente.', 'Um sistema que reage a imprevistos e se auto-ajusta para manter o fluxo.', 'Transporte por drone.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm1_ops-l13',
        title: 'Lição 13: Sustentabilidade e IA',
        videoUrl: 'https://www.youtube.com/watch?v=hAQSLARIkgc', // Sustainability and AI
        content: `## Green Ops
Otimização energética de data centers e fábricas.
A IA controla o ar condicionado e as máquinas para usar o mínimo de energia necessário, reduzindo a pegada de carbono e a conta de luz.`,
        quiz: [
            { question: 'Como a IA contribui para a sustentabilidade?', options: ['Plantando árvores.', 'Otimizando o consumo de energia e recursos em processos industriais.', 'Reciclando papel.'], correctAnswerIndex: 1 }
        ],
      },
  ],
};
