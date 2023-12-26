import { Component, OnInit } from '@angular/core';
import { OrderService } from '../orderservice/order.service';
import { Order } from 'src/product';
import { Router } from '@angular/router';
import { SellerService } from '../Sellerservices/seller.service';

@Component({
  selector: 'app-seller-orders',
  templateUrl: './seller-orders.component.html',
  styleUrls: ['./seller-orders.component.css']
})
export class SellerOrdersComponent implements OnInit {

 public orderdata: Order[] = [];

  constructor(private orders:OrderService,private router:Router,private seller: SellerService){}
  ngOnInit(): void {

   
   
    this.getorders();

  }

  getorders(){
   this.orders.allorders().subscribe((res)=>{
    if(localStorage.getItem('seller')){
    this.seller.isSellerLoggedIn.next(true);

    if(res){
      this.orderdata = res
    }

  }
  else{
    this.router.navigateByUrl('');
  }

   });
  }


  updateorder(uorder:Order){
    this.orders.updateorder(uorder).subscribe(res=>{
    


    })
  }



  
}
