import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  ContactForm: FormGroup;
myEmail: string = 'support@ta-meri.com';
errors: string[] = [];
isSending: boolean = false
  constructor(private contactApi: ContactService, private router :Router) {
    this.ContactForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
      ]),
      subject: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      message:  new FormControl('', [
        Validators.required,
        Validators.minLength(20),

      ]),
    });
  }

  formSubmited() {
    this.isSending = true
    this.errors = []
    this.errors.push('sending...')

    this.ContactForm.markAllAsTouched();
    if (this.ContactForm.valid) {
     this.contactApi.contactUs(this.ContactForm.value).subscribe((data)=>{
console.log(data);

      this.router.navigate(['/notification'], { queryParams: { notify: 'contact' }});


     },(error)=>{
      console.log(error);
      this.isSending = false
      this.errors = []
this.errors.push('An error occurred while sending message, please try again later.')
     })
     
    }
  }
  get name(): FormControl {
    return this.ContactForm.get('name') as FormControl;
  }
  get email(): FormControl {
    return this.ContactForm.get('email') as FormControl;
  }
  get subject(): FormControl {
    return this.ContactForm.get('subject') as FormControl;
  }
  get message(): FormControl {
    return this.ContactForm.get('message') as FormControl;
  }

}