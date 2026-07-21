import { Component } from '@angular/core';
import { Produto } from '../produto/produto';
import { signal } from '@angular/core';
import { computed } from '@angular/core'
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
import { effect } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-lista-produtos',
  imports: [Produto, PrecoFormatadoPipe, UpperCasePipe],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css',
})
export class ListaProdutos {
 //lista de dados - Array
  produtos = signal([
    {nome:'Teclado Indiano', preco:49.99},
    {nome:'Mouse da shoppe', preco:100.99},
    {nome:'Paulo', preco:0},
    {nome:'Monitor Gamer', preco:150.99},
  ]);
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
  //! metodo para monitorar alterações em tempo real usando effect()
  constructor() {
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
carrinho = signal <{nome: string; preco: number}[]>([]);
adicionarAoCarrinho(produto:{nome: string; preco: number}){
  this.carrinho.update(listaAtual =>[
    ...listaAtual, produto
  ]);
}
//função que coloca a quantidade de todos os itens no carrinho usando o computed()
quantidadeCarrinho = computed(() => this.carrinho().length);
//função que coloca o valor de todos os itens no carrinho usando o computed()
valorCarrinho = computed(() =>
{return this.carrinho().reduce((total, item) =>
  total + item.preco,0
)});
}


