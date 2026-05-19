# API REST - Sistema de Loja 

Esta é uma API REST desenvolvida em Node.js para atender a um sistema de uma loja. O projeto fornece endpoints para o gerenciamento de categorias, produtos e pedidos, permitindo a integração completa com aplicações front-end. 
O sistema foi construído com foco em modularidade, reutilização de código e validação de regras de negócio, garantindo a integridade e persistência das informações em um banco de dados relacional.

##  Objetivos e Funcionalidades

**Gestão de Produtos e Categorias:** Cadastro, edição, listagem e remoção de produtos e categorias, incluindo suporte a upload de imagens.
**Gestão de Pedidos:** Registro de pedidos (compostos por múltiplos itens), adição/remoção de itens em pedidos existentes e cálculo automático do valor total da compra.
**Validação de Dados:** Validação rigorosa implementada nas classes de modelo (Models) para garantir que dados incorretos não cheguem ao banco de dados.
**Persistência de Dados:** Integração com banco de dados MySQL utilizando o padrão de projeto Singleton para gerenciamento eficiente de conexões (Pool de Conexões).
**Integração Front-end:** Respostas padronizadas em formato JSON e implementação de CORS para permitir consumo por aplicações cliente.

##  Tecnologias Utilizadas

**Node.js**: Construção do servidor e rotas REST.
**MySQL2**: Comunicação e queries com o banco de dados MySQL (utilizando Promises e Transactions).
**Multer**: Middleware para upload de arquivos (imagens dos produtos).
**Dotenv**: Gerenciamento de variáveis de ambiente.
**CORS**: Controle de compartilhamento de recursos entre origens diferentes.

##  Estrutura do Projeto

A arquitetura do projeto foi dividida em camadas para separar responsabilidades:

/configs: Configurações de banco de dados e middlewares (ex: upload com Multer).
/controllers: Lógica de requisição e resposta (trata as chamadas HTTP e retorna JSON).
/models: Classes de domínio com encapsulamento e validação de regras de negócio.
/repositories: Camada de acesso a dados (abstrai as queries SQL).
/enums: Arquivos de padronização, como os status do pedido.
/routes: Definição dos endpoints da API.
