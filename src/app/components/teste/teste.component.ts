import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-teste',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TesteComponent {

}
