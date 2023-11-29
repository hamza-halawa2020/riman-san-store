import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  login: FormGroup;
  formSubmitted: boolean = false;

  constructor(private auth:UserService) {
    this.login = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    if (this.login.valid) {
      const email = this.login.value.email;
      const password = this.login.value.password;
      this.auth.login(email,password);
      this.formSubmitted = true;
      console.log(this.login.value);
      this.login.reset();
    } else {
      console.log('Form is invalid. Please fill all the required fields.');
    }
  }
}
