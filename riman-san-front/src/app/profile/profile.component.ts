import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userData: any;
  userId: any ;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private loginService: LoginService
  ) {
  }

  ngOnInit(): void {
    // Get user ID from authentication system
    this.userId = this.loginService.isAuthenticated();
    this.loadUserData();
  }

  loadUserData() {
    // Check if user ID is available
    if (this.userId) {
      this.userService.getUserById(this.userId).subscribe(
        (user) => {
          this.userData = Object.values(user)[0];
          console.log('userData', this.userData);
        },
        (error) => {
          console.log('Error fetching user data:', error);
        }
      );
    } else {
      console.log('User ID not available');
    }
  }
}
  

