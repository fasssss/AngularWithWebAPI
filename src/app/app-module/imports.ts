import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RootStoreModule} from "../../modules/root-store";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {routeConfig} from "../../modules/routing-module/router-config";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import HeroesModule from "../../modules/heroes-module/heroes.module";
import {AppRouterModule} from "../../modules/routing-module/app-router.module";


export const imports = [
  BrowserModule,
  BrowserAnimationsModule,
  RootStoreModule,
  MatToolbarModule,
  MatButtonModule,
  RouterModule,
  AppRouterModule,
  MatIconModule,
  FormsModule,
  HttpClientModule,
  HeroesModule,
]
