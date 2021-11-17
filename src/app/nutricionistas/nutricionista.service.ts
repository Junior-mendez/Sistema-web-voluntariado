import { Injectable } from '@angular/core';
import {NUTRICIONISTAS} from './nutricionistas.json';
import {Nutricionista} from './nutricionista';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NutricionistaService {

  constructor() { }

  getNutricionistas(): Observable<Nutricionista[]>{return of (NUTRICIONISTAS);}
}
