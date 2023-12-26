import { Component } from '@angular/core';
import { SellerService } from '../Sellerservices/seller.service';
import { Router } from '@angular/router';
import { signup } from '../signup';
import { login } from '../login';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'] 
})
export class SellerAuthComponent {
 

  showLogin =false;
  authError:string = "";
 

    constructor(private seller:SellerService,private router:Router){}
    ngOnInit():void{
      this.seller.reloadSeller()
        
      
    }
  signup(data:signup):void{
    this.seller.userSignUp(data);
  }
  Login(data:login){
    this.seller.ULogin(data);
    console.log(data)
    
    this.seller.isLoginError.subscribe((isError=>{
      if(isError){
     this.authError="Email or passsword is not correct";
      }  

 
 
    }))
  }
  

  onLogin(): void{
    this.showLogin = true
  }
  
  onSignup(){
    this.showLogin = false;
  }
  
}
