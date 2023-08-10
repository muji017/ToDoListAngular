import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
 export class SamInterceptor implements HttpInterceptor{

    private baseUrl='http://localhost:5000'
 
     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    

        const modReq=req.clone({
            url:`${this.baseUrl}${req.url}`,
            setHeaders:{
                'content-type':'Application/json'
            },
        })
        return next.handle(modReq)
     }

}