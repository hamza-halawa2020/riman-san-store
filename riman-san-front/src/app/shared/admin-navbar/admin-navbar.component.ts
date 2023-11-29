import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css'],
})
export class AdminNavbarComponent {
  email: string = 'info@rimansan.com';
  email2: string = 'support@rimansan.com';

  total: number = 0;
  totalNumber: number = 0;

  constructor(private cartApi: CartService, private authService: LoginService) {}

  ngOnInit(): void {
    this.cartApi.getCart().subscribe((res) => {
      this.total = res.length;
    });
  }
}
