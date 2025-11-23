# Ignite Shop - SSR - STRIPE - TYPESCRIPT - REACT - NEXTJS

Ignite Shop é uma loja de camisetas online construída com Next.js. O projeto utiliza diversos pacotes para otimizar a experiência de compra, incluindo integração com pagamentos via Stripe e um sistema de carrinho de compras com `use-shopping-cart`.

# Deploy vercel
https://nextjs-ignite-shop-v2.vercel.app

# Figma
https://www.figma.com/design/kyJrCG3iCHlGFb6HD3Wnlj/Ignite-Shop-2.0-%E2%80%A2-Desafio-React--Copy-?node-id=0-1&p=f&t=tQfY7UxTCDrH33td-0


## ⚙️ Funcionalidades

- **Catálogo de Produtos:** Visualize uma lista de camisetas disponíveis com imagens, nome e preço.
- **Seleção de Camisetas:** Clique em um produto para ver detalhes e adicionar ao carrinho.
- **Carrinho de Compras:** Adicione múltiplas camisetas ao carrinho, ajuste quantidades e visualize o valor total em tempo real.
- **Checkout Integrado com Stripe:** Finalize a compra de forma segura utilizando a integração direta com o Stripe, garantindo pagamentos rápidos e confiáveis.
- **Feedback de Compra:** Após o pagamento, o usuário é redirecionado para uma página de sucesso personalizada.


## 🚀 Tecnologias

- **Next.js** – Framework React para renderização SSR/SSG.
- **React** – Biblioteca para construção de interfaces de usuário.
- **TypeScript** – Tipagem estática para maior segurança no código.
- **Stripe** – API para processamento de pagamentos online.
- **use-shopping-cart** – Gerenciamento de carrinho de compras com Stripe.
- **Keen Slider** – Biblioteca para criação de carrosséis/sliders.
- **phosphor-react** – Conjunto de ícones leves e personalizáveis.
- **@stitches/react** – Solução de CSS-in-JS para estilização rápida.
- **Axios** – Cliente HTTP para chamadas à API.
- **ESLint** – Linter para padronização e correção de código.
- **Prettier** – Formatador de código para manter o estilo consistente.

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/04-ignite-shop.git
```

2. Navegue até o diretório do projeto:

```bash
cd 04-ignite-shop
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

## 🧪 Scripts

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Gera o build de produção.
- `npm run start`: Inicia o servidor com o build de produção.
- `npm run lint`: Executa o linting do código.

## 💳 Teste o Checkout Stripe

Para testar o checkout do Stripe, utilize o cartão de teste abaixo:

- **Número do cartão:** 4242 4242 4242 4242  
- **Validade:** 12/34  
- **CVC:** 123

> Não é necessário usar um cartão real. Estes dados são aceitos no ambiente de testes do Stripe.

## 📝 Licença

Este projeto está sob a licença MIT.

## 🧠 Desafio

[Desafio 04 – Adicionando features ao Ignite Shop](https://efficient-sloth-d85.notion.site/Desafio-04-Adicionando-features-ao-Ignite-Shop-91e5b2c26c9342f5b1375ba66907d0b7)
