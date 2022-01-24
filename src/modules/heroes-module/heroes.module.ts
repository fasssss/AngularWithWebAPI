import { NgModule } from '@angular/core';
import {ListPageComponent} from "./components/list-page/list-page.component";
import {imports} from "./imports";
import {declarations} from "./declarations";

@NgModule({
  declarations: declarations,
  imports: imports,
  exports: [ListPageComponent],
})
export default class HeroesModule { }
