export function salvarCarrinho(produto){

    const carrinho=JSON.parse(
        localStorage.getItem('carrinho')||'[]'
    );

    let jaExiste=false;

    carrinho.forEach(item=>{

        if(item.nomeProduto===produto.nomeProduto){

            jaExiste=true;

            const novaQuantidade=
            parseInt(item.quantidade)+
            parseInt(produto.quantidade);

            if(
                novaQuantidade>
                parseInt(produto.estoque)
            ){

                return;

            }

            item.quantidade=
            novaQuantidade;

            item.estoque=
            parseInt(produto.estoque)-
            parseInt(item.quantidade);

        }

    });

    if(!jaExiste){

        produto.estoque=
        parseInt(produto.estoque)-
        parseInt(produto.quantidade);

        carrinho.push(produto);

    }

    localStorage.setItem(
        'carrinho',
        JSON.stringify(carrinho)
    );

}

export function estaNoCarrinho(produto){

    const carrinho=JSON.parse(
        localStorage.getItem('carrinho')||'[]'
    );

    return carrinho.some(
        item=>item.nomeProduto===produto.nomeProduto
    );

}

export function listarCarrinho(){

    return JSON.parse(
        localStorage.getItem('carrinho')||'[]'
    );

}

export function removerCarrinho(produto){

    const carrinho=JSON.parse(
        localStorage.getItem('carrinho')||'[]'
    );

    const carrinhoAtualizado=
    carrinho.filter(
        item=>item.nomeProduto!==produto.nomeProduto
    );

    localStorage.setItem(
        'carrinho',
        JSON.stringify(carrinhoAtualizado)
    );

}

export function aumentarQuantidade(produto){

    const carrinho=JSON.parse(
        localStorage.getItem('carrinho')||'[]'
    );

    carrinho.forEach(item=>{

        if(item.nomeProduto===produto.nomeProduto){

            const quantidadeAtual=
            parseInt(item.quantidade);

            const estoqueDisponivel=
            parseInt(item.estoque);

            if(estoqueDisponivel>0){

                item.quantidade=
                quantidadeAtual+1;

                item.estoque=
                estoqueDisponivel-1;

            }

        }

    });

    localStorage.setItem(
        'carrinho',
        JSON.stringify(carrinho)
    );

}

export function diminuirQuantidade(produto){

    const carrinho=JSON.parse(
        localStorage.getItem('carrinho')||'[]'
    );

    carrinho.forEach(item=>{

        if(item.nomeProduto===produto.nomeProduto){

            item.quantidade=
            parseInt(item.quantidade)-1;

            item.estoque=
            parseInt(item.estoque)+1;

        }

    });

    const carrinhoAtualizado=
    carrinho.filter(
        item=>parseInt(item.quantidade)>0
    );

    localStorage.setItem(
        'carrinho',
        JSON.stringify(carrinhoAtualizado)
    );

}

export function limparCarrinho(){

    localStorage.removeItem('carrinho');

}