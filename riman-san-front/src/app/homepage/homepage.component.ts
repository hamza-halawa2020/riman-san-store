import { Component } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  products: any = [];

  constructor(private productsService: ApiServiceService) {}
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
