
import { Module } from '../../types';
import { Wrench } from '../../components/icons';

export const M8_OPS: Module = {
    id: 'm8_ops',
    title: 'Módulo 8: Infraestrutura para Operações (Edge & Cloud)',
    subtitle: 'Hardware, redes e arquitetura para suportar IA no mundo físico.',
    icon: Wrench,
    lessons: [
      {
          id: 'm8_ops-l1',
          title: 'Lição 1: Edge Computing Industrial',
          videoUrl: 'https://www.youtube.com/watch?v=yCTXWus2QTI',
          content: `## Inteligência na Fonte
Computadores robustos (Industrial PCs) instalados ao lado da máquina.
Eles rodam os modelos de IA (ex: visão computacional) localmente para garantir latência zero e funcionamento mesmo se a internet cair.`,
          quiz: [{ question: 'Por que usar Edge na indústria?', options: ['Porque é moda.', 'Latência zero, segurança e funcionamento offline (resiliência).', 'É mais barato.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8_ops-l2',
          title: 'Lição 2: Redes 5G Privadas',
          videoUrl: 'https://www.youtube.com/watch?v=wIkBhzZ2oJI',
          content: `## Sem Fios, Sem Latência
Wi-Fi falha em ambientes com muito metal (interferência).
5G Privado oferece a estabilidade do cabo com a flexibilidade do wireless, permitindo robôs móveis (AGVs) e drones conectados em tempo real.`,
          quiz: [{ question: 'Qual a vantagem do 5G Privado em fábricas?', options: ['Navegar no Youtube.', 'Conectividade robusta, baixa latência e alta densidade de dispositivos em ambiente hostil.', 'É grátis.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8_ops-l3',
          title: 'Lição 3: Gateways IoT',
          videoUrl: 'https://www.youtube.com/watch?v=t3fEoJQyhH4',
          content: `## O Tradutor Universal
Hardware que conecta no PLC da máquina (via cabo serial/ethernet) e converte os dados para MQTT/HTTPS para enviar à nuvem.
É a ponte física entre o equipamento antigo e a inteligência moderna.`,
          quiz: [{ question: 'O que faz um Gateway IoT?', options: ['Abre o portão.', 'Conecta equipamentos físicos à rede, traduzindo protocolos.', 'Paga contas.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8_ops-l4',
          title: 'Lição 4: Cloud Híbrida',
          videoUrl: 'https://www.youtube.com/watch?v=-_KbDTz0Bus',
          content: `## O Melhor dos Dois Mundos
- **Edge/On-Premise:** Controle crítico, dados sensíveis, tempo real.
- **Cloud:** Treinamento de modelos pesados, armazenamento histórico infinito, dashboards globais.
A arquitetura vencedora usa os dois sincronizados.`,
          quiz: [{ question: 'O que é arquitetura de Nuvem Híbrida?', options: ['Nuvem de chuva.', 'Combinação de processamento local (Edge/On-prem) com nuvem pública.', 'Só nuvem.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8_ops-l5',
          title: 'Lição 5: Câmeras Inteligentes',
          videoUrl: 'https://www.youtube.com/watch?v=3HTpF3b1NAI',
          content: `## Sensores de Visão
Câmeras que já possuem processador de IA embutido.
Elas não enviam vídeo (pesado), enviam apenas o resultado: "Peça OK" ou "Peça Defeituosa". Reduz drasticamente o consumo de banda.`,
          quiz: [{ question: 'Como funcionam câmeras inteligentes?', options: ['Gravam tudo.', 'Processam a imagem no próprio dispositivo e enviam apenas os metadados/resultados.', 'Tiram fotos.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8_ops-l6',
          title: 'Lição 6: Cybersecurity em OT',
          videoUrl: 'https://www.youtube.com/watch?v=t3fEoJQyhH4',
          content: `## Protegendo o Chão de Fábrica
IT Security foca em dados. OT Security foca em física.
Firewalls industriais, segmentação de rede (DMZ) e monitoramento passivo para garantir que um ransomware não pare a linha de produção ou cause acidentes.`,
          quiz: [{ question: 'Qual o foco da segurança em OT?', options: ['Proteger senhas.', 'Garantir a disponibilidade e segurança física dos processos industriais.', 'Proteger e-mail.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8_ops-l7',
          title: 'Lição 7: Robótica Colaborativa (Cobots)',
          videoUrl: 'https://www.youtube.com/watch?v=gqkWf2A1zyU',
          content: `## Hardware Seguro
Diferente dos robôs antigos (enjaulados), Cobots têm sensores de força que permitem trabalhar ao lado de humanos.
A infraestrutura precisa suportar a reprogramação fácil e frequente desses robôs para tarefas variáveis.`,
          quiz: [{ question: 'O que diferencia um Cobot?', options: ['É pequeno.', 'Projetado para trabalhar de forma segura e colaborativa ao lado de humanos.', 'É barato.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8_ops-l8',
          title: 'Lição 8: Realidade Aumentada (Hardware)',
          videoUrl: 'https://www.youtube.com/watch?v=jaW1x4nOodM',
          content: `## Óculos e Tablets
Dispositivos para entregar informação ao operador "Hands-free".
Hololens, Google Glass ou tablets industriais que sobrepõem dados de IoT (temperatura, instruções) sobre a máquina real.`,
          quiz: [{ question: 'Como a Realidade Aumentada ajuda na operação?', options: ['Jogos.', 'Sobrepondo informações digitais úteis (instruções, dados) sobre o mundo físico.', 'Assistindo filme.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8_ops-l9',
          title: 'Lição 9: Servidores de Inferência',
          videoUrl: 'https://www.youtube.com/watch?v=bpk1SXmD_rs',
          content: `## GPUs na Fábrica
Para rodar modelos de Deep Learning complexos na borda, PCs comuns não bastam.
Uso de hardware acelerado (NVIDIA Jetson, TPU Edge) para garantir performance em tempo real com baixo consumo de energia.`,
          quiz: [{ question: 'O que é necessário para rodar Deep Learning na borda?', options: ['Mais RAM.', 'Hardware acelerador específico (GPUs/TPUs) de borda.', 'Internet rápida.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm8_ops-l10',
          title: 'Lição 10: Gestão de Dispositivos (MDM)',
          videoUrl: 'https://www.youtube.com/watch?v=l_KI8c370HA',
          content: `## Frota Conectada
Como atualizar o software de 1.000 sensores espalhados pela fábrica?
Sistemas de MDM (Mobile/Device Management) permitem atualização remota (OTA - Over the Air) e monitoramento de saúde da frota de hardware IoT.`,
          quiz: [{ question: 'Para que serve o MDM em IoT?', options: ['Rastrear celular.', 'Gerenciar, monitorar e atualizar remotamente uma frota de dispositivos.', 'Vender hardware.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm8-ops-l11',
        title: 'Lição 11: Redundância e Alta Disponibilidade',
        videoUrl: 'https://www.youtube.com/watch?v=fCjnoPdNfgI',
        content: `## Falhar não é Opção
Em operações críticas, a internet vai cair.
A infraestrutura de borda deve ter capacidade de "Store and Forward" (guardar dados e enviar quando voltar) e operar autonomamente (Local Survivability) sem conexão.`,
        quiz: [{ question: 'O que é Local Survivability?', options: ['Sobrevivência na selva.', 'Capacidade do sistema operar localmente mesmo se a conexão com a nuvem/central cair.', 'Backup em fita.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm8-ops-l12',
        title: 'Lição 12: Integração Vertical',
        videoUrl: 'https://www.youtube.com/watch?v=Uqr1mZgxjiY',
        content: `## A Pirâmide de Automação
Conectar as camadas:
Nível 0 (Sensores) -> Nível 1 (PLC) -> Nível 2 (SCADA) -> Nível 3 (MES) -> Nível 4 (ERP) -> Nível 5 (Cloud/AI).
A infraestrutura moderna busca achatar essa pirâmide, conectando sensores direto à nuvem/borda.`,
        quiz: [{ question: 'Qual a tendência na pirâmide de automação?', options: ['Ficar maior.', 'Achatar as camadas, conectando dados operacionais diretamente aos sistemas de análise.', 'Desconectar tudo.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm8-ops-l13',
        title: 'Lição 13: O Futuro do Hardware Industrial',
        videoUrl: 'https://www.youtube.com/watch?v=gQDRvxpyhrU',
        content: `## Hardware Definido por Software
Equipamentos genéricos que mudam de função via software.
O mesmo braço robótico pinta, solda ou monta, dependendo do código carregado. Flexibilidade total de linha.`,
        quiz: [{ question: 'O que é Hardware Definido por Software?', options: ['Hardware mole.', 'Equipamentos versáteis cuja função é determinada pelo software, permitindo reconfiguração rápida.', 'Computador lento.'], correctAnswerIndex: 1 }],
      },
    ],
};
