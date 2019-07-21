import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {
  /* Splitting string by '<br/>' delimiter. */
  transform(value: string): string {
    let splits = value.split('<br/>');
    if (splits.length > 1) {
      return splits[0];
    } else {
      return '';
    }
  }
}
