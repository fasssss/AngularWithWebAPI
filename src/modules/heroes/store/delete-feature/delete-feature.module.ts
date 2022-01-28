import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { deleteFeatureEffects } from "./delete-effects";
import { deleteReducer } from "./delete-reducer";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature("delete", deleteReducer),
    EffectsModule.forFeature([deleteFeatureEffects])
  ],
  providers: [deleteFeatureEffects]
})
export class DeleteFeatureModule { }
