import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  myEmail: string = 'support@rimansan.net';

  sendMessage: FormGroup;
  formSubmitted: boolean = false;

  constructor() {
    this.sendMessage = new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(16),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(16),
      ]),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onSubmit() {
    if (this.sendMessage.valid) {
      this.formSubmitted = true;
      console.log(this.sendMessage.value);
      this.sendMessage.reset();
    } else {
      console.log('Form is invalid. Please fill all the required fields.');
    }
  }
}
