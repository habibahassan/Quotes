import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today: Date = new Date(); //get current date and time
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(todayWithNoTime - value)// returns value in milliseconds
    const secondsInADay = 86400; //total seconds in a day(60*60*24)

    var dateDifferenceSeconds = dateDifference * 0.001; //converts milliseconds to seconds

    var dateCounter = dateDifferenceSeconds / secondsInADay;//finds the number of days nested by the total seconds
    //Prevent display of day value less than one or equal to one
    if (dateCounter >= 1 && today > value ) {
      return dateCounter;
    } else {
      return 0;
    }
  }
}