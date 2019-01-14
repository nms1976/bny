import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePipe'
})
export class DatePipe implements PipeTransform {

  transform(items: any, value: any): any {
    //if (!items) return [];
    //if (!value) return items;
    //value = value.toLowerCase();
    return items.filter(it => {
      console.log(it.tr_date,value)
      return it.tr_date.includes(value);
    });
  }

}
