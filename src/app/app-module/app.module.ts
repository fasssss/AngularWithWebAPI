import { NgModule } from '@angular/core';

import { AppComponent } from '../components/app-component/app.component';
import {imports} from "./imports";
import {providers} from "./providers";
import {declarations} from "./declarations";

@NgModule({
  declarations: declarations,
  imports: imports,
  providers: providers,
  bootstrap: [AppComponent]
})

export class AppModule { }
