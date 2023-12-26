import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { signup } from '../signup';
import { login } from '../login';
import { Router, RouterLink } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
userauth = new EventEmitter<boolean>(false);
  constructor(private http:HttpClient,private router: Router) { }

   
usersignup(data:signup) {  
    console.warn(data);
 this.http.post("http://localhost:3000/users", data, { observe: 'response' }).subscribe((result) => {
     
 console.warn(result);

    if(result){
      localStorage.setItem('users', JSON.stringify(result.body)); 
      this.router.navigate(['']);
    }

  })
  
  }

  userAuthReload(){
    if (localStorage.getItem('users')){
      this.router.navigate(['/']);
    }
  }


  userlogin(data:login){
     this.http.get<signup[]>(`http://localhost:3000/users?email=${data.email}&password=${data.password}`,{observe: 'response'}).subscribe((result)=>{

   // console.warn(result);
    if(result && result.body?.length){
      localStorage.setItem('users', JSON.stringify(result.body[0]))
      this.router.navigate(['/']);
      
      this.userauth.emit(false);
   // console.warn(result.body[0])
    }
    else{
      this.userauth.emit(true);
    }
    })
  }


}
