import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; //remove a importação de RouterOutlet , pois não é necessaria para esse componente
//import { Produto } from './components/produto/produto'; // importando a classe Produto do arquivo produto.ts do componente app
import { UpperCasePipe } from '@angular/common';
//import { usuarioLogado, login, logout } from './core/auth'; // importando a função login e logout do arquivo auth.ts do core
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Header } from './shared/layout/header/header'; // importando a classe Header do arquivo header.ts do componente shared/layout

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, UpperCasePipe, MatButtonModule, MatCardModule, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
  nomeLoja = 'Mercado do Hetero';

}
