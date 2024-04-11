import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TemplateComponent } from './componenets/template/template.component';
import {
  ContainerWithNgSwitchCaseComponent,
} from './componenets/template-with-ng-switch-case/container-with-ng-switch-case.component';
import {
  InputFromParentComponentComponent,
} from './componenets/input-from-parent-component/input-from-parent-component.component';
import { TemplateOutletComponent } from './componenets/template-outlet/template-outlet.component';
import { ReusableComponentComponent } from './componenets/reusable-component/reusable-component.component';
import { ContentParentComponent } from './componenets/content/content-parent/content-parent.component';
import { ContentChildComponent } from './componenets/content/content-child/content-child.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    TemplateComponent,
    ContainerWithNgSwitchCaseComponent,
    InputFromParentComponentComponent,
    TemplateOutletComponent,
    ReusableComponentComponent,
    ContentParentComponent,
    ContentChildComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
