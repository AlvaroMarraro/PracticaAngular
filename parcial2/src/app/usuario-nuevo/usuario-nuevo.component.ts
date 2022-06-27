import { Component, OnInit } from '@angular/core';
import { Usuario } from '../Interfaces/Usuario';
import {UsuarioProvider} from '../../Providers/UsuarioProvider';
import { Router } from '@angular/router';



@Component({
  selector: 'app-usuario-nuevo',
  templateUrl: './usuario-nuevo.component.html',
  styleUrls: ['./usuario-nuevo.component.css']
})
export class UsuarioNuevoComponent implements OnInit {

  usuario = {} as Usuario;

  constructor(private usuarioApi:UsuarioProvider, private router:Router )
  {

  }

  ngOnInit(): void {
  }

  async nuevoUsuario()
  {
    if (this.usuario.nombreUsu != null && this.usuario.password != null ) {
      this.usuarioApi.CreateNewUsuario(this.usuario).subscribe(data=> {
        if (data.ok) {
          this.usuario.nombreUsu = data.usuario.nombreUsuario;
          this.usuario.password = data.usuario.password;
          alert("Nuevo Usuario creado");
          this.router.navigateByUrl("/login");
         
        }
      })
    } else {
      
      alert("Complete todos los campos");
    }


  }


}
