import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  email: string = 'info@rimansan.net';
  email2: string = 'support@rimansan.net';

  total: number = 0;
  totalNumber: number = 0;

  constructor(
    private cartApi: CartService,
    private authService: LoginService
  ) {}

  ngOnInit() {
    this.cartApi.getcounterCart().subscribe((res: any) => {
      this.total = res.length;
    });
  }

  isLoggedIn(): boolean {
    return !!this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
  }
}
