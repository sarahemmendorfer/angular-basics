import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NomeComponent } from './nome/nome.component';
import { SenhaComponent } from './senha/senha.component';
import { TelefoneComponent } from './telefone/telefone.component';
import { EmailuserComponent } from './emailuser/emailuser.component';
import { DiaNascimentoComponent } from './dia-nascimento/dia-nascimento.component';

@NgModule({
  declarations: [
    AppComponent,
    NomeComponent,
    SenhaComponent,
    TelefoneComponent,
    EmailuserComponent,
    DiaNascimentoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
