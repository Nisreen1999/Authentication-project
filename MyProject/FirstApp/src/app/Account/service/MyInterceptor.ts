import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CourseService } from "./Course.service";
@Injectable()
export class MyInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        debugger
        const re = /login/;
        if (request.url.search(re) === -1 ) {
            debugger
     const localToken = localStorage.getItem('token') ;
     request = request.clone({headers :request.headers.set('Authorization','bearer ' + localToken)});
     console.log("print token ")
        }
     return next.handle(request);
        
    }

}