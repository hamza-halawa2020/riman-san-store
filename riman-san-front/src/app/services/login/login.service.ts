import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { environment } from 'src/environments/environment';
import * as jwt from 'jsonwebtoken';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  // private apiUrl = 'https://rimansan.net/api';
  private apiUrl = environment.backEndUrl;


  constructor(private http: HttpClient,private router:Router) {}
  login(userData: any) {
    return this.http.post(`${this.apiUrl}/login`, userData);
  }

// setRole(tokenValue:string){
//   // localStorage.setItem('role',role);
//   localStorage.setItem('token', tokenValue);

// }
// getRole(){
//   // return localStorage.getItem('role');
//   localStorage.getItem('token');

// }
  setToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  // isLoggedIn() {
  //   return this.getRole() && this.getToken();
  // }

  isLoggedIn() {
    return this.getToken();
  }


  isAdmin() {
    return this.getToken();
  }

  // isAdmin() {
  //   const token = this.getToken();

  //   if (token) {
  //     try {
  //       const decodedToken: any = jwt.verify(token, 'your-secret-key');
        
  //       // Assuming your token has a 'role' field
  //       return decodedToken.role === 'admin';
  //     } catch (error) {
  //       console.error('Error decoding token:', error);
  //       return false; // Token is invalid or expired
  //     }
  //   }

  //   return false; // Token not found
  // }







  // getUserRole() {
  //   return this.getRole() ;
  // }
  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }
}
