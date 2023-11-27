import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  contact(contact: any) {
    return this.http.post(`${this.apiUrl}/contacts`, contact);
  }
  getContacts() {
    return this.http.get(`${this.apiUrl}/contacts`);
  }
}
