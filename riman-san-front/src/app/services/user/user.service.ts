import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get(`${this.apiUrl}/users`);
  }
  getUserById(userId: number) {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get(url);
  }
  deleteUser(userId: number) {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.delete(url);
  }
}
