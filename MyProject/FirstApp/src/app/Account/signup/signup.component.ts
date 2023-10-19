import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Signup } from '../models/signup';
import { SignupService } from '../service/signup';
import { RoleService } from '../service/role-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  roles : any | undefined
  constructor(private signupService:SignupService ,  private roleService :RoleService ,private router: Router,){}
  form = new FormGroup({
    username: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    RoleName : new FormControl(),
  })
  ngOnInit(){
    this.roleService.getAllRoles().subscribe(
      result =>{
        this.roles = result
      }
    )
  }
  Signup(){
    debugger
    var signupModel = new Signup();
    signupModel.username = this.form.controls.username.value;
    signupModel.email = this.form.controls.email.value;
    signupModel.password = this.form.controls.password.value;
    signupModel.roleName = this.form.controls.RoleName.value;
    this.signupService.Sginup(signupModel).subscribe();
  }
  Login(){
    this.router.navigate([''])
  }
}
