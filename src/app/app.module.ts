import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { EditComponent } from './contatos/edit/edit.component';
import { ListComponent } from './contatos/list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { AddComponent } from './contatos/add/add.component';
import { HomeComponent } from './contatos/home/home.component';
import { NgxPhoneMaskBrModule } from 'ngx-phone-mask-br';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    ListComponent,
    NavbarComponent,
    AddComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPhoneMaskBrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
