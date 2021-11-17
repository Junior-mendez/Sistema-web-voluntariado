import { Component, OnInit } from '@angular/core';
import {Nutricionista} from '../nutricionista';
import {NUTRICIONISTAS} from '../nutricionistas.json';
import {NutricionistaService} from '../nutricionista.service';

@Component({
  selector: 'app-nutricionistas',
  templateUrl: './nutricionistas.component.html',
  styleUrls: ['./nutricionistas.component.css']
})
export class NutricionistasComponent implements OnInit {


  nutricionistas: Nutricionista[];

  

  constructor(private nutricionistaService: NutricionistaService) { 
  }

  ngOnInit(): void {
    this.nutricionistaService.getNutricionistas().subscribe(nutricionistas =>{this.nutricionistas=nutricionistas});
  }

}
