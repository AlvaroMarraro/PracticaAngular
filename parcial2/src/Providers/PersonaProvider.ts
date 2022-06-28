import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { environment} from '../environments/environment';
import { Observable } from "rxjs/internal/Observable";
import { Persona } from "src/app/Interfaces/Persona";

@Injectable()
export class PersonaProvider
{
    apiUrlBase: string = environment.urlBaseApi;

    constructor(private http: HttpClient)
    {

    }

    getPersonas(): Observable<any>
    {
        
        
        const url = this.apiUrlBase + 'api/persona/GetTodas';
        const headers = {'content-type': 'application/json'};
        return this.http.get(url,{'headers':headers});
    }
    getPersonasId(id:string): Observable<any>
    {
        
        
        const url = this.apiUrlBase + 'api/persona/GetPersona/' + id;
        const headers = {'content-type': 'application/json'};
        return this.http.get(url,{'headers':headers});
    }


     UpdatePersona(persona: Persona): Observable<any>{

        const comando = {
            "id": persona.id,
            "nombre": persona.nombre,
            "apellido": persona.apellido,
            "dni": persona.dni
        };

        const url = this.apiUrlBase + "api/persona/UpdatePersona";
        const header = {"content-type": "application/json"};
        const body = JSON.stringify(comando);
        return this.http.put(url, body, {'headers': header});
    } 

}