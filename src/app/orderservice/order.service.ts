import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/product';

@Injectable({
  providedIn: 'root',
})
export class OrderService{
  updateorder(uorder:Order) {
    return this.http.put(`http://localhost:3000/orders/${uorder}`,uorder)
  }
 

  constructor(private router: Router, private http: HttpClient,) {}
  

  Order(OrderData: Order) {
    return this.http
      .post('http://localhost:3000/orders',OrderData, { observe: 'response' })
     
  }

  allorders(){
    return this.http.get<Order[]>('http://localhost:3000/orders');
  }

  getOrder(){
    
  // let ordersdata = localStorage.getItem('order');
  // let userdata = ordersdata && JSON.parse(ordersdata).userId;
   
  let user = localStorage.getItem('users');
  let userdata =  user && JSON.parse(user).id;
  
    return this.http.get<Order>('http://localhost:3000/orders?userId=' +userdata)
  
}

  cancelOrder(orderId:number){
    return this.http.delete(`http://localhost:3000/orders/${orderId}`)
  }
}
