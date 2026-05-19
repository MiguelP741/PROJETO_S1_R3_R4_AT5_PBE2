export class Produto{
    #idProduto;
    #idCategoria;
    #nomeProduto;
    #preco;
    #imagem;
    #estoque
    #dataCad;

    constructor(pIdC, pNomeP, pDescricaoP, pPreco, pImagem, pEstoque, pIdP) {
        this.idCategoria = pIdC
        this.nomeP = pNomeP;
        this.descricaoP = pDescricaoP;
        this.preco = pPreco;
        this.imagem = pImagem;
        this.estoque = pEstoque;
        this.idProduto = pIdP;
    }

    get idProduto() {
        return this.#idProduto;
    }
    set idProduto(value) {
        this.#validarIdProduto(value);
        this.#idProduto = value;
    }

    get idCategoria() {
        return this.#idCategoria;
    }
    set idCategoria(value) {
        this.#validarIdCategoria(value);
        this.#idCategoria = value;
    }

    get nomeP() {
        return this.#nomeProduto;
    }
    set nomeP(value) {
        this.#validarNome(value);
        this.#nomeProduto = value;
    }

    get descricaoP() {
        return this.#nomeProduto;
    }
    set descricaoP(value) {
        this.#validarDescricao(value);
        this.#nomeProduto = value;
    }

    get preco() {
        return this.#preco;
    }
    set preco(value) {
        this.#validarPreco(value);
        this.#preco = value;
    }

    get imagem() {
        return this.#imagem;
    }
    set imagem(value) {
        this.#validarImagem(value);
        this.#imagem = value;
    }

    get estoque() {
        return this.#estoque;
    }
    set estoque(value) {
        this.#validarEstoque(value);
        this.#estoque = value;
    }

    #validarIdProduto(value) {
        if (value && value <= 0) {
            throw new Error('Verifique o id do produto informado');
        }
    }
    #validarIdCategoria(value) {
        if (value && value <= 0) {
            throw new Error('Verifique o id da categoria informado');
        }
    }
    #validarNome(value) {
        if (!value || value.trim().length < 3 || value.trim().length > 100) {
            throw new Error('O campo nome é obrigatório e deve ter entre 5 e 100 caracteres')
        }
    }
    #validarDescricao(value) {
        if (!value || value.trim().length < 10 || value.trim().length > 255) {
            throw new Error('O campo nome é obrigatório e deve ter entre 10 e 255 caracteres')
        }
    }
    #validarPreco(value) {
        if (value === undefined || isNaN(Number(value)) || value === null || Number(value) <= 0) {
            throw new Error('O campo valor é obrigatório, deve ter valores numéricos, não pode ser menor que 0')
        }
    }
    #validarImagem(value) {
        if (value) {
            if(value.string < 3){
                throw new Error('O campo imagem não pode ficar vazio')
            }
            
        }
    }
    #validarEstoque(value) {
        if (value === undefined || value === null || value === '' || isNaN(value) || Number(value) < 0) {
            throw new Error('O campo nome é obrigatório e deve ter entre 10 e 100 caracteres')
        }
    }

    static criarP(dados) {
        return new Produto(dados.idCategoria, dados.nomeP, dados.valor, dados.imagem, null);
    }
    static alterarP(dados, idProduto) {
        return new Produto(dados.idCategoria, dados.nomeP, dados.valor, dados.imagem, idProduto);
    }

}