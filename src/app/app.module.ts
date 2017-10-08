import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Story1Component } from './stories/story1.component';
import { Story2Component } from './stories/story2.component';
import { Story3Component } from './stories/story3.component';
import { Story4Component } from './stories/story4.component';
import { Story5Component } from './stories/story5.component';


@NgModule({
  declarations: [
    AppComponent,
    Story1Component,
    Story2Component,
    Story3Component,
    Story4Component,
    Story5Component
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
