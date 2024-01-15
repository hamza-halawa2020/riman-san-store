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
  imgUrl = `${environment.imgUrl}/`;

  rating: any;
  mainProductImage: string = '';
  
  // thumbnailImages: string[] = ['1704979806_659fed5eead01.png', '2.jpg', '3.jpg', '4.jpg'];
  thumbnailImages: string[] = [];
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

            // Populate thumbnailImages array with backend images
            this.thumbnailImages = this.productDetails.images.map((image: any) => image.image);

        this.mainProductImage = `${this.imgUrl}${this.productDetails.images[0].image}`;

        this.loading = false;
      });
      });
    // });
  }

  addProductToCart(item: any) {
    this.cartApi.addProductToCart(item);
  }

  changeImage(image: string): void {
    this.mainProductImage = `${this.imgUrl}${image}`;
  }
}


