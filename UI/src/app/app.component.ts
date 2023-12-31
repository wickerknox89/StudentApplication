import { Component } from '@angular/core';
import { StudentService } from './services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UI';
  students: any[]=[];

  constructor(private studentService: StudentService){}

  ngOnInit(){
    this.studentService.getAllStudents().subscribe(data => {
      this.students=data;
      console.log(this.students)
    });
  }
}
