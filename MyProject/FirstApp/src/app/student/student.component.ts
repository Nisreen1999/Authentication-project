import { Component } from '@angular/core';
import { StudentService } from '../Account/service/Student.service';
import { Student } from '../Account/models/student';
import { LoginService } from '../Account/service/login';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
constructor(private studentService :StudentService , public loginService :LoginService){}
students : any | undefined;
ngOnInit(){
  this.studentService.GetAll().subscribe(
    result =>{
      this.students = result;
    }
  )
}
}
