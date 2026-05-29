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

    try {
        // Busca os dados diretamente do seu back-end na porta 8000
        const response = await fetch("http://localhost:8000/produtos");
        const produtos = await response.json();

        produtos.forEach(produto => {

            const coluna = criarColuna();
            
            produto.imagem = `http://localhost:8000/imagens/${produto.imagem}`;

            const card = criarCardProduto(produto);

            coluna.appendChild(card);

            row.appendChild(coluna);
        });

    } catch (error) {
        console.error("Erro ao buscar produtos do back-end:", error);
    }
}