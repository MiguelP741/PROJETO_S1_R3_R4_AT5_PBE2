# Sistema de E-commerce - INFINITY 🛒

Este é um projeto full-stack completo para um sistema de e-commerce. A aplicação é composta por uma **API REST (Back-end)** robusta estruturada em camadas e uma **Single Page Application (Front-end)** responsiva, construída com JavaScript Vanilla e estilizada com Bootstrap 5 e efeitos modernos de CSS3.

O sistema foi desenvolvido com foco em modularidade, reutilização de código, componentização no lado do cliente, validação rigorosa de regras de negócio e persistência segura em um banco de dados relacional.

---

##  Objetivos e Funcionalidades

### No Back-End (API e Banco de Dados)
- **Gestão de Produtos e Categorias:** Cadastro, edição, listagem e remoção de produtos e categorias, incluindo suporte a upload de imagens.
- **Gestão de Pedidos (Transações ACID):** Registro de pedidos compostos por múltiplos itens. O sistema utiliza transações nativas do MySQL (`beginTransaction`, `commit` e `rollback`) para garantir que o pedido e seus respectivos itens sejam salvos juntos com total integridade.
- **Validação de Dados:** Validação rigorosa implementada diretamente nas classes de domínio (Models) através de atributos privados, garantindo que dados inconsistentes não cheguem ao banco.
- **Padrão Singleton:** Gerenciamento eficiente e otimizado do ciclo de vida das conexões com o banco de dados através de um Pool de Conexões reutilizáveis.

### No Front-End (Interface do Usuário)
- **Arquitetura de Componentes:** Renderização dinâmica da interface em tempo de execução (`document.createElement`) a partir dos dados consumidos da API.
- **Roteamento SPA Manual:** O aplicativo intercepta eventos de clique e alterna dinamicamente os estados das telas (Produtos e Carrinho) no container principal sem recarregar a página do navegador.
- **Gerenciamento de Estado com LocalStorage:** Persistência local encapsulada para salvar, recuperar, incrementar, decrementar e limpar os itens do carrinho de compras, mantendo o estado mesmo após o refresh da página.
- **Feedback e Validação Reativa:** O componente de card valida o estoque atual em tempo real e bloqueia a inserção de quantidades indisponíveis no banco de dados.
- **Design Moderno e Efeitos Visuais:** Uso de variáveis CSS e `radial-gradient` para criar efeitos de iluminação de fundo (*glow* verde) e animações suaves de escala (`transform: scale`) e elevação nos cards ao passar o mouse.

---

## 🚀 Tecnologias Utilizadas

### Front-End
- **JavaScript (ES6+):** Manipulação avançada do DOM, módulos nativos (`import/export`) e funções assíncronas.
- **Axios:** Cliente HTTP para consumo simplificado dos endpoints da API.
- **Bootstrap 5:** Framework utilitário para agilidade em layouts responsivos e estruturas de Grid/Flexbox.
- **LocalStorage API:** Persistência de dados local no navegador do usuário.

### Back-End
- **Node.js** com **Express**: Construção do servidor e gerenciamento de rotas REST.
- **MySQL2**: Comunicação, queries cruas e controle transacional com o banco de dados.
- **Multer & Crypto:** Middleware para upload de imagens combinado com geração de hashes para garantir nomes únicos de arquivos.
- **Dotenv:** Isolamento de credenciais e variáveis de ambiente.
- **CORS:** Liberação e controle de requisições entre origens diferentes.

---

## Estrutura do Projeto

A arquitetura do projeto foi explicitamente dividida para separar as responsabilidades do ecossistema do cliente e do servidor:

###  Camada do Servidor (Back-End)
```text
BACK-END/
├── configs/                # Conexão com o Banco de Dados (Singleton) e Multer
├── controllers/            # Lógica de recebimento de requisições HTTP e respostas JSON
├── models/                 # Classes com encapsulamento (#) e validação de regras de negócio
├── repositories/           # Camada de persistência (Queries SQL e Transações)
├── enums/                  # Constantes e padronizações (ex: status do pedido)
└── routes/                 # Definição e mapeamento dos endpoints da API

FRONT-END/
├── public/                 # Arquivos estáticos e imagens locais padronizadas
├── src/
│   ├── components/         # Elementos visuais modulares e reutilizáveis
│   │   ├── layout/         # Componentes globais (navbar.component.js)
│   │   ├── produtos/       # Elementos de produto (card.component.js, imagem.component.js)
│   │   └── shared/         # Auxiliares de estilização bootstrap
│   ├── pages/              # Views completas montadas via JS (produtos.pages.js, carrinho.pages.js)
│   ├── services/           # Comunicação assíncrona com a API (pedido.api.js, produto.api.js)
│   ├── storage/            # Manipulação de estado local (carrinho.storage.js)
│   ├── main.js             # Inicializador do app, escutas globais e roteamento básico SPA
│   └── style.css           # Estilização customizada e efeitos visuais de identidade da marca
├── index.html              # Ponto de entrada único da aplicação
└── package.json            # Dependências e scripts do Front-End
