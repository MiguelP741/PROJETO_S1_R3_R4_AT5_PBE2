import { connection } from '../configs/Database.js'

const pedidoRepository = {

    criar: async (pedido, itens) => {
        console.log('pedido: ', pedido.valorTotal, pedido.statusPedido);
        console.log('itens: ', itens[0]);


        const conn = await connection.getConnection();

        try {
            await conn.beginTransaction();

            const sqlPed = 'INSERT INTO pedidos(ValorTotal, StatusPedido) VALUES (?,?);'
            const valuesPed = [pedido.valorTotal, pedido.statusPedido]
            const [rowsPed] = await conn.execute(sqlPed, valuesPed);

            itens.forEach(async item => {
                const sqlItens = 'INSERT INTO itenspedidos(IdPedido, IdProduto, Quantidade, PrecoUnitario) VALUES (?,?,?,?);'
                const valuesItens = [rowsPed.insertId, item.produtoId, item.quantidade, item.precoUnitario];
                await conn.execute(sqlItens, valuesItens);
            });

            conn.commit();
            return { rowsPed };

        } catch (error) {
            await conn.rollback();
            throw new Error(error);
        }
        finally {
            conn.release();
        }
    },
    criarI: async (idPedido, item) => {
        const conn = await connection.getConnection();

        try {
            await conn.beginTransaction();

            const [produto] = await conn.execute(
                "SELECT Preco FROM produtos WHERE IdProduto = ?",
                [item.produtoId]
            );

            const valor = produto[0].precoUnitario;

            const sqlItens = 'INSERT INTO itenspedidos(IdPedido, IdProduto, Quantidade, PrecoUnitario) VALUES (?,?,?,?);'
            const valuesItens = [idPedido, item.insertId, item.idProduto, item.quantidade, item.precoUnitario];
            await conn.execute(sqlItens, valuesItens);
            await conn.execute(
                `UPDATE pedidos SET ValorTotal = ValorTotal + ? WHERE IdPedido = ?`,
                [valor * item.quantidade, idPedido]
            );

            await conn.commit();

            return { idPedido };

        } catch (error) {
            await conn.rollback();
            throw error;

        } finally {
            conn.release();
        }
    },
    editarI: async (idItem, quantidade) => {
        const conn = await connection.getConnection();

        try {
            await conn.beginTransaction();

            const [itemAtual] = await conn.execute(
                `SELECT IdPedido, IdProduto, Quantidade, PrecoUnitario FROM itenspedidos WHERE IdItemPedido = ?`,
                [idItem]
            );

            if (itemAtual.length === 0) {
                throw new Error("Item não encontrado");
            }

            const item = itemAtual[0];

            const valorAntigo = item.Quantidade * item.PrecoUnitario;
            const valorNovo = quantidade * item.PrecoUnitario;

            await conn.execute(
                `UPDATE itenspedidos SET Quantidade = ? WHERE IdItemPedido = ?`,
                [quantidade, idItem]
            );

            const diferenca = valorNovo - valorAntigo;

            await conn.execute(
                `UPDATE pedidos SET ValorTotal = ValorTotal + ? WHERE IdPedido = ?`,
                [diferenca, item.IdPedido]
            );

            await conn.commit();

            return { idPedido: item.IdPedido };

        } catch (error) {
            await conn.rollback();
            throw error;

        } finally {
            conn.release();
        }
    },
    deletarI: async (idItem) => {
        const conn = await connection.getConnection();

        try {
            await conn.beginTransaction();

            const [itemAtual] = await conn.execute(
                `SELECT IdPedido, Quantidade, PrecoUnitario FROM itenspedidos WHERE IdItemPedido = ?`,
                [idItem]
            );

            if (itemAtual.length === 0) {
                throw new Error("Item não encontrado");
            }

            const item = itemAtual[0];

            const valorTotal = item.Quantidade * item.PrecoUnitario;

            await conn.execute(
                `DELETE FROM itenspedidos WHERE IdItemPedido = ?`,
                [idItem]
            );

            await conn.execute(
                `UPDATE pedidos SET ValorTotal = ValorTotal + ? WHERE IdPedido = ?`,
                [valorTotal, item.IdPedido]
            );

            await conn.commit();

            return { idPedido: item.IdPedido };

        } catch (error) {
            await conn.rollback();
            throw error;

        } finally {
            conn.release();
        }
    },
    editar: async (pedido, itens) => {
        console.log('pedido: ', pedido.valorTotal, pedido.statusPedido);
        console.log('itens: ', itens[0]);


        const conn = await connection.getConnection();

        try {
            await conn.beginTransaction();

            const sqlPed = 'UPDATE pedidos SET ValorTotal = ?, StatusPedido = ? WHERE IdPedido = ?;'
            const valuesPed = [pedido.clienteId, pedido.subTotal, pedido.statusPedido, pedido.id]
            const [rowsPed] = await conn.execute(sqlPed, valuesPed);

            itens.forEach(async item => {
                const sqlItens = 'UPDATE itenspedidos SET IdPedido = ?, IdProduto = ?, Quantidade = ?, PrecoUnitario = ? WHERE IdItemPedido = ?;'
                const valuesItens = [item.idProduto, item.quantidade, item.valorItem, item.idItemPedido];
                await conn.execute(sqlItens, valuesItens);
            });

            conn.commit();
            return { rowsPed };

        } catch (error) {
            await conn.rollback();
            throw new Error(error);
        }
        finally {
            conn.release();
        }
    },
    selecionar: async () => {
        const sql = `
            SELECT p.Id, p.ClienteId, p.StatusPedido, 
            i.Id, i.PedidoId, i.ProdutoId, i.Quantidade, i.PrecoUnitario, p.ValorTotal
            FROM pedidos AS p
            INNER JOIN itenspedidos AS i
                ON p.IdProduto = i.IdPedido
        `;
        const [rows] = await connection.execute(sql);
        return rows;
    }
};

export default pedidoRepository;