import {ListPageComponent} from "../heroes-module/components/list-page/list-page.component";
import {AboutPageComponent} from "../heroes-module/components/about-page/about-page.component";
import {HomePageComponent} from "../heroes-module/components/home-page/home-page.component";

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
    path: '',
    redirectTo: "/home",
    pathMatch: "full"
  }];
