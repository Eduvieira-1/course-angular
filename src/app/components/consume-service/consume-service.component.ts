import { NewComponent } from './../new/new.component';
import { ApiService } from './../../services/api.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-consume-service',
  standalone: true,
  imports: [CommonModule, NewComponent],
  templateUrl: './consume-service.component.html',
  styleUrl: './consume-service.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsumeServiceComponent implements OnInit {
  #apiService = inject(ApiService)

  ngOnInit(): void {
   console.log(this.#apiService.name());

   this.#apiService.name$.subscribe({
    next: (next) => console.log(next),
    error: (error) => console.log(error),
    complete: () => console.log("complete!"),

   })

   setTimeout(() => {
      console.log(this.#apiService.name());
   },2000)
  }

}
