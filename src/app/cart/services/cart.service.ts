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
      const qty = item.quantity;
      this.deleteChartItem(item.name);
      this.cartList.push(new CartItemModel(name, price, qty + 1));
    } else {
      this.cartList.push(new CartItemModel(name, price));
    }
  }

  getCartList(): CartItemModel[] {
    return this.cartList;
  }

  increaseQuantity(name: string): void {
    const item = this.cartList.find(item => item.name === name);

    if (item) {
      item.quantity++;
    }
  }

  decreaseQuantity(name: string): void {
    const item = this.cartList.find(item => item.name === name);

    if (item) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.cartList = this.cartList.filter(x => x != item);
      }
    }
  }

  deleteChartItem(name: string): void {
    this.cartList = this.cartList.filter(x => x.name != name);
  }

  get totalCost(): number {
    return this.cartList.reduce((sum, item) => sum + item.cost, 0);
  }

  get totalQuantity(): number {
    return this.cartList.reduce((sum, item) => sum + item.quantity, 0);
  }
}
