import { signal } from "@angular/core";

export const usuarioLogado = signal(false); //! sinal para verificar se o usuário está logado ou não
export function login(){
    usuarioLogado.set(true); //! função para logar o usuário
}

export function logout(){
    usuarioLogado.set(false); //! função para deslogar o usuário
}