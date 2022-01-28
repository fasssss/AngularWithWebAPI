import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { postFeatureEffects } from "./post-effects";
import { PostReducer } from "./post-reducer";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature("post", PostReducer),
    EffectsModule.forFeature([postFeatureEffects])
  ],
  providers: [postFeatureEffects]
})
export class PostFeatureModule { }
