import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
 
  private apiUrl = environment.backEndUrl;
  constructor(private http: HttpClient) {}

  getUsers() {
   return this.http.get(`${this.apiUrl}/users`);
  }
  getUserById(userId: number) {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get(url);
  }

  updateUser(user: any) {
    const userId = user.id;
    return this.http.put(`${this.apiUrl}/users/${userId}`, user);
  }
  
  deleteUser(userId: number) {
    const url = `${this.apiUrl}/users/${userId}`;
    return this.http.delete(url);
  }
}
