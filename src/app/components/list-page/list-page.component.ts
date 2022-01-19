import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { Hero } from "../../models/hero";
import {MatDialog} from "@angular/material/dialog";
import {CreateNewModalComponent} from "../modals/create-new-modal/create-new-modal.component";
import {Store} from "@ngrx/store";
import {
  DeleteStoreSelectors,
  FetchStoreSelectors,
  PostStoreSelectors,
  RootStoreState,
  UpdateStoreSelectors
} from "../../root-store";
import {PostStoreActions, FetchStoreActions, DeleteStoreActions, UpdateStoreActions} from "../../root-store"
import {Observable, of} from "rxjs";
import {UpdateModalComponent} from "../modals/update-modal/update-modal.component";

@Component({
  selector: 'app-main-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPageComponent implements OnInit{

  displayedColumns: Array<string> = ["name", "age", "height", "heroPoints", "superPowers", "superVillain"];
  selectedRow?: Hero;
  heroFromModal: Hero = {name: '', age: 0, height: 0, superVillain: '', superPowers: '', heroPoints: 0,};
  heroesList$?: Observable<Array<Hero> | null>;
  heroesList: Hero[] = [];
  updatedHero: Hero | undefined;

  constructor(public dialog: MatDialog,
              private store$: Store<RootStoreState.State>,
              private  cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.store$.dispatch(new FetchStoreActions.FetchActionRequest({name: null}));
    this.heroesList$ = this.store$.select(FetchStoreSelectors.fetchHeroesListSelector);

    this.heroesList$.subscribe(res => {
      this.heroesList = res!;
      this.cdr.detectChanges();});

    this.store$.select(PostStoreSelectors.selectPostHero).subscribe(res => {
      if (res !== null) {
        this.heroesList = new Array(...this.heroesList, res);
        this.cdr.detectChanges();
      }
    });

    this.store$.select(PostStoreSelectors.selectPostFailure).subscribe(res => {
      if(res !== null) {
        console.log("(Temporary console error notification) Sorry, Can't add this user");
      }
    });

    this.store$.select(DeleteStoreSelectors.selectDeleteName).subscribe( res =>{
      if(res !== null){
        this.heroesList = this.heroesList.filter(item => item.name !== res);
      }
    });

    this.store$.select(UpdateStoreSelectors.selectUpdateHero).subscribe(res => {
      if(res !== null && this.updatedHero !== undefined){
        let copyArray = [...this.heroesList];
        let index = copyArray.indexOf(this.updatedHero);
        copyArray[index] = res;
        this.heroesList = copyArray;
        this.cdr.detectChanges();
      }
    });
  }

  rowClickHandler(clickedRow: Hero){
    if(this.selectedRow === clickedRow){
      this.selectedRow = undefined;
    }else{
      this.selectedRow = clickedRow;
      console.log(this.selectedRow);
    }
  }

  newItemClickHandler(){
    this.heroFromModal = {name: '', age: 0, height: 0, superVillain: '', superPowers: '', heroPoints: 0,};
    const dialogRef = this.dialog.open(CreateNewModalComponent,
      {
        width: '500px',
        data: this.heroFromModal
      });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if(result === 'Add'){
        this.store$.dispatch(
          new PostStoreActions.PostRequestAction({
            name: this.heroFromModal.name!,
            heroPoints: this.heroFromModal.heroPoints!,
            age: this.heroFromModal.age!,
            height: this.heroFromModal.height!,
            superPowers: this.heroFromModal.superPowers!,
            superVillain: this.heroFromModal.superVillain!
            })
        );
      }
    });
  }

  refreshClickHandler(){
    this.store$.dispatch(new FetchStoreActions.FetchActionRequest({name: null}));
    this.heroesList$ = this.store$.select(FetchStoreSelectors.fetchHeroesListSelector);
    this.heroesList$.subscribe(res => {
      this.heroesList = res!;
      this.cdr.detectChanges();});
  }

  updateItemHandler(){
    this.heroFromModal = {
      name: this.selectedRow?.name,
      age: this.selectedRow?.age,
      height: this.selectedRow?.height,
      superVillain: this.selectedRow?.superVillain,
      superPowers: this.selectedRow?.superPowers,
      heroPoints: this.selectedRow?.heroPoints,
    };

    const dialogRef = this.dialog.open(UpdateModalComponent,
      {
        width: '500px',
        data: this.heroFromModal
      });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result)
      if(result === 'Update'){
        this.updatedHero = this.selectedRow;
        this.store$.dispatch(
          new UpdateStoreActions.UpdateRequestAction({
            name: this.heroFromModal.name!,
            heroPoints: this.heroFromModal.heroPoints!,
            age: this.heroFromModal.age!,
            height: this.heroFromModal.height!,
            superPowers: this.heroFromModal.superPowers!,
            superVillain: this.heroFromModal.superVillain!
          })
        );
      }
    });
  }

  removeClickHandler(){
    if(this.selectedRow !== undefined) {
      this.store$.dispatch(new DeleteStoreActions.DeleteActionRequest({name: this.selectedRow.name!}));
    }
  }
}
