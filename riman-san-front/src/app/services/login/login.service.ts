import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}
  login(userData: any) {
    return this.http.post(`${this.apiUrl}/login`, userData);
  }
  // login(email:any,password:any){
  //   return this.http.post(`${this.apiUrl}/login`,{
  //     email:email,
  //     password:password
  //   }).subscribe((res)=>{
  //     // console.log(res);
  //     localStorage.setItem('user',JSON.stringify(res));
  //     // this.storeToken(res.token);
  //     this.toast.success({detail:"SUCCESS",summary:'Your Success Message',position:'topCenter'});
  //     this.router.navigate(['/']);
  //   },(err)=>{
  //     this.toast.error({detail:"ERROR",summary:'Your Error Message',sticky:true,position:'topCenter'});
  //     // console.log(err);
  //   });
  // }

  storeToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
