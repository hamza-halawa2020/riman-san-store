import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent {
  contactForm!: FormGroup;
  myEmail: string = 'support@rimansan.net';
  errors: string[] = [];
  isSending: boolean = false;
  name: any;
  email: any;
  subject: any;
  message: any;

  constructor(
    private formBuilder: FormBuilder,
    private contactApi: ContactService,
    private router: Router
  ) {
    this.initForm();
  }

  private initForm(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
          ),
        ],
      ],
      subject: ['', [Validators.required, Validators.minLength(4)]],
      message: ['', [Validators.required, Validators.minLength(20)]],
    });
  }

  get formControls() {
    return this.contactForm.controls;
  }

  formSubmitted(): void {
    this.isSending = true;
    this.errors = ['Sending...'];

    this.contactForm.markAllAsTouched();

    if (this.contactForm.valid) {
      this.contactApi.contactUs(this.contactForm.value).subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['/notification'], {
            queryParams: { notify: 'contact' },
          });
        },
        (error) => {
          console.log(error);
          this.isSending = false;
          this.errors = [
            'An error occurred while sending the message. Please try again later.',
          ];
        }
      );
    }
  }
}
