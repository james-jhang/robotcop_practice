import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';
moment().format();

// function robotTimetoDate(time: string) {
//     return moment(time, 'YYYYMMDD HH:mm:ss.SSS').toDate();
// }

@Pipe({
  name: 'durationFormat'
})
export class DurationFormatPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    var duration = moment.duration(value)
    return moment.utc(duration.as('milliseconds')).format('HH:mm:ss.SSS');
  }

}
