import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PersonaProvider} from '../../Providers/PersonaProvider'
import { Persona } from '../Interfaces/Persona';

@Component({
  selector: 'app-lista-personas',
  templateUrl: './lista-personas.component.html',
  styleUrls: ['./lista-personas.component.css']
})
export class ListaPersonasComponent implements OnInit {

  listaPersonas: any = [];

  persona = {} as Persona;

  constructor(private router:Router, private personasApi: PersonaProvider) 
  {
    this.ObtenerPersonas();
    

  }

  ngOnInit(): void {
    

  }
  async EditarPersona(id:string){
    this.personasApi.getPersonasId(id).subscribe(data=>
    {
      this.router.navigateByUrl('/editar/'+id);
    });
    
  }

  async ObtenerPersonas()
  {
    this.personasApi.getPersonas().subscribe((data) => {
      if(data.ok)
      {
        this.listaPersonas = data.listaPersonas;
      }
      else
      {
        alert(data.error);
      }

    });
  } 


}
