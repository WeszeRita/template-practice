import { Component } from '@angular/core';

@Component({
  selector: 'app-container-with-ng-switch-case',
  templateUrl: './container-with-ng-switch-case.component.html',
})
export class ContainerWithNgSwitchCaseComponent {
  direction: string;
  directions = ['east', 'west', 'north', 'south'];

  changeDirection(direction: string) {
    this.direction = direction;
  }
}
