import { Component, OnInit } from '@angular/core';
import { Persona } from '../Interfaces/Persona';
import {Router} from '@angular/router';
import {PersonaProvider} from '../../Providers/PersonaProvider';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  persona = {} as Persona;
  idPersona: string = "";
  constructor(private router:Router, private personasApi: PersonaProvider,private route: ActivatedRoute)
  {
    this.idPersona = this.route.snapshot.params["id"];
    alert(this.idPersona);
  }

  ngOnInit(): void {
    this.ObtenerPersona();
  }
  async ObtenerPersona() {
    this.personasApi.getPersonasId(this.idPersona).subscribe(data => {
      if (data.ok) {
        this.persona.id = this.idPersona;
        this.persona.nombre = data.nombre;
        this.persona.apellido = data.apellido;
        this.persona.dni = data.dni;
        
      }
    });
  }

 
  async actualizar() {
      alert(this.persona.nombre + " " + this.persona.apellido + " " +  this.persona.dni + "");
      if (this.persona.apellido != null && this.persona.nombre != null && this.persona.dni != null) {
        this.personasApi.UpdatePersona(this.persona).subscribe(data => {
          if (data.ok) {
            
            alert("Persona actualizada");
            this.router.navigateByUrl("/listas");
           
          }
        })
      } else {
        alert("Complete todos los campos");
      }
    } 

}
