import { Component, OnInit } from '@angular/core';
import { Course } from '../../models/course';
import { CourseService } from '../../services/course.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Student } from 'src/app/features/student/models/student';
import { ConfirmationService, MessageService } from 'primeng/api';
import { StudentService } from 'src/app/features/student/services/student.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],
  providers: [DynamicDialogRef, ConfirmationService, MessageService]
})


export class AddCourseComponent implements OnInit {
  studentCourses: Course[] = []; 
  availableCourses: Course[] = []; 
  student!: Student;

  formGroup: FormGroup;

  constructor(private courseService: CourseService, 
    private studentService: StudentService,
    public ref: DynamicDialogRef, 
    public config: DynamicDialogConfig,
    private confirmationService: ConfirmationService, 
    private messageService: MessageService) {

      this.formGroup = new FormGroup({
        selectedAvailableCourse: new FormControl<Course | null>(null, [Validators.required])
      });
    
  }

  ngOnInit(): void {
    this.student = this.config.data.student;
    this.getCoursesByStudentId();    
    this.getAvailableCourses();
  }

  getCoursesByStudentId() {
    this.courseService.getCoursesByStudentId(this.student.id).subscribe(c => this.studentCourses = c);  
  }

  getAvailableCourses() {
    this.courseService.getAvailableCourses(this.student.id).subscribe(c => this.availableCourses = c);  
  }

  registerCourse() {

    if (this.formGroup.invalid || this.formGroup.pending) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Debe seleccionar un curso.' });
      return;
    }
    
    let selectedAvailableCourse = this.formGroup?.get('selectedAvailableCourse')?.value;

    this.studentService.registerCourse(this.student.id, selectedAvailableCourse.id).subscribe(response => {
      if(response) {
        this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: response.message });
        this.getCoursesByStudentId();   
        this.getAvailableCourses();   
      }
    });
  }

  removeCourse(courseId: number, event: Event) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: '¿Está seguro que quiere remover al estudiante de este curso?',
        icon: 'pi pi-exclamation-triangle',
        acceptLabel: 'Sí',
        accept: () => {
          this.studentService.removeCourse(this.student.id, courseId).subscribe(response => {
            if(response) {
              this.messageService.add({ severity: 'info', summary: 'Confirmado', detail: response.message });
              this.getCoursesByStudentId();
              this.getAvailableCourses();   
            }
          });
            
        },
        reject: () => {
            this.messageService.add({ severity: 'error', summary: 'Cancelado', detail: 'Has cancelado esta operación.' });
        }
    });
  }

}
