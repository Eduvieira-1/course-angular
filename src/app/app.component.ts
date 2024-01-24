import { environment } from './../environments/environment';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { HostElementsComponent } from './components/host-elements/host-elements.component';
import { ContentComponent } from './components/content/content.component';
import { TemplateDrivenFormsComponent } from './components/forms/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './components/forms/reactive-forms/reactive-forms.component';
import { AngularPipesComponent } from './components/pipes/angular-pipes/angular-pipes.component';
import { FatherOrMotherComponent } from './components/comunication-components/father-or-mother/father-or-mother.component';
import { SignalsComponent } from './components/signals/signals/signals.component';
import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';
import { Component, OnInit } from '@angular/core';
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
    SignalsComponent,
    FatherOrMotherComponent,
    AngularPipesComponent,
    ReactiveFormsComponent,
    TemplateDrivenFormsComponent,
    ContentComponent,
    HostElementsComponent,
    LifeCycleComponent
  ],
  template: `
    <!-- <app-template-control-flow/> -->
    <!-- <app-template-deferrable-views /> -->
    <!-- <app-signals/> -->
    <!-- <app-father-or-mother /> -->
    <!-- <app-angular-pipes /> -->
    <!-- <app-template-driven-forms /> -->
    <!-- <app-reactive-forms/> -->
    <!-- <app-content>
      <header id="header">
        <p>header</p>
      </header>
      <p text>text</p>
      <p text>text</p>
      <p text>text</p>
      <footer class="footer">
        <p>footer</p>
      </footer>
    </app-content> -->
 <!-- <app-host-elements /> -->
 <!-- @if(boolean){
   <app-life-cycle [myNumber]="number">
    <p #text>Text</p>
  </app-life-cycle>
 }

 <button (click)="boolean = !boolean">Destroy Component</button> -->
 <h1>Curso angular</h1>

  `,
})
export class AppComponent implements OnInit {
  public number = 1;
  public boolean = true;

  constructor(){
    console.log(environment.env);
  }

  // E quando o component e criado e o proximo passo
  ngOnInit(): void {
    setInterval(() => {
      this.number++;
    }, 1000)
  }
}
