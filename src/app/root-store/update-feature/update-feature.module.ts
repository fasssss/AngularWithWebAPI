import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { updateFeatureEffects } from "./update-effects";
import { UpdateReducer } from "./update-reducer";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature("update", UpdateReducer),
    EffectsModule.forFeature([updateFeatureEffects])
  ],
  providers: [updateFeatureEffects]
})
export class UpdateFeatureModule { }
