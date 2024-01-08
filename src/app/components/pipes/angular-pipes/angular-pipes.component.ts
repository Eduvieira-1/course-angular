import { Observable, of, delay } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-angular-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.scss'
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
