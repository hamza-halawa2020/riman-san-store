import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-now',
  templateUrl: './order-now.component.html',
  styleUrls: ['./order-now.component.css'],
})
export class OrderNowComponent {
  orderForm: FormGroup;
  formSubmitted: boolean = false;
  productData: any;

  constructor(private sharedService: OrderService) {
    this.orderForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      phone: new FormControl('', [
        Validators.required,
        // Validators.pattern(
        //   /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
        // ),
        Validators.pattern(/^\d+$/), // Allow only digits
        Validators.min(11),
      ]),
      city: new FormControl('', [Validators.required]),
      notes: new FormControl(''),
    });
  }
  ngOnInit() {
    // Subscribe to productData$ to get the product data
    this.sharedService.productData$.subscribe((data) => {
      this.productData = data;
      // console.log('Product Data in Order Component:', this.productData);
    });
  }
  onSubmit() {
    if (this.orderForm.valid) {
      this.formSubmitted = true;
      console.log(
        'user data',
        this.orderForm.value,
        'Product Data in Order Component:',
        this.productData
      );
      this.orderForm.reset();
    } else {
      console.log('Form is invalid. Please fill all the required fields.');
    }
  }
}
