import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostFeatureModule } from './post-feature';
import { DeleteFeatureModule } from './delete-feature';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {FetchFeatureModule} from "./fetch-feature";
import {UpdateFeatureModule} from "./update-feature";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PostFeatureModule,
    DeleteFeatureModule,
    FetchFeatureModule,
    UpdateFeatureModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  providers: []
})

export class HeroesStoreModule { }
