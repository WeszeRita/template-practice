import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reusable-component',
  templateUrl: './reusable-component.component.html',
})
export class ReusableComponentComponent {
  @Input()
  textColor: string;
}
