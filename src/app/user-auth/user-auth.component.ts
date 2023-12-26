import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users/users.service';
import { signup } from '../signup';
import { login} from '../login';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent implements OnInit{
  showLogin =false;
  authError:string = "";
constructor(private router:Router,private user :UsersService){}
  ngOnInit(): void {
  this.user.userAuthReload();
  
  }

usignup(data:signup){
console.warn(data);
this.user.usersignup(data);
 

}

uLogin(data:login){
  console.warn(data);
this.user.userlogin(data);
this.user.userauth.subscribe(data =>{
 console.warn("apples",data);
 if(data){
  this.authError="Please Enter Valid Details";
 }
})
}


onLogin(){
  this.showLogin = true
}

onSignup(){
  this.showLogin = false;
}

}





