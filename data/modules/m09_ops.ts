
import { Module } from '../../types';
import { FileText } from '../../components/icons';

export const M9_OPS: Module = {
    id: 'm9_ops',
    title: 'Módulo 9: Governança e Segurança Operacional',
    subtitle: 'Gerenciando riscos físicos e digitais na automação.',
    icon: FileText,
    lessons: [
      {
          id: 'm9_ops-l1',
          title: 'Lição 1: OT Security (Segurança Operacional)',
          videoUrl: 'https://www.youtube.com/watch?v=t3fEoJQyhH4',
          content: `## O Risco é Físico
Em TI, o risco é perder dados. Em OT (Operational Technology), o risco é uma máquina superaquecer, um braço robótico bater em alguém ou uma válvula abrir errado.
Segurança cibernética em OT foca primeiro em **Disponibilidade** e **Segurança Física**, depois em Confidencialidade.`,
          quiz: [{ question: 'Qual a prioridade número 1 em OT Security?', options: ['Proteger senhas.', 'Segurança física e disponibilidade da operação.', 'Criptografia.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9_ops-l2',
          title: 'Lição 2: ISO 27001 e IEC 62443',
          videoUrl: 'https://www.youtube.com/watch?v=nFEGjW06cxo',
          content: `## As Bíblias da Segurança
- **ISO 27001:** Gestão de Segurança da Informação (Geral).
- **IEC 62443:** Específica para sistemas de automação e controle industrial.
Seguir essas normas é a base para uma governança estruturada e auditável.`,
          quiz: [{ question: 'Para que serve a norma IEC 62443?', options: ['Qualidade do ar.', 'Padrão de segurança cibernética para sistemas de automação industrial.', 'Contabilidade.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9_ops-l3',
          title: 'Lição 3: Gestão de Acesso Físico e Lógico',
          videoUrl: 'https://www.youtube.com/watch?v=70XDqiDB_wE',
          content: `## Quem mexe na máquina?
Convergir crachás físicos e logins digitais.
Se o operador não bateu o ponto na entrada da fábrica, seu login na máquina não deve funcionar.
Rastreabilidade total de quem alterou qualquer parâmetro crítico.`,
          quiz: [{ question: 'O que é convergência de acesso físico e lógico?', options: ['Duas chaves.', 'Integrar o controle de acesso predial com o acesso aos sistemas digitais.', 'Trancar a porta.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9_ops-l4',
          title: 'Lição 4: Governança de Algoritmos',
          videoUrl: 'https://www.youtube.com/watch?v=hkAmnbzwqXY',
          content: `## Quem vigia a IA?
Se uma IA controla a mistura química, quem garante que ela não vai alucinar e criar um produto tóxico?
"Guardrails" (barreiras de segurança) hard-coded que impedem a IA de ultrapassar limites físicos seguros, não importa o que ela "decida".`,
          quiz: [{ question: 'O que são Guardrails em IA industrial?', options: ['Corrimão.', 'Limites de segurança rígidos (físicos ou lógicos) que a IA não pode ultrapassar.', 'Antivírus.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9_ops-l5',
          title: 'Lição 5: Plano de Resposta a Incidentes',
          videoUrl: 'https://www.youtube.com/watch?v=hD99Xd6utgQ',
          content: `## Quando der errado...
Não é "se", é "quando".
Ter playbooks claros: Se detectarmos um ataque na rede OT, desconectamos tudo? Paramos a produção? Quem decide?
Treinar a resposta (simulados) é tão importante quanto prevenir.`,
          quiz: [{ question: 'Qual o objetivo de um plano de resposta a incidentes?', options: ['Entrar em pânico.', 'Ter ações pré-definidas e treinadas para minimizar danos durante uma crise.', 'Chamar a polícia.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9_ops-l6',
          title: 'Lição 6: Shadow OT',
          videoUrl: 'https://www.youtube.com/watch?v=Kx6M5XlZqOE', // Shadow OT
          content: `## O Roteador Escondido
Engenheiros instalando roteadores Wi-Fi "piratas" para facilitar o acesso às máquinas, criando portas dos fundos para hackers.
Governança envolve inventário contínuo e detecção de dispositivos não autorizados na rede.`,
          quiz: [{ question: 'O que é Shadow OT?', options: ['Trabalhar no escuro.', 'Dispositivos ou conexões instalados na rede operacional sem o conhecimento/aprovação da segurança.', 'Lâmpada queimada.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9_ops-l7',
          title: 'Lição 7: Compliance Ambiental (ESG)',
          videoUrl: 'https://www.youtube.com/watch?v=l-BA-dXXCVA',
          content: `## Dados Verdes
Monitoramento automatizado de emissões e resíduos.
A governança de dados garante que os relatórios de sustentabilidade sejam baseados em dados reais de sensores, auditáveis e à prova de greenwashing.`,
          quiz: [{ question: 'Como a governança de dados apoia o ESG?', options: ['Imprimindo menos.', 'Garantindo a veracidade e auditabilidade dos dados de impacto ambiental.', 'Plantando árvores.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9_ops-l8',
          title: 'Lição 8: Gestão de Mudança (MOC)',
          videoUrl: 'https://www.youtube.com/watch?v=JQoDwj2kFFc',
          content: `## Alteração Controlada
Mudar uma linha de código no PLC pode parar a fábrica.
Processos rigorosos de MOC (Management of Change): Aprovação, Teste, Rollback e Documentação automática de qualquer alteração em sistemas críticos.`,
          quiz: [{ question: 'O que é MOC (Management of Change)?', options: ['Mudança de casa.', 'Processo formal para garantir que alterações em sistemas sejam seguras, testadas e documentadas.', 'Troca de chefe.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9_ops-l9',
          title: 'Lição 9: Ética na Vigilância',
          videoUrl: 'https://www.youtube.com/watch?v=cf522e5e1eE', // Ethics in Surveillance
          content: `## Câmeras e Privacidade
Usar visão computacional para segurança (EPI) é bom. Usar para medir quanto tempo o funcionário vai ao banheiro é antiético e gera passivo trabalhista.
Definir limites claros e anonimizar dados de performance individual.`,
          quiz: [{ question: 'Qual o limite ético da visão computacional na fábrica?', options: ['Nenhum.', 'Focar em segurança e processo, não em vigilância abusiva do indivíduo.', 'Gravar áudio.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm9_ops-l10',
          title: 'Lição 10: Backup e Recuperação de Desastres',
          videoUrl: 'https://www.youtube.com/watch?v=q33K4FWo0Lk',
          content: `## O Seguro de Vida
Backups de dados de escritório são comuns. Mas e o backup da programação dos robôs e PLCs?
Sistemas de versionamento (como Git para indústria) garantem que, se um controlador queimar, você tenha o código da última versão rodando para restaurar em minutos.`,
          quiz: [{ question: 'O que é crítico no backup industrial?', options: ['Salvar e-mails.', 'Ter backup atualizado das configurações e códigos de controle de máquinas (PLCs/Robôs).', 'Salvar fotos.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm9-ops-l11',
        title: 'Lição 11: Auditoria de Fornecedores Conectados',
        videoUrl: 'https://www.youtube.com/watch?v=HXLqcKcVgks',
        content: `## A Porta de Terceiros
Muitas máquinas têm acesso remoto para o fabricante dar suporte.
Isso é um vetor de ataque (caso Target).
Governança exige controlar, monitorar e gravar todo acesso remoto de terceiros à sua rede industrial.`,
        quiz: [{ question: 'Qual o risco de acessos remotos de fornecedores?', options: ['Eles cobrarem caro.', 'Serem usados como ponte para ataques cibernéticos à sua rede interna.', 'Gastarem internet.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm9-ops-l12',
        title: 'Lição 12: Qualidade de Dados para IA',
        videoUrl: 'https://www.youtube.com/watch?v=Opa7Zkq-3pA',
        content: `## Governança do Dado
Não adianta ter IA se o sensor está descalibrado.
Processos de governança que monitoram a saúde dos sensores e a integridade dos dados antes que eles alimentem os modelos de decisão.`,
        quiz: [{ question: 'O que a governança de dados garante para a IA?', options: ['Dados bonitos.', 'Que os dados de entrada sejam confiáveis, evitando decisões automatizadas erradas.', 'Mais velocidade.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm9-ops-l13',
        title: 'Lição 13: Cultura de Segurança',
        videoUrl: 'https://www.youtube.com/watch?v=N-i5kI5kzac', // Security Culture
        content: `## O Firewall Humano
A tecnologia não para engenharia social (pendrive achado no chão).
Treinamento contínuo dos operadores sobre riscos cibernéticos é a camada de defesa mais importante. Segurança é responsabilidade de quem aperta o botão.`,
        quiz: [{ question: 'Qual a camada de segurança mais importante?', options: ['Firewall.', 'As pessoas (Cultura e Conscientização).', 'Antivírus.'], correctAnswerIndex: 1 }],
      },
    ],
};
