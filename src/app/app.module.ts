import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Story1Component } from './pages/story1.component';
import { Story2Component } from './pages/story2.component';
import { Story3Component } from './pages/story3.component';
import { Story4Component } from './pages/story4.component';
import { Story5Component } from './pages/story5.component';
import { QuizComponent } from './pages/quiz.component';


@NgModule({
  declarations: [
    AppComponent,
    Story1Component,
    Story2Component,
    Story3Component,
    Story4Component,
    Story5Component,
    QuizComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
