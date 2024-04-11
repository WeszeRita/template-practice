import { Component } from '@angular/core';

@Component({
  selector: 'app-classes-and-styles',
  templateUrl: './classes-and-styles.component.html',
  styleUrls: ['./classes-and-styles.component.scss']
})
export class ClassesAndStylesComponent {
   condition(): boolean {
     return Math.floor(Math.random() * 10) % 2 === 0;
   }

   getClass(): string {
     return 'bold';
   }
}
