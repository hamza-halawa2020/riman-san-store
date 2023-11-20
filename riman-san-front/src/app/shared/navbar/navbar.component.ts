import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  email: string = 'info@rimansan.com'
  email2: string = 'support@rimansan.com'




  totalNumber: number = 0;
  constructor(private cartApi: CartService) { }

  ngOnInit(): void {
    this.cartApi.getCart().subscribe((res) => {
      this.totalNumber = res.length
    })
  }

}