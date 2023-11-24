import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private productDataSubject = new BehaviorSubject<any>(null);
  productData$ = this.productDataSubject.asObservable();

  setProductData(data: any) {
    this.productDataSubject.next(data);
  }
}
