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
  isAuthenticated(): boolean {
    return this.getTokenFromCookie().token? true : false;
  }

  setTokenInCookie(token: string) {
    this.cookieService.set('token', token);
  }
  getTokenFromCookie(): any {
    return this.cookieService.get('token');
  }
  setRoleInCookie(role: string) {
    this.cookieService.set('role', role);
  }
  getRoleFromCookie() {
    return this.cookieService.get('role');
  }

  isLoggedIn() {
    return this.getTokenFromCookie();
  }

  isAdmin() {
    return this.getRoleFromCookie() === 'admin';
  }

  logout() {
    this.cookieService.deleteAll();
    this.router.navigate(['']);
  }
}
