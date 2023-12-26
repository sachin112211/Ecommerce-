import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/product';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {

  productData: undefined | Product;
  Productmessage: undefined | string;

constructor(private route:ActivatedRoute,private product: ProductService,private router:Router){}
  ngOnInit(): void {
    let ProductId = this.route.snapshot.paramMap.get('id');
  
  ProductId && this.product.getProductById(ProductId).subscribe((data)=>{
   console.warn(data);
   this.productData = data;
  });
   
  }

Submit(data: Product) {
  if(this.productData){
    data.id = this.productData.id;
  }
 this.product.updateProduct(data).subscribe((result)=>{

    if(result){
    this.Productmessage ="product updated successfully";
    }  
    else{
      this.Productmessage ="Prpduct updation failed";
    }
    
    setTimeout(()=>{
     
      this.Productmessage = undefined;
      this.router.navigate(['/seller-home']);
  
    },3000)

   

 });
 
}
}




