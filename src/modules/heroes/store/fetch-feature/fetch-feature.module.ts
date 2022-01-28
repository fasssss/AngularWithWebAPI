import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { fetchFeatureEffects } from "./fetch-effects";
import {fetchReducer} from "./fetch-reducer";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('fetch', fetchReducer),
    EffectsModule.forFeature([fetchFeatureEffects])
  ],
  providers: [fetchFeatureEffects]
})
export class FetchFeatureModule { }
