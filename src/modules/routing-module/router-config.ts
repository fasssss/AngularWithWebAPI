import {ListPageComponent} from "../heroes-module/components/list-page/list-page.component";
import {AboutPageComponent} from "../../app/components/about-page/about-page.component";
import {HomePageComponent} from "../../app/components/home-page/home-page.component";
import {HeroCreatorComponent} from "../heroes-module/components/hero-creator/hero-creator.component";
import {HeroEditorComponent} from "../heroes-module/components/hero-editor/hero-editor.component";

export const routeConfig = [
  {
    path: 'list',
    component: ListPageComponent,
  },
  {
    path: "about",
    component: AboutPageComponent,
  },
  {
    path: "home",
    component: HomePageComponent,
  },
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
    redirectTo: "/home",
    pathMatch: "full"
  }];
