# Portal CX

com **Feature-Slided Design**

## Construção

- [x] Setup inicial com Vite
- [x] Vitest
- [x] ESLint + Prettier
- [x] TailwindCSS
- [x] shadcn/ui
- [ ] Arquivos de infra
- [ ] Rotas
- [ ] Vue Query (TanStack Query para Vue)
- [ ] Pinia (store global reativa)
- [ ] Vue Router com middlewares
- [ ] Layout base (Authenticated + Public)
- [ ] Testes E2E com Playwright

## Feature-Sliced Design

Estrutura baseada em Feature-Sliced Design (https://feature-sliced.design/) adaptada para Vue 3.

A ideia é manter boundaries explícitas entre domínio, UI e infraestrutura.

- **app/** — Bootstrap da aplicação (framework-level)
- **pages/** — Entrypoints de rotas (sem lógica de domínio)
- **features/** — Casos de uso compostos reutilizáveis
- **widgets/** — Blocos visuais com coordenação de várias features/entities
- **entities/** — Regras de negócio e entidades
- **shared/** — UI pura, lib, utils e stores globais

### App

#### Middlewares

Setup

#### Routes

Vue

## Testes

- Unidade com **Vitest** em `*.spec.ts`
- E2E com **Playwright** (em `e2e/`)
