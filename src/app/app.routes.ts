import { Routes } from '@angular/router';
import { AuthService } from './core/auth.guard';
import { adminGuard } from './core/admin.guard';
export const routes: Routes = [
{
path: '',
loadComponent: () => import('./features/home/home/home').then((m) => m.Home),
},
{
path: 'produtos',
loadComponent: () => import('./features/produtos/lista-produtos/lista-produtos').then((m) => m.ListaProdutos),
},
{
path: 'carrinho',
canActivate: [AuthService],
loadComponent: () => import('./features/carrinho/carrinho/carrinho').then((m) => m.Carrinho),
},
{
path: 'checkout',
canActivate: [AuthService],
loadComponent: () => import('./features/checkout/checkout/checkout').then((m) => m.Checkout),
},
{
path: 'admin',
canActivate: [adminGuard],
loadComponent: () => import('./features/admin/admin/admin').then((m) => m.Admin),
},
{
path: 'login',
loadComponent: () => import('./features/login/login/login').then((m) => m.Login),
},
{
path: '**',
redirectTo: '',
},
];