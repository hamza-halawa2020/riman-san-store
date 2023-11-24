import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent {
  @Input() id!: number;
  reviewSubmitted: boolean = false;
  sendReview: FormGroup;

  constructor() {
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
      this.reviewSubmitted = true;
      console.log(this.sendReview.value);
      this.sendReview.reset();
    } else {
      console.log('Form is invalid. Please fill all the required fields.');
    }
  }
}
