import { Component } from '@angular/core';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users: any = [];
  selectedUser: any; // Track the user being edited
  selectedUserIndex: number | null = null; // Add this line
  loading: boolean = false;
  constructor(private userService: ApiServiceService) {}
  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.loading = true;
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
      this.loading = false;  
    });
  }
  deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(
      () => {
        this.userService.getUsers().subscribe((data) => {
          this.users = data;
        });
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }
  updateUser(user: any): void {
    console.log('Updating user:', user);
  }

  editUser(user: any): void {
    const index = this.users.indexOf(user);
    if (this.selectedUserIndex === index) {
      this.selectedUserIndex = null;
      this.selectedUser = null;
    } else {
      this.selectedUserIndex = index;
      this.selectedUser = { ...user };
    }
  }

  cancelEdit(): void {
    this.selectedUserIndex = null;
  }
}
