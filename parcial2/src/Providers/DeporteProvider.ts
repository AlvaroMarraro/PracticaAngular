import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { environment} from '../environments/environment';
import { Observable } from "rxjs/internal/Observable";
import { Persona } from "src/app/Interfaces/Persona";

@Injectable()
export class DeporteProvider
{
    apiUrlBase: string = environment.urlBaseApi;

    constructor(private http: HttpClient)
    {

    }
GetDeporte(): Observable<any>
    {
        
        
        const url = this.apiUrlBase + 'api/deporte/getdeportes';
        const headers = {'content-type': 'application/json'};
        return this.http.get(url,{'headers':headers});
    }
}