import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';

@Component({
  selector: 'app-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.css'],
  encapsulation: ViewEncapsulation.None,})
export class TimePickerComponent {

  dateClassFunction: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();
      console.log(date);

      // Highlight the 1st and 20th day of each month.
      return (date === 10 || date === 20) ? 'example-custom-date-class' : '';
    }

    return '';
  }

}
