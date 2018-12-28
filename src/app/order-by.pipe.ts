import { Pipe, PipeTransform } from '@angular/core';
import { element } from 'protractor';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(items: any[], sortOrder:any): any[] {
    if(sortOrder == "true") {
      items.sort(Asc);
    }
    else if(sortOrder == "false") {
      items.sort(Des);
    }
    function Asc(a,b){
      return a.price - b.price;
    }
    function Des(a,b){
      return b.price - a.price;
    }
    return items;
  }
}
