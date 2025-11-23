# 💰 DT Money

> Uma aplicação moderna e elegante para controle financeiro pessoal, desenvolvida como desafio do bootcamp Rocketseat no módulo "HTTP e Performance". Gerencie suas receitas e despesas de forma simples e intuitiva.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?logo=vite&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled%20Components-6.1.8-DB7093?logo=styled-components&logoColor=white)

## 📋 Sobre o Projeto

O **DT Money** é uma aplicação web completa para gerenciamento financeiro pessoal. A aplicação permite que você cadastre, visualize e gerencie todas as suas transações financeiras (receitas e despesas) em um único lugar, com uma interface moderna e intuitiva.

### 🎯 Objetivo do Desafio

Este projeto foi desenvolvido como parte do módulo "HTTP e Performance" do bootcamp Ignite da Rocketseat, com foco em:

- Consumo de APIs REST com Axios
- Gerenciamento de estado global com Context API
- Otimização de performance com `use-context-selector`
- Validação de formulários com Zod e React Hook Form
- Componentes acessíveis com Radix UI
- Formatação de valores monetários e datas
- Busca e filtragem de transações

## ✨ Funcionalidades

### 📊 Dashboard Financeiro
- **Resumo Financeiro** com três cards informativos:
  - **Entradas**: Total de receitas cadastradas
  - **Saídas**: Total de despesas cadastradas
  - **Total**: Saldo final (entradas - saídas)
- **Visualização em Tempo Real**: Os valores são atualizados automaticamente conforme novas transações são adicionadas

### 💸 Gerenciamento de Transações
- **Cadastro de Transações** através de modal acessível:
  - Descrição da transação
  - Valor monetário
  - Categoria personalizada
  - Tipo: Entrada (receita) ou Saída (despesa)
- **Listagem Completa** de todas as transações:
  - Tabela organizada e responsiva
  - Formatação de valores em Real (R$)
  - Formatação de datas
  - Destaque visual para entradas (verde) e saídas (vermelho)

### 🔍 Busca e Filtragem
- **Busca em Tempo Real** nas transações
- Filtragem por descrição
- Atualização automática da lista conforme a busca

### 🎨 Interface Moderna
- Design responsivo e acessível
- Tema customizável com Styled Components
- Componentes acessíveis com Radix UI
- Ícones intuitivos com Phosphor Icons

## 🛠️ Tecnologias Utilizadas

### Core
- **React 18.2.0** - Biblioteca JavaScript para construção de interfaces
- **TypeScript 5.2.2** - Superset JavaScript com tipagem estática
- **Vite 5.2.0** - Build tool moderna e rápida

### Estilização
- **Styled Components 6.1.8** - CSS-in-JS com suporte a temas
- **Phosphor Icons 1.4.1** - Biblioteca de ícones moderna e elegante

### HTTP e APIs
- **Axios 1.6.8** - Cliente HTTP para consumo de APIs
- **JSON Server 0.17.4** - API REST mock para desenvolvimento

### Gerenciamento de Estado
- **Context API** - Estado global da aplicação
- **use-context-selector 1.4.4** - Otimização de re-renderizações com seletores
- **useState** - Estado local dos componentes
- **useCallback** - Otimização de funções
- **useEffect** - Efeitos colaterais e requisições

### Formulários e Validação
- **React Hook Form 7.51.3** - Gerenciamento performático de formulários
- **Zod 3.22.4** - Validação de schemas TypeScript-first
- **@hookform/resolvers 3.3.4** - Integração entre React Hook Form e Zod

### Componentes UI
- **@radix-ui/react-dialog 1.0.5** - Modal acessível e customizável
- **@radix-ui/react-radio-group 1.1.3** - Grupo de opções para tipo de transação

### Utilitários
- **Intl API** - Formatação de valores monetários e datas nativa do JavaScript

### Qualidade de Código
- **ESLint** - Linter configurado com padrões da Rocketseat
- **TypeScript ESLint** - Regras específicas para TypeScript

## 📁 Estrutura do Projeto

```
dt-money/
├── public/
│   └── vite.svg
├── src/
│   ├── @types/                    # Definições de tipos TypeScript
│   │   └── styles.d.ts           # Tipos para Styled Components
│   ├── assets/                    # Assets estáticos
│   │   └── logo.svg
│   ├── components/                # Componentes reutilizáveis
│   │   ├── Header/               # Cabeçalho da aplicação
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   ├── NewTransactionModal/  # Modal de nova transação
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   └── Summary/              # Cards de resumo financeiro
│   │       ├── index.tsx
│   │       └── styles.ts
│   ├── contexts/                  # Context API
│   │   └── TransactionsContext.tsx  # Contexto de transações
│   ├── hooks/                     # Custom hooks
│   │   └── useSummary.ts         # Hook para cálculos do resumo
│   ├── lib/                       # Bibliotecas e configurações
│   │   └── axios.ts              # Configuração do cliente HTTP
│   ├── pages/                     # Páginas da aplicação
│   │   └── Transactions/         # Página principal de transações
│   │       ├── components/
│   │       │   └── SearchForm/   # Formulário de busca
│   │       │       ├── index.tsx
│   │       │       └── styles.ts
│   │       ├── index.tsx
│   │       └── styles.ts
│   ├── styles/                    # Estilos globais e temas
│   │   ├── global.ts             # Estilos globais
│   │   └── themes/
│   │       └── default.ts        # Tema padrão
│   ├── utils/                     # Funções utilitárias
│   │   └── formatter.ts          # Formatadores de valores e datas
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── server.json                    # Dados mock para JSON Server
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js >= 18.x
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd dt-money
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor mock (em um terminal):
```bash
npm run dev:server
```

4. Execute o servidor de desenvolvimento (em outro terminal):
```bash
npm run dev
```

5. Acesse a aplicação no navegador:
```
http://localhost:5173
```

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento do front-end
- `npm run dev:server` - Inicia o JSON Server na porta 3333
- `npm run build` - Gera build de produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa o linter
- `npm run lint:fix` - Executa o linter e corrige problemas automaticamente

### ⚠️ Importante

Para que a aplicação funcione corretamente, é necessário executar **dois comandos simultaneamente**:

1. **Terminal 1**: `npm run dev:server` - Inicia o backend mock (JSON Server)
2. **Terminal 2**: `npm run dev` - Inicia o front-end (Vite)

O JSON Server roda na porta **3333** e o Vite na porta **5173** (padrão).

## 🌐 Deploy

### Vercel

Este projeto está configurado para deploy na Vercel:

1. Faça push do código para um repositório Git (GitHub, GitLab ou Bitbucket)
2. Acesse [vercel.com](https://vercel.com) e faça login
3. Clique em "Add New Project" e importe seu repositório
4. A Vercel detectará automaticamente as configurações do Vite
5. Configure as variáveis de ambiente se necessário
6. Clique em "Deploy"

**Nota:** Para produção, você precisará configurar uma API real. O JSON Server é apenas para desenvolvimento. Atualize a URL base no arquivo `src/lib/axios.ts` para apontar para sua API de produção.

## 🎓 Conceitos Aprendidos

### HTTP e APIs
- **Consumo de APIs REST**: Integração com JSON Server
- **Axios**: Configuração e uso de cliente HTTP
- **Tratamento de Erros**: Gerenciamento de erros em requisições
- **Otimização de Requisições**: Uso de `useCallback` para evitar requisições desnecessárias
- **Query Parameters**: Uso de parâmetros de query para busca e ordenação

### Gerenciamento de Estado
- **Context API**: Compartilhamento de estado global
- **use-context-selector**: Otimização de re-renderizações com seletores específicos
- **Estado Assíncrono**: Gerenciamento de estado com dados da API
- **Otimização de Performance**: Evitar re-renderizações desnecessárias

### Formulários
- **React Hook Form**: Gerenciamento performático de formulários
- **Zod**: Validação de schemas TypeScript-first
- **Validação em Tempo Real**: Validação de campos conforme o usuário digita
- **Controller**: Controle de componentes não controlados (Radix UI)

### Acessibilidade
- **Radix UI**: Componentes acessíveis e customizáveis
- **Dialog/Modal**: Implementação de modais acessíveis
- **Radio Group**: Grupo de opções acessível para tipo de transação

### Formatação
- **Intl API**: Formatação nativa de valores monetários e datas
- **Formatação de Moeda**: Exibição de valores em Real (R$)
- **Formatação de Datas**: Exibição de datas no formato brasileiro

### Boas Práticas
- **Type Safety**: TypeScript em toda a aplicação
- **Schema Validation**: Validação de dados com Zod
- **Error Handling**: Tratamento adequado de erros
- **Code Organization**: Organização modular do código
- **Performance**: Otimização de re-renderizações e requisições

## 📸 Preview

### Dashboard Principal
- Header com logo e botão para nova transação
- Cards de resumo (Entradas, Saídas, Total)
- Formulário de busca
- Tabela com todas as transações

### Modal de Nova Transação
- Formulário completo para cadastro
- Seleção de tipo (Entrada/Saída)
- Validação em tempo real
- Interface acessível e intuitiva

## 🔗 Links Úteis

- [Figma - Design do Projeto](https://www.figma.com/file/WuKcYveZEhNsmsoj0ZleCF/DT-Money-(Community)?type=design&node-id=42078-424&mode=design&t=cTPjsqmfitGQ4s3q-0)
- [JSON Server Documentation](https://github.com/typicode/json-server)
- [Radix UI Documentation](https://www.radix-ui.com/)
- [React Hook Form Documentation](https://react-hook-form.com/)
- [Zod Documentation](https://zod.dev/)

## 📝 Licença

Este projeto foi desenvolvido como parte do bootcamp Ignite da Rocketseat. O código é livre para uso educacional.

## 👨‍💻 Autor

Desenvolvido como desafio do módulo "HTTP e Performance" do bootcamp Ignite - Rocketseat.

---

Feito com 💻 e ❤️ durante o bootcamp Ignite
