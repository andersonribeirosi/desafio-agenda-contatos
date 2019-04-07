import { AbstractControl, Validators } from '@angular/forms';

export class Validations {

    static maxLength = (size) => (control: AbstractControl) => {
      return Validators.maxLength(size)(control) ? { maxLength: true, message: `Tamanho maximo permitido ${size} caracteres` } : null;
    };
  
    static minLength = (size) => (control: AbstractControl) => {
      return Validators.minLength(size)(control) ? { minLength: true, message: `Tamanho mínimo permitido ${size} caracteres` } : null;
    };
  
    static email(control: AbstractControl) {
      return Validators.email(control) ? { email: true, message: `Formato de email inválido` } : null;
    };
  
    static required(control: AbstractControl) {
      return Validators.required(control) ? { required: true, message: `Campo obrigatório` } : null;
    };
  
  }