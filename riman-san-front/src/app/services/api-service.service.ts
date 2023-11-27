import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private apiUrl = 'http://127.0.0.1:8000/api';
  // private productsUrl = 'https://retoolapi.dev/zPdtlU/products';
  private productsUrl = 'http://127.0.0.1:8000/api/products';
  // private productsUrl = '  https://dummyjson.com/products/';

  constructor(private http: HttpClient) {}
  registerUser(userData: any){
    return this.http.post(`${this.apiUrl}/users`, userData);
  }
  contact(contact: any){
    return this.http.post(`${this.apiUrl}/contacts`, contact);
  }
  order(order: any){
    return this.http.post(`${this.apiUrl}/orders`, order);
  }
  getUsers() {
    return this.http.get(this.apiUrl);
  }
  getUserById(userId: number) {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get(url);
  }
  deleteUser(userId: number) {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.delete(url);
  }

  getProducts(): Observable<any> {
    return this.http.get(this.productsUrl);
  }
  getProductById(productId: number) {
    const url = `${this.productsUrl}/${productId}`;
    return this.http.get(url);
  }
  deleteProduct(productId: number) {
    const url = `${this.productsUrl}/${productId}`;
    return this.http.delete(url);
  }
}
