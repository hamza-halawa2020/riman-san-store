import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private apiUrl = environment.backEndUrl;

  constructor(private http: HttpClient) {}
  registerUser(userData: any) {
    return this.http.post(`${this.apiUrl}/users`, userData);

  }
}
