import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  box1 = 'box1';
  cartItem: number = 0;
  showMe = true;
  cartArray: Array<{ img1: any; amt1: number; qty1: number }> = [];
  foodArray = [
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

  //This method is used for increament food Quentity
  add(foodVar: any): void {
    //console.log(f.qty);
    if (foodVar.qty !== 10) {
      foodVar.qty = foodVar.qty + 1;
    }
  }

  //This method is used for decreament food Quentity
  minus(foodVar: any): void {
    if (foodVar.qty !== 1) {
      foodVar.qty = foodVar.qty - 1;
    }
  }

  // this method is to add a product into the cart
  addCart(foodVar: any) {
    this.cartItem = this.cartItem + foodVar.qty;
    this.cartArray.push({
      img1: foodVar.img,
      amt1: foodVar.amt,
      qty1: foodVar.qty,
    });
    return this.cartArray;
  }
}
