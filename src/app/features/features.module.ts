import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { StudentsComponent } from './student/pages/students/students.component';

import { HttpClientModule } from '@angular/common/http';
import { PrimengModule } from '../primeng.module';
import { AddCourseComponent } from './course/dialogs/add-course/add-course.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StudentsComponent,
    AddCourseComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    HttpClientModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FeaturesModule { }
