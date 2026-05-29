export class ItenPedido {
    #id;
    #idPedido;
    #idProduto;
    #quantidade;
    #precoUnitario;

    constructor(pIdPedido, pIdProduto, pQuantidade, pPrecoUnitario, pId) {
        this.#idPedido = pIdPedido;
        this.#idProduto = pIdProduto;
        this.#quantidade = pQuantidade;
        this.#precoUnitario = pPrecoUnitario;
        this.#id = pId;
    }

    get id() {
        return this.#id
    }
    get idPedido() {
        return this.#idPedido
    }
    get idProduto() {
        return this.#idProduto
    }
    get quantidade() {
        return this.#quantidade
    }
    get precoUnitario() {
        return this.#precoUnitario
    }

    // SETTERS
    set id(value) {
        this.#validarId(value);
        this.#id = value;
    }
    set idPedido(value) {
        this.#validarPedidoId(value);
        this.#idPedido = value;
    }
    set idProduto(value) {
        this.#validarProdutoId(value);
        this.#idProduto = value;
    }
    set quantidade(value) {
        this.#validarQuantidade(value)
        this.#quantidade = value;
    }
    set precoUnitario(value) {
        this.#validarPrecoUnitario(value)
        this.#precoUnitario = value;
    }

    // MÉTODOS AUXILIARES
    #validarId(value) {
        if (value && value <= 0) {
            throw new Error("Verifique o ID informado");
        }
    }
    #validarPedidoId(value) {
        if (value && value <= 0) {
            throw new Error("Verifique o ID do pedido informado");
        }
    }
    #validarProdutoId(value) {
        if (value && value <= 0) {
            throw new Error("Verifique o ID do produto informado");
        }
    }
    #validarQuantidade(value) {
        if (!value || value <= 0) {
            throw new Error("Não foi possível obter a quantidade");
        }
    }
    #validarPrecoUnitario(value) {
        if (!value || value <= 0) {
            throw new Error("Não foi possível obter o valor");
        }
    }
    static calcularValorTotalItens(itens) {
        return (itens.reduce(
            (total, item) => total+(item.precoUnitario * item.quantidade), 0
        ));
    }

    // DESIGN PATERS
    static criar(dados) {
        return new ItenPedido(dados.idPedido, dados.idProduto, dados.quantidade, dados.precoUnitario, null, null);
    }
    static editar(dados, id) {
        return new ItenPedido(dados.idProduto, dados.quantidade, dados.precoUnitario, id, dados.idPedido);
    }
}