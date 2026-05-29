import { connection } from "../configs/Database.js";

const produtoRepository = {
    criar: async (produto) => {
        const sql = 'INSERT INTO produtos (IdCategoria, NomeProduto, DescricaoProduto, Preco, Imagem, Estoque) VALUES (?, ?, ?, ?, ?, ?);';
        const values = [produto.idCategoria, produto.nomeP, produto.descricaoP, produto.preco, produto.imagem, produto.estoque];
        const [rows] = await connection.execute(sql, values);
        return rows;
    },
    editar: async (produto) => {
        const sql = 'UPDATE produtos SET IdCategoria=?, NomeProduto=?, DescricaoProduto=?, Preco=?, Estoque=? WHERE idProduto=?;';
        const values = [produto.idCategoria, produto.nomeP, produto.descricaoP, produto.preco, produto.imagem, produto.estoque, produto.idProduto];
        const [rows] = await connection.execute(sql, values);
        return rows;
    },
    deletar: async (idProduto) => {
        const sql = 'DELETE FROM produtos WHERE IdProduto = ?;';
        const values = [idProduto];
        const [rows] = await connection.execute(sql, values);
        return rows;
    },
    selecionar: async () => {
        const sql = 'SELECT * FROM produtos;';
        const [rows] = await connection.execute(sql);
        return rows;
    }
}

export default produtoRepository;