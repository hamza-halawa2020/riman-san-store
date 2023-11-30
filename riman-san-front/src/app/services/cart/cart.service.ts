import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private counterCart = new BehaviorSubject<number>(0);
  constructor(    private toast: NgToastService,
    ) {}
  private cartDataList: any[] = [];
  public productList: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  getCart() {
    return this.productList.asObservable();
  }

  addProductToCart(myProduct: any): void {
    const productAlreadyInCart = this.cartDataList.some(
      (product: any) => product.id === myProduct.id
    );

    if (productAlreadyInCart) {
      // alert('Product is already in the cart.');
      this.toast.error({
        detail: 'ERROR',
        summary: 'Product is already in the cart.',
        sticky: true,
        position: 'topCenter',
      });
    } else {
      this.cartDataList.push(myProduct);
      this.productList.next([...this.cartDataList]);
    }
  }

  removeDate(myProduct: any) {
    this.cartDataList.map((a: any, index: any) => {
      if (myProduct.id === a.id) {
        this.cartDataList.splice(index, 1);
      }
      this.productList.next(this.cartDataList);
    });
  }

  removeAllDate() {
    this.cartDataList = [];
    this.productList.next(this.cartDataList);
  }

  getcounterCart() {
    return this.counterCart.asObservable();
  }
}
