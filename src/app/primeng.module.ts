import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';



@NgModule({
  exports: [
    ButtonModule,
    ConfirmPopupModule,
    DropdownModule,
    DynamicDialogModule,
    InputTextModule,
    TableModule,
    ToastModule
  ]
})
export class PrimengModule { }
