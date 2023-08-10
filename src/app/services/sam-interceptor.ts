import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable() export class SamInterceptor implements HttpInterceptor{
 
     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
        const modReq=req.clone({
            setHeaders:{
                'content-type':'Application/json'},
        })
        return next.handle(modReq)
     }

}