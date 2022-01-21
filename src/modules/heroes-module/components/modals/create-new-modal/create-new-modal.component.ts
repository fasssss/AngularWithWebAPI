import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Hero} from "../../../models/hero";
import {FormControl, FormGroupDirective, NgForm, Validator, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-create-new-modal',
  templateUrl: './create-new-modal.component.html',
  styleUrls: ['./create-new-modal.component.css']
})
export class CreateNewModalComponent {

  nameFormControl = new FormControl('', [Validators.required]);
  ageFormControl = new FormControl('', [Validators.required, Validators.min(0)]);
  heightFormControl = new FormControl('', [Validators.required, Validators.min(0)]);
  superPowersFormControl = new FormControl('', [Validators.required]);
  superVillainFormControl = new FormControl('', [Validators.required]);
  heroPointsFormControl = new FormControl('', [Validators.required, Validators.min(0)]);
  matcher = new MyErrorStateMatcher();
  isAnyError = (this.nameFormControl.hasError('required') ||
    this.ageFormControl.hasError('required') ||
    this.ageFormControl.hasError('min') ||
    this.heightFormControl.hasError('required') ||
    this.heightFormControl.hasError('min') ||
    this.superPowersFormControl.hasError('required') ||
    this.superVillainFormControl.hasError('required') ||
    this.heroPointsFormControl.hasError('required') ||
    this.heroPointsFormControl.hasError('min')
  );

  constructor(
    public dialogRef: MatDialogRef<CreateNewModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hero,
  ) { }

  acceptClickHandler(){
    if(this.data.name !== undefined &&
      this.data.age !== undefined &&
      this.data.height !== undefined &&
      this.data.heroPoints !== undefined &&
      this.data.superVillain !== undefined &&
      this.data.superPowers !== undefined
    ){
      if(this.data.name !== '' &&
        this.data.age >= 0 &&
        this.data.heroPoints >= 0 &&
        this.data.superPowers !== '' &&
        this.data.superVillain !== ''
      ){
        this.dialogRef.close('Add')
      }
    }
  }

  closeClickHandler(): void {
    this.dialogRef.close();
  }

}
