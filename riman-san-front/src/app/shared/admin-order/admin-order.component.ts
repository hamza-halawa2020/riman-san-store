import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css'],
})
export class AdminOrderComponent {

  orderData: any = [];

  constructor(
    private orderService: OrderService,
  ) {}

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder() {
    this.orderService.getOrders().subscribe((data) => {
      this.orderData = Object.values(data)[0];
      this.orderData.forEach((order:any) => {
        order.totalPrice = order.order_details.reduce(
          (sum:any, orderDetail:any) => sum + orderDetail.quantity * orderDetail.product.price,
          0
        );
      });
    });
  }
  }

