import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform(value: any[], props: string[], isAsk: boolean = false): any[] {
    value.sort((a, b) => {
      // при переходе к новому свойству, массив будет пересортировываться
      // надо чтобы в рамках одного значения по предыдущему свойству происходила сортировка по текущему свойству
      for (const prop of props) {
        if (a[prop] < b[prop]) return isAsk ? -1 : 1;
        if (a[prop] > b[prop]) return isAsk ? 1 : -1;
      }
      return 0;
    });
    return value;
  }
}
