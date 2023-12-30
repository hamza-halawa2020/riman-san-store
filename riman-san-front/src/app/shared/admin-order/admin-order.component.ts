import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css'],
})
export class AdminOrderComponent {
  // users: any = [];
  products: any = [];
  selectedUser: any;
  selectedUserIndex: number | null = null;
  orders: any;
  orderDetails: any;
  constructor(private orderService: OrderService,
    private productService : ProductService) {}
  ngOnInit(): void {
    this.getOrderDetails();
    this.getOrder();
    this.getProduct();
  }

  getOrderDetails(){
    this.orderService.getOrderDetails().subscribe((data) => {
      this.orderDetails = Object.values(data)[0];
      console.log('this.orderDetails',this.orderDetails);
      
      
    });
  }
  


getProduct(){
  this.productService.getProducts().subscribe((data) => {
    this.products = Object.values(data)[0];
    console.log('this.products',this.products);

  });
}

getOrder(){
  this.orderService.getOrders().subscribe((data) => {
    this.orders = Object.values(data)[0];
    console.log('this.orders',this.orders);
    
  });
}


  // getUser() {
  //   this.orderService.getOrderDetails().subscribe((data) => {
  //     this.users = Object.values(data)[0];
  //     console.log(this.users);
      
  //   });
  // }
  // deleteUser(userId: number): void {
  //   this.orderService.deleteUser(userId).subscribe(
  //     () => {
  //       this.orderService.getUsers().subscribe((data) => {
  //         this.users = data;
  //       });
  //     },
  //     (error) => {
  //       console.error('Error deleting user:', error);
  //     }
  //   );
  // }
  // updateUser(user: any): void {
  //   console.log('Updating user:', user);
  // }

  getProductName(product_id: number): string {
    const product = this.products.find((p: { id: number; }) => p.id === product_id);
    return product ? product.name : 'Unknown Product';
  }
  getProductPrice(product_id: number): string {
    const product = this.products.find((p: { id: number; }) => p.id === product_id);
    return product ? product.price : 'Unknown Product';
  }
  getOrderName(order_id: number): string {
    const order = this.orders.find((p: { id: number; }) => p.id === order_id);
    return order ? order.name : 'Unknown Product';
  }
  getOrderPhone(order_id: number): string {
    const order = this.orders.find((p: { id: number; }) => p.id === order_id);
    return order ? order.phone : 'Unknown Product';
  }
  getOrderCity(order_id: number): string {
    const order = this.orders.find((p: { id: number; }) => p.id === order_id);
    return order ? order.city : 'Unknown Product';
  }
  getOrderNote(order_id: number): string {
    const order = this.orders.find((p: { id: number; }) => p.id === order_id);
    return order ? order.notes : 'Unknown Product';
  }

  // editUser(user: any): void {
  //   const index = this.users.indexOf(user);
  //   if (this.selectedUserIndex === index) {
  //     this.selectedUserIndex = null;
  //     this.selectedUser = null;
  //   } else {
  //     this.selectedUserIndex = index;
  //     this.selectedUser = { ...user };
  //   }
  // }

  // cancelEdit(): void {
  //   this.selectedUserIndex = null;
  // }
}
