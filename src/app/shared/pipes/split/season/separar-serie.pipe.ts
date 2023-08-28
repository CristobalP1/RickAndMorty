import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'separarSerie'
})
export class SepararSeriePipe implements PipeTransform {

  transform(value: string | undefined): number | undefined {
    if (!value) {
      return undefined;
    }
    const separado = value.split('E')[0];
    const numero = separado.substring(1);
    return parseInt(numero);
  }

}
