import { Component, OnInit } from '@angular/core';
import { Food } from '../../models/food';
import { FoodCart } from '../../models/food';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  box1 = 'box1';
  showMe = true;
  a: number = 0;
  b: number = 0;
  n: number = 0;
  i: number = 0;         //i is used for the loop
  flag: number = 0;
  cartItem: number = 0;
  cartArray: FoodCart[] = [];
  foodArray: Food[] = [
    {
      id: 1,
      img: '../../assets/gulab.jpg',
      amt: 100,
      qty: 1,
    },
    {
      id: 2,
      img: '../../assets/dosa.jpg',
      amt: 200,
      qty: 1,
    },
    {
      id: 3,
      img: '../../assets/noodles.jpg',
      amt: 250,
      qty: 1,
    },
    {
      id: 4,
      img: '../../assets/pav-bhaji.jpg',
      amt: 150,
      qty: 1,
    },
    {
      id: 5,
      img: '../../assets/khadvi.jpg',
      amt: 110,
      qty: 1,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onToggle(): void {
    this.showMe = !this.showMe;
  }

  //This method is used for increament food Quantity
  add(foodVar: Food): void {
    //console.log(foodVar.qty);
    if (foodVar.qty !== 10) {
      foodVar.qty = foodVar.qty + 1;
    }
  }

  //This method is used for decreament food Quantity
  minus(foodVar: Food): void {
    if (foodVar.qty !== 1) {
      foodVar.qty = foodVar.qty - 1;
      console.log(typeof foodVar.qty);
      console.log(typeof foodVar);
    }
  }

  // this method is to add a product into the cart
  addCart(foodVar: Food) {
    //console.log('id' + foodVar.id);
    this.cartItem = this.cartItem + foodVar.qty;
    if (this.cartArray[this.a] == null) {
      this.cartArray.push({
        id1: foodVar.id,
        img1: foodVar.img,
        amt1: foodVar.amt,
        qty1: foodVar.qty,
      });
    } else {
      for (this.i = 0; this.i < this.cartArray.length; this.i = this.i + 1) {
        this.n = this.cartArray[this.i].id1;
        this.b = foodVar.id;
        if (this.n == this.b) {
          this.flag = 1;
          this.a = this.i;
        }
      }
      if (this.flag == 0) {
        this.cartArray.push({
          id1: foodVar.id,
          img1: foodVar.img,
          amt1: foodVar.amt,
          qty1: foodVar.qty,
        });
      } else {
        this.cartArray[this.a].qty1 = this.cartArray[this.a].qty1 + foodVar.qty;
      }
    }
    return this.cartArray;
  }

  childCartData(data: number) {
    this.cartItem = data;
  }
}
