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



  getOrders() {
    return this.http.get(`${this.apiUrl}/orders`);
  }

  getOrderById(orderId: number) {
    return this.http.get(`${this.apiUrl}/orders/${orderId}`);
  }

  deleteOrder(orderId: number) {
    const url = `${this.apiUrl}/orders/${orderId}`;
    return this.http.delete(url);
  }


}
