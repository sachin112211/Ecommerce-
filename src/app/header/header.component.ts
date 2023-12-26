import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from 'src/product';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuType: string = 'default';
  default: any;
  userName: string = '';
  sellername: string = '';
  searchmethod: undefined | Product[];
  totalitem: number = 0;
  constructor(
    private router: Router,
    private product: ProductService,
    private cart: CartService
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      if (val.url) {
        // console.warn(val.url);
        if (localStorage.getItem('seller') && val.url.includes('seller')) {
          // console.warn("inside seller");

          let sellerStore = localStorage.getItem('seller');
          let sellerData = sellerStore && JSON.parse(sellerStore)[0];
          this.sellername = sellerData.name;
          this.menuType = 'seller';
        } else if (localStorage.getItem('users')) {
          let userStore = localStorage.getItem('users');
          let userData = userStore && JSON.parse(userStore);
          this.userName = userData.name;
          this.menuType = 'users';
        } else {
          console.warn('outside seller');
          this.menuType = 'default';
        }
      }
    });

    this.cart.getproduct().subscribe((res) => {
      console.warn(res.length);
      this.totalitem = res.length;
      console.warn(this.totalitem);
    });
  }

  Logout() {
    localStorage.removeItem('seller');
    this.router.navigate(['/']);
  }
  userLogout() {
    localStorage.removeItem('users');
    this.cart.removeallitems();
    this.router.navigate(['user-auth']);
  }

  submit(query: string) {
    console.log(query);
  }

  search(query: KeyboardEvent) {
    if (query) {
      const element = query.target as HTMLInputElement;

      console.warn(element.value);

      this.product.searchproduct(element.value).subscribe((result) => {
        console.warn(result);

        this.searchmethod = result;

        if (result.length > 5) {
          result.length = 5;
        }
        setTimeout(() => {});
      });
    }
  }

  hidesearch() {
    this.searchmethod = undefined;
  }

  submitsearch(val: string) {
    console.warn(val);
    this.router.navigate([`search/${val}`]);
  }

  detailsproduct(id: number) {
    this.router.navigate([`details/${id}`]);
  }


  sellerorders(){
    let seller = localStorage.getItem('seller');
    if(seller){
     this.router.navigate(['seller-orders']);
    }
    else{
     this.router.navigate(['/'])
    }
  }
}
