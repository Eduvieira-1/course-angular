import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  standalone: true,
  imports: [],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiSelectComponent {

  petals = new Array(12); // 12 petals for a flower
}
