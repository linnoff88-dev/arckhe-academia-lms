
import { Module } from '../../types';
import { Database } from '../../components/icons';

export const M7: Module = {
    id: 'm7',
    title: 'Módulo 7: Engenharia de Dados',
    subtitle: 'Lakehouse, Mesh, Governança e a cultura Data-Driven.',
    icon: Database,
    lessons: [
      {
          id: 'm7-l1',
          title: 'Lição 1: Hierarquia de necessidades de dados',
          videoUrl: 'https://www.youtube.com/watch?v=3P2hLdvP4ZA',
          content: `## A Pirâmide de Maslow dos Dados
Você não pode fazer IA (topo da pirâmide) se não tiver dados confiáveis (base).
1. **Coleta:** Ter os dados.
2. **Movimento/Armazenamento:** Pipelines confiáveis.
3. **Exploração/Transformação:** Limpeza.
4. **Agregação/BI:** Métricas.
5. **IA/ML:** O topo.
Pular etapas é a causa #1 de falha em projetos de IA.`,
          quiz: [{ question: 'O que é necessário antes de implementar IA avançada?', options: ['Computadores quânticos.', 'Uma base sólida de coleta e engenharia de dados.', 'Sorte.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7-l2',
          title: 'Lição 2: Data Lakehouse',
          videoUrl: 'https://www.youtube.com/watch?v=q33K4FWo0Lk',
          content: `## O Melhor dos Dois Mundos
- **Data Warehouse:** Dados estruturados, rápidos, caros, bons para BI.
- **Data Lake:** Dados brutos, baratos, flexíveis, bons para ML.
- **Lakehouse:** Uma arquitetura unificada. Dados baratos (Lake) com gestão e performance (Warehouse). Evita duplicação e silos.`,
          quiz: [{ question: 'O que o Lakehouse unifica?', options: ['Casa e Lago.', 'A flexibilidade do Data Lake com a gestão do Data Warehouse.', 'Excel e Word.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7-l3',
          title: 'Lição 3: Data Mesh',
          videoUrl: 'https://www.youtube.com/watch?v=rebHscmEEN4',
          content: `## Descentralização Organizacional
Em vez de um time central de dados (gargalo), cada domínio de negócio (Vendas, RH) cuida dos seus próprios dados.
Eles expõem esses dados como produtos para o resto da empresa. É uma mudança organizacional, não apenas tecnológica.`,
          quiz: [{ question: 'O Data Mesh propõe uma arquitetura:', options: ['Centralizada.', 'Descentralizada e orientada a domínios.', 'Monolítica.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7-l4',
          title: 'Lição 4: Data Products',
          videoUrl: 'https://www.youtube.com/watch?v=rNmRcU9A0O0',
          content: `## Dados com Dono
Tratar um dataset interno como se fosse um produto SaaS externo.
Ele precisa ter: Documentação, SLA (garantia de uptime), Qualidade monitorada e um "Dono do Produto".
Isso garante que quem *consome* o dado possa confiar nele.`,
          quiz: [{ question: 'O que caracteriza um "Data Product"?', options: ['Ser vendido.', 'Ter qualidade, documentação e SLA definidos como um produto.', 'Ser grande.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7-l5',
          title: 'Lição 5: Feature Stores',
          videoUrl: 'https://www.youtube.com/watch?v=3vrfdr5Fma0',
          content: `## Reuso em ML
Cientistas de dados perdem tempo recriando as mesmas variáveis ("Média de gastos 30 dias").
A Feature Store é um repositório centralizado dessas variáveis prontas, garantindo consistência entre o treinamento e a produção.`,
          quiz: [{ question: 'Qual o objetivo da Feature Store?', options: ['Vender features.', 'Centralizar e reutilizar variáveis para modelos de Machine Learning.', 'Guardar senhas.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7-l6',
          title: 'Lição 6: Governança de Dados',
          videoUrl: 'https://www.youtube.com/watch?v=t3fEoJQyhH4',
          content: `## Controle e Qualidade
Saber onde o dado está, quem pode acessar, de onde ele veio (linhagem) e se está correto.
Sem governança, o Data Lake vira um "Data Swamp" (Pântano de Dados) onde ninguém acha nada.`,
          quiz: [{ question: 'O que acontece sem Governança de Dados?', options: ['Liberdade total.', 'O Data Lake vira um Pântano de Dados inutilizável.', 'Mais velocidade.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7-l7',
          title: 'Lição 7: Privacidade (PII)',
          videoUrl: 'https://www.youtube.com/watch?v=l-BA-dXXCVA', // Data Privacy Engineering
          content: `## Dados Sensíveis
PII (Personally Identifiable Information).
Técnicas para detectar e anonimizar dados sensíveis (CPF, e-mail) automaticamente nos pipelines de dados, garantindo conformidade com LGPD/GDPR sem travar a análise.`,
          quiz: [{ question: 'Como lidar com PII em engenharia de dados?', options: ['Ignorar.', 'Detectar, classificar e anonimizar/proteger.', 'Publicar tudo.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7-l8',
          title: 'Lição 8: Modern Data Stack',
          videoUrl: 'https://www.youtube.com/watch?v=ueo698I7YEU', // Modern Data Stack Explained
          content: `## O Kit de Ferramentas
A transição de ferramentas "tudo em um" para um stack modular na nuvem.
- **Extração:** Fivetran/Airbyte.
- **Armazenamento:** Snowflake/BigQuery.
- **Transformação:** dbt.
- **Orquestração:** Airflow/Prefect.`,
          quiz: [{ question: 'Qual ferramenta é padrão para transformação no Modern Data Stack?', options: ['Excel.', 'dbt.', 'Notepad.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7-l9',
          title: 'Lição 9: Streaming (Kafka)',
          videoUrl: 'https://www.youtube.com/watch?v=3vrfdr5Fma0',
          content: `## Dados em Movimento
Processamento Batch (Lotes diários) vs Streaming (Tempo real).
Para detecção de fraude ou recomendação instantânea, esperar o "processamento da noite" não serve. Arquiteturas baseadas em eventos (Kafka) são a solução.`,
          quiz: [{ question: 'Quando usar Streaming em vez de Batch?', options: ['Sempre.', 'Quando a latência e a reação em tempo real são críticas.', 'Nunca.'], correctAnswerIndex: 1 }],
      },
      {
          id: 'm7-l10',
          title: 'Lição 10: Cultura de Dados e Literacia',
          videoUrl: 'https://www.youtube.com/watch?v=Opa7Zkq-3pA',
          content: `## O Fator Humano
Engenharia de dados perfeita não serve se a empresa não sabe fazer as perguntas certas.
Investir na capacitação do time de negócio para consumir os dados (Self-Service Analytics).`,
          quiz: [{ question: 'O que é Self-Service Analytics?', options: ['Buffet de comida.', 'Capacitar usuários de negócio a extrair seus próprios insights sem depender da TI.', 'TI fazendo tudo.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm7-l11',
        title: 'Lição 11: Knowledge Graphs',
        videoUrl: 'https://www.youtube.com/watch?v=3vrfdr5Fma0',
        content: `## Conexões Semânticas
Bancos de dados relacionais (SQL) são ruins para conexões complexas.
Knowledge Graphs modelam os dados como entidades e relações, permitindo descobertas como "Quem são os amigos dos amigos que compraram X?". Essencial para RAG avançado.`,
        quiz: [{ question: 'Knowledge Graphs são otimizados para:', options: ['Listas simples.', 'Entender relacionamentos complexos entre entidades.', 'Armazenar imagens.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm7-l12',
        title: 'Lição 12: FinOps',
        videoUrl: 'https://www.youtube.com/watch?v=Q0bbYCQLw6s',
        content: `## A Conta da Nuvem
A nuvem escala infinitamente, e a fatura também.
FinOps é a prática de trazer responsabilidade financeira para a engenharia.
Monitorar custos de queries, desligar recursos ociosos e otimizar armazenamento.`,
        quiz: [{ question: 'Qual o objetivo do FinOps?', options: ['Pagar boletos.', 'Otimizar e controlar os custos de nuvem e dados.', 'Contratar gente.'], correctAnswerIndex: 1 }],
      },
      {
        id: 'm7-l13',
        title: 'Lição 13: Data Clean Rooms',
        videoUrl: 'https://www.youtube.com/watch?v=CzIvofFYykY',
        content: `## Colaboração sem Vazamento
Como duas empresas (ex: Varejista e Anunciante) podem cruzar seus dados para ver sobreposição de clientes sem que uma entregue sua lista de clientes para a outra?
Data Clean Rooms permitem essa análise criptografada e segura.`,
        quiz: [{ question: 'Para que serve um Data Clean Room?', options: ['Limpar disco.', 'Colaboração de dados entre empresas preservando a privacidade.', 'Backup.'], correctAnswerIndex: 1 }],
      },
    ],
};
