import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './src/components/header/header.component';
import { NewsComponent } from './src/components/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
