import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import { HeroesStoreModule } from "../heroes/store";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeroesStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  providers: []
})

export class RootStoreModule { }
