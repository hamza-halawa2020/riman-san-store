import { Component } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  id: any;
  productDetails: any;
  loading: boolean = false;
  x: any = 'http://127.0.0.1:8000/img/';
  rating: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ApiServiceService,
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
        console.log(this.productDetails);

        this.loading = false;
      });
    });
  }

  addProdutToCart(item: any) {
    this.cartApi.addProductToCart(item);
  }


  // mainProductImage: string = 'https://i.imgur.com/TAzli1U.jpg';
  thumbnailImages: string[] = [
    'https://i.imgur.com/TAzli1U.jpg',
    'https://i.imgur.com/w6kEctd.jpg',
    'https://i.imgur.com/L7hFD8X.jpg',
    'https://i.imgur.com/6ZufmNS.jpg',
  ];

  changeImage(image: string): void {
    this.productDetails = image;
  }
}
