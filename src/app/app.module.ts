import {NgModule, Pipe, PipeTransform} from '@angular/core';
import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { TwFormComponent } from './tw-form/tw-form.component';
import { TwReportComponent } from './tw-report/tw-report.component';
import { RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
//import { ToastrModule } from 'ngx-toastr';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { appRoutes } from './routes';
//import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TestPageComponent } from './test-page/test-page.component';
import { SamplePage1Component } from './sample-page1/sample-page1.component';
import { SamplePage2Component } from './sample-page2/sample-page2.component';
import { SamplePage3Component } from './sample-page3/sample-page3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialDashboardComponent } from './material-dashboard/material-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';

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
    SignUpComponent,
    UserComponent,
    SignInComponent,
    //HomeComponent
    FooterComponent,
    HeaderComponent,
    TestPageComponent,
    SamplePage1Component,
    SamplePage2Component,
    SamplePage3Component
    MaterialDashboardComponent
  ],

  imports: [
    BrowserModule,
    ReactiveFormsModule
    FormsModule,
    HttpClientModule,
    //ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
