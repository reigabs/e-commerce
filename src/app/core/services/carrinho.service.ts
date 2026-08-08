import {Injectable} from '@angular/core';
import {signal} from '@angular/core';
import {computed} from '@angular/core';

//? deixa a aplicação global
@Injectable ({
providedIn: 'root'
})

export class CarrinhoService {
    //ESTADO DO CARRINHO
    private carrinho = signal<{nome: string; preco: number}[]>([]);

//? seleção
    itens = computed(() => this.carrinho());
    quantidadeItens = computed(() => this.carrinho().length);
    totalItens = computed(()=>
this.carrinho().reduce((total, item) => total + item.preco, 0));
      // TODO: Ações Adicionar Produtos
adicionar(produto: {nome: string; preco: number}){
    this.carrinho.update(Lista => [...Lista, produto]);
}  
// TODO: Ações de Limpeza
limpar(){
    this.carrinho.set([]);
}
}
