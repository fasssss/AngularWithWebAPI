import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {Reducer} from "./reducer";
import {heroesFeatureEffects} from "./effects";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature("heroes", Reducer),
    EffectsModule.forFeature([heroesFeatureEffects]),
  ],
  providers: []
})

export class HeroesStoreModule { }
