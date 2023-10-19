import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";;
import { Login } from "../models/login";

@Injectable()
export class RoleService  {
    constructor(private httpClient: HttpClient) { }
    getAllRoles() {
        return this.httpClient.get("https://localhost:7059/api/Auth/GetAllRoles");
    }
}