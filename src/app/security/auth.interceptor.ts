import { AuthService } from 'src/app/security/auth.service';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authService = this.injector.get(AuthService);
    if (authService.isLogged()) {
      const authRequest = req.clone({
        setHeaders: {
          // Authorization: `Bearer ${localStorage.getItem('jwt') }`
        }
      });
      return next.handle(authRequest);
    }
    console.log('interception: ', req);
    return null;
  }

}
