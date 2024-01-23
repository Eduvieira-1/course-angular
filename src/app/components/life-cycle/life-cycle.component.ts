import { FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  signal,
  OnInit,
  DoCheck,
  AfterViewInit,
  ViewChild,
  ElementRef,
  AfterContentInit,
  ContentChild,
  AfterContentChecked,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';
import { timer } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss',
})
export class LifeCycleComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterViewInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    OnDestroy
{
  @Input() public myNumber = 0;

  myText = signal('Eduardo');
  //construtor ou inicializador
  constructor(private fb: FormBuilder) {}

  @ViewChild('content') public content!: ElementRef;
  @ContentChild('text') public text!: ElementRef;

  private destroy$ = timer(0, 1000)
  .pipe(takeUntilDestroyed())
  .subscribe({
    next: (next) => console.log('next', next),
    error: (error) => console.log('error', error),
    complete: () => console.log('Complete!')

  })

  // - Para que serve: Este método é chamado sempre que um valor de entrada (`@Input`) de um componente muda.
  // - Explicação: É útil quando você precisa reagir a mudanças nos dados de entrada e atualizar o estado interno do componente com base nesses dados.
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  // - Para que serve: É chamado uma única vez após a inicialização do componente.
  // - Explicação: Use este método para realizar inicializações que precisam ocorrer assim que o componente é criado, como buscar dados iniciais de um serviço.
  ngOnInit() {
    console.log('ngOnInit');
  }

  // - Para que serve: É chamado durante cada ciclo de detecção de mudanças.
  // - Explicação: É útil quando você precisa realizar verificações manuais para detectar
  // mudanças que não são detectadas automaticamente pelo Angular, como alterações em objetos ou arrays.
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  // - Para que serve: É chamado depois que o Angular projeta o conteúdo na visão do componente (dentro das tags `<ng-content>`).
  // - Explicação: Use este método quando precisar interagir com elementos projetados no componente.
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    console.log(this.text.nativeElement.innerText);
  }



  // - Para que serve: É chamado depois que o Angular inicializa as visualizações do componente e as visualizações filhas.
  // - Explicação: Use este método quando precisar interagir com elementos do DOM após a inicialização da visualização.
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  // - Para que serve: É chamado depois que o Angular inicializa as visualizações do componente e as visualizações filhas.
  // - Explicação: Use este método quando precisar interagir com elementos do DOM após a inicialização da visualização.
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.content.nativeElement.innerText);
    this.content.nativeElement.innerText = 'Life Cycle 2';
    console.log(this.content.nativeElement.innerText);
  }


  //Em resumo, ngAfterViewInit é acionado após a inicialização das views,
  // enquanto ngAfterContentChecked é acionado após a verificação e atualização do conteúdo projetado.

  //A principal diferença entre ngAfterViewInit e ngAfterViewChecked é que o primeiro é chamado uma vez, após a inicialização das views,
  //enquanto o segundo é chamado após cada verificação de view.



  // - Para que serve: É chamado após cada verificação da visualização do componente.
  //  - Explicação: Útil para realizar ações após a verificação da visualização, como atualizar informações com base no estado atual da visualização.
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  // - Para que serve: É chamado antes de um componente ser destruído.
  // - Explicação: Útil para liberar recursos, cancelar assinaturas e executar tarefas de limpeza antes de um componente ser removido.
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    // this.destroy$.unsubscribe();
  }
}
