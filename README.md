# Portal CX

com **Feature-Sliced Design**

## Construção

- [x] Setup inicial com Vite
- [x] Vitest
- [x] ESLint + Prettier
- [x] TailwindCSS
- [x] shadcn/ui
- [ ] Arquivos de infra
- [x] Rotas
- [ ] Vue Query (TanStack Query para Vue)
- [x] Pinia (store global reativa)
- [x] Vue Router com middlewares
- [x] Layout base (Authenticated + Public)
- [ ] Testes E2E com Playwright

## Feature-Sliced Design

Estrutura baseada em [Feature-Sliced Design](https://feature-sliced.design/), adaptada para Vue 3.
A proposta é manter **limites claros entre infraestrutura, domínio e interface**, com foco em escalabilidade e manutenibilidade.

A ideia é manter boundaries explícitas entre domínio, UI e infraestrutura.

- **app/** — Bootstrap da aplicação (framework-level)
- **pages/** — Entrypoints de rotas (sem lógica de domínio)
- **features/** — Casos de uso compostos reutilizáveis
- **widgets/** — Blocos visuais com coordenação de várias features/entities
- **entities/** — Regras de negócio e entidades
- **shared/** — UI pura, lib, utils e stores globais

### App

### app/

Responsável pelo bootstrap da aplicação, configurações globais e infraestrutura de runtime.

- **middlewares/** — Funções de proteção de rotas, como `auth`
- **router/** — Definição de rotas públicas e privadas com layouts
- **layout/** — Layouts principais (ex: `AppLayout`, `AuthLayout`)
- **providers/** — Setup de plugins como `pinia`, `vue-query`, `i18n`, etc
- **styles/** — CSS global, Tailwind, tokens
- **config/** — Constantes, envs, locale padrão
- **i18n/** — Traduções, idiomas e fallback

#### Middlewares

Setup

#### Routes

Vue

## Testes

- Unidade com **Vitest** em `*.spec.ts`
- E2E com **Playwright** (em `e2e/`)
