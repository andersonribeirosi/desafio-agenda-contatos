import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Validations } from 'src/app/services/validations';
import { ContatoService } from 'src/app/services/contato.service';
import { ContatoDataService } from 'src/app/services/contato-data.service';
import { Contato } from 'src/app/models/contato';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  contatoForm: FormGroup;
  contato: Contato;
  key: string = '';

  constructor(
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

  btnCancel() {
    this.route.navigateByUrl('/list');
  }

}
