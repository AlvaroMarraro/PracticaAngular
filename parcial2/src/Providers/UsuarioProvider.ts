import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { environment} from '../environments/environment';
import { Observable } from "rxjs/internal/Observable";
import { Usuario } from "src/app/Interfaces/Usuario";

@Injectable()
export class UsuarioProvider
{
    apiUrlBase: string = environment.urlBaseApi;

    constructor(private http: HttpClient)
    {

    }

    postLogin(nombreUsu:string, password:string): Observable<any>
    {
        //en primer lugar le vamos a mandar un metodo comando 
        const comando = {
            "nombreUsuario": nombreUsu,
            "password": password
          };
        //declaramos la url 
        const url = this.apiUrlBase + 'api/usuario/login';
        const headers = {'content-type': 'application/json'};
        const body = JSON.stringify(comando);
        console.log(body);
        return this.http.post(url,body,{'headers':headers});
    }

    CreateNewUsuario(usuario: Usuario): Observable<any>
    {
        /* const comando = {
            "nombreUsuario": nombreUsu,
            "password": password
          }; */

          const url = this.apiUrlBase + 'api/usuario/create';
          const headers = {'content-type': 'application/json'};
          const body = JSON.stringify(usuario);
          return this.http.post(url,body,{'headers':headers});

    }

}