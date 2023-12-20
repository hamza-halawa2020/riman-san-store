import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private toast: NgToastService) {}
  private cartDataList: any[] = [];

  getCart() {
    if ('cart' in localStorage) {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        this.cartDataList = JSON.parse(storedCart);
        console.log(this.cartDataList);
      }
    }
  }

  addProductToCart(myProduct: any): void {
    if ('cart' in localStorage) {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        this.cartDataList = JSON.parse(storedCart);
      }
      const productAlreadyInCart = this.cartDataList.some(
        (product) => product.id === myProduct.id
      );
      if (productAlreadyInCart) {
        this.toast.error({
          detail: 'ERROR',
          summary: 'Product is already in the cart.',
          sticky: true,
          position: 'topCenter',
        });
      } else {
        this.cartDataList.push(myProduct);
        localStorage.setItem('cart', JSON.stringify(this.cartDataList));
      }
    } else {
      this.cartDataList.push(myProduct);
      localStorage.setItem('cart', JSON.stringify(this.cartDataList));
    }
  }

  // getcounterCart() {
  //   return this.counterCart.asObservable();
  // }
}
