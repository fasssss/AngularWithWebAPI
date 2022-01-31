import {ListPageComponent} from "../../modules/heroes/components/list-page/list-page.component";
import {HomePageComponent} from "../components/home-page/home-page.component";
import {AboutPageComponent} from "../components/about-page/about-page.component";
import HeroesModule from "../../modules/heroes/heroes.module";

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
    path: "heroes",
    loadChildren: () => import("../../modules/heroes/heroes.module")
      .then(mod => mod.default),
  },
  {
    path: '',
    redirectTo: "/home",
    pathMatch: "full"
  }];
