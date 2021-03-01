import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TestPageComponent } from './test-page/test-page.component';
import { SamplePage1Component } from './sample-page1/sample-page1.component';
import { SamplePage2Component } from './sample-page2/sample-page2.component';
import { SamplePage3Component } from './sample-page3/sample-page3.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    TestPageComponent,
    SamplePage1Component,
    SamplePage2Component,
    SamplePage3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
