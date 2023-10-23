import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './student/pages/students/students.component';

const routes: Routes = [
  {
    path: "students",
    component: StudentsComponent
  },
  {
    path: '**',
    redirectTo: 'students'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
