import { OutputComponent } from './../output/output.component';
import { InputComponent } from './../input/input.component';
import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-father-or-mother',
  standalone: true,
  imports: [CommonModule, InputComponent, OutputComponent],
  templateUrl: './father-or-mother.component.html',
  styleUrl: './father-or-mother.component.scss'
})
export class FatherOrMotherComponent {
 public name = signal("Eduardo cesar")
}
