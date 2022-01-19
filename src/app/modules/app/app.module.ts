import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '../../components/app-component/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootStoreModule } from '../../root-store';
import { ListPageComponent } from '../../components/list-page/list-page.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
//import { HeroComponent } from './models/hero/hero.component';
import {FormsModule} from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

export const routeConfig = [
  {
  path: 'list',
  loadChildren: () => import("../list-page/list-page.module")
    .then(m => m.default),
  },
  {
    path: "about",
    loadChildren: () => import("../about-page/about-page.module")
      .then(m => m.default),
  },
  {
    path: "home",
    loadChildren: () => import("../home-page/home-page.module")
      .then(m => m.default),
  },
  {
    path: '',
    redirectTo: "/home",
    pathMatch: "full"
  }];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RootStoreModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    RouterModule.forRoot(routeConfig),
    MatIconModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
