import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SignupComponent } from './Account/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Account/login/login.component';
import { RouterModule, Routes, provideRouter } from '@angular/router';
import { SignupService } from './Account/service/signup';
import { LoginService } from './Account/service/login';
import { RoleService } from './Account/service/role-service';
import { CourseComponent } from './course/course.component';
import { StudentComponent } from './student/student.component';
import { CourseService } from './Account/service/Course.service';
import { StudentService } from './Account/service/Student.service';
import { Menu2Component } from './menu2/menu2.component';
import { Role } from './Account/models/Roles';
import { MyInterceptor } from './Account/service/MyInterceptor';
import { MenuComponent } from './menu/menu.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'menu2',
    component: Menu2Component,
  },
  {
      path: 'signup',
      component: SignupComponent,
  },
  {
    path: 'menu2/Students',
    component: StudentComponent , 

  },
  {
  path: 'menu2/Courses',
  component: CourseComponent,
  }]
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    CourseComponent,
    StudentComponent,
    Menu2Component,
    MenuComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,  
    RouterModule.forRoot(routes),
    
  ],
  providers: [
    SignupService,
    LoginService,
    RoleService,
    CourseService,
    StudentService,
    {
      provide : HTTP_INTERCEPTORS , useClass :MyInterceptor,
      multi : true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
