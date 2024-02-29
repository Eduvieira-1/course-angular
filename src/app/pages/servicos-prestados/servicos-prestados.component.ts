import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servicos-prestados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicos-prestados.component.html',
  styleUrl: './servicos-prestados.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServicosPrestadosComponent {

  #route = inject(ActivatedRoute)

  public get = signal<null | string>(null);
  @Input() set id(id:string){
    this.get.set(id);
  }

  ngOnInit(): void {
    console.log(this.#route.snapshot.params['id']);
  }
}
