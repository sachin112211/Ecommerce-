import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from 'src/product';
import { RouterLink } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

   trendyproducts: undefined | Product[];
  Popularproduct :undefined | Product[];
  constructor(private product: ProductService,private cart :CartService){}
  ngOnInit(): void {


   

    this.product.popularproducts().subscribe((data)=>{
      console.warn(data);
      
      
    this.Popularproduct = data;
    

    



  })


  this.product.trendyproducts().subscribe((data)=>{
      
         
        this.trendyproducts = data;

      
      
    
      // this.trendyproducts.forEach((product:Product)=>{
      //   Object.assign(product,{total: (product.Price)*(product.quantity)})

      // });

  });




  
}

addtocart(data:Product,val:number){
  val = 1;
    data.quantity = val;

    if(data){
      
      data.Total =data.Price;
      console.warn(data);
    this.cart.addtocart(data);
    }

  
  
}
  

}
