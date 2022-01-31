import { NgModule } from '@angular/core';

import { AppComponent } from './components/app-component/app.component';
import {imports} from "./settings/imports";
import {providers} from "./settings/providers";
import {declarations} from "./settings/declarations";

@NgModule({
  declarations: declarations,
  imports: imports,
  providers: providers,
  bootstrap: [AppComponent]
})

export class AppModule { }
