import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";;
import { Login } from "../models/login";

@Injectable()
export class StudentService  {
    constructor(private httpClient: HttpClient) { }
    GetAll() {
        return this.httpClient.get("https://localhost:7059/api/Student/ListOfStudent");
    }
}