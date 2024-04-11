import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly funData = {
    attractions: [
      { name: 'Roller Coaster', thrillLevel: 'High' },
      { name: 'Carousel', thrillLevel: 'Low' },
      { name: 'Haunted House', thrillLevel: 'Medium' },
    ],
  };
  readonly notFunData = undefined;
}
