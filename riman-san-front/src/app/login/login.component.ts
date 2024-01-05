import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoginService } from '../services/login/login.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import { TokenAuthInterceptor } from '../interceptor/token-auth.interceptor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  login: FormGroup;
  formSubmitted: boolean = false;
  showPassword: boolean = false;
  constructor(
    private auth: LoginService,
    private toast: NgToastService,
    private router: Router
  ) {
    this.login = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.login.valid) {
      this.formSubmitted = true;
      this.auth.login(this.login.value).subscribe({
        next: (res: any) => {
          TokenAuthInterceptor.accessToken = res.token;
          // localStorage.setItem('token', res.token);
          this.auth.setTokenInCookie(res.token);
          this.login.reset();
          // console.log(res);

          // this.auth.setRole(res.role);
          // this.auth.setToken(res.token);
          this.toast.success({
            detail: 'SUCCESS',
            summary: 'Your Success Message',
            position: 'topCenter',
          });
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.toast.error({
            detail: 'ERROR',
            summary: 'Your Error Message',
            sticky: true,
            position: 'topCenter',
          });
        },
      });
    } else {
      // console.log('Form is invalid. Please fill all the required fields.');
      this.toast.error({
        detail: 'ERROR',
        summary: 'Your Error Message',
        sticky: true,
        position: 'topCenter',
      });
    }
  }
}
