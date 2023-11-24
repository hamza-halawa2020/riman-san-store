import { Component } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { CartService } from '../services/cart.service';
import { OrderService } from '../services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  allProduct: any;
  card: any = [];
  totalPaice: any;
  x = 'http://127.0.0.1:8000/img/';

  Shipping_expenses = 50;

  constructor(
    private cartApi: CartService,
    private sharedService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCartProducts();
  }

  getCartProducts() {
    this.cartApi.getCart().subscribe((data) => {
      this.card = data;
      this.allProduct = this.cartApi.getcounterCart();
    });
  }

  calculateTotal(item: any) {
    if (item && item.quantity !== undefined && item.quantity >= 0) {
      // if (item.quantity > item.stock) {
      //   alert('there is no stock with this quantity');
      // }
      return item.price * item.quantity;
    }
    return null;
  }

  updateTotal(price: number, quantity: number) {
    if (quantity !== undefined && quantity >= 0) {
      const total = price * quantity;
      // console.log('Total:', total);
    }
  }

  calculateTotalAllProduct() {
    let total = 0;

    for (const item of this.card) {
      if (item && item.quantity !== undefined && item.quantity >= 0) {
        total += item.price * item.quantity;
      }
    }

    return total;
  }

  removeProduct(item: any) {
    this.cartApi.removeDate(item);
  }

  removeAllProduct() {
    this.cartApi.removeAllDate();
  }

  //   makeOrder() {
  //     const orderData = {
  //       products: this.card,
  //       total: this.calculateTotalAllProduct() + this.Shipping_expenses,
  //       shippingExpenses: this.Shipping_expenses,
  //     };
  //     console.log('Order Data:', orderData);
  //   }
  // }

  makeOrder() {
    const orderData = {
      products: this.card,
      total: this.calculateTotalAllProduct() + this.Shipping_expenses,
      shippingExpenses: this.Shipping_expenses,
    };
    this.sharedService.setProductData(orderData);
  }
}
