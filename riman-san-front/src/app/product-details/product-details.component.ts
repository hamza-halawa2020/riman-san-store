import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { ProductService } from '../services/product/product.service';
import { environment } from 'src/environments/environment';
import { trigger, state, style, animate, transition } from '@angular/animations';
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
  chunkSize = 3;
  thumbnailChunks: string[][] = [];
  mainProductImage: string = '';
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

            this.thumbnailImages = this.productDetails.images.map((image: any) => image.image);
            this.thumbnailChunks = this.chunkArray(this.thumbnailImages, this.chunkSize);
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

chunkArray(array: any[], size: number): any[][] {
  return Array.from({ length: Math.ceil(array.length / size) }, (v, i) =>
    array.slice(i * size, i * size + size)
  );
}
}


