import {ListPageComponent} from "../../../modules/heroes-module/components/list-page/list-page.component";
import {HomePageComponent} from "../../components/home-page/home-page.component";
import {AboutPageComponent} from "../../components/about-page/about-page.component";
import HeroesModule from "../../../modules/heroes-module/heroes.module";

export const routerConfig = [
  {
    path: "about",
    component: AboutPageComponent,
  },
  {
    path: "home",
    component: HomePageComponent,
  },
  {
    path: "list",
    loadChildren: () => import("../../../modules/heroes-module/heroes.module")
      .then(mod => mod.default),
  },
  {
    path: '',
    redirectTo: "/home",
    pathMatch: "full"
  }];
