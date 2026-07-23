import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router'; //remove a importação de RouterOutlet , pois não é necessaria para esse componente
//import { Produto } from './components/produto/produto'; // importando a classe Produto do arquivo produto.ts do componente app
import { UpperCasePipe } from '@angular/common';
import { usuarioLogado, login, logout } from './core/auth'; // importando a função login e logout do arquivo auth.ts do core

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, UpperCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('e-commerce');
  nomeLoja = 'Mercado do Hetero';
  usuarioLogado = usuarioLogado; //! sinal para verificar se o usuário está logado ou não
  login = login; //! função para logar o usuário
  logout = logout; //! função para deslogar o usuário
}
