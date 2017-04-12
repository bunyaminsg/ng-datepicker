import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  date: string;

  constructor() {
    this.date = (new Date()).toISOString().split('T')[0];
  }

  handleDateUpdated(newDate: Date): void {
    this.date = newDate.toISOString().split('T')[0];
  }
}
