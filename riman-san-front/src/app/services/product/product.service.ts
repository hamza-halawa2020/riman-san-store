import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://rimansan.net/api';


  constructor(private http: HttpClient) {}

  review(review: any) {
    return this.http.post(`${this.apiUrl}/reviews`, review);
  }

  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/products`);
  }
  getProductById(productId: number) {
    const url = `${this.apiUrl}/products/${productId}`;
    return this.http.get(url);
  }
  deleteProduct(productId: number) {
    const url = `${this.apiUrl}/products/${productId}`;
    return this.http.delete(url);
  }
}
