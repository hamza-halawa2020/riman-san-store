import { Component } from '@angular/core';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  users: any = [];
  selectedUser: any;
  selectedUserIndex: number | null = null;
  roles: string[] = ['admin', 'user'];
  loading: boolean = false;
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.loading = true;
    this.userService.getUsers().subscribe((data) => {
      this.users = Object.values(data)[0];
      this.loading = false;
    });
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(
      () => {
        this.userService.getUsers().subscribe((data) => {
          this.users = Object.values(data)[0];
        });
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }

  updateUser(user: any): void {
    console.log('Updating user:', user);

    if (this.selectedUser && this.selectedUser.role) {
      user.role = this.selectedUser.role;

      this.userService.updateUser(user).subscribe(
        (updatedUser: any) => {
          console.log('User updated successfully:', updatedUser);
          this.selectedUser = null;
          this.selectedUserIndex = null;
          this.getUser();
        },
        (error: any) => {
          console.error('Error updating user:', error);
        }
      );
    }
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
