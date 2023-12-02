import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
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
  sendReview: FormGroup;

  constructor(
    private reviewService: ReviewService,
    private toast: NgToastService
  ) {
    this.sendReview = new FormGroup({
      stars: new FormControl(''),
      title: new FormControl(''),
      comment: new FormControl(''),
      status: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.getReviews();
  }

  updateReview(review: any): void {
    if (this.sendReview.valid) {
      const reviewID = review.id;
      const reviewData = this.sendReview.value;
      console.log(reviewData);

      this.reviewService.updateReview(reviewID, reviewData).subscribe(
        (response) => {
          console.log(this.sendReview.value);
          console.log('Updating review:', review);
          this.toast.success({
            detail: 'SUCCESS',
            summary: 'Your Success Message',
            // position: 'topCenter',
          });
        },
        (error) => {
          console.error('Registration failed:', error);
        }
      );
    } else {
      console.log('Form is invalid. Please fill all the required fields.');
    }
  }

  getReviews() {
    this.reviewService.getReviews().subscribe((data) => {
      this.reviews = Object.values(data)[0];
      console.log(this.reviews);
    });
  }

  deleteReview(reviewId: number): void {
    this.reviewService.deleteReview(reviewId).subscribe(
      () => {
        this.reviewService.getReviews().subscribe((data) => {
          this.reviews = Object.values(data)[0];
          this.toast.success({
            detail: 'SUCCESS',
            summary: 'Your Success Message',
            // position: 'topCenter',
          });
        });
      },
      (error) => {
        this.toast.error({
          detail: 'ERROR',
          summary: 'Your Error Message',
          sticky: true,
          position: 'topCenter',
        });
        // console.error('Error deleting review:', error);
      }
    );
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
