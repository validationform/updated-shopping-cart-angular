import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  @Input() public shopData: any;
  @Input() public parent: any;
  @Input() public cart: any;

  constructor() {}

  ngOnInit(): void {}

  //This method is used for increament the food Quentity
  add1(food: any): void {
    //console.log(food.qty1);
    if (food.qty1 !== 10) {
      food.qty1 = food.qty1 + 1;
      this.cart = this.cart + 1;
      console.log(this.cart);
    }
  }

  //This method is used for decrement the food Quentity
  sub1(food: any): void {
    //console.log(food.qty1);
    if (food.qty1 !== 0) {
      food.qty1 = food.qty1 - 1;
      this.cart = this.cart - 1;
    } else if (food.qty1 === 0) {
      //delete this.shopData;
      this.shopData.pop();
    }
  }
}
