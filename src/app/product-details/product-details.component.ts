import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from 'src/product';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 
  productquantity:number=1;
  counter = 0;
  productdetail:Product | undefined;
  
  price:number = 0;
  total:number =0;


constructor(private router:Router,private activeroute :ActivatedRoute,private product :ProductService,private cart:CartService){}
 

ngOnInit(): void {
   let productId = this. activeroute.snapshot.paramMap.get('productId');
   productId && this.product.getProductById(productId).subscribe((result)=>{
    
    console.warn(result);
    this.productdetail = result;
    
   this.price = this.productdetail.Price;
  

  
    
  
    
    
   

   })

  }


  
increasequantity(val:string){
 this.productquantity =this.productquantity+1;
}

decreasequantity(val:string){
  if(this.productquantity >0){
  this.productquantity = this.productquantity-1;
  }
  else{
    this.productquantity = 0;
  }
}


addtocart(){
   if(this.productdetail){
   
    this.productdetail.quantity = this.productquantity
    this.productdetail.Total = (this.price)*(this.productquantity) 
    this.cart.addtocart(this.productdetail)
    
     console.warn(typeof(this.productquantity),typeof(this.price));

    
   }
}



}




