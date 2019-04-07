import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../shared/contato.service';
import { ContatoDataService } from '../shared/contato-data.service';
import { Contato } from '../shared/contato';
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
    this.criaFormsGroup();
    this.contato = new Contato();
    this.contatoDataService.currentContato.subscribe(data => {
      if (data.contato && data.key) {
        this.contato = new Contato();
        this.contato.nome = data.contato.nome;
        this.contato.telefone = data.contato.telefone;
        this.key = data.key;
      }
    })
  }

  criaFormsGroup() {
    this.contatoForm = this.fb.group({
      nome: ['', Validators.compose([Validations.required])],
      email: ['', Validators.compose([Validators.required])],
      telefone: ['', Validators.compose([Validators.required])],
      rua: ['', Validators.compose([Validators.required])],
      numero: ['', Validators.compose([Validators.required])],
      bairro: ['', Validators.compose([Validators.required])],
      cidade: ['', Validators.compose([Validators.required])],
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
    } else {
      this.contatoService.insert(this.contato);
    }

    this.contato = new Contato();
    this.contatoForm.reset();
  }

  listar(){
    this.route.navigateByUrl('/listContatos');
  }


}
