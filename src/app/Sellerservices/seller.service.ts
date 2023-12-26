import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signup } from '../signup';
import {login} from '../login';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Product } from 'src/product';
@Injectable({
  providedIn: 'root',
})
export class SellerService {
  reload() {
    throw new Error('Method not implemented.');
  }
  isSellerLoggedIn = new BehaviorSubject<boolean>(false);
  isLoginError = new EventEmitter<Boolean>(false);
  

  constructor(private http: HttpClient, private router: Router) {}
  userSignUp(data: signup) {
    return this.http
      .post('http://localhost:3000/seller', data, { observe: 'response' })
      .subscribe((result) => {
        this.isSellerLoggedIn.next(true);
        localStorage.setItem('seller', JSON.stringify(result.body));
        this.router.navigate(['seller-home']);
        console.warn(result);
      });
  }

  reloadSeller() {
    if (localStorage.getItem('seller')) {
      this.isSellerLoggedIn.next(true);
      this.router.navigate(['seller-home']);
    }
  }

  ULogin(data:login){
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
    {observe: 'response'}
    ).subscribe((result:any) => {
      console.warn(result);
    
    if(result && result.body && result.body.length){
        console.warn("user logged in");
        localStorage.setItem('seller', JSON.stringify(result.body));
        this.router.navigate(['seller-home']);
      }
    
      else{
        this.isLoginError.emit(true);
        console.warn("login failed");
      }
    })
}




Product(data:Product){
  this.http.post('http://localhost:3000/products', data,{observe: 'response'})
  .subscribe((result) =>{ 
    console.warn(result);
   // this.router.navigate(['seller-home']);

  })
}

}
                    