import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '../services/cart/cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() products: any;

  imgUrl = `${environment.imgUrl}/`;
  productDetails: any;
  constructor(
    private cartApi: CartService
  ) {
  }

  ngOnInit() {
    // console.log('imgUrl:', this.imgUrl);
    // console.log('products:', this.products);


  }

  
  addProductToCart(item: any) {
    this.cartApi.addProductToCart(item);
  }
}
