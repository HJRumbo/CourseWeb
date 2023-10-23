import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from '../models/student';
import { Response } from 'src/app/core/models/response';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl: string = '';

  constructor(private http: HttpClient) 
  {
    this.baseUrl = environment.baseUrl;
  }

  getAllStudents():Observable<Student[]>{
    return this.http.get<Student[]>(`${this.baseUrl}/Student`);
  }

  registerCourse(studentId: number, courseId: number):Observable<Response<boolean>>{
    return this.http.put<Response<boolean>>(`${this.baseUrl}/Student/RegisterCourse`, {studentId, courseId});
  }

  removeCourse(studentId: number, courseId: number):Observable<Response<boolean>>{
    return this.http.put<Response<boolean>>(`${this.baseUrl}/Student/RemoveCourse`, {studentId, courseId});
  }
}
