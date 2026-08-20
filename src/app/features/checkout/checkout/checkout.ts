import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { CarrinhoService } from '../../../core/services/carrinho.service';
import { CarrinhoFacade } from '../../../core/facades/carrinho.facades';

@Component({
  selector: 'app-checkout',
  imports: [ ReactiveFormsModule],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
  carrinhoFacade = inject(CarrinhoFacade);
  carrinhoService = inject(CarrinhoService);

  formulario = new FormGroup({
    nome: new FormControl('',[Validators.required, Validators.minLength(2), nomeSemNumeros]),
    email: new FormControl('',[Validators.required, Validators.email]),
    endereco: new FormControl('',[Validators.required, Validators.minLength(5)]),
  });
  finalizar(){
    if (this.carrinhoFacade.carrinhoVazio()) 

    if(this.formulario.invalid){
console.log('Formulário Inválido!');
return;
    }

    const dados = this.formulario.value;
  
    const itens = this.carrinhoFacade.itens();
const total = this.carrinhoFacade.total();

    console.log('Dados do Formulário: ', dados);
    console.log('itens no Carrinho: ', itens);

this.carrinhoFacade.limparCarrinho();
  }
}
function nomeSemNumeros(control: AbstractControl): ValidationErrors | null {
  const valor = control.value;
  if (!valor) return null;
if(/\d/.test(valor)){
  return { numeroInvalido: true};
}
return null;
}
