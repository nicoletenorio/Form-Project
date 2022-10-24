import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { startWith, pairwise } from 'rxjs/operators';
import { CpfValidator } from './validators/cpf-validator';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  public estados = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MS', 'MT', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN','RS','RO',
     'RR', 'SC', 'SP', 'SE', 'TO'
  ]

  public formulario: FormGroup;

  constructor(private fb:FormBuilder) {
    this.formulario = fb.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      sobrenome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      cpf: ['', Validators.compose([Validators.required, CpfValidator.cpfValido])],
      cep: ['', Validators.compose([Validators.required])],
      rua: ['', Validators.compose([Validators.required])],
      numero: ['', Validators.compose([Validators.required])],
      complemento: ['', Validators.compose([Validators.required])],
      bairro: ['', Validators.compose([Validators.required])],
      cidade: ['', Validators.compose([Validators.required])],
      estado: [''],
      genero: [''],
    });

  }

  enviar() {
    console.log(this.formulario.value);
    if (!this.formulario.valid) {
        this.formulario.markAllAsTouched();
    }
  }
}

