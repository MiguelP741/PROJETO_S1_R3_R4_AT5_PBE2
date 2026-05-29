import { salvarCarrinho } from '../../storage/carrinho/carrinho.storage';

export default function criarCardProduto(produto) {

    const card = document.createElement('div');
    card.className = 'card produto-card border-0';

    // IMAGEM
    const imagem = document.createElement('img');
    imagem.src = produto.imagem;
    imagem.alt = produto.nome;
    imagem.className = 'produto-img';

    // CORPO
    const cardBody = document.createElement('div');
    cardBody.className = 'produto-info';

    // MARCA
    const marca = document.createElement('span');
    marca.className = 'produto-marca';
    marca.innerText = produto.marca;

    // NOME
    const nome = document.createElement('h5');
    nome.className = 'produto-nome';
    nome.innerText = produto.nome;

    // PREÇO
    const preco = document.createElement('p');
    preco.className = 'produto-preco';
    preco.innerText = `R$ ${produto.preco}`;

    // ESTOQUE
    const estoque = document.createElement('p');
    estoque.innerText = `Estoque: ${produto.estoque}`;

    // QUANTIDADE
    const quantidade = document.createElement('input');
    quantidade.type = 'text';
    quantidade.value = '1';
    quantidade.className = 'input-quantidade';

    // MENSAGEM
    const mensagem = document.createElement('p');
    mensagem.className = 'mensagem';

    // BOTÃO CARRINHO
    const botaoCarrinho = document.createElement('button');
    botaoCarrinho.className = 'btn-carrinho mb-2';
    botaoCarrinho.innerText = 'Enviar ao Carrinho';

    botaoCarrinho.addEventListener('click', () => {

        mensagem.innerText = '';

        if (quantidade.value > produto.estoque) {

            mensagem.className = 'mensagem mensagem-erro';
            mensagem.innerText = 'Estoque insuficiente';
            return;
        }

        salvarCarrinho({
            nome: produto.nome,
            marca: produto.marca,
            preco: produto.preco,
            imagem: produto.imagem,
            estoque: produto.estoque,
            quantidade: quantidade.value
        });

        produto.estoque = parseInt(produto.estoque) - parseInt(quantidade.value);
        estoque.innerText = `Estoque: ${produto.estoque}`;

        mensagem.className = 'mensagem mensagem-sucesso';
        mensagem.innerText = 'Produto enviado ao carrinho';
    });

    // BOTÃO COMPRAR
    const botaoComprar = document.createElement('button');
    botaoComprar.className = 'btn btn-secondary w-100';
    botaoComprar.innerText = 'Comprar Agora';

    botaoComprar.addEventListener('click', () => {

        mensagem.innerText = '';

        if (quantidade.value > produto.estoque) {

            mensagem.className = 'mensagem mensagem-erro';
            mensagem.innerText = 'Estoque insuficiente';
            return;
        }

        salvarCarrinho({
            nome: produto.nome,
            marca: produto.marca,
            preco: produto.preco,
            imagem: produto.imagem,
            estoque: produto.estoque,
            quantidade: quantidade.value
        });

        location.href = '#/carrinho';
    });

    // MONTAGEM
    cardBody.append(
        marca,
        nome,
        preco,
        estoque,
        quantidade,
        mensagem,
        botaoCarrinho,
        botaoComprar
    );

    card.append(
        imagem,
        cardBody
    );

    return card;
}