import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css'],
})
export class FeedbackComponent {
  @Input() id!: number;
  usersForm: FormGroup;
  errors: any[] = [];
  reviewSubmitted: boolean = false;
  auth: any;
  apiService: any;

  constructor(
    private formBuilder: FormBuilder // private apiService: ToursitDetailsService, // private auth: AccountsApiService
  ) {
    this.usersForm = this.formBuilder.group({
      stars: ['', [Validators.required]],
      title: ['', [Validators.required]],

      comment: ['', Validators.required],
    });
  }
  ngOnInit() {
    this.reviewSubmitted = false;
  }
  getUserFormData(data: any) {
    // this.errors = [];
    // if (!this.auth.isAuthenticated()) {
    //   this.errors.push('You should log in to add a review');
    //   return;
    // }
    if (this.usersForm.valid) {
      // if (this.auth.isTourist()) {
      //   this.apiService
      //     .addTourguideReview({ ...data, tourguide_id: this.id })
      //     .subscribe(
      //       (data: HttpResponse<any>) => {
      //         if (data.status === 200) {
      //           this.reviewSubmitted = true;
      //         }
      //       },
      //       (error: any) => {
      //         this.errors.push('An error occurred, please try again later.');
      //       }
      //     );
      console.log(this.usersForm.value);
    } else {
      this.errors.push('Only tourists are allowed to add reviews.');
    }
    return;
  }
}
// }
