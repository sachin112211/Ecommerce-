import { Component, OnInit } from '@angular/core';
import { Product } from 'src/product';
import { CartService } from '../service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public productcollect: Product[] | undefined;

  public amount!: number;

  message: string | undefined;
  constructor(private cart: CartService, private router: Router) {}
  ngOnInit(): void {
    this.cart.getproduct().subscribe((res) => {
      this.productcollect = res;

      this.amount = this.cart.gettotalprice();

      console.warn(typeof this.amount);
      console.warn(typeof this.cart.gettotalprice());
      console.warn(this.amount);
    });
  }

  checkout() {
    let logged = localStorage.getItem('users');
    if (logged) {
      this.router.navigate(['checkout']);
    } else {
      setTimeout(() => {
        this.message = 'Please Login to Checkout';
      }, 2000);

      setTimeout(() => {
        this.router.navigateByUrl('user-auth');
      }, 5000);
    }
  }

  removeproduct(Product: Product) {
    this.cart.removeitems(Product);
  }

  removeallitems() {
    this.cart.removeallitems();
  }
}
