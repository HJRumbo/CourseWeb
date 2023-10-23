import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl: string = '';

  constructor(private http: HttpClient) 
  {
    this.baseUrl = environment.baseUrl;
  }

  getCoursesByStudentId(studentId: number):Observable<Course[]>{
    return this.http.get<Course[]>(`${this.baseUrl}/Course/GetStudentCourses/${studentId}`);
  }

  getAvailableCourses(studentId: number):Observable<Course[]>{
    return this.http.get<Course[]>(`${this.baseUrl}/Course/GetAvailableCourses/${studentId}`);
  }
}
