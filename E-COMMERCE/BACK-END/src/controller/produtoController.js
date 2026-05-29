import { Produto } from "../models/Produtos.js";
import produtoRepository from "../repositories/produtoRepository.js";

const produtoController = {
    criar: async (req, res) => {
        try {
            const { idCategoria, nomeP, preco, estoque } = req.body;
            const imagem = `/uploads/imagens/${req.file.filename}`
            const produto = Produto.criarP({ idCategoria, nomeP, preco, estoque, imagem });
            const result = await produtoRepository.criar(produto);
            
            res.status(201).json({ result })
        } catch (error) {
            console.error(error);
            res.status(500).json({ MessageChanel: 'Ocorreu um erro no servidor', errorMessage: error.message });

        }
    },
    editar: async (req, res) => {
        try {
            const id = req.params.idProduto;
            const { idCategoria, nomeP, preco, estoque } = req.body;
            const produto = Produto.alterarP({ idCategoria, nomeP, preco, estoque }, id);
            const result = await produtoRepository.editar(produto);

            res.status(200).json({ result })

        } catch (error) {
            console.error(error);
            res.status(500).json({ MessageChanel: 'Ocorreu um erro no servidor', errorMessage: error.message });

        }
    },
    deletar: async (req, res) => {
        try {
            const id = req.params.idProduto;
            const result = await produtoRepository.deletar(id);

            res.status(200).json({ result })

        } catch (error) {
            console.error(error);
            res.status(500).json({ MessageChanel: 'Ocorreu um erro no servidor', errorMessage: error.message });

        }
    },
    selecionar: async (req, res) => {
        try {
            const result = await produtoRepository.selecionar();

            res.status(200).json({ result })
        } catch (error) {
            console.error(error);
            res.status(500).json({ MessageChanel: 'Ocorreu um erro no servidor', errorMessage: error.message });

        }
    }

}

export default produtoController;