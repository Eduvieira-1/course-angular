import { NewComponent } from './../new/new.component';
import { ApiService } from './../../services/api.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { concatMap } from 'rxjs';

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

  // public getTask = signal<null | Array<{
  //   id: string;
  //   title: string;
  // }>>(null)

  public getTaskList = this.#apiService.getTaskList;
  public getTaskId = this.#apiService.getTaskId;

  ngOnInit(): void {
      this.#apiService.httpTaskList$().subscribe();
      this.#apiService.httpTaskId$('LkgBYNQWUjhtitz7oK3v ').subscribe();
    // this.getTask$.subscribe({
    //   next: (next) => {
    //     console.log(next);
    //     this.getTask.set(next);
    //   },
    //   error: (error) => console.log(error),
    //   complete: () => console.log('complete!'),
    // })
  }

  public httpTaskCreate(title: string){
    return this.#apiService
    .httpTaskCreate$(title)
    .pipe(concatMap(() => this.#apiService.httpTaskList$()))
    .subscribe()
  }

  public httpTaskUpdate(id: string, title: string){
    return this.#apiService
    .httpTaskUpdate$(id, title)
    .pipe(concatMap(() => this.#apiService.httpTaskList$()))
    .subscribe()
  }

  public httpTaskDelete(id: string){
    return this.#apiService
    .httpTaskDelete$(id)
    .pipe(concatMap(() => this.#apiService.httpTaskList$()))
    .subscribe()
  }

}
