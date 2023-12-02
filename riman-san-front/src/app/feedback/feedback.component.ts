import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReviewService } from '../services/review/review.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent {
  @Input() id!: number;
  reviewSubmitted: boolean = false;
  sendReview: FormGroup;

  constructor(private userService: ReviewService) {
    this.sendReview = new FormGroup({
      stars: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      comment: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit() {
    this.reviewSubmitted = false;
  }

  onSubmit() {
    if (this.sendReview.valid) {
      const reviewData = this.sendReview.value;

      this.userService.review(reviewData).subscribe(
        (response) => {
          this.reviewSubmitted = true;
          console.log(this.sendReview.value);
          this.sendReview.reset();
        },
        (error) => {
          console.error('Registration failed:', error);
        }
      );
    } else {
      console.log('Form is invalid. Please fill all the required fields.');
    }
  }
}
