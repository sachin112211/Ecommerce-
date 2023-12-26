import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  

  constructor(private http:HttpClient) { }


  Product(data:Product){
    this.http.post('http://localhost:3000/products', data,{observe: 'response'})
    .subscribe((result) =>{ 
      console.warn(result);
     // this.router.navigate(['seller-home']);
  
    })
  }

  ProductList():Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  deleteProduct(id:number){
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }

 UpdateProduct(id:number){
    return this.http.get(`http://localhost:3000/products/${id}`)
 }


 getProductById(id:string){

  return this.http.get<Product>(`http://localhost:3000/products/${id}`)
 }

 updateProduct(product:Product){
  return this.http.put(`http://localhost:3000/products/${product.id}`,product);

}

popularproducts(){
  return this.http.get<Product[]>('http://localhost:3000/products?_limit=3');
}

trendyproducts(){
  return this.http.get<Product[]>('http://localhost:3000/products?_limit=8');
}

searchproduct(query: string){
  return this.http.get<Product[]>(`http://localhost:3000/products?q=${query}`);



}






}

