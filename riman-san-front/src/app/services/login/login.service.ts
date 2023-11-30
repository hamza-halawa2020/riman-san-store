import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient,private router:Router) {}
  login(userData: any) {
    return this.http.post(`${this.apiUrl}/login`, userData);
  }

setRole(role:string){
  localStorage.setItem('role',role);
}
getRole(){
  return localStorage.getItem('role');
}
  setToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getRole() && this.getToken();
  }
  isAdmin(): boolean {
    return this.getRole() === 'admin';
  }
  // getUserRole() {
  //   return this.getRole() ;
  // }
  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }
}
