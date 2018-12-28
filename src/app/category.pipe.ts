import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(items: Array<any>, type: string): Array<any> {
    if(!items) return [];
    if(!type) return items;
    if(type == 'All') return items;

    return items.filter(item => item.type === type);
  }

}
