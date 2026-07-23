import { CanActivateFn, Router } from '@angular/router';
import { usuarioLogado } from './auth';

export const authGuard: CanActivateFn = (route, state) => {
    return usuarioLogado();
};