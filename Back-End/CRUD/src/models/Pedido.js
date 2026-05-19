export class Pedido{
    #id;
    #valorTotal;
    #statusPedido;
    #dataCad;

    constructor(pValorTotal, pStatusPedido, pId) {
        this.#valorTotal = pValorTotal;
        this.#statusPedido = pStatusPedido;
        this.#id = pId;
    }

    get id (){
        return this.#id
    }
    get valorTotal (){
        return this.#valorTotal
    }
    get statusPedido (){
        return this.#statusPedido
    }

    // SETTERS
    set id(value){
        this.#validarId(value);
        this.#id=value;
    }
    set valorTotal(value){
        this.#validarValorTotal(value);
        this.#valorTotal=value;
    }
    set statusPedido(value){
        this.#statusPedido=value;
    }

    // MÉTODOS AUXILIARES
    #validarId(value){
        if(value && value <= 0){
            throw new Error("Verifique o ID informado");
            
        }
    }
    #validarValorTotal(value){
        if(!value || value <= 0){
            throw new Error("Não foi possível obter o total");
            
        }
    }

    static criar(dados){
        return new Pedido(dados.valorTotal, dados.statusPedido, null);
    }
    static editar(dados, id){
        return new Pedido(dados.valorTotal, dados.statusPedido, id);
    }
}