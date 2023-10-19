import { Component } from '@angular/core';
import { CourseService } from '../Account/service/Course.service';
import { LoginService } from '../Account/service/login';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  constructor(private courseService :CourseService ,public loginService :LoginService){}
  courses : any | undefined;
  ngOnInit(){
    this.courseService.GetAll().subscribe(
      result =>{
        this.courses = result;
      }
    )
  }
}
