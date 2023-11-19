import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private apiUrl = 'https://retoolapi.dev/isM3PA/data';
  private productsUrl = 'https://retoolapi.dev/zPdtlU/products';

  constructor(private http: HttpClient) {}

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

  getProducts() {
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
