import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { Hero } from "../../models/hero";
import {MatDialog} from "@angular/material/dialog";
import {Store} from "@ngrx/store";
import {
  RootStoreState,
  HeroesStoreSelector,
} from "../../../root-store";
import {HeroesStoreActions} from "../../../root-store"
import {Observable, of} from "rxjs";
import {Router} from "@angular/router";
import {Actions} from "@ngrx/effects";

@Component({
  selector: 'app-main-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPageComponent implements OnInit{

  displayedColumns: Array<string> = ["name", "age", "height", "heroPoints", "superPowers", "superVillain","Actions"];
  selectedRow?: Hero;
  heroFromModal: Hero = {name: '', age: 0, height: 0, superVillain: '', superPowers: '', heroPoints: 0,};
  searchField: string = "";
  heroesList$?: Observable<Array<Hero> | null>;
  heroesList: Hero[] = [];
  displayHeroList: Hero[] = [];
  updatedHero: Hero | undefined;

  constructor(public dialog: MatDialog,
              private store$: Store<RootStoreState.State>,
              private  cdr: ChangeDetectorRef,
              private router: Router) { }

  ngOnInit() {
    this.store$.dispatch(new HeroesStoreActions.FetchActionRequest({name: null}));
    this.heroesList$ = this.store$.select(HeroesStoreSelector.selectHeroesList);

    this.heroesList$.subscribe(res => {
      this.heroesList = res!;
      this.displayHeroList = this.heroesList;
      this.cdr.detectChanges();});

    this.store$.select(HeroesStoreSelector.selectHero).subscribe(res => {
      if (res !== null) {
        this.heroesList = new Array(...this.heroesList, res);
        this.displayHeroList = this.heroesList;
        this.cdr.detectChanges();
      }
    });

    this.store$.select(HeroesStoreSelector.selectError).subscribe(res => {
      if(res !== null) {
        console.log("(Temporary console error notification) Sorry, Can't add this user");
      }
    });

    this.store$.select(HeroesStoreSelector.selectHeroName).subscribe( res =>{
      if(res !== null){
        this.heroesList = this.heroesList.filter(item => item.name !== res);
        this.displayHeroList = this.heroesList;
      }
    });

    this.store$.select(HeroesStoreSelector.selectHero).subscribe(res => {
      if(res !== null && this.updatedHero !== undefined){
        let copyArray = [...this.heroesList];
        let index = copyArray.indexOf(this.updatedHero);
        copyArray[index] = res;
        this.heroesList = copyArray;
        this.displayHeroList = this.heroesList;
        this.cdr.detectChanges();
      }
    });
  }

  handleSearch(){
    this.displayHeroList = this.heroesList;
    this.displayHeroList = this.heroesList.filter(hero => hero.name?.startsWith(this.searchField));
  }

  handleDelete(row: Hero){
    if(row !== undefined) {
      this.store$.dispatch(new HeroesStoreActions.DeleteActionRequest({name: row.name!}));
    }
  }

  handleUpdate(row: Hero){
    console.log(this.router.config);
    this.router.navigateByUrl('heroes/edit', {state: row});
  }

  handleCreate(){
    console.log(this.router.config);
    this.router.navigateByUrl('heroes/create');
  }

  refreshClickHandler(){
    this.store$.dispatch(new HeroesStoreActions.FetchActionRequest({name: null}));
    this.heroesList$ = this.store$.select(HeroesStoreSelector.selectHeroesList);
    this.heroesList$.subscribe(res => {
      this.heroesList = res!;
      this.displayHeroList = this.heroesList;
      this.cdr.detectChanges();});
  }
}
