
import { Module } from '../../types';
import { BrainCircuit } from '../../components/icons';

export const M0: Module = {
  id: 'm0',
  title: 'Módulo 0: Manual de Bordo',
  subtitle: 'Aprenda a navegar no sistema, usar as ferramentas de IA e dominar a gamificação.',
  icon: BrainCircuit,
  lessons: [
      {
        id: 'm0-l1',
        title: 'Lição 1: Bem-vindo à Era da IA',
        videoUrl: 'https://www.youtube.com/watch?v=_S7N9772cW4', // G4 Educação: Impacto da IA nos Negócios
        content: `## Seu Arckhé AI Academy
Bem-vindo ao **Arckhé AI Academy**. Esta não é apenas uma plataforma de cursos; é um Sistema Operacional de Aprendizado potencializado por Inteligência Artificial.

Nossa missão é simples: Traduzir a complexidade técnica da IA para a linguagem de negócios, permitindo que você tome decisões estratégicas, não apenas técnicas.

## O Que Você Vai Aprender
Nesta jornada, cobriremos desde os fundamentos (O que é IA?) até aplicações avançadas (Agentes Autônomos, Vendas com IA e Liderança).
Mas antes de começar o conteúdo técnico, precisamos garantir que você sabe pilotar esta nave.`,
        quiz: [
          { question: 'Qual o objetivo principal desta plataforma?', options: ['Ensinar programação Python.', 'Traduzir IA para linguagem de negócios e estratégia.', 'Vender computadores.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm0-l2',
        title: 'Lição 2: Navegação e Interface Cyberpunk',
        videoUrl: 'https://www.youtube.com/watch?v=ad79nYk2keg', // Interface Design & UX (Abstract Concept)
        content: `## O Dashboard
Seu painel principal é o centro de comando.
- **Botão Principal:** O botão brilhante no topo sempre te levará para a *próxima lição pendente*. Se você parou na metade, ele retoma de onde parou.
- **Indicador de Ofensiva (Fogo):** No topo, você verá um ícone de chama. Ele conta quantos dias consecutivos você estudou. Mantenha a chama acesa para ganhar multiplicadores de XP!
- **Barra de Progresso:** Acompanhe visualmente o quanto falta para sua certificação.

## Estrutura de Módulos
O curso é dividido em Módulos (Card Grandes). Dentro de cada módulo, há uma Timeline de lições.
Você precisa concluir as lições em ordem para desbloquear a próxima.`,
        quiz: [
          { question: 'O que o ícone de "Fogo" (Ofensiva) representa?', options: ['Temperatura da CPU.', 'Dias consecutivos de estudo (Streak).', 'Perigo.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm0-l3',
        title: 'Lição 3: Ferramentas de IA (Neural Link)',
        videoUrl: 'https://www.youtube.com/watch?v=G2fqAlgmoPo', // How LLMs Work (Visual)
        content: `## Seus Superpoderes
Dentro de cada aula, você encontrará uma barra de ferramentas no topo. Use-a:

1.  **EXPANDIR (Expand Content):** O conteúdo padrão é um resumo executivo. Clique em "EXPANDIR" para acionar a IA, que escreverá um artigo profundo e detalhado sobre o tema em tempo real.
2.  **OUVIR (Neural Audio):** Prefere áudio? Clique em "OUVIR". Uma IA transformará a aula em um podcast, com uma voz neural humanizada que atua como sua Coach. Você pode ajustar a velocidade (1x, 1.5x, 2x) sem distorcer a voz.
3.  **PDF (Backup Físico):** Baixe um PDF formatado profissionalmente com o conteúdo da aula para ler offline.

*Nota: Todas essas gerações ficam salvas no seu dispositivo para acesso rápido futuro.*`,
        quiz: [
            { question: 'O que o botão "EXPANDIR" faz?', options: ['Aumenta o tamanho da fonte.', 'Aciona a IA para gerar um artigo profundo sobre a aula em tempo real.', 'Sai da aula.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm0-l4',
        title: 'Lição 4: Tutor Inteligente e Quiz',
        videoUrl: 'https://www.youtube.com/watch?v=jEn_Lg3jJPU', // Sal Khan on AI Tutors
        content: `## Validação de Conhecimento
Ao final de cada leitura, você enfrentará um **Quiz de Validação**.
Você precisa acertar a questão para desbloquear a próxima aula. Se errar, revise o conteúdo e tente novamente.

## O Tutor IA (Botão Flutuante)
No canto inferior direito, há um ícone de Robô.
Este é seu Tutor Pessoal. Ele "leu" a aula que você está vendo. Se tiver qualquer dúvida específica, clique nele e pergunte. Ele responderá usando apenas o contexto da aula atual, garantindo precisão.`,
        quiz: [
            { question: 'O Tutor Inteligente (botão flutuante) serve para quê?', options: ['Contar piadas.', 'Tirar dúvidas específicas sobre o conteúdo da aula atual.', 'Fazer o quiz por você.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm0-l5',
        title: 'Lição 5: Gamificação e XP',
        videoUrl: 'https://www.youtube.com/watch?v=m2ChnL3Y0S0', // Gamification in Education
        content: `## Recompensas
Cada ação na plataforma gera **XP (Pontos de Experiência)**.
- **Ler aula:** +100 XP
- **Concluir Módulo:** +500 XP
- **Usar ferramentas IA:** +20 a +40 XP

## Medalhas (Badges)
Ao completar módulos específicos, você desbloqueia Medalhas Digitais (ex: "Engenheiro de Prompt", "Economista da IA").
Colecione todas para desbloquear o Certificado Final de "Arckhé AI Academy".`,
        quiz: [
            { question: 'Como você ganha a medalha final do curso?', options: ['Pagando.', 'Completando todos os módulos e colecionando as medalhas.', 'Apenas fazendo login.'], correctAnswerIndex: 1 }
        ],
      },
      {
        id: 'm0-l6',
        title: 'Lição 6: Próximos Passos',
        videoUrl: 'https://www.youtube.com/watch?v=reUZRyXxUs4', // Growth Mindset
        content: `## Compromisso
Você está prestes a iniciar o Módulo 1: Fundamentos de IA.
A jornada é sequencial e desenhada para construir conhecimento camada por camada.

**Dica de Ouro:** Tente manter sua Ofensiva (Streak). Estudar 15 minutos por dia é melhor do que 4 horas uma vez por mês. A consistência ativa multiplicadores de XP que farão você subir de nível mais rápido.

Boa sorte, Explorador.`,
        quiz: [
            { question: 'Qual a melhor estratégia de estudo recomendada?', options: ['Estudar tudo em um dia.', 'Consistência diária para manter a Ofensiva e fixar o aprendizado.', 'Ler apenas os títulos.'], correctAnswerIndex: 1 }
        ],
      },
  ],
};
