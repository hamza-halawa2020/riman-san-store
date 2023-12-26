import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Router } from '@angular/router';
import { OrderService } from '../services/order/order.service';
import { Product } from '../product';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  allProduct: any;
  card: any[] = [];
  totalPaice: any[] = [];
  orderForm: FormGroup;
  formSubmitted: boolean = false;
  x = 'http://127.0.0.1:8000/img/';

  Shipping_expenses = 50;

  constructor(
    private orderService: OrderService,
    private toast: NgToastService
  ) {
    this.orderForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      phone: new FormControl('', [
        Validators.required,

        // Validators.pattern(/^\d+$/), // Allow only digits
        // Validators.min(11),
      ]),
      city: new FormControl('', [Validators.required]),
      notes: new FormControl(''),
    });
  }

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

  onSubmit() {
    if (this.orderForm.valid) {
      // const orderData = this.orderForm.value;
      let products = this.card.map((item) => {
        return {
          product_id: item.id,
          quantity: item.quantity,
          price: item.price,
          sum: item.price * item.quantity,
        };
      });
      let model = {
        // date: new Date(),
        products: products,
        all_prod: this.calculateTotalAllProduct(),
        Shipping_expenses: this.Shipping_expenses,
        sum: this.calculateTotalAllProduct() + this.Shipping_expenses,
        form_data: this.orderForm.value,
        // quantity: this.card.quantity,
        // total: '5',
        // name: this.orderForm.value.name,
        // address: this.orderForm.value.address,
        // phone: this.orderForm.value.phone,
        // city: this.orderForm.value.city,
        // notes: this.orderForm.value.notes,
        // product_id: 1,
      };
      console.log('model', model);

      this.orderService.order(model).subscribe(
        (res) => {
          console.log('model', model);
          this.toast.success({
            detail: 'SUCCESS',
            summary: 'Your Success Message',
            position: 'topCenter',
          });
          this.orderForm.reset();
          this.removeAllProduct();
        },
        (error) => {
          console.error('failed:', error);
          this.toast.error({
            detail: 'ERROR',
            summary: 'Your Error Message',
            sticky: true,
            position: 'topCenter',
          });
        }
      );
    } else {
      // console.log('Form is invalid. Please fill all the required fields.');
      this.toast.error({
        detail: 'ERROR',
        summary: 'Your Error Message',
        sticky: true,
        position: 'topCenter',
      });
    }
  }
}
