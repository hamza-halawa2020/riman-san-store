import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // private apiUrl = 'https://rimansan.net/api';
  private apiUrl = environment.backEndUrl;

  constructor(private http: HttpClient) {}

  review(review: any) {
    return this.http.post(`${this.apiUrl}/reviews`, review);
  }

  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/products`);
  }

  AddProduct(product:any){
    
    return this.http.post(`${this.apiUrl}/products`, product);
  }



  getProductById(productId: number) {
    const url = `${this.apiUrl}/products/${productId}`;
    return this.http.get(url);
  }
  deleteProduct(productId: number) {
    const url = `${this.apiUrl}/products/${productId}`;
    return this.http.delete(url);
  }

  getCategory() {
    return this.http.get(`${this.apiUrl}/categories`);
  }
  CategoryById(categoryId: number) {
    const url = `${this.apiUrl}/categories/${categoryId}`;
    return this.http.get(url);
  }
  getCategoryById(categoryId: number) {
    const url = `${this.apiUrl}/product/category/${categoryId}`;
    return this.http.get(url);
  }
}
