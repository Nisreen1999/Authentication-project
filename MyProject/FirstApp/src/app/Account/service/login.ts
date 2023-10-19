import { HttpClient, HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";;
import { Login } from "../models/login";
import { Observable } from "rxjs";

@Injectable()

export class LoginService  {
   
    constructor(private httpClient: HttpClient) { }
    model ={
        isAuthenticated :false 
      }
    Login(model :Login) : Observable<any>{
      return this.httpClient.post("https://localhost:7059/api/Auth/login",model,{ headers: { 'Anonymous': '' }});
  }
}