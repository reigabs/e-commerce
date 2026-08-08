import { Component } from '@angular/core';
import { Produto } from '../produto/produto';
import { signal } from '@angular/core';
import { computed } from '@angular/core'
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
import { effect } from '@angular/core';
import { UpperCasePipe } from '@angular/common';
import { inject } from '@angular/core';
import { produtosService } from '../../../core/services/produtos.service';
import { CarrinhoService } from '../../../core/services/carrinho.service';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto, PrecoFormatadoPipe,],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {

  //?==================== SIGNAL ========================

 //lista de dados - Array
  produtos = signal<{nome: string; preco: number}[]>([]);
  carregando = signal(true);
  erro = signal < string | null>(null);

  //! Função para exibir produtos selecionados pelo usuário no console
 exibirProduto(nome: string){
  console.log('Produto Selecionado:', nome);
  this.produtoSelecionado.set(nome);
}
//! função que adicionar produto usando o metodo update
adicionarProduto(){
  this.produtos.update(listaAtual => [
    ...listaAtual,
    {nome:'Playstation 5', preco:3000},
  ]);
}

//?==================== COMPUTED ========================

//!função que contabiliza a quantidade de produtos na lista usando o computed()
totalProdutos = computed(() => this.produtos().length);
//função que coloca o valor total usando o computed()
valorTotal = computed(() =>
{return this.produtos().reduce((total, item) =>
  total + item.preco,0
)});
  substituirProdutos(){
    this.produtos.set([
      {nome: 'Teclado Indiano', preco: 49 },
      {nome: 'Mouse da shoppe', preco: 100},
      {nome: 'Paulo', preco:0 },
      {nome: 'Monitor Gamer', preco:150 },
    ]);
  }

  //?==================== CONSTRUCTOR ========================

  //! metodo para monitorar alterações em tempo real usando effect()
  constructor( ) {
    this.carregarProdutos();
    effect(() => {
      console.log('Lista de Produtos Alterados: ',this.produtos());
    });
    effect(() => {
      console.log('Valor Total Atualizado: ',this.valorTotal());
    });
    effect(() => {
     if (typeof document !== 'undefined'){
        document.title = `(${this.totalProdutos()}) -Loja do Gabs`;
      }
    });
  }
  //! Metodo para criar um estado de seleção com signal string | null
  produtoSelecionado = signal <string | null>(null); 
//! metodo para criar um estado carrinho com signal

adicionarAoCarrinho(produto:{nome: string; preco: number}){
  this.carrinhoService.adicionar(produto);
}
//função que coloca a quantidade de todos os itens no carrinho usando o computed()

//função que coloca o valor de todos os itens no carrinho usando o computed()


//? ================ metodo para client 

carregarProdutos(){
  this.erro.set(null);
  this.carregando.set(true);
  this.produtosService.buscarProdutos().subscribe({
    next: (dados) => {
      const produtos = this.produtosService.transformarProduto(dados);
      this.produtos.set(produtos);
      this.carregando.set(false);
    },
    error: (erro) => {
      console.error('Erro ao carregar produtos: ', erro);
      this.erro.set('Erro ao carregar produtos. Por favor, tente novamente mais tarde.');
      this.carregando.set(false);
    }
  });
}

//* ==================== iNJECT =========================
private produtosService = inject(produtosService);
public carrinhoService = inject(CarrinhoService);

quantidadeCarrinho = this.carrinhoService.quantidadeItens;
totalCarrinho = this.carrinhoService.totalItens;

}
