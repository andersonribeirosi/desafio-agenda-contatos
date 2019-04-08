import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Validations } from 'src/app/services/validations';
import { Contato } from 'src/app/models/contato';
import { ContatoService } from 'src/app/services/contato.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  contatoForm: FormGroup;
  contato: Contato;
  key: string = '';

  maskPhone: any[] = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];


  constructor(
    private contatoService: ContatoService,
    private route: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.contatoFormGroup();
    this.contato = new Contato();
  }

  contatoFormGroup() {
    this.contatoForm = this.fb.group({
      nome: ['', Validators.compose([Validations.required])],
      email: ['', Validators.compose([Validations.required, Validations.email])],
      telefone: ['', Validators.compose([Validations.required])],
      rua: ['', Validators.compose([Validations.required])],
      numero: ['', Validators.compose([Validations.required])],
      bairro: ['', Validators.compose([Validations.required])],
      cidade: ['', Validators.compose([Validations.required])],
    });
  }

  getError(field) {
    const fieldGroup = this.contatoForm.get(field);
    if (fieldGroup.errors && fieldGroup.dirty && fieldGroup.touched) {
      return fieldGroup.errors.message;
    } else if (this.contatoForm.errors) {
      return fieldGroup.errors.message;
    }
  }

  onSubmit() {
    this.contatoService.insert(this.contato);
    this.contato = new Contato();
    this.contatoForm.reset();
  }

  listar() {
    this.route.navigateByUrl('/list');
  }

}
