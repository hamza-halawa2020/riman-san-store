import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
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

 login() {
    this.authService.isLoggedIn();
  }


  logout() {
    this.authService.logout();
  }
}
