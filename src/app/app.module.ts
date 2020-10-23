import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HideElementDirective} from './directive/hide-element.directive';
import {HoldDeleteButtonDirective} from './directive/hold-delete-button.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
   declarations: [
      AppComponent,
      HideElementDirective,
      HoldDeleteButtonDirective
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatFormFieldModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule {
}
