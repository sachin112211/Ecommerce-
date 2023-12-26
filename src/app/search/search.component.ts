import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/product';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  show : boolean |undefined
 searchResult: Product[] | undefined
 constructor(private router : Router,private product: ProductService,private activeroute:ActivatedRoute){}
 
  ngOnInit(): void {
    
   let query = this.activeroute.snapshot.paramMap.get('query');

    console.warn(query);
     
      this.show = true
    query && this.product.searchproduct(query).subscribe((result)=>{
      
      if(result.length > 0){
        this.show = true;
     this.searchResult = result;
      }
      else{
        this.show = false;
      }
     
      
  
    })
  }
  
  navigate(){
    this.router.navigate(['seller-home']);

  }

  }




