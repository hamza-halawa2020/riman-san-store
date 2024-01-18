import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register/register.service';
import { NgToastService } from 'ng-angular-popup';
import { TranslateService } from '@ngx-translate/core';

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
    private router: Router,
    private toast: NgToastService,
    public translate: TranslateService
  ) {
    this.register = new FormGroup({
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^(010|011|012|015)\\d{8}$'),
      ]),
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
          this.toast.success({
            detail: this.translate.instant('SUCCESS'),
            summary: this.translate.instant('Register Success'),
            position: 'topCenter',
          });
          this.router.navigate(['login']);
        },
        (error) => {
          // console.error('Registration failed:', error);
          this.toast.error({
            detail: this.translate.instant('ERROR'),
            summary: 'Error',
            sticky: true,
            position: 'topCenter',
          });
        }
      );
    } else {
      // console.log('Form is invalid. Please fill all the required fields.');
      this.toast.error({
        detail: this.translate.instant('ERROR'),
        summary: 'Error',
        sticky: true,
        position: 'topCenter',
      });
    }
  }
}
