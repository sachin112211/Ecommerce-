import { Component, OnInit } from '@angular/core';
import { Product } from 'src/product';
import { ProductService } from '../services/product.service';
import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {

  ProductList :undefined | Product[]
  productMessage:string | undefined;
  icon=faTrash;
  ikon = faEdit;

constructor(private product:ProductService){}
  
 

ngOnInit():void {

  
this.List();
  
}

delete(id:number){
  this.product.deleteProduct(id).subscribe((result: any)=>{
    if(result){
      this.productMessage ="product deleted successfully"
    }
    this.List();

  });

  setTimeout(()=>{
    this.productMessage = undefined
  },3000)
}



List(){
  this.product.ProductList().subscribe((result)=>{
    console.warn(result)
    this.ProductList = result;

    this.ProductList.forEach((product)=>{
       Object.assign(product,{total: (product.Price)* (product.quantity)})
    })
})

}

}
