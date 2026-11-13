
import { Module } from '../../types';
import { Bot } from '../../components/icons';

export const M6_OPS: Module = {
    id: 'm6_ops',
    title: 'Módulo 6: Automação Operacional (RPA)',
    subtitle: 'Robôs de software no chão de fábrica e backoffice logístico.',
    icon: Bot,
    lessons: [
      {
          id: 'm6_ops-l1',
          title: 'Lição 1: RPA no Backoffice Industrial',
          videoUrl: 'https://www.youtube.com/watch?v=YevFxH3n02s',
          content: `## Eliminando o Trabalho Sujo
Mesmo em fábricas modernas, o escritório ainda imprime pedidos e digita no ERP.
RPA assume a entrada de pedidos de compra, cadastro de materiais e emissão de notas fiscais, liberando o time para planejamento.`,
          quiz: [{ question: 'Onde o RPA atua melhor na indústria?', options: ['Apertando parafusos.', 'Em tarefas repetitivas de backoffice (ERP, Notas, Cadastros).', 'No design.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6_ops-l2',
          title: 'Lição 2: Automação de Logística (TMS)',
          videoUrl: 'https://www.youtube.com/watch?v=933jvEBm5hE',
          content: `## Rastreamento Automático
Robôs que acessam os portais de 50 transportadoras a cada hora para atualizar o status de entrega no seu sistema.
Elimina a "cegueira logística" e permite avisar o cliente sobre atrasos proativamente.`,
          quiz: [{ question: 'Como o RPA ajuda no rastreamento de carga?', options: ['Ligando para o motorista.', 'Acessando portais de transportadoras automaticamente para atualizar status.', 'Usando GPS.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6_ops-l3',
          title: 'Lição 3: Gestão de Inventário Automática',
          videoUrl: 'https://www.youtube.com/watch?v=32yeeX2HkyU',
          content: `## Estoque Sincronizado
Quando o WMS (Warehouse) bipa a saída, o RPA atualiza o ERP e, se atingir o ponto de pedido, já cria a requisição de compra para o fornecedor.
Zero delay entre o físico e o digital.`,
          quiz: [{ question: 'O que é sincronização de inventário via RPA?', options: ['Contagem manual.', 'Atualização automática de sistemas e disparo de compras baseado em movimentação real.', 'Arrumar prateleira.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6_ops-l4',
          title: 'Lição 4: Integração Legado (Green Screen)',
          videoUrl: 'https://www.youtube.com/watch?v=w2-Y55tLwdk',
          content: `## A Ponte para o Passado
Muitas fábricas usam sistemas Mainframe (telas verdes) sem API.
O RPA é a única forma de automatizar isso, "lendo" a tela e digitando como se fosse um humano, integrando máquinas de 1990 com IA de 2024.`,
          quiz: [{ question: 'Como o RPA lida com sistemas legados sem API?', options: ['Não lida.', 'Simulando a interação humana na interface (lendo a tela e digitando).', 'Trocando o sistema.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6_ops-l5',
          title: 'Lição 5: Onboarding de Fornecedores',
          videoUrl: 'https://www.youtube.com/watch?v=KO6kr7oOHXI',
          content: `## Compliance Rápido
Cadastrar um novo fornecedor exige validar CNPJ, Sintegra, Certidões Negativas e Compliance.
Robôs fazem essa varredura em sites do governo em segundos, aprovando ou bloqueando o cadastro automaticamente.`,
          quiz: [{ question: 'O que o RPA valida no cadastro de fornecedores?', options: ['A foto.', 'Documentos legais e certidões em sites governamentais.', 'O preço.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6_ops-l6',
          title: 'Lição 6: Relatórios de Turno',
          videoUrl: 'https://www.youtube.com/watch?v=YR8589mJ7mU',
          content: `## Passagem de Bastão
Ao fim do turno, o supervisor gasta 1 hora compilando Excel.
A automação puxa dados do SCADA e ERP, gera o PDF do relatório de produção, destaca paradas e envia por e-mail para a gerência antes do supervisor trocar de roupa.`,
          quiz: [{ question: 'Qual o ganho na automação de relatórios de turno?', options: ['Economia de papel.', 'Liberação de tempo da supervisão e padronização da informação.', 'Mais reuniões.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6_ops-l7',
          title: 'Lição 7: Agendamento de Manutenção',
          videoUrl: 'https://www.youtube.com/watch?v=fCjnoPdNfgI',
          content: `## Ordem de Serviço (OS)
Quando o sensor de vibração alerta (IoT), o RPA abre a OS no sistema de manutenção (SAP PM), verifica se tem a peça no estoque e reserva a agenda do técnico.
Do alerta à ação sem burocracia.`,
          quiz: [{ question: 'Como o RPA integra IoT e Manutenção?', options: ['Ignorando o alerta.', 'Transformando o alerta do sensor em uma Ordem de Serviço acionável com recursos alocados.', 'Desligando a máquina.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6_ops-l8',
          title: 'Lição 8: Controle de Qualidade (Dados)',
          videoUrl: 'https://www.youtube.com/watch?v=_NKQCzuZbKc',
          content: `## COA (Certificate of Analysis)
Receber matérias-primas exige conferir o Certificado de Análise (PDF) contra a especificação técnica.
O RPA lê o PDF, compara os valores químicos e libera ou bloqueia o lote no sistema.`,
          quiz: [{ question: 'O que o RPA verifica no recebimento de materiais?', options: ['A cor da caixa.', 'Se os dados do Certificado de Análise batem com a especificação técnica.', 'O peso.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6_ops-l9',
          title: 'Lição 9: Faturamento Automático',
          videoUrl: 'https://www.youtube.com/watch?v=3WBIrqbN5zA',
          content: `## Caminhão na Porta
O caminhão não sai se a nota não for emitida.
A automação dispara o faturamento assim que a pesagem e o picking são confirmados, reduzindo o tempo de doca e filas de caminhão.`,
          quiz: [{ question: 'Como o faturamento automático ajuda na logística?', options: ['Paga menos imposto.', 'Reduz o tempo de espera do caminhão na doca.', 'Aumenta a fila.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm6_ops-l10',
          title: 'Lição 10: Gestão de Devoluções (RMA)',
          videoUrl: 'https://www.youtube.com/watch?v=gqkWf2A1zyU',
          content: `## Logística Reversa
Processar devoluções é caótico.
Robôs podem orquestrar: Autorização de devolução, geração de etiqueta de correio, atualização de estoque e estorno financeiro, mantendo o cliente informado.`,
          quiz: [{ question: 'O que a automação de RMA orquestra?', options: ['O lixo.', 'O fluxo físico e financeiro da devolução de mercadorias.', 'A produção.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm6-ops-l11',
        title: 'Lição 11: Conciliação de Fretes',
        videoUrl: 'https://www.youtube.com/watch?v=Q0bbYCQLw6s',
        content: `## Auditoria de Fatura
A transportadora cobrou certo?
O RPA cruza a tabela de frete negociada com a fatura recebida e os CTe's (Conhecimentos de Transporte) emitidos. Detecta cobrança indevida e contesta automaticamente.`,
        quiz: [{ question: 'O que é conciliação de fretes?', options: ['Pagar sem ver.', 'Conferir automaticamente se o valor cobrado pela transportadora bate com o contrato e o realizado.', 'Calcular rota.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm6-ops-l12',
        title: 'Lição 12: Monitoramento de Preço de Commodities',
        videoUrl: 'https://www.youtube.com/watch?v=jaW1x4nOodM',
        content: `## Compras Estratégicas
Robôs que monitoram sites de bolsas de commodities (soja, aço, petróleo) e moedas.
Quando o preço atinge um gatilho, alerta o comprador ou até lança uma ordem de compra pré-aprovada.`,
        quiz: [{ question: 'Como o RPA auxilia na compra de commodities?', options: ['Plantando.', 'Monitorando oscilações de mercado em tempo real para decidir o momento de compra.', 'Vendendo.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm6-ops-l13',
        title: 'Lição 13: Cultura de Automação Operacional',
        videoUrl: 'https://www.youtube.com/watch?v=EzTNFV-s6XU',
        content: `## O Operador Programador
Ensinar conceitos básicos de lógica para o time de operações.
Eles sabem onde o processo dói. Se eles souberem o que a ferramenta pode fazer, eles mesmos sugerem e desenham as automações.`,
        quiz: [{ question: 'Quem são os melhores para sugerir automações?', options: ['Consultores externos.', 'Os próprios operadores que executam o processo diariamente.', 'O TI.'], correctAnswerIndex: 1 }],
      },
    ],
};
