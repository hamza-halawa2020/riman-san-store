import { Component } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  id!: number;
  productDetails: any;
  constructor(
    private route: ActivatedRoute,
    private productService: ApiServiceService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.productService.getProductById(this.id).subscribe((data) => {
        this.productDetails = data;
      });
    });
  }
}
