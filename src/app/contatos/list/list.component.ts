import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../../services/contato.service';
import { ContatoDataService } from '../../services/contato-data.service';
import { Observable } from 'rxjs';
import { Contato } from '../../models/contato';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  contatos: Observable<any>;

  constructor(private contatoService: ContatoService,
    private contatoDataService: ContatoDataService,
    private route: Router) { }

  ngOnInit() {
    this.contatos = this.contatoService.getAll();
  }

  delete(key: string) {
    this.contatoService.delete(key);
    alert('Contato deletado com sucesso!!!');
  }

  edit(contato: Contato, key: string) {
    this.route.navigateByUrl('/edit');
    this.contatoDataService.changeContato(contato, key);
  }

}
