import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavButtonComponent } from './nav-button/nav-button.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import { ToolboxComponentComponent } from './toolbox-component/toolbox-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavButtonComponent,
    ToolboxComponent,
    ToolboxComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }