import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SamplePage1Component } from './sample-page1/sample-page1.component';
import { SamplePage2Component } from './sample-page2/sample-page2.component';
import { SamplePage3Component } from './sample-page3/sample-page3.component';
import { TestPageComponent } from './test-page/test-page.component';

const routes: Routes = [
  { path: '', component: TestPageComponent, children: [
    { path: 'page1', component: SamplePage1Component},
    { path: 'page2', component: SamplePage2Component},
    { path: 'page3', component: SamplePage3Component},
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
