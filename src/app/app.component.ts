import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new/new.component';
import { TemplateBindingComponent } from './template-binding/template-binding.component';
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NewComponent,
    TemplateBindingComponent,
    TemplateControlFlowComponent,
    TemplateDeferrableViewsComponent,
  ],
  template: `
    <!-- <app-template-control-flow/> -->
    <app-template-deferrable-views />
  `,
})
export class AppComponent {}
