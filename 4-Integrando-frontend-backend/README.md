# 🍕 pizza.shop Front-end

Aplicação front-end para o sistema de delivery de comida (inspirado em iFood/Uber Eats), desenvolvida em React e TypeScript.


## 🛠️ Como rodar o projeto

1. Clone o repositório.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o ambiente de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Para rodar com mocks ativados (modo de testes):
   ```bash
   npm run dev:test
   ```

> O projeto utiliza o MSW (Mock Service Worker) para simular as respostas da API quando está em modo de teste.

## 🎯 Funcionalidades

- Cadastro de novo restaurante
- Login como gerente de restaurante
- Gerenciamento dos pedidos do restaurante (listar, filtrar, visualizar detalhes, aprovar, cancelar, despachar, entregar)
- Atualização do perfil público do restaurante (nome e descrição)
- Listagem de métricas do restaurante (pedidos do dia, pedidos do mês, pedidos cancelados, faturamento do mês, gráfico de receitas diárias, produtos populares)
- Logout

Todas as funcionalidades possuem testes E2E.

## 📦 Tecnologias Utilizadas

- React
- TypeScript
- Vite
- MSW (Mock Service Worker)
- React Query
- TailwindCSS
- Zod
- Axios
- React Router DOM
- Recharts
- ESLint
- Vitest
- Playwright (para testes E2E)
- Testing Library
- Radix UI
- date-fns
- localforage
- clsx
- class-variance-authority

## 🧪 Testes

- Este projeto possui **dois tipos de testes automatizados**:
  - **Testes unitários e de interface (componentes):**
    - Localizados em `src/components/*.spec.tsx` e `src/pages/**/*.spec.tsx`
    - Utilizam **Vitest** e **Testing Library**
    - Para rodar:
      ```bash
      npm run test
      ```
  - **Testes E2E (End-to-End):**
    - Localizados na pasta `test/` na raiz, arquivos terminando com `.e2e-spec.ts`
    - Utilizam **Playwright**
    - Para rodar (após instalar os browsers):
      ```bash
      npx playwright install
      npx playwright test
      ```

## 📝 Observações

- Para desenvolvimento local, não é necessário rodar o back-end, pois as rotas são mockadas.
