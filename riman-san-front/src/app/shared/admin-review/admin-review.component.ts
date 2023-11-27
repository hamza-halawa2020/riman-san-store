import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewService } from 'src/app/services/review/review.service';

@Component({
  selector: 'app-admin-review',
  templateUrl: './admin-review.component.html',
  styleUrls: ['./admin-review.component.css'],
})
export class AdminReviewComponent {
  id: any;
  reviews: any = [];
  selectedReview: any;
  selectedReviewIndex: number | null = null;
  loading: boolean = false;
  constructor(private reviewService: ReviewService) {}
  ngOnInit(): void {
    this.getReviews();
  }

  getReviews() {
    this.loading = true;
    this.reviewService.getReviews().subscribe((data) => {
      this.reviews = Object.values(data)[0];
      console.log(this.reviews);

      this.loading = false;
    });
  }

  deleteReview(reviewId: number): void {
    this.reviewService.deleteReview(reviewId).subscribe(
      () => {
        this.reviewService.getReviews().subscribe((data) => {
          this.reviews = data;
        });
      },
      (error) => {
        console.error('Error deleting review:', error);
      }
    );
  }
  updateReview(review: any): void {
    console.log('Updating review:', review);
  }

  editReview(review: any): void {
    const index = this.reviews.indexOf(review);
    if (this.selectedReviewIndex === index) {
      this.selectedReviewIndex = null;
      this.selectedReview = null;
    } else {
      this.selectedReviewIndex = index;
      this.selectedReview = { ...review };
    }
  }

  cancelEdit(): void {
    this.selectedReviewIndex = null;
  }
}
