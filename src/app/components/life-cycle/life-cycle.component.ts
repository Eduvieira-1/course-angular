import { FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss'
})
export class LifeCycleComponent implements OnChanges{
 @Input() public myNumber = 0;

 //construtor ou inicializador
 constructor(private fb: FormBuilder){}

 // sempre vai ficar vendo as mudanças
 // changes Detections
 ngOnChanges(changes: SimpleChanges): void {
  console.log('ngOnChanges', changes);
 }

}
