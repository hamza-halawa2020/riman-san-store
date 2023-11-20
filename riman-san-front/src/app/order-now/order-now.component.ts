import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-now',
  templateUrl: './order-now.component.html',
  styleUrls: ['./order-now.component.css'],
})
export class OrderNowComponent {
  orderForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.orderForm = this.fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
          ),
        ],
      ],
      city: ['', [Validators.required]],
      notes: [''],
    });
  }

  onSubmit(): void {
    // Handle form submission
    if (this.orderForm.valid) {
      const formData = this.orderForm.value;
      console.log('Form data submitted:', formData);
      // You can send the form data to your server or perform other actions here
    }
  }
}
