import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  register: FormGroup;
  formSubmitted: boolean = false;

  constructor() {
    this.register = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    if (this.register.valid) {
      this.formSubmitted = true;
      console.log(this.register.value);
      this.register.reset();
    } else {
      console.log('Form is invalid. Please fill all the required fields.');
    }
  }
}
