import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() products: any;

   x = 'https://rimansan.net/img/';

  rating: any = 0;
  productDetails: any;
  constructor(
    private ratingConfig: NgbRatingConfig,
    private router: Router,
    private cartApi: CartService
  ) {
    this.ratingConfig.max = 5;
  }

  ngOnInit() {
    this.rating = Math.ceil(this.products?.rating?.avg) ?? 0;
    this.rating = this.products.rating;
  }
  addProdutToCart(item: any) {
    this.cartApi.addProductToCart(item);
  }
}
