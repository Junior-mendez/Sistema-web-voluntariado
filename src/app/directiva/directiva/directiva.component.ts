import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent  {

  listaDeLenguajes: string[]=['java','c++','dart'];
  habilitar : boolean=true;

  constructor() { }

  setHabilitar(): void{
    this.habilitar=(this.habilitar==true)?false:true;
  }
 

}
