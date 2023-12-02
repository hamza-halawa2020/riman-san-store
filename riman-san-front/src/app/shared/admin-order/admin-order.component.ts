import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css'],
})
export class AdminOrderComponent {
  users: any = [];
  selectedUser: any;
  selectedUserIndex: number | null = null;
  constructor(private orderService: OrderService) {}
  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.orderService.getUsers().subscribe((data) => {
      this.users = Object.values(data)[0];
    });
  }
  deleteUser(userId: number): void {
    this.orderService.deleteUser(userId).subscribe(
      () => {
        this.orderService.getUsers().subscribe((data) => {
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
