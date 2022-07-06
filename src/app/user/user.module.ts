import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [ShopComponent, CartComponent],
  imports: [CommonModule],
  exports: [ShopComponent, CartComponent],
})
export class UserModule {}
