import axios from 'axios';

const API_URL = 'http://localhost:8000/pedidos';

export async function finalizarPedidoApi(total, carrinho) {
    try {
        const itensParaEnviar = carrinho.map(produto => ({
            idProduto: produto.idProduto,
            quantidade: produto.quantidade
        }));

        const respostaPedido = await axios.post(API_URL, {
            itens: itensParaEnviar
        });

        return true;

    } catch (erro) {
        console.error('Erro ao processar o pedido na API:', erro);
        return false;
    }
}