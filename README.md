# Arckhé AI Academy — LMS

Plataforma de cursos de IA aplicada da Arckhé AI: 17 módulos × 3 trilhas (Lead, Ops e Sales), gamificação, certificados, quizzes e tutor de IA.

**URL:** https://linnoff88-dev.github.io/arckhe-academia-lms/

## Recursos

- Trilhas por perfil (Lead / Ops / Sales)
- Gamificação: XP, níveis, conquistas
- Certificado final (PDF)
- Quizzes por módulo
- Hub social e perfil do aluno
- Painel administrativo

## Rodando localmente

```
npm install
npm run dev
```

## Chaves de API

O Tutor IA, o Gerador de Casos de Negócio e o áudio das lições usam a variável `API_KEY` (modelos generativos). O build estático do GitHub Pages roda **sem chave** — essas features exibem uma mensagem indicando que estão reservadas aos planos pagos. Para rodar com IA local:

```
API_KEY=sua-chave npm run build
```

Nenhum segredo é commitado (`.env` no `.gitignore`).

## Proveniência

Estrutura e módulos derivados do app "IA sem Jargões / Acelerador de Negócios" (Google AI Studio, este usuário) — rebranding Arckhé AI.
