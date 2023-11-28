import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

getContactById(contactId: number) {
  const url = `${this.apiUrl}/contacts/${contactId}`;
  return this.http.get(url);
}
deleteContacts(contactId: number) {
  const url = `${this.apiUrl}/contacts/${contactId}`;
  return this.http.delete(url);
}

updateContact(contactId: any, updatedContactData: any): Observable<any> {
  console.log('Contact ID:', contactId);
  console.log('Updated Contact Data:', updatedContactData);

  const url = `${this.apiUrl}/contacts/${contactId}`;
  return this.http.put(url, updatedContactData);
}

}
// updateContact(contactId: any) {
//   const url = `${this.apiUrl}/contacts/${contactId}`;
//   return this.http.put(url,contactId);
// }
// }
