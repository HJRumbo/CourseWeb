import { Component, OnDestroy, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Student } from '../../models/student';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddCourseComponent } from 'src/app/features/course/dialogs/add-course/add-course.component';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [DialogService]
})
export class StudentsComponent implements OnInit, OnDestroy {

  ref: DynamicDialogRef | undefined;
  students: Student[] = [];
  searchText: string = '';

  constructor(private studentService: StudentService, public dialogService: DialogService) { }

  ngOnInit(): void {
    this.studentService.getAllStudents().subscribe(response => this.students = response);
  }

  show(student: Student) {
    this.ref = this.dialogService.open(AddCourseComponent, {
        header: 'Cursos de '+student.name + ' ' + student.lastName,
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: true,
        data: {
          student: student
      },
    });
  }

  ngOnDestroy() {
    if (this.ref) {
        this.ref.close();
    }
}
}
