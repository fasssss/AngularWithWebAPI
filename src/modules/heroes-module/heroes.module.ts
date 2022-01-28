import { NgModule } from '@angular/core';
import {ListPageComponent} from "./components/list-page/list-page.component";
import {imports} from "./settings/imports";
import {declarations} from "./settings/declarations";

@NgModule({
  declarations: declarations,
  imports: imports,
  exports: [ListPageComponent],
})
export default class HeroesModule { }
