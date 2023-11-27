import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  register: FormGroup;
  formSubmitted: boolean = false;

  constructor(private userService: ApiServiceService) {    
    this.register = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
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
      },
      (error) => {
        console.error('Registration failed:', error);
      }
    );
  } else {
      console.log('Form is invalid. Please fill all the required fields.');
    }
  }
}
