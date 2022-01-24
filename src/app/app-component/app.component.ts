import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SeriousCRUDAngular';

  constructor(private router: Router) {}

  routeToMainPage()
  {
    this.router.navigateByUrl('/list');
  }

  routeToAboutPage(){
    this.router.navigateByUrl("/about");
  }

  routeToHomePage(){
    this.router.navigateByUrl("/home");
  }
}
