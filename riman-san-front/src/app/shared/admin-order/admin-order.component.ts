import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order/order.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css'],
})
export class AdminOrderComponent {
  // orders = [
  //   {
  //     id: 1,
  //     name: 'John',
  //     phone: '1234567890',
  //     orderDetails: [{ product_id: 1, quantity: 2 }],
  //   },
  //   {
  //     id: 2,
  //     name: 'Jane',
  //     phone: '1234567891',
  //     orderDetails: [{ product_id: 2, quantity: 1 }],
  //   },
  //   {
  //     id: 3,
  //     name: 'Mark',
  //     phone: '1234567892',
  //     orderDetails: [
  //       { product_id: 1, quantity: 1 },
  //       { product_id: 2, quantity: 1 },
  //     ],
  //   },
  // ];
  // customers = [
  //   {
  //     id: 1,
  //     name: 'John',
  //     phone: '1234567890',
  //     orders: [{ id: 1, orderDetails: [{ product_id: 1, quantity: 2 }] }],
  //   },
  //   {
  //     id: 2,
  //     name: 'Jane',
  //     phone: '1234567891',
  //     orders: [{ id: 2, orderDetails: [{ product_id: 2, quantity: 1 }] }],
  //   },
  //   {
  //     id: 3,
  //     name: 'Mark',
  //     phone: '1234567892',
  //     orders: [
  //       {
  //         id: 3,
  //         orderDetails: [
  //           { product_id: 1, quantity: 1 },
  //           { product_id: 2, quantity: 1 },
  //         ],
  //       },
  //     ],
  //   },
  // ];

  // products = [
  //   { id: 1, name: 'Product 1', price: 100 },
  //   { id: 2, name: 'Product 2', price: 200 },
  // ];

  // customersWithMultipleProducts = this.orders.filter(
  //   (order) => order.orderDetails.length > 1
  // );

  // users: any = [];
  // products: any = [];
  // selectedUser: any;
  // selectedUserIndex: number | null = null;
  // orders: any;
  // orderDetails: any;
  // orderId: any;
  orderData: any;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private productService: ProductService
  ) {}
  // ngOnInit(): void {
  //   // this.getOrderDetails();
  //   // this.getProduct();
  // }

  ngOnInit(): void {
    this.getOrder();
  }

  getOrderDetails(order: number) {
    this.orderService.getByOrderId(order).subscribe(
      (data) => {
        this.orderData = Object.values(data)[0];
        console.log(this.orderData);
      },
      (error) => {
        console.error(error);
      }
    );
    // });
  }

  // getOrderDetails() {
  //   this.orderService.getOrderDetails().subscribe((data) => {
  //     this.orderDetails = Object.values(data)[0];
  //     console.log('this.orderDetails', this.orderDetails);
  //   });
  // }

  // getProduct() {
  //   this.productService.getProducts().subscribe((data) => {
  //     this.products = Object.values(data)[0];
  //     console.log('this.products', this.products);
  //   });
  // }

  getOrder() {
    this.orderService.getOrders().subscribe((data) => {
      this.orderData = Object.values(data)[0];
      console.log('this.orders', this.orderData);
    });
  }

  // getOrderByOrderID(keyWord: number) {
  //   this.orderService.getByOrderId(keyWord).subscribe((data) => {
  //     this.orders = Object.values(data)[0];
  //     console.log(data);
  //   });
  // }

  // getProductName(product_id: number): string {
  //   const product = this.products.find(
  //     (p: { id: number }) => p.id === product_id
  //   );
  //   return product ? product.name : 'Unknown Product';
  // }
  // getProductPrice(product_id: number): string {
  //   const product = this.products.find(
  //     (p: { id: number }) => p.id === product_id
  //   );
  //   return product ? product.price : 'Unknown Product';
  // }
  // getOrderName(order_id: number): string {
  //   const order = this.orders.find((p: { id: number }) => p.id === order_id);
  //   return order ? order.name : 'Unknown Product';
  // }
  // getOrderPhone(order_id: number): string {
  //   const order = this.orders.find((p: { id: number }) => p.id === order_id);
  //   return order ? order.phone : 'Unknown Product';
  // }
  // getOrderCity(order_id: number): string {
  //   const order = this.orders.find((p: { id: number }) => p.id === order_id);
  //   return order ? order.city : 'Unknown Product';
  // }
  // getOrderNote(order_id: number): string {
  //   const order = this.orders.find((p: { id: number }) => p.id === order_id);
  //   return order ? order.notes : 'Unknown Product';
  // }
}
