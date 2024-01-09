import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customString',
  standalone: true
})
export class CustomStringPipe implements PipeTransform {

//Em Angular, um pipe é uma função que pode ser usada para transformar dados antes de serem exibidos no template.



  transform(value: string, args?: string): string {
    if(args === 'upper'){
      return value.toLocaleUpperCase();
    }
    if(args === 'lower'){
      return value.toLowerCase();
    }

    return value;
  }

}
