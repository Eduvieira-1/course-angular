import { Observable, of, delay } from 'rxjs';
import { NewComponent } from './../../new/new.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-template-deferrable-views',
  standalone: true,
  imports: [CommonModule, NewComponent],
  templateUrl: './template-deferrable-views.component.html',
  styleUrl: './template-deferrable-views.component.scss'
})
export class TemplateDeferrableViewsComponent {

  public isTrue = true;

  public loadingData$: Observable<string[]> = of([
    'item 1'
  ]).pipe(delay(3000))
}
