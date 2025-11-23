# ☕ Coffee Delivery

> Um e-commerce moderno e elegante para delivery de cafés especiais, desenvolvido como desafio do bootcamp Rocketseat no módulo "Aprofundando em Hooks".

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?logo=vite&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled%20Components-6.1.8-DB7093?logo=styled-components&logoColor=white)

## 📋 Sobre o Projeto

O **Coffee Delivery** é uma aplicação de e-commerce completa para venda de cafés especiais. A aplicação permite que os usuários naveguem por um catálogo de cafés, adicionem itens ao carrinho, preencham informações de entrega e finalizem o pedido de forma intuitiva e responsiva.

### 🎯 Objetivo do Desafio

Este projeto foi desenvolvido como parte do módulo "Aprofundando em Hooks" do bootcamp Ignite da Rocketseat, com foco em:

- Gerenciamento de estado complexo com `useReducer`
- Context API para compartilhamento de estado global
- Hooks customizados (`useCart`)
- Persistência de dados com `localStorage`
- Formulários com validação usando `react-hook-form` e `zod`
- Imutabilidade de estado com `immer`

## ✨ Funcionalidades

### 🏠 Página Inicial
- **Hero Section** com informações sobre o serviço
- **Catálogo de Cafés** com 14 variedades diferentes
- Cards interativos com tags, descrição e preço
- Controle de quantidade antes de adicionar ao carrinho
- Feedback visual ao adicionar item ao carrinho

### 🛒 Carrinho de Compras
- Visualização de todos os itens adicionados
- Incremento e decremento de quantidades
- Remoção de itens
- Cálculo automático de totais (itens + entrega)
- Formulário completo de endereço de entrega
- Seleção de método de pagamento (Crédito, Débito ou Dinheiro)
- Validação de formulário com mensagens de erro

### ✅ Página de Confirmação
- Confirmação visual do pedido
- Exibição de dados de entrega
- Informações de pagamento
- Previsão de entrega

### 💾 Persistência de Dados
- Estado do carrinho salvo no `localStorage`
- Dados persistem mesmo após fechar o navegador
- Histórico de pedidos mantido

## 🛠️ Tecnologias Utilizadas

### Core
- **React 18.2.0** - Biblioteca JavaScript para construção de interfaces
- **TypeScript 5.2.2** - Superset JavaScript com tipagem estática
- **Vite 5.2.0** - Build tool moderna e rápida

### Roteamento
- **React Router DOM 6.22.3** - Roteamento client-side

### Estilização
- **Styled Components 6.1.8** - CSS-in-JS com suporte a temas
- **Phosphor Icons** - Biblioteca de ícones moderna

### Gerenciamento de Estado
- **Context API** - Estado global da aplicação
- **useReducer** - Gerenciamento de estado complexo
- **Immer 10.0.4** - Trabalho com estado imutável de forma mais simples

### Formulários e Validação
- **React Hook Form 7.51.2** - Gerenciamento performático de formulários
- **Zod 3.22.4** - Validação de schemas TypeScript-first
- **@hookform/resolvers 3.3.4** - Integração entre React Hook Form e Zod

### Qualidade de Código
- **ESLint** - Linter configurado com padrões da Rocketseat
- **TypeScript ESLint** - Regras específicas para TypeScript

## 📁 Estrutura do Projeto

```
prova-do-modulo-coffee-delivery/
├── public/
│   ├── images/
│   │   ├── coffees/          # Imagens dos produtos
│   │   ├── delivery.svg
│   │   ├── hero.svg
│   │   └── hero-bg.svg
│   ├── logo.svg
│   └── short-logo.svg
├── src/
│   ├── @types/               # Definições de tipos TypeScript
│   ├── assets/
│   ├── components/           # Componentes reutilizáveis
│   │   ├── Card/            # Card de produto
│   │   ├── Form/            # Componentes de formulário
│   │   │   ├── QuantityInput/
│   │   │   ├── Radio/
│   │   │   └── TextInput/
│   │   └── Header/          # Cabeçalho com carrinho
│   ├── contexts/            # Context API
│   │   └── CartProvider.tsx
│   ├── hooks/               # Hooks customizados
│   │   └── useCart.tsx
│   ├── pages/               # Páginas da aplicação
│   │   ├── Cart/           # Página do carrinho
│   │   ├── Home/           # Página inicial
│   │   └── Sucess/         # Página de confirmação
│   ├── reducers/            # Reducers para useReducer
│   │   └── cart/
│   │       ├── actions.ts
│   │       └── reducer.ts
│   ├── styles/              # Estilos globais e temas
│   │   ├── global.ts
│   │   ├── mixins.ts
│   │   └── themes/
│   ├── App.tsx
│   └── main.tsx
├── data.json                 # Dados dos produtos
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js >= 20.11.1
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd prova-do-modulo-coffee-delivery
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse a aplicação no navegador:
```
http://localhost:5173
```

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Preview do build de produção
- `npm run lint` - Executa o linter

## 🎓 Conceitos Aprendidos

### Hooks Avançados
- **useReducer**: Gerenciamento de estado complexo com ações tipadas
- **useContext**: Consumo de contexto global
- **useEffect**: Efeitos colaterais e sincronização com localStorage
- **Custom Hooks**: Criação de hooks reutilizáveis (`useCart`)

### Padrões de Arquitetura
- **Reducer Pattern**: Organização de lógica de estado em actions e reducers
- **Context Pattern**: Compartilhamento de estado sem prop drilling
- **Provider Pattern**: Encapsulamento de lógica de contexto

### Boas Práticas
- **Imutabilidade**: Uso do Immer para trabalhar com estado imutável
- **Type Safety**: TypeScript em toda a aplicação
- **Validação de Formulários**: Schema validation com Zod
- **Persistência**: Salvamento de estado no localStorage

## 📸 Preview

### Página Inicial
- Hero section com informações do serviço
- Grid de produtos com cards interativos

### Carrinho
- Lista de itens selecionados
- Formulário de endereço completo
- Seleção de método de pagamento

### Confirmação
- Tela de sucesso com detalhes do pedido
- Informações de entrega e pagamento

## 🔗 Links Úteis

- [Figma - Design do Projeto](https://www.figma.com/file/M4Wg23NZh7OyLYl7tN5n4v/Coffee-Delivery-%E2%80%A2-Desafio-React-(Copy)?type=design&node-id=0-1&mode=design&t=KRqduiLXBNp2qTHC-0)
- [Notion - Especificação do Desafio](https://efficient-sloth-d85.notion.site/Desafio-02-Coffee-Delivery-30e42a21fdb44b09a85244fc2c3dbdf9)
- [Solução Oficial](https://github.com/rocketseat-education/ignite-challenge-solution-reactjs-coffee-delivery/tree/main)

## 📝 Licença

Este projeto foi desenvolvido como parte do bootcamp Ignite da Rocketseat. O código é livre para uso educacional.

## 👨‍💻 Autor

Desenvolvido como desafio do módulo "Aprofundando em Hooks" do bootcamp Ignite - Rocketseat.

---

Feito com ☕ e ❤️ durante o bootcamp Ignite
