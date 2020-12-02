import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    baseUrl = environment.apiUrl + 'auth/';
    jwtHelper = new JwtHelperService();
    decodedToken: any;
  
  constructor(private http: HttpClient) { }
  
  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(
        map((response: any) => {
          const user = response; 
          if (user) {
            localStorage.setItem('token', user.token);
            this.decodedToken = this.jwtHelper.decodeToken(user.token);
            console.log(this.decodedToken);
          }
        })
      );
  }
  
  register(user: any) {
    return this.http.post(this.baseUrl + 'register', user);
  }
  
  loggedIn() {
    const token = JSON.parse(localStorage.getItem('token') || '{}');

    return !this.jwtHelper.isTokenExpired(token);
  }
}