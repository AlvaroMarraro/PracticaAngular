import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './editar/editar.component';
import { ListaPersonasComponent } from './lista-personas/lista-personas.component';
import { LoginComponent } from './login/login.component';
import{ CardsComponent } from './cards/cards.component'
import { UsuarioNuevoComponent } from './usuario-nuevo/usuario-nuevo.component';

const routes: Routes = [
  {path: "login", component:LoginComponent },
  {path: "listas", component:ListaPersonasComponent},
  {path: "editar/:id", component:EditarComponent},
  {path: "deportes", component:CardsComponent},
  {path: "registrar", component:UsuarioNuevoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
