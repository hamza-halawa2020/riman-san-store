import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgToastService } from 'ng-angular-popup';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  total: any;
  constructor(
    private toast: NgToastService,
    public translate: TranslateService
  ) {
    this.getCart(); // Load cart data as soon as the service is constructed
  }
  private cartDataList: any[] = [];
  private counterCart = new BehaviorSubject<any>(0);

  private getCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      try {
        this.cartDataList = JSON.parse(storedCart);
      } catch (error) {
        console.error('Error parsing cart data from localStorage', error);
      }
    }
    // Update the counterCart with the actual number of items in the cart
    this.counterCart.next(this.cartDataList.length);
  }

  removeProduct(index: number) {
    this.cartDataList.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cartDataList));
    this.counterCart.next(this.cartDataList.length);
  }

  removeAllProduct() {
    this.cartDataList = [];
    localStorage.setItem('cart', JSON.stringify(this.cartDataList));
    this.counterCart.next(this.cartDataList.length);
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
          detail: this.translate.instant('ERROR'),
          summary: this.translate.instant('Product is already in the cart.'),
          sticky: true,
          position: 'topCenter',
        });
      } else {
        this.cartDataList.push(myProduct);
        localStorage.setItem('cart', JSON.stringify(this.cartDataList));
        this.toast.success({
          detail: this.translate.instant('SUCCESS'),
          summary: this.translate.instant('product added succefully'),
          position: 'topCenter',
        });
      }
    } else {
      this.cartDataList.push(myProduct);
      localStorage.setItem('cart', JSON.stringify(this.cartDataList));
    }
    this.counterCart.next(this.cartDataList.length); // to show the quantity of products in navbar
  }

  // addProductToCart(product: any): void {
  //   const productAlreadyInCart = this.cartDataList.some(
  //     (item) => item.id === product.id
  //   );

  //   if (productAlreadyInCart) {
  //     this.toast.error({
  //       detail: this.translate.instant('ERROR'),
  //       summary: this.translate.instant('Product is already in the cart.'),
  //       sticky: true,
  //       position: 'topCenter',
  //     });
  //   } else {
  //     this.cartDataList.push(product);
  //     this.updateCartStorage();
  //     this.toast.success({
  //       detail: this.translate.instant('SUCCESS'),
  //       summary: this.translate.instant('product added succefully'),
  //       position: 'topCenter',
  //     });
  //   }
  //   this.counterCart.next(this.cartDataList.length); // to show the quantity of products in navbar
  // }

  // private updateCartStorage() {
  //   try {
  //     localStorage.setItem('cart', JSON.stringify(this.cartDataList));
  //     this.counterCart.next(this.cartDataList.length); // Update cart counter
  //   } catch (error) {
  //     console.error('Error updating cart storage', error);
  //   }
  // }

  getcounterCart() {
    return this.counterCart.asObservable();
  }
}
