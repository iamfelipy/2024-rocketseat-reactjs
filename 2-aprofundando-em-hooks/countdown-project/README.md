# ⏱️ Ignite Timer

> Um aplicativo de timer Pomodoro moderno e funcional para gerenciamento de produtividade, desenvolvido como projeto do bootcamp Rocketseat no módulo "Aprofundando em Hooks".

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.1.4-646CFF?logo=vite&logoColor=white)
![Styled Components](https://img.shields.io/badge/Styled%20Components-6.1.8-DB7093?logo=styled-components&logoColor=white)

## 📋 Sobre o Projeto

O **Ignite Timer** é uma aplicação web que implementa a técnica Pomodoro para ajudar na gestão de tempo e produtividade. A aplicação permite criar ciclos de trabalho personalizados, rastrear o progresso em tempo real, manter um histórico completo de tarefas e persistir os dados no navegador.

### 🎯 Objetivo do Projeto

Este projeto foi desenvolvido como parte do módulo "Aprofundando em Hooks" do bootcamp Ignite da Rocketseat, com foco em:

- Gerenciamento de estado complexo com **useReducer** e **Context API**
- Trabalho com **reducers** e **actions** para estados imutáveis
- Uso da biblioteca **Immer** para simplificar mutações complexas
- Persistência de dados no **localStorage**
- Validação de formulários com **React Hook Form** e **Zod**
- Roteamento com **React Router DOM**
- Manipulação de datas com **date-fns**
- Hooks avançados como **useContext**, **useReducer**, **useEffect**

## ✨ Funcionalidades

### 🏠 Página Inicial (Home)
- **Formulário de Novo Ciclo**:
  - Campo para nome da tarefa (obrigatório)
  - Seletor de duração do ciclo (5 a 60 minutos)
  - Validação em tempo real com feedback visual
- **Countdown em Tempo Real**:
  - Display visual de contagem regressiva (MM:SS)
  - Atualização automática a cada segundo
  - Atualização do título da aba do navegador durante o ciclo
- **Controles de Ciclo**:
  - Botão "Começar" para iniciar um novo ciclo
  - Botão "Interromper" para parar o ciclo atual
  - Desabilitação automática do botão quando não há tarefa

### 📜 Página de Histórico
- **Tabela Completa de Ciclos**:
  - Lista de todos os ciclos criados
  - Informações detalhadas de cada ciclo:
    - Nome da tarefa
    - Duração configurada
    - Data/hora de início (formato relativo em português)
    - Status do ciclo:
      - ✅ **Concluído** (verde) - ciclo finalizado com sucesso
      - ⏸️ **Interrompido** (vermelho) - ciclo cancelado manualmente
      - 🔄 **Em andamento** (amarelo) - ciclo ativo no momento
- **Persistência de Dados**:
  - Todos os ciclos são salvos automaticamente no localStorage
  - Histórico preservado mesmo após fechar o navegador

### 🔄 Funcionalidades do Timer
- **Ciclos Automáticos**:
  - Detecção automática quando o countdown chega a zero
  - Marcação automática do ciclo como concluído
- **Precisão de Tempo**:
  - Cálculo preciso baseado na data de início
  - Sincronização automática se a aba ficar inativa
- **Feedback Visual**:
  - Mudança de título da aba durante ciclos ativos
  - Interface responsiva e intuitiva

## 🛠️ Tecnologias Utilizadas

### Core
- **React 18.2.0** - Biblioteca JavaScript para construção de interfaces
- **TypeScript 5.2.2** - Superset JavaScript com tipagem estática
- **Vite 5.1.4** - Build tool moderna e rápida

### Roteamento
- **React Router DOM 6.22.3** - Roteamento client-side com rotas aninhadas

### Estilização
- **Styled Components 6.1.8** - CSS-in-JS com suporte a temas
- **Phosphor React 1.4.1** - Biblioteca de ícones moderna e leve

### Gerenciamento de Estado
- **Context API** - Estado global da aplicação
- **useReducer** - Gerenciamento de estado complexo
- **Immer 10.0.4** - Biblioteca para trabalhar com estados imutáveis de forma mais simples
- **useState** - Estado local dos componentes
- **useEffect** - Efeitos colaterais e lógica de ciclo de vida
- **useContext** - Consumo de contexto

### Formulários e Validação
- **React Hook Form 7.51.0** - Gerenciamento performático de formulários
- **Zod 3.22.4** - Validação de schemas TypeScript-first
- **@hookform/resolvers 3.3.4** - Integração entre React Hook Form e Zod

### Utilitários
- **date-fns 3.4.0** - Formatação e manipulação de datas
  - `differenceInSeconds` - Cálculo de diferença em segundos
  - `formatDistanceToNow` - Formatação relativa de datas (ex: "há 2 horas")
- **localStorage** - Persistência de dados no navegador

### Qualidade de Código
- **ESLint** - Linter configurado com padrões da Rocketseat
- **TypeScript ESLint** - Regras específicas para TypeScript

## 📁 Estrutura do Projeto

```
countdown-project/
├── public/
│   └── vite.svg
├── src/
│   ├── @types/               # Definições de tipos TypeScript
│   │   └── styles.d.ts
│   ├── assets/               # Assets estáticos
│   │   └── logo-ignite.svg
│   ├── components/           # Componentes reutilizáveis
│   │   └── Header/          # Cabeçalho da aplicação
│   ├── contexts/            # Context API
│   │   └── CyclesContext.tsx  # Contexto de ciclos e estado global
│   ├── layouts/             # Layouts da aplicação
│   │   └── DefaultLayout/   # Layout padrão com Header
│   ├── pages/               # Páginas da aplicação
│   │   ├── Home/           # Página inicial
│   │   │   ├── components/
│   │   │   │   ├── Countdown/        # Componente de countdown
│   │   │   │   └── NewCycleForm/     # Formulário de novo ciclo
│   │   │   ├── index.tsx
│   │   │   └── styles.ts
│   │   └── History/        # Página de histórico
│   │       ├── index.tsx
│   │       └── styles.ts
│   ├── reducers/            # Reducers e actions
│   │   └── cycles/
│   │       ├── actions.ts   # Actions do reducer
│   │       └── reducer.ts   # Reducer de ciclos
│   ├── styles/              # Estilos globais e temas
│   │   ├── global.ts
│   │   └── themes/
│   │       └── default.ts
│   ├── App.tsx
│   ├── Router.tsx          # Configuração de rotas
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
cd countdown-project
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
- `npm run lint` - Executa o linter e corrige problemas automaticamente
- `npm run lint-vite` - Executa o linter com relatório detalhado

## 🌐 Deploy

### Vercel

Este projeto está configurado para deploy na Vercel:

1. Faça push do código para um repositório Git (GitHub, GitLab ou Bitbucket)
2. Acesse [vercel.com](https://vercel.com) e faça login
3. Clique em "Add New Project" e importe seu repositório
4. A Vercel detectará automaticamente as configurações do Vite
5. Clique em "Deploy"

A aplicação será automaticamente deployada e receberá uma URL pública.

**Nota:** Os dados salvos no localStorage são específicos de cada navegador e domínio, então cada deploy terá seu próprio armazenamento local.

## 🎓 Conceitos Aprendidos

### Gerenciamento de Estado Avançado
- **Context API**: Criação de contexto global para compartilhar estado entre componentes
- **useReducer**: Gerenciamento de estado complexo com padrão reducer/action
- **Immer**: Simplificação de mutações em estados imutáveis
- **Padrão Redux**: Implementação manual do padrão reducer/action sem Redux

### Hooks Avançados
- **useContext**: Consumo de contexto em componentes filhos
- **useReducer**: Estado complexo com lógica centralizada
- **useEffect**: Gerenciamento de efeitos colaterais (intervalos, localStorage)
- **useCallback**: Otimização de funções (quando necessário)

### Persistência de Dados
- **localStorage**: Armazenamento local no navegador
- **Serialização/Deserialização**: Conversão de objetos JavaScript para JSON
- **Inicialização com estado persistido**: Recuperação de estado ao carregar a aplicação

### Reducers e Actions
- **Estrutura de Actions**: Definição de tipos e payloads de ações
- **Switch Pattern**: Uso de switch/case para lidar com diferentes ações
- **Imutabilidade**: Criação de novos estados sem mutar o estado anterior
- **Immer produce**: Simplificação de lógica de imutabilidade

### Formulários
- **React Hook Form**: Gerenciamento performático de formulários
- **FormProvider**: Compartilhamento de métodos do formulário entre componentes
- **Validação com Zod**: Schemas de validação TypeScript-first
- **Tipagem Inferida**: Uso de `zod.infer` para gerar tipos automaticamente

### Manipulação de Datas
- **date-fns**: Biblioteca moderna para manipulação de datas
- **Formatação Relativa**: Exibição de datas como "há 2 horas"
- **Cálculo de Diferenças**: Uso de `differenceInSeconds` para precisão no timer

### Roteamento
- **React Router DOM**: Roteamento client-side
- **Rotas Aninhadas**: Estrutura de rotas com layouts compartilhados
- **Navegação Programática**: Mudança de rotas via código

### Boas Práticas
- **Type Safety**: TypeScript em toda a aplicação
- **Separation of Concerns**: Separação entre lógica de negócio, UI e estado
- **Code Organization**: Estrutura modular e organizada
- **Clean Code**: Código limpo e manutenível

## 📸 Funcionalidades em Destaque

### ⏱️ Timer Preciso
- Cálculo baseado em timestamps reais
- Sincronização automática quando a aba volta ao foco
- Atualização do título da aba em tempo real

### 💾 Persistência Inteligente
- Salvamento automático de todos os ciclos
- Recuperação de estado ao recarregar a página
- Versionamento do formato de dados para compatibilidade futura

### 🎨 Interface Intuitiva
- Design moderno e responsivo
- Feedback visual claro de ações
- Estados visuais para diferentes situações do ciclo

## 🔗 Links Úteis

- [Figma - Design do Projeto](https://www.figma.com/file/L68ayhW5g9EbJFwizUHuaJ/Ignite-Timer-(Community)?type=design&node-id=0-1&mode=design&t=QALCou2OXJHWkPSZ-0)
- [Técnica Pomodoro](https://pt.wikipedia.org/wiki/T%C3%A9cnica_pomodoro)
- [React Hooks Documentation](https://react.dev/reference/react)
- [Immer Documentation](https://immerjs.github.io/immer/)
- [React Hook Form Documentation](https://react-hook-form.com/)
- [Zod Documentation](https://zod.dev/)

## 📝 Licença

Este projeto foi desenvolvido como parte do bootcamp Ignite da Rocketseat. O código é livre para uso educacional.

## 👨‍💻 Autor

Desenvolvido como projeto do módulo "Aprofundando em Hooks" do bootcamp Ignite - Rocketseat.

---

Feito com 💻 e ⏱️ durante o bootcamp Ignite