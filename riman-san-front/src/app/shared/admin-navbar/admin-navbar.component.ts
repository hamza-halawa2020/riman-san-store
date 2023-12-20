import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css'],
})
export class AdminNavbarComponent {
  constructor(private authService: LoginService) {}

  ngOnInit() {}

  isLoggedIn(): boolean {
    return !!this.authService.isLoggedIn();
  }
  isAdmin(): boolean {
    return this.authService.getRole() == 'admin';
  }
}
