import criarColuna from '../../components/shared/coluna-bootstrap.component';

import criarCardProduto from '../../components/produtos/card.component';

export async function personagensPage() {

    const app = document.querySelector("#app");

    app.innerHTML = `
        <h1 class="fw-bold mb-4">
             Produtos
        </h1>

        <div class="row g-4" id="lista-produtos"></div>
    `;

    const row = document.querySelector("#lista-produtos");

    // PRODUTOS FIXOS
   const produtos = [

{
    nome: 'Mouse gamer Infinity Ultra V8 Wireless',
    marca: 'Infinity',
    preco: '199,90',
    imagem: '/Mouse-removebg-preview.png',
    estoque: 12
},

{
    nome: 'Headset gamer Infinity Nebula H7 Wireless',
    marca: 'Infinity',
    preco: '349,90',
    imagem: '/Fone-removebg-preview.png',
    estoque: 7
},

{
    nome: 'Gabinete Infinity Eclipse X1',
    marca: 'Infinity',
    preco: '599,90',
    imagem: '/Gabinete-removebg-preview.png',
    estoque: 4
}

];

    produtos.forEach(produto => {

        const coluna = criarColuna();

        const card = criarCardProduto(produto);

        coluna.appendChild(card);

        row.appendChild(coluna);
    });

}