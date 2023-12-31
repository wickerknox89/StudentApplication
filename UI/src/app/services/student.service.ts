import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getAllStudents():Observable<any[]>{
    return this.http.get<any[]>('http://localhost:5092/api/students');
  }
}
