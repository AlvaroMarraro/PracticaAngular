import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UsuarioProvider } from '../Providers/UsuarioProvider';
import { PersonaProvider } from '../Providers/PersonaProvider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { EditarComponent } from './editar/editar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CardsComponent } from './cards/cards.component';
import { DeporteProvider } from 'src/Providers/DeporteProvider';
import { UsuarioNuevoComponent } from './usuario-nuevo/usuario-nuevo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaPersonasComponent,
    EditarComponent,
    CardsComponent,
    UsuarioNuevoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsuarioProvider, PersonaProvider, DeporteProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
