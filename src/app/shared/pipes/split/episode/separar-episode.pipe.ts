import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'separarEpisode'
})
export class SepararEpisodePipe implements PipeTransform {

  transform(value: string | undefined): number | undefined {
    if (!value) {
      return undefined;
    }
    const separador = value?.split('E')[1];
    return parseInt(separador);
  }

}
