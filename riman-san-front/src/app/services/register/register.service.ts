import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiUrl = 'https://rimansan.net/api';

  constructor(private http: HttpClient) {}
  registerUser(userData: any) {
    return this.http.post(`${this.apiUrl}/users`, userData);

  }
}
