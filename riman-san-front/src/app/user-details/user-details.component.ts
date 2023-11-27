import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent {
  id!: number;
  userDetails: any;
  loading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.loading = true;
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.userService.getUserById(this.id).subscribe((data) => {
        this.userDetails = data;
        this.loading = false;
      });
    });
  }
}
