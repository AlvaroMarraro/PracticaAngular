import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UsuarioProvider} from '../../Providers/UsuarioProvider'
import { Usuario } from '../Interfaces/Usuario'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  usuario = {} as Usuario;

  constructor(private router:Router, private usuarioApi:UsuarioProvider)
  { 

  }

  ngOnInit(): void {
  }

  login()
  {
    
    this.usuarioApi.postLogin(this.usuario.nombreUsu, this.usuario.password).subscribe((data) => {
      if (data.ok)
      {
        this.router.navigateByUrl("/listas");
      }else{
        alert(data.error);
      }
    });
  }

  registrar()
  {
    this.router.navigateByUrl('/registrar');
  }

}
