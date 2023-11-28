import { Component, Input } from '@angular/core';
import { ReviewService } from '../services/review/review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent {
 review: any;

constructor(private reviewService: ReviewService) { }

ngOnInit(): void {
  this.reviewService.getReviews().subscribe((data) => {
    this.review =Object.values(data)[0];
    console.log(this.review);
    
  });
}
}
