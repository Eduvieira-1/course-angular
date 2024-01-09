import { CustomStringPipe } from './../../../pipes/custom-string.pipe';
import { Observable, of, delay } from 'rxjs';
import { CommonModule, registerLocaleData } from '@angular/common';
import { Component, LOCALE_ID, signal } from '@angular/core';

import localePt from '@angular/common/locales/pt'
registerLocaleData(localePt)

@Component({
  selector: 'app-angular-pipes',
  standalone: true,
  imports: [CommonModule, CustomStringPipe],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.scss',
  // Um provider sao usados para configurar e fornecer valores ou funcionalidades especificas
  //para diferentes paras da aplicação
  providers: [{ provide: LOCALE_ID, useValue: 'pt-br'}]
})
export class AngularPipesComponent {

  public date = signal(new Date());
  public json = signal([
   {name: 'Eduardo'},
   {name: 'Dudu'},
   {name: 'Edu'}
  ])

  public loadingData$: Observable<string[]> = of([
    'item 1',
    'item 2',
    'item 3',
  ]).pipe(delay(1000));
}
