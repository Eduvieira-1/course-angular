import { ApiService } from './../../services/api.service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-new',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new.component.html',
  styleUrl: './new.component.scss'
})
export class NewComponent {
  #apiService = inject(ApiService)

  ngOnInit(): void {
  //  console.log(this.#apiService.name());

  //  this.#apiService.name$.subscribe({
  //   next: (next) => console.log(next),
  //   error: (error) => console.log(error),
  //   complete: () => console.log("complete!"),

  //  })

  //  this.#apiService.name$.next('Eduardo cesarrrrr')

  //  this.#apiService.name.set('Duduuuuuu')

  //  setTimeout(() => {
  //     console.log(this.#apiService.name());
  //  },2000)
  }

}
