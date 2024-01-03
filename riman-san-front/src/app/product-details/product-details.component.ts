import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { ProductService } from '../services/product/product.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  // product: any;
  id: any;
  productDetails: any;
  loading: boolean = false;
  imgUrl = `${environment.imgUrl}/products/`;

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
  }

  getProduct() {
    this.loading = true;
    this.activateRoute.params.subscribe((params) => {
      this.id = +params['id'];
      this.productService.getProductById(this.id).subscribe((data) => {
        this.productDetails = Object.values(data)[0];
        // console.log(this.productDetails);

        // this.productService.CategoryById(this.productDetails.category_id).subscribe((categoryData) => {
        //   this.productDetails.category_name = Object.values(categoryData)[0];
          // console.log(this.productDetails.category_name);
        this.mainProductImage = `${this.imgUrl}/${this.productDetails.img}`;
        this.loading = false;
      });
      });
    // });
  }

  addProductToCart(item: any) {
    this.cartApi.addProductToCart(item);
  }

  changeImage(image: string): void {
    this.mainProductImage = `${this.imgUrl}/${image}`;
  }
}


