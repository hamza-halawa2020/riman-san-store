import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  // private apiUrl = 'https://rimansan.net/api';
  private apiUrl = environment.backEndUrl;

  // private productDataSubject = new BehaviorSubject<any>(null);
  // productData = this.productDataSubject.asObservable();
  constructor(private http: HttpClient) {}

  // setProductData(data: any) {
  //   this.productDataSubject.next(data);
  // }

  setOrder(order: any) {
    return this.http.post(`${this.apiUrl}/orders`, order);
  }

  setOrderDetails(orderDetails: any) {
    return this.http.post(`${this.apiUrl}/orderdetails`, orderDetails);
  }
  // setOrderDetails(orderDetails: any): Observable<any> {
  //   return this.http.post<any>(`${this.apiUrl}/orderdetails`, orderDetails);
  // }
  getOrders() {
    return this.http.get(`${this.apiUrl}/orders`);
  }
  getOrderDetails() {
    return this.http.get(`${this.apiUrl}/orderdetails`);
  }

  getByOrderId(orderId: number) {
    return this.http.get(`${this.apiUrl}/order/${orderId}`);
  }

  // getOrderById(orderId: number): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/orders/${orderId}`);
  // }
}
