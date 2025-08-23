# 🍕 pizza.shop

Single Page Application (SPA) front-end para sistema de delivery de comida, inspirado em iFood/Uber Eats.

## Sumário

- [Deploy](#deploy)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Tratamento de Exceções](#tratamento-de-exceções)
- [Testes](#testes)
- [Como rodar o projeto](#como-rodar-o-projeto)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Rotas](#rotas)
- [Observações](#observações)
- [Padrões de Commit](#padrões-de-commit)

## Deploy
[🔗 Acesse o deploy aqui](https://pizza-shop-react-rocketseat-2025.vercel.app/)

## Funcionalidades

- Cadastro de novo restaurante
- Login como gerente de restaurante
- Gerenciamento dos pedidos do restaurante (listar, filtrar, visualizar detalhes, aprovar, cancelar, despachar, entregar)
- Atualização do perfil público do restaurante (nome e descrição)
- Listagem de métricas do restaurante (pedidos do dia, pedidos do mês, pedidos cancelados, faturamento do mês, gráfico de receitas diárias, produtos populares)
- Logout
- Alteração de tema (claro/escuro)

Todas as funcionalidades possuem testes E2E.

## Tecnologias Utilizadas

- **Frameworks e Linguagens:**
  - React: Biblioteca para construção de interfaces de usuário reativas e componentizadas.
  - TypeScript: Superset do JavaScript que adiciona tipagem estática ao código.
  
  **Build e Desenvolvimento**
  - Vite: Ferramenta de build e desenvolvimento rápido para projetos front-end, proporcionando hot reload eficiente, configuração simplificada e excelente performance durante o desenvolvimento e build de aplicações React com TypeScript.

- **Estilização e UI:**
  - TailwindCSS: utilitário css para estilização rápida e responsiva usando classes CSS.
  - Radix UI: Conjunto de componentes acessíveis e sem estilos para React, facilitando a construção de UIs consistentes.
  - Skeleton: Utilização de skeleton loading para melhorar a experiência do usuário durante o carregamento dos dados, exibindo placeholders animados enquanto o conteúdo real não está disponível.
  - Design Tokens: Utilização de tokens de design para garantir consistência visual (cores, espaçamentos, tipografia) via TailwindCSS e customizações, facilitando a manutenção e escalabilidade do design.

- **Gerenciamento de estado e dados:**
  - React Query: Biblioteca para gerenciamento de requisições, cache e sincronização de dados remotos no React.
  - Axios: Cliente HTTP baseado em Promises para realizar requisições a APIs de forma simples e flexível.

- **Roteamento:**
  - React Router DOM: Biblioteca para gerenciamento de rotas e navegação declarativa em aplicações React.

- **Validação:**
  - Zod: Biblioteca para validação e definição de schemas de dados com tipagem estática, facilitando a validação de formulários e dados recebidos da API.

- **Testes:**
  - Vitest: Framework de testes unitários rápido e moderno, inspirado no Jest, com suporte a TypeScript.
  - Playwright (para testes E2E): Ferramenta para testes end-to-end, permitindo simular interações reais do usuário em múltiplos navegadores.
  - Testing Library: Conjunto de utilitários para testar componentes de UI de forma acessível e orientada ao usuário.
  - MSW (Mock Service Worker): Biblioteca para mockar APIs e interceptar requisições HTTP durante o desenvolvimento e testes, sem necessidade de alterar o código da aplicação.

- **Utilitários:**
  - date-fns: Biblioteca moderna para manipulação, formatação e cálculo de datas em JavaScript.
  - clsx: Utilitário para montar strings de classes CSS de forma condicional e dinâmica.
  - class-variance-authority: Biblioteca para gerenciamento de variantes de classes CSS, facilitando a criação de componentes altamente customizáveis.

- **Gráficos:**
  - Recharts: Biblioteca para criação de gráficos e visualizações de dados em React, baseada em componentes reutilizáveis.

- **Qualidade de código:**
  - ESLint: Ferramenta para análise estática de código, identificando problemas e sugerindo boas práticas.
  - Prettier: Formatador de código automático, garantindo padronização e legibilidade em todo o projeto.

## Tratamento de Exceções

- O projeto implementa tratamento de exceções para requisições HTTP utilizando interceptadores do Axios. 
- Erros de autenticação (ex: token inválido ou expirado) redirecionam automaticamente o usuário para a tela de login.
- Outras exceções são tratadas e exibidas de forma amigável para o usuário, garantindo uma melhor experiência e segurança.

## Testes

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

## Como rodar o projeto

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/pizza-shop.git
   cd pizza-shop
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   ```bash
   cp .env.example .env.local
   ```
4. Para rodar com mocks ativados (modo de testes):
   ```bash
    npm run dev:test
   ```

5. Acesse: http://localhost:50789

> O projeto utiliza o MSW (Mock Service Worker) para simular as respostas da API quando está em modo de teste.

## Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run dev:test` | Inicia com mocks ativados |
| `npm run build` | Gera build de produção |
| `npm run preview` | Preview do build de produção |
| `npm run test` | Executa testes unitários |
| `npm run test:e2e` | Executa testes E2E |
| `npm run lint` | Executa ESLint |

## Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
├── pages/              # Páginas da aplicação
├── lib/                # Configurações e utilitários
├── api/           # Serviços de API
```

## Rotas

- `/` - Página inicial (login/registro)
- `/sign-up` - Página inicial (login/registro)
- `/sign-in` - Página inicial (login/registro)

## Observações

- Para desenvolvimento local, não é necessário rodar o back-end, pois as rotas são mockadas.



## Padrões de Commit

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Documentação
- `style:` Formatação de código
- `refactor:` Refatoração
- `test:` Testes
- `chore:` Configurações