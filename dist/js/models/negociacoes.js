export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //não pode modificar a lista
    lista() {
        return this.negociacoes;
    }
}
