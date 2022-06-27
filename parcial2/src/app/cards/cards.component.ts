import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DeporteProvider} from '../../Providers/DeporteProvider'

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  listaDeportes: any = [];

  constructor(private router:Router, private deporteApi: DeporteProvider)
  {
    this.ObtenerDeportes();

  }

  ngOnInit(): void {
  }

  async ObtenerDeportes()
  {
    this.deporteApi.GetDeporte().subscribe((data) => {
    
        this.listaDeportes = data;

    });
  }


}
