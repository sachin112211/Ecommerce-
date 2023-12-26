import { Component, OnInit } from '@angular/core';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../service/cart.service';
import { Order, Product } from 'src/product';
import { Route, Router } from '@angular/router';
import { OrderService } from '../orderservice/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  productid:number = 0;
  ProductID:number[] = [];
   amount :number | undefined;
  orderMsg: string | undefined;
  // orderMsg: string='order has been placed successfully'
 
  constructor(private cart:CartService,private order:OrderService,private router:Router){}
  ngOnInit(): void {
     this.cart.getproduct().subscribe((res)=>{

       this.amount = this.cart.gettotalprice();
      console.warn(this.amount);
       

     })

  }




 
  orderNow(data: { id:number,email: string, address: string, contact: number }){
    let user = localStorage.getItem('users');  
    let userId = user && JSON.parse(user).id;
 
    this.cart.cartitems.forEach((item: Product) => {
      this.productid = item.id;
      this.ProductID.push(this.productid)
});



    if(this.amount){
      let orderData:Order = {
        ...data,
        amount: this.amount,
        userId,
        productId: this.ProductID,
       
      }
     
   
      this.order.Order(orderData).subscribe((res)=>{
        if (res) {
          console.log(res);
        localStorage.setItem('order', JSON.stringify
        (orderData));
      
          setTimeout(() => {
             this.orderMsg = "Order has been Placed";
           
           }, 2000);

           setTimeout(() => {
            this.router.navigate(['orders'])
           },4000)

      }
    })


   

    

      
    }
 


    
  }


}