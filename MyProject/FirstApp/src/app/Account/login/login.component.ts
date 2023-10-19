import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Login } from '../models/login';
import { LoginService } from '../service/login';
import { Router } from '@angular/router';
import { Observable, catchError, tap, throwError } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private loginService:LoginService,
    private router: Router,
    ){
    }
  form = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  })
  async Login() {
   debugger
   var loginModel = new Login();
   loginModel.username = this.form.controls.username.value;
   loginModel.password = this.form.controls.password.value;
     this.loginService.Login(loginModel)
     .pipe(
       catchError(() => {
         this.loginService.model.isAuthenticated = false;
         console.log("Invalid Username or password")
         return throwError(Error);
       })
     ).subscribe(res => {
           this.loginService.model.isAuthenticated = true;
           this.setToken(res);
           if(this.loginService.model.isAuthenticated == true){
           this.router.navigateByUrl(
           this.router.parseUrl(this.router.url).queryParams['redirectTo'] || '/menu2'
          );
          }
     }); 
   }
   private setToken(res: any) {
    localStorage.setItem('token', res.token);
} 
SignupPage(){
    this.router.navigate(['/signup'])
   }
}

