import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import {NgModule, Pipe, PipeTransform} from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { TwFormComponent } from './tw-form/tw-form.component';
import { TwReportComponent } from './tw-report/tw-report.component';

@Pipe({name: 'safe'})
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    TwFormComponent,
    TwReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
