import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

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

  constructor(private cartApi: CartService, private authService: AuthService) {}

  ngOnInit(): void {
    this.cartApi.getCart().subscribe((res) => {
      this.total = res.length;
    });
  }

  get isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
