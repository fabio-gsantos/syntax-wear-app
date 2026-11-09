# SyntaxWear 👟

O **SyntaxWear** é uma aplicação web de e-commerce de calçados (tênis, botas e sapatos), desenvolvida com foco em performance, experiência do usuário e boas práticas de desenvolvimento front-end moderno com **React**, **TypeScript**, **Tailwind CSS** e **TanStack Router**.

---

## ✨ Funcionalidades

- **Vitrine Inicial (Home)**: Banner principal responsivo (Hero), navegação rápida por categorias de estilo (*Casual*, *Esportivo*, *Moderno*, *Futurista*) e galeria de destaques.
- **Catálogo de Produtos**:
  - Listagem completa de produtos (`/products`).
  - Filtragem dinâmica por categorias (`/products/category/$category`), como *Masculino*, *Feminino*, *Outlet*, *Casual*, *Esportivo*, *Moderno* e *Futurista*.
- **Página de Detalhes do Produto (`/products/$productId`)**:
  - Exibição de imagem, cor, descrição detalhada, preço original, preço com 10% de desconto no PIX e simulação de parcelamento em até 6x.
  - **Cálculo de Frete por CEP**: Integração com a API pública **ViaCEP** (`viacep.com.br`) para consulta de endereço e cálculo automático do valor do frete por região do Brasil.
- **Carrinho de Compras (Cart Drawer)**:
  - Gerenciamento de estado global via Context API (`CartContext` / `CartProvider`).
  - Adição e remoção de produtos, além de incremento e decremento de quantidades.
  - Persistência automática no `localStorage` (`@SyntaxWear:cart`).
- **Autenticação (Telas de UI & Validação)**:
  - Páginas de Login (`/sign-in`) e Cadastro (`/sign-up`).
  - Validação completa de formulários utilizando **React Hook Form** + **Zod** (incluindo validações customizadas de CPF e data de nascimento).
- **Páginas Institucionais**:
  - **Sobre Nós (`/about`)**: História e missão da marca.
  - **Nossas Lojas (`/our-stores`)**: Apresentação das lojas físicas e diferenciais de atendimento.

---

## 🛠️ Tecnologias Utilizadas

- **[React 19](https://react.dev/)** — Biblioteca para construção da interface de usuário.
- **[TypeScript](https://www.typescriptlang.org/)** — Tipagem estática para maior segurança e escalabilidade do código.
- **[Vite](https://vite.dev/)** — Bundler e servidor de desenvolvimento ultrarrápido.
- **[Tailwind CSS v4](https://tailwindcss.com/)** — Estilização utilitária moderna e responsiva.
- **[TanStack Router](https://tanstack.com/router)** — Roteamento file-based e 100% type-safe para React.
- **[React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)** — Gerenciamento e validação de esquemas de formulários.
- **[React Icons](https://react-icons.github.io/react-icons/)** — Biblioteca de ícones.

---

## 📂 Estrutura do Projeto

```text
syntax-wear-app/
├── src/
│   ├── assets/          # Fontes (Ubuntu) e imagens (banners, produtos, categorias, ícones, logos)
│   ├── components/      # Componentes reutilizáveis (Header, Footer, CartDrawer, ProductCard, CEPForm, etc.)
│   ├── contexts/        # Contexto e Provider do carrinho de compras (CartContext e CartProvider)
│   ├── helpers/         # Funções auxiliares (ex: formatação de moeda em BRL)
│   ├── interfaces/      # Tipagens TypeScript (Product, Category, Address)
│   ├── mocks/           # Dados simulados de produtos e categorias
│   ├── pages/           # Rotas baseadas em arquivos do TanStack Router
│   │   ├── _app/        # Rotas com layout padrão (Home, Produtos, Categorias, Sobre, Lojas)
│   │   └── _auth/       # Rotas de autenticação (Sign In, Sign Up)
│   ├── styles/          # Estilos globais e configuração do Tailwind CSS
│   ├── utils/           # Validadores utilitários (CPF e data de nascimento)
│   ├── App.tsx          # Configuração do Provider de rotas e do carrinho
│   └── main.tsx         # Ponto de entrada da aplicação
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:
- **[Node.js](https://nodejs.org/)** (versão 18 ou superior recomendada)
- Gerenciador de pacotes **npm** (ou yarn / pnpm)

### Passo a passo

1. **Clone o repositório** (caso ainda não tenha feito):
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd syntax-wear-app
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm run dev
   ```

4. **Acesse no navegador**:
   Abra o endereço exibido no terminal (geralmente `http://localhost:5173`).

---

## 📜 Scripts Disponíveis

No arquivo `package.json`, você encontrará os seguintes comandos:

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor de desenvolvimento do Vite com Hot Module Replacement (HMR). |
| `npm run build` | Compila o TypeScript (`tsc -b`) e gera a versão otimizada de produção na pasta `dist/`. |
| `npm run preview` | Inicia um servidor local para visualizar a build de produção gerada. |
| `npm run lint` | Executa o ESLint para análise estática e padronização do código. |

