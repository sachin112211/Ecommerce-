import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
   public pid : number[] = [];
  public cartitems: Product[] = [];
   public productlist = new BehaviorSubject<any>([]);
  Product: any;

  constructor() {}

 
  getproduct(){
    return this.productlist.asObservable();
  }

  setproduct(product:Product){
    this.cartitems.push(product);
    this.productlist.next(product);
   

  }

  addtocart(product:Product){
    console.warn(product);
    this.cartitems.push(product);
    this.productlist.next(this.cartitems);
    localStorage.setItem('cartitems', JSON.stringify(this.cartitems));
    this.gettotalprice();
  }

  gettotalprice(): number{
  let grandtotal =0;
  this.cartitems.map((Product:any)=>{
    grandtotal += Product.Total;
  });

  return grandtotal;

}

removeitems(Product:Product){
  this.cartitems.map((Product:Product,index)=>{
   if(this.Product.id == Product.id){
    this.cartitems.slice()
   }
  
  });
}

removeallitems(){
  this.cartitems = [];
  this.productlist.next(this.cartitems);
}

// this..forEach((order: any) => {
//   this.cloneOrders = order;
// });
}
  
  





