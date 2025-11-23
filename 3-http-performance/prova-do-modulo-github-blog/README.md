# 📝 GitHub Blog

> Um blog pessoal moderno e elegante que utiliza a API do GitHub para exibir issues de um repositório como posts, desenvolvido como desafio do bootcamp Rocketseat no módulo "HTTP e Performance".

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?logo=vite&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled%20Components-6.1.8-DB7093?logo=styled-components&logoColor=white)

## 📋 Sobre o Projeto

O **GitHub Blog** é uma aplicação web que transforma issues de um repositório GitHub em um blog pessoal completo. A aplicação consome a API do GitHub para buscar dados do perfil do usuário, listar issues como posts e exibir o conteúdo completo de cada post com suporte a Markdown.

### 🎯 Objetivo do Desafio

Este projeto foi desenvolvido como parte do módulo "HTTP e Performance" do bootcamp Ignite da Rocketseat, com foco em:

- Consumo de APIs REST com Axios
- Gerenciamento de estado global com Context API
- Roteamento com React Router DOM
- Renderização de Markdown com `react-markdown`
- Validação de dados com Zod
- Formulários com `react-hook-form`
- Formatação de datas com `date-fns`
- Performance e otimização de requisições HTTP

## ✨ Funcionalidades

### 🏠 Página Inicial
- **Resumo do Perfil GitHub** com informações do usuário:
  - Avatar e nome
  - Bio e link para o perfil
  - Nome de usuário, empresa e número de seguidores
- **Barra de Busca** para filtrar posts por conteúdo
- **Lista de Posts** exibindo todas as issues do repositório:
  - Título e resumo de cada post
  - Data de criação formatada (ex: "há 2 dias")
  - Número de comentários
  - Link para visualização completa

### 📄 Página de Post
- **Visualização Completa** do conteúdo da issue:
  - Renderização de Markdown completo
  - Metadados do post (autor, data, comentários)
  - Navegação de volta para a lista
  - Link direto para a issue no GitHub

### 🔍 Busca e Filtragem
- Busca em tempo real nos posts
- Filtragem por palavras-chave no título e corpo
- Contador de publicações encontradas

## 🛠️ Tecnologias Utilizadas

### Core
- **React 18.2.0** - Biblioteca JavaScript para construção de interfaces
- **TypeScript 5.2.2** - Superset JavaScript com tipagem estática
- **Vite 5.2.0** - Build tool moderna e rápida

### Roteamento
- **React Router DOM 6.23.0** - Roteamento client-side

### Estilização
- **Styled Components 6.1.8** - CSS-in-JS com suporte a temas
- **Font Awesome 6.7.2** - Biblioteca de ícones completa

### HTTP e APIs
- **Axios 1.6.8** - Cliente HTTP para consumo da API do GitHub

### Gerenciamento de Estado
- **Context API** - Estado global da aplicação
- **useState** - Estado local dos componentes
- **useCallback** - Otimização de funções
- **useEffect** - Efeitos colaterais e requisições

### Formulários e Validação
- **React Hook Form 7.51.3** - Gerenciamento performático de formulários
- **Zod 3.22.4** - Validação de schemas TypeScript-first
- **@hookform/resolvers 3.3.4** - Integração entre React Hook Form e Zod

### Utilitários
- **React Markdown 9.0.3** - Renderização de conteúdo Markdown
- **date-fns 3.4.0** - Formatação e manipulação de datas
- **Zod** - Validação de dados da API

### Qualidade de Código
- **ESLint** - Linter configurado com padrões da Rocketseat
- **TypeScript ESLint** - Regras específicas para TypeScript

## 📁 Estrutura do Projeto

```
prova-do-modulo-github-blog/
├── public/
│   └── assets/
├── src/
│   ├── @types/               # Definições de tipos TypeScript
│   │   └── styled.d.ts
│   ├── assets/               # Assets estáticos
│   │   ├── cover.svg
│   │   └── logo.svg
│   ├── components/           # Componentes reutilizáveis
│   │   └── Header/          # Cabeçalho da aplicação
│   ├── contexts/            # Context API
│   │   └── PostContext.tsx  # Contexto de posts e perfil
│   ├── lib/                 # Bibliotecas e configurações
│   │   └── axios.ts         # Configuração do cliente HTTP
│   ├── pages/               # Páginas da aplicação
│   │   ├── Home/           # Página inicial
│   │   │   ├── components/
│   │   │   │   ├── PostList/        # Lista de posts
│   │   │   │   ├── ProfileSummary/  # Resumo do perfil
│   │   │   │   └── SearchBar/       # Barra de busca
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   └── Post/           # Página de post individual
│   │       ├── index.tsx
│   │       └── styles.ts
│   ├── styles/              # Estilos globais e temas
│   │   ├── global.ts
│   │   ├── mixins.ts
│   │   └── themes/
│   │       └── default.ts
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
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
cd prova-do-modulo-github-blog
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
- `npm run lint:fix` - Executa o linter e corrige problemas automaticamente

## 🌐 Deploy

### Vercel

Este projeto está configurado para deploy na Vercel:

1. Faça push do código para um repositório Git (GitHub, GitLab ou Bitbucket)
2. Acesse [vercel.com](https://vercel.com) e faça login
3. Clique em "Add New Project" e importe seu repositório
4. A Vercel detectará automaticamente as configurações do Vite
5. Clique em "Deploy"

A aplicação será automaticamente deployada e receberá uma URL pública.

**Nota:** Certifique-se de que a URL da API no arquivo `src/lib/axios.ts` esteja usando `https://api.github.com` (não `http://`).

## 🎓 Conceitos Aprendidos

### HTTP e APIs
- **Consumo de APIs REST**: Integração com a API do GitHub
- **Axios**: Configuração e uso de cliente HTTP
- **Tratamento de Erros**: Gerenciamento de erros em requisições
- **Otimização de Requisições**: Uso de `useCallback` para evitar requisições desnecessárias

### Gerenciamento de Estado
- **Context API**: Compartilhamento de estado global
- **Custom Context**: Criação de contexto para posts e perfil
- **Estado Assíncrono**: Gerenciamento de estado com dados da API

### Roteamento
- **React Router DOM**: Navegação entre páginas
- **Dynamic Routes**: Rotas dinâmicas com parâmetros
- **Programmatic Navigation**: Navegação programática

### Renderização de Conteúdo
- **React Markdown**: Renderização de conteúdo Markdown
- **Formatação de Datas**: Uso de `date-fns` para formatação relativa
- **Validação de Dados**: Validação de respostas da API com Zod

### Boas Práticas
- **Type Safety**: TypeScript em toda a aplicação
- **Schema Validation**: Validação de dados com Zod
- **Error Handling**: Tratamento adequado de erros
- **Code Organization**: Organização modular do código

## 📸 Preview

### Página Inicial
- Resumo do perfil GitHub com informações do usuário
- Barra de busca para filtrar posts
- Grid de posts com cards informativos

### Página de Post
- Visualização completa do conteúdo em Markdown
- Metadados do post (autor, data, comentários)
- Navegação intuitiva

## 🔗 Links Úteis

- [Figma - Design do Projeto](https://www.figma.com/file/claurf91O5XFMagf0QXCpM/GitHub-Blog-(Community)?type=design&node-id=0-1&mode=design&t=x9bTJsDlAa2NZZ9t-0)
- [Notion - Especificação do Desafio](https://efficient-sloth-d85.notion.site/Desafio-03-Github-Blog-13593953670346908462ddc648d42cf1)
- [Vídeo - Resposta do Desafio](https://www.youtube.com/watch?v=9wmSjF6ozjk&t=1s)
- [GitHub API Documentation](https://docs.github.com/en/rest)

## 📝 Licença

Este projeto foi desenvolvido como parte do bootcamp Ignite da Rocketseat. O código é livre para uso educacional.

## 👨‍💻 Autor

Desenvolvido como desafio do módulo "HTTP e Performance" do bootcamp Ignite - Rocketseat.

---

Feito com 💻 e ❤️ durante o bootcamp Ignite
