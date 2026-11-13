
import { Module } from '../../types';
import { Bot } from '../../components/icons';

export const M6: Module = {
    id: 'm6',
    title: 'Módulo 6: Automação Inteligente',
    subtitle: 'RPA, IPA, Hiperautomação e a força de trabalho digital.',
    icon: Bot,
    lessons: [
      {
          id: 'm6-l1',
          title: 'Lição 1: RPA vs. IPA',
          videoUrl: 'https://www.youtube.com/watch?v=YevFxH3n02s',
          content: `## Mãos vs. Cérebro
- **RPA (Robotic Process Automation):** Robôs de software que imitam ações humanas simples (clicar, copiar, colar). Baseado em regras rígidas. São as "mãos digitais".
- **IPA (Intelligent Process Automation):** Adiciona IA ao RPA. Consegue ler documentos (OCR), entender linguagem (NLP) e tomar decisões. É o "cérebro digital".`,
          quiz: [{ question: 'Qual a principal limitação do RPA tradicional?', options: ['É muito rápido.', 'Só segue regras rígidas e não lida bem com dados não estruturados.', 'Não funciona em Windows.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6-l2',
          title: 'Lição 2: Hiperautomação',
          videoUrl: 'https://www.youtube.com/shorts/9mpAF5LFCkE',
          content: `## Estratégia de Escala
Hiperautomação não é uma tecnologia, é uma abordagem estratégica.
Envolve o uso orquestrado de múltiplas tecnologias (RPA, IA, Low-Code, Process Mining) para automatizar o máximo possível de processos de negócio de ponta a ponta.`,
          quiz: [{ question: 'O que define a Hiperautomação?', options: ['Um robô rápido.', 'A combinação orquestrada de várias tecnologias para automatizar processos completos.', 'Fazer tudo manual.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6-l3',
          title: 'Lição 3: Process Mining',
          videoUrl: 'https://www.youtube.com/watch?v=32yeeX2HkyU',
          content: `## O Raio-X da Empresa
Em vez de entrevistar pessoas para desenhar fluxogramas (que geralmente estão errados), o Process Mining lê os logs dos sistemas (ERP, CRM) para reconstruir o processo real.
Mostra gargalos, retrabalhos e desvios invisíveis a olho nu.`,
          quiz: [{ question: 'Como o Process Mining descobre processos?', options: ['Perguntando para o gerente.', 'Lendo logs digitais de sistemas para mapear o fluxo real.', 'Adivinhando.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6-l4',
          title: 'Lição 4: IDP (Intelligent Document Processing)',
          videoUrl: 'https://www.youtube.com/watch?v=w2-Y55tLwdk',
          content: `## Dados em Papel
Transformar documentos não estruturados (faturas, contratos, e-mails) em dados estruturados para sistemas.
O IDP moderno usa LLMs para entender o contexto, permitindo extrair dados mesmo se o layout do documento mudar (o que quebrava o OCR antigo).`,
          quiz: [{ question: 'Qual a vantagem do IDP com IA sobre o OCR antigo?', options: ['É mais colorido.', 'Entende contexto e layouts variáveis, não precisando de templates rígidos.', 'Digitaliza mais rápido.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6-l5',
          title: 'Lição 5: Human-in-the-Loop',
          videoUrl: 'https://www.youtube.com/watch?v=KO6kr7oOHXI',
          content: `## Confiança Híbrida
Para processos críticos, a automação total é arriscada.
O modelo Human-in-the-Loop encaminha exceções ou casos de baixa confiança da IA para um humano revisar.
Isso garante qualidade e gera dados para re-treinar a IA (melhoria contínua).`,
          quiz: [{ question: 'Quando usar Human-in-the-Loop?', options: ['Sempre.', 'Em processos críticos ou quando a confiança da IA é baixa.', 'Nunca.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6-l6',
          title: 'Lição 6: Centro de Excelência (CoE)',
          videoUrl: 'https://www.youtube.com/watch?v=YR8589mJ7mU',
          content: `## Evitando o Caos
Se cada departamento criar seus próprios robôs sem padrão, a empresa quebra.
O CoE é a equipe central que define governança, segurança, ferramentas e prioridades para a automação escalar de forma sustentável.`,
          quiz: [{ question: 'Para que serve um CoE de Automação?', options: ['Fazer festas.', 'Padronizar, governar e escalar a automação na empresa.', 'Consertar computadores.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6-l7',
          title: 'Lição 7: Citizen Development',
          videoUrl: 'https://www.youtube.com/playlist?list=PLBPfgZ8p2jTIMDYrkD0dWJccp95_hIB8E',
          content: `## Democratização
Permitir que usuários de negócio (não-TI) criem suas próprias automações simples usando ferramentas Low-Code/No-Code.
A TI foca em governança e sistemas complexos; o usuário resolve suas dores do dia a dia.`,
          quiz: [{ question: 'Quem é o Citizen Developer?', options: ['Um funcionário da prefeitura.', 'Um profissional de negócio que cria aplicações usando ferramentas No-Code.', 'Um hacker.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6-l8',
          title: 'Lição 8: ALOps de IA para Operações',
          videoUrl: 'https://www.youtube.com/watch?v=fCjnoPdNfgI',
          content: `## IA Monitorando IA
AIOps (Artificial Intelligence for IT Operations).
Usar IA para detectar falhas em servidores, prever quedas de sistema e automatizar a resposta a incidentes de TI antes que afetem o usuário.`,
          quiz: [{ question: 'O que o AIOps automatiza?', options: ['Vendas.', 'Operações e monitoramento de infraestrutura de TI.', 'RH.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6-l9',
          title: 'Lição 9: ROI Real da Automação',
          videoUrl: 'https://www.youtube.com/watch?v=3WBIrqbN5zA',
          content: `## Além do Custo
Muitos focam apenas em "redução de horas" (FTEs).
O ROI real inclui: redução de erros (qualidade), velocidade de resposta (experiência do cliente), conformidade (compliance) e escalabilidade sem contratar.`,
          quiz: [{ question: 'Qual benefício da automação é frequentemente ignorado?', options: ['Redução de custo.', 'Melhora na conformidade e redução de erros.', 'Velocidade.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6-l10',
          title: 'Lição 10: A Empresa Autônoma',
          videoUrl: 'https://www.youtube.com/watch?v=gqkWf2A1zyU',
          content: `## O Objetivo Final
Uma organização onde os processos operacionais rodam sozinhos, se auto-corrigem e se otimizam.
Humanos sobem para o nível estratégico e criativo, gerenciando a máquina em vez de serem a máquina.`,
          quiz: [{ question: 'Na empresa autônoma, qual o papel humano?', options: ['Operacional.', 'Estratégico e criativo.', 'Inexistente.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm6-l11',
        title: 'Lição 11: Test Automation com IA',
        videoUrl: 'https://www.youtube.com/watch?v=9313rb5p4l4',
        content: `## Self-Healing
Testes de software tradicionais quebram quando um botão muda de lugar.
Testes com IA "veem" a tela como um humano e se adaptam (Self-Healing) a pequenas mudanças, mantendo a esteira de DevOps fluida.`,
        quiz: [{ question: 'O que é "Self-Healing" em automação de testes?', options: ['Curar vírus.', 'Capacidade do teste se adaptar automaticamente a mudanças na interface.', 'Teste manual.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm6-l12',
        title: 'Lição 12: RPA em Supply Chain',
        videoUrl: 'https://www.youtube.com/watch?v=933jvEBm5hE',
        content: `## Logística Conectada
Automatizar o fluxo de pedidos, rastreamento e inventário.
Conectar sistemas legados de fornecedores diferentes que não possuem APIs, garantindo visibilidade em tempo real da cadeia.`,
        quiz: [{ question: 'Como o RPA ajuda na Supply Chain?', options: ['Dirigindo caminhões.', 'Integrando sistemas de fornecedores e automatizando fluxo de dados.', 'Empacotando.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm6-l13',
        title: 'Lição 13: Ética na Automação',
        videoUrl: 'https://www.youtube.com/watch?v=0chlwnUKoHA',
        content: `## Impacto Social
A automação desloca empregos.
As empresas têm a responsabilidade ética de investir em *Reskilling* (requalificação) para que os funcionários cujas tarefas foram automatizadas possam assumir novas funções de maior valor.`,
        quiz: [{ question: 'Qual a responsabilidade ética na automação?', options: ['Demitir rápido.', 'Investir em requalificação (Reskilling) da força de trabalho.', 'Parar de automatizar.'], correctAnswerIndex: 1 }],
      },
    ],
};
