import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css'],
})
export class AdminOrderComponent {
  users: any = [];
  products: any = [];
  selectedUser: any;
  selectedUserIndex: number | null = null;
  constructor(private orderService: OrderService,
    private productService : ProductService) {}
  ngOnInit(): void {
    this.getUser();
    this.productService.getProducts().subscribe((data) => {
      this.products = Object.values(data)[0];
    });
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

  getProductName(productId: number): string {
    const product = this.products.find((p: { id: number; }) => p.id === productId);
    return product ? product.name : 'Unknown Product';
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
