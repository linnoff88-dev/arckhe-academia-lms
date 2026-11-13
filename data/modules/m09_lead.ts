
import { Module } from '../../types';
import { FileText } from '../../components/icons';

export const M9_LEAD: Module = {
    id: 'm9_lead',
    title: 'Módulo 9: Governança e Ética na Gestão',
    subtitle: 'Liderando com responsabilidade na era dos algoritmos.',
    icon: FileText,
    lessons: [
      {
          id: 'm9_lead-l1',
          title: 'Lição 1: O Dilema da Caixa Preta',
          videoUrl: 'https://www.youtube.com/watch?v=hkAmnbzwqXY',
          content: `## Explicabilidade
Se a IA recomenda demitir alguém ou negar uma promoção, o líder deve aceitar?
A governança exige que decisões de alto impacto sobre pessoas sejam explicáveis.
Não aceite "o algoritmo disse". Exija saber os critérios.`,
          quiz: [{ question: 'Qual o princípio chave na governança de IA para pessoas?', options: ['Obediência cega.', 'Explicabilidade e transparência da decisão algorítmica.', 'Velocidade.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9_lead-l2',
          title: 'Lição 2: Viés Algorítmico em RH',
          videoUrl: 'https://www.youtube.com/watch?v=reUZRyXxUs4',
          content: `## O Passado Assombra
IAs treinadas em dados históricos de contratação (onde homens brancos dominavam) tendem a replicar esse padrão.
O líder deve auditar os algoritmos para garantir que eles não estejam automatizando o preconceito.`,
          quiz: [{ question: 'Como o viés surge na IA de RH?', options: ['Má sorte.', 'Através de dados históricos de treinamento que refletem preconceitos humanos passados.', 'Vírus.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9_lead-l3',
          title: 'Lição 3: Privacidade e Vigilância',
          videoUrl: 'https://www.youtube.com/watch?v=l-BA-dXXCVA',
          content: `## O Limite do Monitoramento
Temos tecnologia para saber cada tecla que o funcionário digita. Devemos usar?
A ética da liderança define a fronteira entre "análise de produtividade" e "vigilância abusiva". Confiança é a base.`,
          quiz: [{ question: 'Qual o risco do monitoramento excessivo?', options: ['Gastar luz.', 'Quebra de confiança e criação de um ambiente de vigilância tóxico.', 'Nada.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9_lead-l4',
          title: 'Lição 4: Responsabilidade Civil do Líder',
          videoUrl: 'https://www.youtube.com/watch?v=nFEGjW06cxo',
          content: `## O CPF na Reta
Leis como o EU AI Act responsabilizam a liderança pelo uso de IAs de alto risco (como em recrutamento).
Ignorar a conformidade da ferramenta que você contratou não é mais desculpa jurídica.`,
          quiz: [{ question: 'Quem é responsável legalmente pelo uso de IA de alto risco?', options: ['O estagiário.', 'A liderança da organização que implementou a tecnologia.', 'A IA.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9_lead-l5',
          title: 'Lição 5: Human-in-the-Loop em Gestão',
          videoUrl: 'https://www.youtube.com/watch?v=cf522e5e1eE',
          content: `## Decisão Final
Para decisões críticas de carreira (contratação, demissão, promoção), a IA deve ser apenas consultiva.
A regra de ouro: A IA fornece os dados, o humano toma a decisão e assume a responsabilidade moral.`,
          quiz: [{ question: 'O que é Human-in-the-Loop na gestão?', options: ['Um jogo.', 'Garantir que um humano tenha a palavra final em decisões críticas sobre pessoas.', 'Automação total.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9_lead-l6',
          title: 'Lição 6: Transparência com a Equipe',
          videoUrl: 'https://www.youtube.com/watch?v=N-i5kI5kzac',
          content: `## Jogo Aberto
Se você usa IA para avaliar performance, diga.
A falta de transparência gera paranoia ("O algoritmo vai me demitir?").
Comunique claramente: O que é medido? Como é usado? Quem tem acesso?`,
          quiz: [{ question: 'Como mitigar o medo da IA na equipe?', options: ['Mentindo.', 'Com transparência total sobre como a IA é usada e quais dados são coletados.', 'Surpresa.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9_lead-l7',
          title: 'Lição 7: Shadow AI na Liderança',
          videoUrl: 'https://www.youtube.com/watch?v=Kx6M5XlZqOE',
          content: `## O Risco Oculto
Gestores usando ferramentas gratuitas não homologadas para analisar dados de equipe.
Isso vaza dados confidenciais e cria silos de informação. A governança deve prover ferramentas seguras corporativas.`,
          quiz: [{ question: 'O que é Shadow AI na gestão?', options: ['IA ninja.', 'Uso não autorizado de ferramentas de IA por gestores, gerando risco de segurança.', 'IA desligada.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9_lead-l8',
          title: 'Lição 8: Governança de Prompts',
          videoUrl: 'https://www.youtube.com/watch?v=eC6Hd1hUPtU',
          content: `## O Que Você Pergunta?
Não coloque "Lista de salários da equipe" no ChatGPT público.
Treinar a liderança sobre o que pode e o que não pode ser enviado para a IA é a primeira linha de defesa cibernética.`,
          quiz: [{ question: 'Qual a regra básica de segurança em prompts?', options: ['Ser educado.', 'Nunca inserir dados confidenciais (PII, salários, segredos) em IAs públicas.', 'Escrever em inglês.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9_lead-l9',
          title: 'Lição 9: Diversidade Cognitiva',
          videoUrl: 'https://www.youtube.com/watch?v=hD99Xd6utgQ',
          content: `## Contra a Padronização
Se usarmos a mesma IA para tomar todas as decisões, corremos o risco de homogeneizar o pensamento.
A governança deve garantir que a criatividade e a divergência humana continuem sendo valorizadas.`,
          quiz: [{ question: 'Qual o risco cultural da IA excessiva?', options: ['Ficar inteligente.', 'Homogeneização do pensamento e redução da diversidade cognitiva.', 'Ficar rico.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9_lead-l10',
          title: 'Lição 10: Auditoria de Algoritmos',
          videoUrl: 'https://www.youtube.com/watch?v=t3fEoJQyhH4',
          content: `## Check-up Regular
Assim como auditamos as finanças, devemos auditar nossos algoritmos de gestão.
Eles ainda estão prevendo corretamente? O viés aumentou?
Processos anuais de revisão técnica e ética dos modelos em uso.`,
          quiz: [{ question: 'Por que auditar algoritmos de gestão?', options: ['Burocracia.', 'Para garantir que continuam precisos, justos e livres de viés ao longo do tempo.', 'Para gastar dinheiro.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm9-lead-l11',
        title: 'Lição 11: Compliance Trabalhista Digital',
        videoUrl: 'https://www.youtube.com/watch?v=l-BA-dXXCVA',
        content: `## A Lei e o Código
Garantir que a automação não viole leis trabalhistas (ex: disparar mensagens de trabalho fora do horário, violando o direito à desconexão).
Configurar os bots para respeitar a jornada de trabalho.`,
        quiz: [{ question: 'Como a IA deve respeitar a lei trabalhista?', options: ['Ignorando horários.', 'Sendo configurada para respeitar jornadas, intervalos e o direito à desconexão.', 'Trabalhando 24h.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm9-lead-l12',
        title: 'Lição 12: Propriedade Intelectual da Equipe',
        videoUrl: 'https://www.youtube.com/watch?v=g8Gwp3rk1oI',
        content: `## Quem é o Autor?
Se um funcionário usa IA para criar uma estratégia, de quem é a autoria?
Definir políticas claras sobre o uso de IA na criação de propriedade intelectual da empresa.`,
        quiz: [{ question: 'O que a política de PI deve cobrir?', options: ['Nada.', 'A autoria e uso de ferramentas de IA na criação de ativos intelectuais da empresa.', 'Cores do logo.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm9-lead-l13',
        title: 'Lição 13: Cultura de Confiança',
        videoUrl: 'https://www.youtube.com/watch?v=Opa7Zkq-3pA',
        content: `## O Ativo Final
Em um mundo de deepfakes e automação, a confiança humana é o ativo mais valioso.
A governança ética de IA não é uma trava, é um acelerador de confiança entre líderes e liderados.`,
        quiz: [{ question: 'Qual o resultado final da boa governança?', options: ['Lentidão.', 'Aumento da confiança (Trust) na relação entre empresa e colaboradores.', 'Medo.'], correctAnswerIndex: 1 }],
      },
    ],
};
