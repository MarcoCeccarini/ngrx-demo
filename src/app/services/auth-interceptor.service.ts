import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { AuthService } from "./auth.service.";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private loginservice: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


        const token = this.loginservice.getToken();

        console.log("interceptor", token);

        if (token != null) {
            console.log("hello");

            req = req.clone(
                {
                    setHeaders: {
                        'Content-Type': 'application/json; charset=utf-8',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
            )
        }
        return next.handle(req);

    }

}