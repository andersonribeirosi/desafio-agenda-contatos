import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../../services/contato.service';
import { ContatoDataService } from '../../services/contato-data.service';
import { Contato } from '../../models/contato';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Validations } from 'src/app/services/validations';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  contatoForm: FormGroup;
  contato: Contato;
  key: string = '';

  maskPhone: any[] = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];


  constructor(
    private contatoService: ContatoService,
    private contatoDataService: ContatoDataService,
    private route: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.contatoFormGroup();
    this.contato = new Contato();
    this.contatoDataService.currentContato.subscribe(data => {
      if (data.contato && data.key) {
        this.contato = new Contato();
        this.contato.nome = data.contato.nome;
        this.contato.telefone = data.contato.telefone;
        this.contato.email = data.contato.email;
        this.contato.bairro = data.contato.bairro;
        this.contato.cidade = data.contato.cidade;
        this.contato.rua = data.contato.rua;
        this.contato.numero = data.contato.numero;
        this.key = data.key;
      }
    })
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
    if (this.key) {
      this.contatoService.update(this.contato, this.key);
    }
    this.contato = new Contato();
    this.contatoForm.reset();
    this.route.navigateByUrl('/list');
  }

  listar() {
    this.route.navigateByUrl('/listar');
  }


}
