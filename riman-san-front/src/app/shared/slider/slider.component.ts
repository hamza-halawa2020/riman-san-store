import { AfterViewInit, Component } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductService } from 'src/app/services/product/product.service';
import { environment } from 'src/environments/environment';
import Swiper from 'swiper';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements AfterViewInit {
  product: any = [];
  imgUrl = `${environment.imgUrl}/`;

  constructor(
    private productService: ProductService,
    private cartApi: CartService
  ) {}

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 5,
      spaceBetween: 20,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 2000,
      },
    });
  }

  ngOnInit() {
    this.allProducts();
  }

  allProducts() {
    this.productService.getProducts().subscribe((data) => {
      this.product = Object.values(data)[0];
      // console.log(this.product);
    });
  }
  addProductToCart(item: any) {
    this.cartApi.addProductToCart(item);
  }
}
