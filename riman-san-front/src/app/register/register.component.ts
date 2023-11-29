import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register/register.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  register: FormGroup;
  formSubmitted: boolean = false;
  showPassword: boolean = false;

  constructor(
    private userService: RegisterService,
    private router:Router,
    private toast:NgToastService

    ) {
    this.register = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  onSubmit() {
    if (this.register.valid) {
      const userData = this.register.value;
      // console.log(userData);
      this.userService.registerUser(userData).subscribe(
        (response) => {
          // console.log('User registered successfully:', response);
          this.formSubmitted = true;
          // console.log(this.register.value);
          this.register.reset();
          this.toast.success({detail:"SUCCESS",summary:'Register Success ',position:'topCenter'});
          this.router.navigate(['login']);
        },
        (error) => {
          // console.error('Registration failed:', error);
          this.toast.error({detail:"ERROR",summary:'Your Error Message',sticky:true,position:'topCenter'});

        }
      );
    } else {
      // console.log('Form is invalid. Please fill all the required fields.');
      this.toast.error({detail:"ERROR",summary:'Your Error Message',sticky:true,position:'topCenter'});

    }
  }
}
