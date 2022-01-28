import {HeroCreatorComponent} from "../components/hero-creator/hero-creator.component";
import {HeroEditorComponent} from "../components/hero-editor/hero-editor.component";
import {ListPageComponent} from "../components/list-page/list-page.component";

export const routerConfig = [
  {
    path: "create",
    component: HeroCreatorComponent,
  },
  {
    path: "edit",
    component: HeroEditorComponent,
  },
  {
    path: '',
    component: ListPageComponent
  }];
