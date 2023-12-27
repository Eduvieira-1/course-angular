import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-template-variables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-variables.component.html',
  styleUrl: './template-variables.component.scss'
})
export class TemplateVariablesComponent implements AfterViewInit {
  @ViewChild('name') public nameInput!: ElementRef;

    ngAfterViewInit(){
      console.log(this.nameInput.nativeElement.value)
    }
}
