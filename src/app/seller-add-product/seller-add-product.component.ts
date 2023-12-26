import { Component, OnInit } from '@angular/core';
import { SellerService } from '../Sellerservices/seller.service';
import { Product } from 'src/product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
  
  productmessage: undefined | string;

 constructor(private seller:SellerService,private router:Router){}
  ngOnInit(): void {
   
  }


  Submit(data: Product){
    console.warn(data);
    this.seller.Product(data);
  this.productmessage = 'product Added successfully'
  setTimeout(() => {
    this.productmessage = undefined
  }, 3000)
this.router.navigate([' seller-home'])
  }


  
}
