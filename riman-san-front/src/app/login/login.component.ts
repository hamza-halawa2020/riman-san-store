import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  login: FormGroup;
  formSubmitted: boolean = false;

  constructor() {
    this.login = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    if (this.login.valid) {
      this.formSubmitted = true;
      console.log(this.login.value);
      this.login.reset();
    } else {
      console.log('Form is invalid. Please fill all the required fields.');
    }
  }
}
