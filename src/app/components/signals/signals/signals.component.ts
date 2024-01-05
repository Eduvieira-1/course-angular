import { CommonModule } from '@angular/common';
import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {

  public firstName = signal('Eduardo');
  public lastName = signal('Cesar');

  public fullName = computed(() => {
    return this.firstName() + ' ' + this.lastName()
  })

  public array = signal([1]);

  constructor(){
    effect(() => {
      console.log(this.fullName())
    })
  }

  public updateName(){
   return this.firstName.set('Dudu')
  }

  public updateArray(){
    this.array.update((oldValue: Array<number>) => {
      return [...oldValue, oldValue.length + 1]
    })
  }
}
