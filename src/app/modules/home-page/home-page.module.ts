import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '../../components/home-page/home-page.component';
import {RouterModule} from "@angular/router";

const routerConfig =[{
  path: '',
  component: HomePageComponent,
}]

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routerConfig),
  ]
})
export default class HomePageModule { }
