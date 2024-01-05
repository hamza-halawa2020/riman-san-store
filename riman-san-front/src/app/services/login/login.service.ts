import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  // private apiUrl = 'https://rimansan.net/api';
  private apiUrl = environment.backEndUrl;

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {}
  login(userData: any) {
    return this.http.post(`${this.apiUrl}/login`, userData, {
      withCredentials: false,
    });
  }

  setTokenInCookie(token: string) {
    // Set the token in a cookie with a specific name (e.g., 'auth_token')
    this.cookieService.set('auth_token', token);
  }
  getTokenFromCookie(): string {
    // Get the token from the cookie
    return this.cookieService.get('auth_token');
  }

  // setRole(tokenValue:string){
  //   // localStorage.setItem('role',role);
  //   localStorage.setItem('token', tokenValue);

  // }
  // getRole(){
  //   // return localStorage.getItem('role');
  //   localStorage.getItem('token');

  // }
  // setToken(tokenValue: string) {
  //   localStorage.setItem('token', tokenValue);
  // }

  // getToken() {
  //   return localStorage.getItem('token');
  // }

  // isLoggedIn() {
  //   return this.getRole() && this.getToken();
  // }

  isLoggedIn() {
    // return this.getToken();
    return this.getTokenFromCookie();
  }

  isAdmin() {
    // return this.getToken();
    return this.getTokenFromCookie();
  }

  // getUserRole() {
  //   return this.getRole() ;
  // }
  logout() {
    // localStorage.clear();
    this.cookieService.delete('auth_token');
    this.router.navigate(['']);
  }
}
