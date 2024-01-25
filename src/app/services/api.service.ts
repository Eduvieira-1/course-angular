import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



// service é uma classe que tem como proposito especifico oferecer funcionalidades ou dados entre partes da aplicação
// e uma camada que a gente consegue deixar abstraida só para trabalhar com dados

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public name = signal('Eduardo césar');

  public name$ = new BehaviorSubject('Eduardo césar $')

  constructor() { }
}
