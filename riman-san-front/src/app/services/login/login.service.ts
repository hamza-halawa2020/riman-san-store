import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { CookieService } from 'ngx-cookie-service';
import { TokenAuthInterceptor } from 'src/app/interceptor/token-auth.interceptor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = environment.backEndUrl;
  private httpOptions = { headers: new HttpHeaders({ 'Content-Type':'application/json','Access-Control-Allow-Origins':'*'})};
  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {}
  login(userData: any) {
    return this.http.post(`${this.apiUrl}/login`, userData, 
    // this.httpOptions,
    {
      withCredentials: false,
    }
    );
  }
  




  

  setTokenInCookie(token: string) {
    this.cookieService.set('auth_token', token);
  }
  getTokenFromCookie(): string {
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
    // return TokenAuthInterceptor.accessToken;

    return this.getTokenFromCookie();
  }

  isAdmin() {
    // return this.getToken();
    return this.getTokenFromCookie();
    // return TokenAuthInterceptor.accessToken;

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
