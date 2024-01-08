import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent {
  forget: FormGroup;
  formSubmitted: boolean = false;

  constructor() {
    this.forget = new FormGroup({
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^(010|011|012|015)\\d{8}$'),
      ]),
        });
  }
  onSubmit() {
    if (this.forget.valid) {
      this.formSubmitted = true;
      console.log(this.forget.value);
      this.forget.reset();
    } else {
      console.log('Form is invalid. Please fill all the required fields.');
    }
  }
}
