import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './contatos/list/list.component';
import { EditComponent } from './contatos/edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'edit', pathMatch: 'full' },
  { path: 'edit', component: EditComponent },
  { path: 'listar', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
