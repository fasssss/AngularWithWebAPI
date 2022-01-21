import { Injectable } from '@angular/core';
import { Hero } from "../models/hero";
import {delay, Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { serverURL } from "../../../const";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

interface deletionResult{
  result?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  post(name: string,
       heroPoints: number,
       age?: number,
       height?: number,
       superPowers?: string,
       superVillain?: string
  ): Observable<Hero>{
    let hero: Hero = {name: name, heroPoints: heroPoints, age: age, height: height, superPowers: superPowers, superVillain: superVillain};
    return this.http.post(serverURL, hero, httpOptions);
  }

  fetch(name: string | null){
    if(name === null){
      return this.http.get(serverURL, httpOptions);
    }else{
      return this.http.get(serverURL + '/' + name, httpOptions);
    }
  }

  update(name: string,
       heroPoints: number,
       age?: number,
       height?: number,
       superPowers?: string,
       superVillain?: string
  ): Observable<Hero>{
    let hero: Hero = {name: name, heroPoints: heroPoints, age: age, height: height, superPowers: superPowers, superVillain: superVillain};
    return this.http.patch(serverURL, hero, httpOptions);
  }

  delete(name: string): Observable<deletionResult> {
    return this.http.delete(serverURL + '/' + name, httpOptions);
  }
}
