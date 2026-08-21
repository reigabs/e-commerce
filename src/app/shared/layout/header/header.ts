import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, Router} from '@angular/router';
import { CarrinhoService } from '../../../core/services/carrinho.service';
import { inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { CarrinhoFacade } from '../../../core/facades/carrinho.facades';
import { AuthFacade } from '../../../core/facades/auth.facades';

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, MatButtonModule, RouterLink ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  private carrinhoFacade = inject(CarrinhoFacade);
private authFacade = inject(AuthFacade);
  nomeLoja = 'Mercado do Hetero';
  private carrinhoService = inject(CarrinhoService);
  private authService = inject(AuthService);
  private router = inject(Router);

  quantidade = this.carrinhoFacade.quantidade;
  estaLogado = this.authFacade.estaLogado;
usuarioAtual = this.authFacade.usuarioAtual;

  quantidadeHeader = this.carrinhoService.quantidade;
sair() {
  this.authFacade.sair();
this.authService.logout();
this.router.navigateByUrl('/login');
}
}
