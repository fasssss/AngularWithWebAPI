import {ListPageComponent} from "../heroes-module/components/list-page/list-page.component";
import {AboutPageComponent} from "../heroes-module/components/about-page/about-page.component";
import {HomePageComponent} from "../heroes-module/components/home-page/home-page.component";
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
    path: "edit",
    component: HeroEditorComponent,
  },
  {
    path: '',
    redirectTo: "/home",
    pathMatch: "full"
  }];
