import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() products: any;
  rating: any = 0;
  constructor(private ratingConfig: NgbRatingConfig, private router: Router) {
    this.ratingConfig.max = 5;
  }

  ngOnInit() {
    // this.rating = Math.ceil(this.products?.rating?.avg) ?? 0;
    this.rating = this.products.rating;
  }
}
