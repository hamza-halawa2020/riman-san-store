import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-admin-order',
  templateUrl: './admin-order.component.html',
  styleUrls: ['./admin-order.component.css'],
})
export class AdminOrderComponent {

  orderData: any = [];
  loading: boolean = false;

  constructor(
    private orderService: OrderService,
    private toast: NgToastService

  ) {}

  ngOnInit(): void {
    this.getOrder();
  }

  getOrder() {
    this.loading = true;

    this.orderService.getOrders().subscribe((data) => {
      this.orderData = Object.values(data)[0];
      this.orderData.forEach((order:any) => {
        order.totalPrice = order.order_details.reduce(
          (sum:any, orderDetail:any) => sum + orderDetail.quantity * orderDetail.product.price,
          0
        );
      });
      this.loading = false;
    });
  }

  deleteOrder(orderId: number): void {
    this.orderService.deleteOrder(orderId).subscribe(
      () => {
        this.orderService.getOrders().subscribe((data) => {
          this.orderData = Object.values(data)[0];
          this.toast.success({
            detail: 'SUCCESS',
            summary: 'Your Success Message',
            // position: 'topCenter',
          });
        });
      },
      (error) => {
        this.toast.error({
          detail: 'ERROR',
          summary: 'Your Error Message',
          sticky: true,
          position: 'topCenter',
        });
      }
    );
  }


  }

