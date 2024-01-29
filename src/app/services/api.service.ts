import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, signal, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

interface ITask {
  id: string;
  title: string;
}

// service é uma classe que tem como proposito especifico oferecer funcionalidades ou dados entre partes da aplicação
// e uma camada que a gente consegue deixar abstraida só para trabalhar com dados

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public name = signal('Eduardo césar');

  public name$ = new BehaviorSubject('Eduardo césar $')

  #http = inject(HttpClient)
  #url = signal(environment.apiTasks);

  public httpListTask$(): Observable<ITask[]> {
    return this.#http.get<ITask[]>(this.#url());

  }
}
