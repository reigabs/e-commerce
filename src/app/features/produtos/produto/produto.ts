import { Component,Input,Output, EventEmitter, output } from '@angular/core';
import{UpperCasePipe, CurrencyPipe } from '@angular/common';
import { PrecoFormatadoPipe } from '../../../shared/pipes/preco-formatado-pipe';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe,PrecoFormatadoPipe, MatButtonModule, MatCardModule,],
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
  @Output() produtoAdicionado = new EventEmitter<{
    nome: string;
    preco: number;
  }>();

  adicionarAocarrinho() {
    this.produtoAdicionado.emit({
      nome: this.nome,
      preco: this.preco,
    });
  }
}