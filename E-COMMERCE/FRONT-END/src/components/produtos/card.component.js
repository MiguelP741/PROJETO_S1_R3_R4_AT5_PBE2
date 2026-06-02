import { salvarCarrinho } from '../../storage/carrinho/carrinho.storage';
import criarImagemProduto from './imagem.component';

export default function criarCardProduto(produto) {

    const card = document.createElement('div');
    card.className = 'card produto-card border-0 bg-dark h-100';

    const imagem = criarImagemProduto(produto);

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body d-flex flex-column';

    cardBody.innerHTML = `
        <h5 class="card-title fw-bold text-white mb-1">${produto.NomeProduto}</h5>
        
        <span class="text-secondary small mb-2">
            ${produto.NomeCategoria || 'Categoria ' + (produto.IdCategoria || '')}
        </span>
        
        <p class="text-light small mb-2 mt-1">
            ${produto.DescricaoProduto || ""}
        </p>
        
        <h3 class="text-success fw-bold mb-3">
            R$ ${Number(produto.Preco).toFixed(2).replace('.', ',')}
        </h3>
        
        <p class="text-white small fw-bold mb-3 estoque-texto">Estoque: ${produto.Estoque}</p>
        
        <p class="mensagem small fw-bold mt-2 mb-2"></p>

        <div class="mt-auto">
            <div class="d-flex gap-2 mb-2">
            <input type="number" class="form-control bg-dark text-light border-secondary input-quantidade" value="1" min="1" max="${produto.Estoque}" style="width: 70px;">                <button class="btn btn-outline-success w-100 btn-carrinho">Ao Carrinho</button>
            </div>
            <button class="btn btn-success w-100 btn-comprar">Comprar Agora</button>
        </div>
    `;

    const btnCarrinho = cardBody.querySelector('.btn-carrinho');
    const btnComprar = cardBody.querySelector('.btn-comprar');
    const inputQuantidade = cardBody.querySelector('.input-quantidade');
    const textoMensagem = cardBody.querySelector('.mensagem');
    const textoEstoque = cardBody.querySelector('.estoque-texto');

    btnCarrinho.addEventListener('click', () => {
        textoMensagem.innerText = '';
        const quantidadeDesejada = parseInt(inputQuantidade.value);

        if (quantidadeDesejada > produto.Estoque) {
            textoMensagem.className = 'mensagem text-danger small fw-bold mt-2 mb-2';
            textoMensagem.innerText = 'Estoque insuficiente';
            return;
        }

        salvarCarrinho({
            idProduto: produto.IdProduto,
            nomeProduto: produto.NomeProduto,
            preco: produto.Preco,
            imagem: produto.Imagem,
            estoque: produto.Estoque,
            quantidade: quantidadeDesejada
        });

        produto.Estoque -= quantidadeDesejada;
        textoEstoque.innerText = `Estoque: ${produto.Estoque}`;

        textoMensagem.className = 'mensagem text-success small fw-bold mt-2 mb-2';
        textoMensagem.innerText = 'Produto no carrinho!';
    });

    // Botão Comprar
    btnComprar.addEventListener('click', () => {
        textoMensagem.innerText = '';
        const quantidadeDesejada = parseInt(inputQuantidade.value);

        if (quantidadeDesejada > produto.Estoque) {
            textoMensagem.className = 'mensagem text-danger small fw-bold mt-2 mb-2';
            textoMensagem.innerText = 'Estoque insuficiente';
            return;
        }

        salvarCarrinho({
            idProduto: produto.IdProduto,
            nomeProduto: produto.NomeProduto,
            preco: produto.Preco,
            imagem: produto.Imagem,
            estoque: produto.Estoque,
            quantidade: quantidadeDesejada
        });

        location.href = '#/carrinho';
    });

    card.append(imagem, cardBody);
    return card;
}