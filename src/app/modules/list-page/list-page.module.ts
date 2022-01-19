import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListPageComponent} from "../../components/list-page/list-page.component";
import {MatTableModule} from "@angular/material/table";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {CreateNewModalComponent} from "../../components/modals/create-new-modal/create-new-modal.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  ErrorCreateNewModalComponent
} from "../../components/modals/error-create-new-modal/error-create-new-modal.component";
import {UpdateModalComponent} from "../../components/modals/update-modal/update-modal.component";

const routerConfig =[{
    path: '',
    component: ListPageComponent,
  }
]


@NgModule({
  declarations: [
    ListPageComponent,
    CreateNewModalComponent,
    UpdateModalComponent,
    ErrorCreateNewModalComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild(routerConfig),
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ListPageComponent],
})
export default class ListPageModule { }
