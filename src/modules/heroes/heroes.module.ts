import { NgModule } from '@angular/core';
import {ListPageComponent} from "./components/list-page/list-page.component";
import {imports} from "./settings/imports";
import {declarations} from "./settings/declarations";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: declarations,
    imports: [
        imports,
        MatIconModule
    ],
  exports: [ListPageComponent],
})
export default class HeroesModule { }
