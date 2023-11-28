import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  product:any;
  id: any;
  productDetails: any;
  loading: boolean = false;
  x: any = 'http://127.0.0.1:8000/img/';
  rating: any;
  mainProductImage: string = '';
  thumbnailImages: string[] = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService,
    private cartApi: CartService
  ) {}
  ngOnInit(): void {
    this.getProduct();
    this.rating = Math.ceil(this.productDetails?.rating?.avg) ?? 0;
    this.rating = this.productDetails.rating;
  }

  getProduct() {
    this.loading = true;
    this.activateRoute.params.subscribe((params) => {
      this.id = +params['id'];
      this.productService.getProductById(this.id).subscribe((data) => {
        this.productDetails = Object.values(data)[0];
        this.mainProductImage = `${this.x}${this.id}/${this.productDetails.img}`;
        this.loading = false;
      });
    });
  }

  addProdutToCart(item: any) {
    this.cartApi.addProductToCart(item);
  }

  changeImage(image: string): void {
    this.mainProductImage = `${this.x}${this.id}/${image}`;
  }
}
