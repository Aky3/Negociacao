import { Negociacao } from "./negociacao.js";

export class Negociacoes{
    private negociacoes: Negociacao[] = [];

    adiciona(negociacao:Negociacao){
        this.negociacoes.push(negociacao);
    }
//não pode modificar a lista
    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}