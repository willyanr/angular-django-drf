import { LoginService } from './service/login.service';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private LoginService: LoginService){}
  
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    if (typeof window !== 'undefined') {
      let token = localStorage.getItem('token');
      if (token !== null) {
        const authRequest = request.clone({
          setHeaders: {
            'Authorization': `Bearer ${token}`
          }
        });
        const url = request.url 
        return next.handle(authRequest)
        
      }else{
        console.log('houve um erro')

      }
    }
    return next.handle(request);
  }
}
