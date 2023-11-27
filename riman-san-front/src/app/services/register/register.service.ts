import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiUrl = 'http://127.0.0.1:8000/api';
  constructor(private http: HttpClient) {}
  registerUser(userData: any) {
    return this.http.post(`${this.apiUrl}/users`, userData);
  }
}
