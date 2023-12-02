import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private apiUrl = 'http://127.0.0.1:8000/api';

  private productDataSubject = new BehaviorSubject<any>(null);
  productData$ = this.productDataSubject.asObservable();
  constructor(private http: HttpClient) {}

  setProductData(data: any) {
    this.productDataSubject.next(data);
  }

  order(order: any) {
    return this.http.post(`${this.apiUrl}/orders`, order);
  }

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
