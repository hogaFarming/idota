import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'timeFromNow'
})
export class TimeFromNowPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (!value) { return ''; }
    let date = new Date(value);
    return moment(date).fromNow();
  }
}
