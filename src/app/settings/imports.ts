import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RootStoreModule} from "../../modules/root-store";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import HeroesModule from "../../modules/heroes/heroes.module";
import {RoutingModule} from "./routing.module";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "../../modules/heroes/services/in-memory-data.service";
import {environment} from "../../environments/environment";

export const imports = [
  BrowserModule,
  BrowserAnimationsModule,
  RootStoreModule,
  MatToolbarModule,
  MatButtonModule,
  RouterModule,
  RoutingModule,
  MatIconModule,
  FormsModule,
  HttpClientModule,
  environment.production ? [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,
    {passThruUnknownUrl: true}),
]
