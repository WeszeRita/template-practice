import { Component } from '@angular/core';

@Component({
  selector: 'app-template-outlet',
  templateUrl: './template-outlet.component.html',
})
export class TemplateOutletComponent {
  context = {
    $implicit: 'World',
    localHu: 'Jani',
  };
}
