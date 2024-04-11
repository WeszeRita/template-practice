import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-from-parent-component',
  templateUrl: './input-from-parent-component.component.html',
})
export class InputFromParentComponentComponent {
  @Input()
  name: string;
}
