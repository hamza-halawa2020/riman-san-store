import { Component } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  allProduct: any = 0;
  card: any = [];
  totalPaice: any = 0;


  constructor(private cartApi: CartService) {}

  ngOnInit(): void {
    this.getCartProducts();
  }

  getCartProducts() {
    this.cartApi.getCart().subscribe((data) => {
      this.card = data;
      this.allProduct = this.cartApi.getcounterCart();
      console.log(this.card);
    });
  }

  calculateTotal(item: any) {
    if (item && item.quantity !== undefined && item.quantity >= 0) {
      if (item.quantity > item.stock) {
        alert('there is no stock with this quantity');
      }
      return item.price * item.quantity;
    }
    return 0;
  }

  updateTotal(price: number, quantity: number | undefined) {
    if (quantity !== undefined && quantity >= 0) {
      const total = price * quantity;
      console.log('Total:', total);
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
}