import { Injectable } from '@angular/core';

import { CartItemModel } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartList: CartItemModel[] = [];

  constructor() { }

  addToCart(name: string, price: number): void {
    const item = this.cartList.find(item => item.name === name);

    if (item) {
      item.quantity++;
    } else {
      this.cartList.push(new CartItemModel(name, price));
    }
  }

  getCartList(): CartItemModel[] {
    return this.cartList;
  }

  get totalCost(): number {
    return this.cartList.reduce((sum, item) => sum + item.cost, 0);
  }

  get totalQuantity(): number {
    return this.cartList.reduce((sum, item) => sum + item.quantity, 0);
  }
}
