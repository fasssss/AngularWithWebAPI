import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from '../heroes-module/components/about-page/about-page.component';
import {RouterModule} from "@angular/router";

const routerConfig = [{
  path: '',
  component: AboutPageComponent,
}]

@NgModule({
  declarations: [
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routerConfig),
  ]
})
export default class AboutPageModule { }
