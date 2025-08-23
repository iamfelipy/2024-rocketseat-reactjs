# Ignite Call

![Preview do Aplicativo](./src/assets/app-preview-2.png)

Aplicação de agendamento de compromissos desenvolvida com Next.js no bootcamp Ignite da Rocketseat. Inspirada no Calendly, permite que usuários se autentiquem com a conta Google, definam disponibilidade e compartilhem um link para agendamentos diretamente no Google Calendar.

> 🔗 Repositório original:  
> https://github.com/iamfelipy/2024-rocketseat-reactjs/tree/main/7-aprofundando-em-nextjs  
> 🌐 Deploy:  
> https://nextjs-ignite-call-agendamento.vercel.app

## 💻 Funcionalidades

- Login com conta Google (OAuth)
- Conexão e integração com o Google Calendar
- Geração de um link do google meet associado ao evento
- Escolha de dias e horários disponíveis
- Compartilhamento de link público para agendamento
- Criação de eventos no Google Calendar com envio automático de convite
- Armazenamento de dados em banco de dados PostgreSQL Serverless
- Interface moderna com validação de formulários

## 🚀 Tecnologias

- [Next.js](https://nextjs.org/) – Framework React para aplicações web modernas, com SSR, SSG e API Routes.
- [React](https://react.dev/) – Biblioteca para construção de interfaces de usuário reativas.
- [TypeScript](https://www.typescriptlang.org/) – Superset do JavaScript com tipagem estática.
- [Next Auth](https://next-auth.js.org/) – Autenticação flexível, utilizada para login com Google.
- [Google APIs](https://github.com/googleapis/google-api-nodejs-client) – Integração com Google Calendar e Google Meet.
- [Prisma ORM](https://www.prisma.io/) – ORM para modelagem e acesso ao banco de dados PostgreSQL.
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) – Gerenciamento e validação de formulários de forma performática.
- [React Query](https://tanstack.com/query) – Gerenciamento de cache e requisições assíncronas.
- [Day.js](https://day.js.org/) – Manipulação e formatação de datas.
- [Axios](https://axios-http.com/) – Cliente HTTP para requisições à API.
- [ESLint](https://eslint.org/) – Ferramenta para padronização e qualidade do código.
- [nookies](https://github.com/maticzav/nookies) – Gerenciamento de cookies no Next.js (SSR e client-side).
- [phosphor-react](https://phosphoricons.com/) – Biblioteca de ícones SVG personalizáveis.
- [Docker](https://www.docker.com/) – Containerização do ambiente de desenvolvimento e produção.

## 🎨 Design (Figma)

- Layout oficial fornecido pela Rocketseat via Figma:  
[Figma - Ignite Call (Community)](https://www.figma.com/design/cf1hU9cvv3Vy859QoKAl94/Ignite-Call--Community-?node-id=0-1&p=f&t=CLKZLhizjJNdm3Tm-0)

## ▶️ Como Executar Localmente

Clone o repositório, configure o ambiente e execute o projeto:

```bash
# Clone o projeto
git clone https://github.com/seu-usuario/seu-repositorio.git
cd ignite-call

# Copie as variáveis de ambiente
cp .env.example .env.local

# Instale as dependências
npm install

# Inicie o servidor
npm run dev
```

Acesse `http://localhost:3000` para ver a aplicação.

> ⚠️ Para funcionar corretamente, você precisa configurar:
> - As credenciais do Google OAuth
> - As permissões de acesso à API do Google Calendar
> - A URL do banco de dados PostgreSQL no `.env.local`

## 📝 Licença

Este projeto está licenciado sob a licença MIT.
