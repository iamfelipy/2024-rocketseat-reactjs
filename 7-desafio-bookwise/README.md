# BookWise - Plataforma de Recomendações de Livros

Uma plataforma onde leitores podem avaliar e ver avaliações de outros leitores sobre os mais diversos livros.

## 🎨 Design

- **Figma**: https://www.figma.com/design/jGq0R1FGwVc7XdQAsvJ0iG/BookWise--%E2%80%A2-Desafio-React--Copy-?node-id=0-1&p=f&t=5y5JubnuABnPXVhh-0

## 📋 Desafio

- **Descrição**: https://efficient-sloth-d85.notion.site/Desafio-06-Criando-uma-aplica-o-Fullstack-d85bc26f34754d0590b6116a35c9de23

## 🚀 Como executar o projeto

### Pré-requisitos

- Node.js 18+
- PostgreSQL (ou Docker para rodar o container)
- npm 

### Opção 1: Usando Docker (Recomendado)

#### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd 7-desafio-bookwise
```

#### 2. Inicie o container do PostgreSQL

```bash
# Inicia o container do PostgreSQL
docker-compose up -d

# Verifica se o container está rodando
docker-compose ps
```

#### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
DATABASE_URL="postgresql://postgres:docker@localhost:5432/desafio_bookwise"
DATABASE_DIRECT_URL="postgresql://postgres:docker@localhost:5432/desafio_bookwise"
NEXTAUTH_SECRET="sua-chave-secreta-aqui"
NEXTAUTH_URL="http://localhost:3000"
```

#### 4. Instale as dependências

```bash
npm install
```

#### 5. Configure o banco de dados

```bash
# Gera e aplica as migrations
npx prisma migrate dev --name init

# Popula o banco com dados iniciais
npx prisma db seed
```

#### 6. Execute o projeto

```bash
npm run dev
```

O projeto estará disponível em `http://localhost:3000`

### Opção 2: PostgreSQL local

Se você preferir usar um PostgreSQL instalado localmente, configure as variáveis de ambiente com suas credenciais:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/bookwise"
DATABASE_DIRECT_URL="postgresql://usuario:senha@localhost:5432/bookwise"
NEXTAUTH_SECRET="sua-chave-secreta-aqui"
NEXTAUTH_URL="http://localhost:3000"
```

## 🐳 Comandos Docker úteis

```bash
# Iniciar container
docker-compose up -d

# Parar container
docker-compose down

# Ver logs do container
docker-compose logs postgres

# Parar e remover volumes (cuidado: apaga todos os dados)
docker-compose down -v

# Reconstruir container
docker-compose up -d --build

# Verificar status dos containers
docker-compose ps
```

## 📦 Comandos úteis

### Banco de dados

```bash
# Gerar nova migration
npx prisma migrate dev --name nome-da-migration

# Aplicar migrations em produção
npx prisma migrate deploy

# Resetar banco (cuidado: apaga todos os dados)
npx prisma migrate reset

# Visualizar dados no Prisma Studio
npx prisma studio

# Gerar cliente Prisma
npx prisma generate
```

### Seed

```bash
# Executar seed
npx prisma db seed
```

### Desenvolvimento

```bash
# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Executar build de produção
npm start

# Linter
npm run lint
```

## 🛠️ Tecnologias

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Stitches
- **Banco de dados**: PostgreSQL
- **ORM**: Prisma
- **Autenticação**: NextAuth.js
- **Estado**: React Query (TanStack Query)
- **Formulários**: React Hook Form + Zod

## 📁 Estrutura do projeto

```
src/
├── components/     # Componentes React
├── pages/         # Páginas Next.js
├── styles/        # Estilos globais
├── lib/           # Configurações (axios, react-query, etc.)
└── layouts/       # Layouts da aplicação

prisma/
├── schema.prisma  # Schema do banco
├── seed.ts        # Dados iniciais
└── constants/     # Dados para seed
```

## 🔧 Configuração do Prisma

O projeto está configurado para PostgreSQL. Se você precisar migrar de SQLite para PostgreSQL:

1. Apague a pasta `prisma/migrations`
2. Execute `npx prisma migrate dev --name init`
3. Execute `npx prisma db seed`

## 📝 Notas importantes

- O projeto usa ES Modules, por isso os imports nos arquivos de seed precisam ter extensão `.js`
- O seed está configurado no `package.json` para usar `ts-node` com ESM
- Certifique-se de que o PostgreSQL está rodando antes de executar as migrations