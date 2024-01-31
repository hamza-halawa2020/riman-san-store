import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { LoginService } from '../services/login/login.service';
import { NgToastService } from 'ng-angular-popup';
import { Router } from '@angular/router';
import { TokenAuthInterceptor } from '../interceptor/token-auth.interceptor';
import { TranslateService } from '@ngx-translate/core';

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
    public translate: TranslateService,

    private router: Router
  ) {
    this.login = new FormGroup({
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^(010|011|012|015)\\d{8}$'),
      ]),
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
          // const took = (TokenAuthInterceptor.accessToken = res.token);

          // console.log(took);

          // localStorage.setItem('token', res.token);
          // this.auth.setTokenInCookie(res.token);
          this.login.reset();
          // console.log(res);

          this.auth.setRoleInCookie(res.role);
          this.auth.setTokenInCookie(res.token);
          this.toast.success({
            detail: this.translate.instant('SUCCESS'),
            summary: this.translate.instant('login success'),
            position: 'topCenter',
          });
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.toast.error({
            detail: this.translate.instant('ERROR'),
            summary: 'Your Error Message',
            sticky: true,
            position: 'topCenter',
          });
        },
      });
    } else {
      // console.log('Form is invalid. Please fill all the required fields.');
      this.toast.error({
        detail: this.translate.instant('ERROR'),
        summary: 'Your Error Message',
        sticky: true,
        position: 'topCenter',
      });
    }
  }
}
