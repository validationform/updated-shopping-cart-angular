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
  cartItem: number = 0;
  cartArray: FoodCart[] = [];
  foodArray: Food[] = [
    {
      img: '../../assets/gulab.jpg',
      amt: 100,
      qty: 1,
    },
    {
      img: '../../assets/dosa.jpg',
      amt: 200,
      qty: 1,
    },
    {
      img: '../../assets/noodles.jpg',
      amt: 250,
      qty: 1,
    },
    {
      img: '../../assets/pav-bhaji.jpg',
      amt: 150,
      qty: 1,
    },
    {
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
    this.cartItem = this.cartItem + foodVar.qty;
    this.cartArray.push({
      img1: foodVar.img,
      amt1: foodVar.amt,
      qty1: foodVar.qty,
    });
    return this.cartArray;
  }

  childCartData(data: number) {
    this.cartItem = data;
  }
}
