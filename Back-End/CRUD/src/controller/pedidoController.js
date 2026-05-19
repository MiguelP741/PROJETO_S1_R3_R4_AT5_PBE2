import { Pedido } from "../models/Pedido.js";
import { ItenPedido } from "../models/ItensPedido.js";
import { statusPed } from "../enums/statusPedido.js";
import pedidoRepository from "../repositories/pedidoRepository.js";

const pedidoController = {
    criar: async (req, res) => {
        try {
            const { itens } = req.body;

            const ItensPedido = itens.map(item =>
                ItenPedido.criar({
                    idProduto: item.idProduto,
                    quantidade: item.quantidade,
                    precoUnitario: item.precoUnitario
                })
            );
            const valorTotal = ItenPedido.calcularValorTotalItens(ItensPedido)
            const pedido = Pedido.criar({ valorTotal, statusPedido: statusPed.ABERTO })

            const result = await pedidoRepository.criar(pedido, ItensPedido);

            res.status(201).json({ result })
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message });
        }
    },
    criarI: async (req, res) => {
        try {
            const { idPedido } = req.params;
            const { idProduto, quantidade } = req.body;

            const item = ItenPedido.criar({
                idPedido,
                idProduto,
                quantidade
            });

            const result = await pedidoRepository.criarI(idPedido, item);

            res.status(201).json({ result });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Erro ao adicionar item',
                errorMessage: error.message
            });
        }
    },
    editarI: async (req, res) => {
        try {
            const { itemId } = req.params;
            const { quantidade } = req.body;

            const result = await pedidoRepository.editarI(itemId, quantidade);

            res.status(200).json({ result });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Erro ao editar item',
                errorMessage: error.message
            });
        }
    },
    deletarI: async (req, res) => {
        try {
            const { itemId } = req.params;

            const result = await pedidoRepository.deletarI(itemId);

            res.status(200).json({ result });

        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'Erro ao remover item',
                errorMessage: error.message
            });
        }
    },
    editar: async (req, res) => {
        try {
            const { itens } = req.body;

            const ItensPedido = itens.map(item =>
                ItenPedido.editar({
                    idPedido: item.idPedido,
                    idProduto: item.idProduto,
                    quantidade: item.quantidade,
                    precoUnitario: item.precoUnitario,
                    id: item.id
                })
            );
            const valorTotal = ItenPedido.calcularValorTotalItens(ItensPedido)
            const pedido = Pedido.editar({ valorTotal, statusPedido: statusPed.ABERTO, id })

            const result = await pedidoRepository.editar(pedido, ItensPedido);

            res.status(201).json({ result })
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Ocorreu um erro no servidor', errorMessage: error.message });
        }
    },
    selecionar: async (req, res) => {
        try {
            const result = await pedidoRepository.selecionar();

            res.status(200).json({ result })
        } catch (error) {
            console.error(error);
            res.status(500).json({ MessageChanel: 'Ocorreu um erro no servidor', errorMessage: error.message });

        }
    },
}

export default pedidoController