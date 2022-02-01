import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroupDirective, NgForm, Validator, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {Hero} from "../../models/hero";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {HeroesStoreActions, RootStoreState} from "../../../root-store";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-hero-editor',
  templateUrl: './hero-editor.component.html',
  styleUrls: ['./hero-editor.component.scss']
})
export class HeroEditorComponent implements OnInit {
  data: Hero = {name: "", heroPoints: 0, height: 0, superVillain: "", superPowers: "", age: 0};
  ageFormControl = new FormControl('', [Validators.required, Validators.min(0)]);
  heightFormControl = new FormControl('', [Validators.required, Validators.min(0)]);
  superPowersFormControl = new FormControl('', [Validators.required]);
  superVillainFormControl = new FormControl('', [Validators.required]);
  heroPointsFormControl = new FormControl('', [Validators.required, Validators.min(0)]);
  matcher = new MyErrorStateMatcher();

  constructor(
    private store$: Store<RootStoreState.State>,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.data = history.state;
  }

  onSaveClick = () =>{

    this.store$.dispatch(
      new HeroesStoreActions.UpdateRequestAction({
        name: this.data.name!,
        height: this.data.height!,
        age: this.data.age!,
        heroPoints: this.data.heroPoints!,
        superPowers: this.data.superPowers!,
        superVillain: this.data.superVillain!,
      })
    );
    this.router.navigateByUrl('heroes');
  }

  closeClickHandler = () =>{
    this.router.navigateByUrl('heroes');
  }
}
