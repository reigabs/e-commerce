import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; //remove a importação de RouterOutlet , pois não é necessaria para esse componente
//import { Produto } from './components/produto/produto'; // importando a classe Produto do arquivo produto.ts do componente app
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, UpperCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
  nomeLoja = 'Mercado Homofobico🏳️‍🌈⃠';
}
