import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TemplateComponent } from './componenets/template/template.component';
import {
  ContainerWithNgSwitchCaseComponent,
} from './componenets/template-with-ng-switch-case/container-with-ng-switch-case.component';
import { TemplateOutletComponent } from './componenets/template-outlet/template-outlet.component';
import { ContentParentComponent } from './componenets/content/content-parent/content-parent.component';
import { ContentChildComponent } from './componenets/content/content-child/content-child.component';
import { Renderer2Component } from './componenets/renderer2/renderer2.component';
import { ClassesAndStylesComponent } from './componenets/classes-and-styles/classes-and-styles.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    TemplateComponent,
    ContainerWithNgSwitchCaseComponent,
    TemplateOutletComponent,
    ContentParentComponent,
    ContentChildComponent,
    Renderer2Component,
    ClassesAndStylesComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
