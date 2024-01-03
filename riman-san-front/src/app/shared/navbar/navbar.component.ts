import { Component } from '@angular/core';
import { Subscriber } from 'rxjs';
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
  card: any;

  constructor(
    private cartApi: CartService,
    private authService: LoginService
  ) {}

  ngOnInit() {
    this.updateCartTotal();
  }
  updateCartTotal() {
    this.cartApi.getcounterCart().subscribe((res: any) => {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        this.total = JSON.parse(storedCart).length;
      console.log('total', this.total);
    }
   } );
  }


  isLoggedIn(): boolean {
    return !!this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
  }
}
// updateCartTotal() {
//   this.cartApi.getCart(); 
//   this.cartApi.getcounterCart().subscribe((res: any) => {
//     this.total = res.reduce((acc: number, item: any) => acc + item.quantity, 0);
//   });
// }