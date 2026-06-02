import criarColuna from '../../components/shared/coluna-bootstrap.component';
import criarCardProduto from '../../components/produtos/card.component';
import { buscarProdutos } from '../../services/produtos/produto.api';

export async function produtosPage() {

    const app = document.querySelector("#app");

    app.innerHTML = `
        <h1 class="fw-bold mb-4">
             Produtos
        </h1>

        <div class="row g-4" id="lista-produtos"></div>
    `;

    const row = document.querySelector("#lista-produtos");

    const busca = await buscarProdutos();

    const listaDeProdutos = Array.isArray(busca) ? busca : [];

    listaDeProdutos.forEach(produto => {
        const coluna = criarColuna();
        const card = criarCardProduto(produto);
        coluna.appendChild(card);
        row.appendChild(coluna);
    });
}