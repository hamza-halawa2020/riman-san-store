import { Component } from '@angular/core';
import { ProductService } from '../services/product/product.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  // products: any = [];

  constructor(private productsService: ProductService) {}
  ngOnInit(): void {
    // this.getProducts();
  }
  // getProducts() {
  //   this.productsService.getProducts().subscribe((data) => {
  //     // this.products = data;
  //     this.products = Object.values(data)[0];
  //   });
  // }
}
