# Design System

Base visual e de componentes para aplicações React, com foco em consistência, escalabilidade e agilidade. Estrutura em **monorepo** para centralizar múltiplos pacotes (tokens, componentes e docs), facilitando manutenção e versionamento.

Componentes criados a partir do Figma, seguindo design tokens (cores, espaçamentos, tipografia, etc) para padronização visual. Documentação e exemplos disponíveis no Storybook para fácil visualização e testes isolados.

### Principais Pacotes Publicados

- **@felipy-ui/tokens**  
  Pacote de design tokens (cores, espaçamentos, tipografia, etc) para garantir identidade visual consistente em todos os projetos.

- **@felipy-ui/react**  
  Biblioteca de componentes React reutilizáveis, acessíveis e prontos para uso, seguindo as melhores práticas de UI/UX.

- **@felipy-ui/docs**  
  Documentação dos componentes e guias de uso, publicada e acessível via Storybook.

Todos os pacotes estão publicados no npm sob o usuário [`iamfelipy`](https://www.npmjs.com/~iamfelipy).

### Integração com Projetos

Este Design System será utilizado como base visual e de componentes no projeto de agendamento:  
🔗 [nextjs-ignite-call-agendamento](https://github.com/iamfelipy/nextjs-ignite-call-agendamento)

---

## 🌐 Deploy - Documentação do Storybook

Acesse a documentação completa dos componentes neste link:  
🔗 [Storybook - Home Page](https://iamfelipy.github.io/modulo-6-design-system-rocketseat-reactjs/?path=/story/home--page)

---

## 🎨 Referência Visual no Figma

Veja o design do projeto no Figma:  
🔗 https://www.figma.com/design/cowwFHJimoyQomSAynMjGz/Ignite-Call--%E2%80%A2-Projeto-React?node-id=21-107&p=f&t=n4d9YXWW0YURxJnU-0

---

## 🛠️ Ferramentas e Tecnologias

- **React**: Biblioteca JavaScript para construção de interfaces.
- **TypeScript**: Tipagem estática para maior segurança e produtividade.
- **Vite**: Bundler moderno e rápido para desenvolvimento.
- **Storybook**: Ferramenta para desenvolver, documentar e testar componentes de interface de forma isolada, permitindo visualizar e interagir com cada componente sem precisar rodar a aplicação inteira.
- **Stitches**: Biblioteca moderna de CSS-in-JS para estilização.
- **Radix UI**: Componentes acessíveis e não estilizados de alta qualidade.
- **Polished**: Utilitários para manipulação de cores em CSS-in-JS.
- **Turborepo**: Gerenciamento eficiente de monorepo. Monorepo é uma abordagem onde vários projetos/pacotes (por exemplo, frontend, backend, design system) ficam no mesmo repositório, facilitando o compartilhamento de código e a manutenção centralizada.
- **Changesets**: Controle de versionamento e publicação de pacotes.
- **TSUP**: Empacotador de código TypeScript moderno e simples.
- **Phosphor React**: Ícones SVG personalizáveis para interfaces.
- **ESLint & Prettier**: Padrões de código e formatação automáticos.

---

## ▶️ Como Rodar o Projeto

Certifique-se de ter o **Node.js v20.10.0** instalado.

### Passos:

1. **Instalar Dependências**  
   Execute o comando:
   ```bash
   npm install
   ```

2. **Iniciar o Servidor de Desenvolvimento**  
   Execute:
   ```bash
   npm run dev
   ```

3. **Gerar o Build de Produção**  
   Execute:
   ```bash
   npm run build
   ```

---

## 🚀 Ações Automatizadas (GitHub Actions)

Este projeto executa duas **GitHub Actions**:

1. **Deploy da Documentação do Storybook**  
   Publica automaticamente a documentação do Storybook após push na branch principal.

2. **Publicação no NPM com Changesets**  
   Gera e publica automaticamente uma nova versão dos pacotes no NPM com base nos arquivos de changeset.

---

## 🧱 Componentes Disponíveis

- [ ] **Text** – Exibição de conteúdo textual.  
- [ ] **Heading** – Títulos e subtítulos.  
- [ ] **Box** – Contêiner flexível para layout.  
- [ ] **Button** – Botão interativo.  
- [ ] **TextInput** – Campo de texto de uma linha.  
- [ ] **TextArea** – Campo de texto de múltiplas linhas.  
- [ ] **Checkbox** – Caixa de seleção.  
- [ ] **Avatar** – Imagem de perfil.  
- [ ] **MultiStep** – Formulários com múltiplos passos.  
- [ ] **Tooltip** – Dicas contextuais.  
- [ ] **Toast** – Notificações rápidas.  


