import { Component, OnInit } from '@angular/core';
import { Order } from 'src/product';
import { OrderService } from '../orderservice/order.service';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  public orderData: any = {};
  constructor(
    public orders: OrderService,
    private router: Router,
    private cart: CartService
  ) {}

  ngOnInit(): void {
    this.cart.removeallitems();

    this.getOrder();
  }

  cancelOrder(orderId: number) {
    orderId &&
      this.orders.cancelOrder(orderId).subscribe((result) => {
        if (result) {
          this.getOrder();
        }
      });
  }

  getOrder() {
    this.orders.getOrder().subscribe((res) =>{
       
       
        
       
      console.warn(res);
      this.orderData = res;
      console.warn(this.orderData.userId)
    });
  }
}
