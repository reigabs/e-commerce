import { Component,Input,Output, EventEmitter } from '@angular/core';
import{UpperCasePipe, CurrencyPipe } from '@angular/common';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';

@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe,PrecoFormatadoPipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
// adicionando a classe Produto com as propriedades produto, preco, e variavél.
export class Produto {
  //entrada e saida de dados da lista produtos
  @Input() nome: string ='';
  @Input() preco: number = 0;
//saida de dados de produtos selecionados da lista produtos
  @Output() produtoSelecionado = new EventEmitter<string>();
  selecionarProduto() {
    this.produtoSelecionado.emit(this.nome);
  }
}