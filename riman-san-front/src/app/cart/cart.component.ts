import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Router } from '@angular/router';
import { OrderService } from '../services/order/order.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  allProduct: any;
  card: any[] = [];
  totalPaice: any[] = [];
  x = 'http://127.0.0.1:8000/img/';

  Shipping_expenses = 50;

  constructor(private sharedService: OrderService) {}

  ngOnInit(): void {
    this.getCartProducts();
  }

  getCartProducts() {
    if ('cart' in localStorage) {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        this.card = JSON.parse(storedCart);
        // console.log(this.card);
      }
    }
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
      const total = price! * quantity;
    }
  }
  changeData() {
    localStorage.setItem('cart', JSON.stringify(this.card));
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

  removeProduct(index: any) {
    this.card.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.card));
  }

  removeAllProduct() {
    this.card = [];
    localStorage.setItem('cart', JSON.stringify(this.card));
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

  // makeOrder() {
  //   const orderData = {
  //     products: this.card,
  //     total: this.calculateTotalAllProduct() + this.Shipping_expenses,
  //     shippingExpenses: this.Shipping_expenses,
  //   };
  //   this.sharedService.setProductData(orderData);
  // }
  makeOrder() {
    let products = this.card.map((item) => {
      return {
        productId: item.id,
        quantity: item.quantity,
        price: item.price,
        sum: item.price * item.quantity,
      };
    });
    let model = {
      date: new Date(),
      products: products,
      all_prod: this.calculateTotalAllProduct(),
      Shipping_expenses: this.Shipping_expenses,
      sum: this.calculateTotalAllProduct() + this.Shipping_expenses,
    };
    console.log('mode', model);
  }
}
