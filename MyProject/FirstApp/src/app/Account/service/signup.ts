import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Signup } from "../models/signup";

@Injectable()
export class SignupService  {
    constructor(private httpClient: HttpClient) { }
    Sginup(model :Signup) {
        debugger
        return this.httpClient.post("https://localhost:7059/api/Auth/Register",model);
    }
    LoadRole(){
        return this.httpClient.get("https://localhost:7059/api/Auth/GetAllRoles");
     }
}