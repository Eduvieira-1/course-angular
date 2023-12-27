import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TemplateVariablesComponent } from '../components/template/template-variables/template-variables.component';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule, NgClass, FormsModule, TemplateVariablesComponent],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = 'Eduardo'
  public age = 32;

  public isDisabled = false;
  public srcValue = '';
  public isTextDecoration = this.age >= 32 ? 'underline' : 'none'

  public sum(){
    this.age++
  }
  public sub(){
    this.age--
  }
}
