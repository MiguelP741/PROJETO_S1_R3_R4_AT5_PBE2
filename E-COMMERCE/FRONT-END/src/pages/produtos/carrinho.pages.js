import {
    listarCarrinho,
    removerCarrinho,
    aumentarQuantidade,
    diminuirQuantidade,
    limparCarrinho
} from '../../storage/carrinho/carrinho.storage';

export async function carrinhoPage(){

    const app=document.querySelector("#app");

    app.innerHTML=`
        <h1 class="fw-bold text-light">
            🛒 Carrinho
        </h1>

        <div id="lista-carrinho"></div>

        <h3 class="mt-4" id="total"></h3>

        <button
        id="btn-finalizar"
        class="btn btn-success mt-3">
            Finalizar Compra
        </button>
    `;

    const lista=document.querySelector('#lista-carrinho');
    const totalTexto=document.querySelector('#total');
    //Button final compra
    const botaoFinalizar=document.querySelector('#btn-finalizar');
    const carrinho=listarCarrinho();

    let total=0;

    carrinho.forEach(produto=>{

        const card=document.createElement('div');
        card.className='card produto-card border-0 mb-4';

        const precoNumero=parseFloat(
            produto.preco.replace(',','.')
        );

        const subtotal=
        precoNumero*
        parseInt(produto.quantidade);

        total=total+subtotal;

        card.innerHTML=`
            <div class="produto-info">

                <img
                src="${produto.imagem}"
                class="carrinho-img"
                >

                <p class="produto-marca">
                    ${produto.marca}
                </p>

                <h5 class="produto-nome">
                    ${produto.nome}
                </h5>

                <p class="produto-preco">
                    R$ ${produto.preco}
                </p>

                <div class="d-flex align-items-center gap-2 mb-2">

                    <button class="btn-menos">
                        -
                    </button>

                    <span>
                        ${produto.quantidade}
                    </span>

                    <button class="btn-mais">
                        +
                    </button>

                </div>

                <p>
                    Subtotal:
                    R$ ${subtotal.toFixed(2).replace('.',',')}
                </p>

                <button class="btn-carrinho">
                    Remover
                </button>

            </div>
        `;

        const botaoRemover=card.querySelector('.btn-carrinho');
        const botaoMais=card.querySelector('.btn-mais');
        const botaoMenos=card.querySelector('.btn-menos');

        botaoMais.addEventListener('click',()=>{

            aumentarQuantidade(produto);
            lista.innerHTML='';
            carrinhoPage();

        });

        botaoMenos.addEventListener('click',()=>{

            diminuirQuantidade(produto);
            lista.innerHTML='';
            carrinhoPage();

        });

        botaoRemover.addEventListener('click',()=>{

            removerCarrinho(produto);
            lista.innerHTML='';
            carrinhoPage();

        });

        lista.appendChild(card);

    });

    totalTexto.innerText=
    `Total: R$ ${total.toFixed(2).replace('.',',')}`;

    botaoFinalizar.addEventListener('click',()=>{

        if(carrinho.length===0){

            alert('Seu carrinho está vazio!');
            return;

        }

        alert('Compra realizada com sucesso!');

        limparCarrinho();
        carrinhoPage();

    });

}