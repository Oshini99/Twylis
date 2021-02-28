import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwFormComponent } from './tw-form/tw-form.component';
import { TwReportComponent } from './tw-report/tw-report.component';

@NgModule({
  declarations: [
    AppComponent,
    TwFormComponent,
    TwReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
