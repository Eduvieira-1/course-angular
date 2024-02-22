import { environment } from './../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, signal, inject } from '@angular/core';
import { BehaviorSubject, catchError, Observable, shareReplay, tap, throwError } from 'rxjs';

interface ITask {
  id: string;
  title: string;
}

// service é uma classe que tem como proposito especifico oferecer funcionalidades ou dados entre partes da aplicação
// e uma camada que a gente consegue deixar abstraida só para trabalhar com dados

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public name = signal('Eduardo césar');

  public name$ = new BehaviorSubject('Eduardo césar $');

  #http = inject(HttpClient);
  #url = signal(environment.apiTasks);

  //O # antes do nome sugere que seja uma variável privada de algum escopo, possivelmente de uma classe ou objeto.

  // GET ALL
  #setTaskList = signal<ITask[] | null>(null);
  get getTaskList() {
    return this.#setTaskList.asReadonly();
  }

  public httpTaskList$(): Observable<ITask[]> {
    const headers = new HttpHeaders().set('study-angular', 'dev');
    const params = new HttpParams().set('page', '1')

    this.#setTaskList.set(null)
    return this.#http
      .get<ITask[]>(this.#url(), { headers, params})
      .pipe(tap((res) => this.#setTaskList.set(res)));
  }

  //GET BY ID
  #setTaskId = signal<ITask | null>(null);
  get getTaskId() {
    return this.#setTaskId.asReadonly();
  }

  #setTaskIdError = signal<ITask | null>(null);
  get getTaskIdError() {
    return this.#setTaskIdError.asReadonly();
  }

  public httpTaskId$(id: string): Observable<ITask> {
    return this.#http
      .get<ITask>(`${this.#url()}/${id}`)
      .pipe(
        tap((res) => this.#setTaskId.set(res)),
        catchError((e: HttpErrorResponse) => {
          this.#setTaskIdError.set(e.error.message);
          return throwError(() => e);
        })
        );
  }

  //CREATE
  public httpTaskCreate$(title: string): Observable<ITask> {
    return this.#http
      .post<ITask>(this.#url(), { title })
      .pipe(shareReplay())
  }

  //PATCH
  public httpTaskUpdate$(id: string, title: string): Observable<ITask> {
    return this.#http
      .patch<ITask>(`${this.#url()}/${id}`, { title })
      .pipe(shareReplay())
  }

  //DELETE
  public httpTaskDelete$(id: string): Observable<void> {
    return this.#http
      .delete<void>(`${this.#url()}/${id}`, {})
      .pipe(shareReplay())
  }
}
