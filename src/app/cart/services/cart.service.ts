import { Injectable } from '@angular/core';

import { CartItemModel } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartProducts: CartItemModel[] = [];

  constructor() {}

  getProducts(): CartItemModel[] {
    const products = [
      ...this.cartProducts.map((p) => ({ ...p } as CartItemModel)),
    ];
    products.sort((a, b) => a.name.localeCompare(b.name));
    return products;
  }

  addProduct({ name, price }: { name: string; price: number }): void {
    const item = this.cartProducts.find((item) => item.name === name);

    if (item) {
      item.quantity++;
    } else {
      this.cartProducts.push(new CartItemModel(name, price));
    }
  }

  removeProduct(name: string): void {
    this.cartProducts = this.cartProducts.filter((x) => x.name != name);
  }

  increaseQuantity(name: string): void {
    const item = this.cartProducts.find((item) => item.name === name);

    if (item) {
      item.quantity++;
    }
  }

  decreaseQuantity(name: string): void {
    const item = this.cartProducts.find((item) => item.name === name);

    if (item) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.cartProducts = this.cartProducts.filter((x) => x != item);
      }
    }
  }

  removeAllProducts(): void {
    this.cartProducts = [];
  }

  get isEmptyCart(): boolean {
    return !this.cartProducts.length;
  }

  get totalCost(): number {
    return this.cartProducts.reduce((sum, item) => sum + item.cost, 0);
  }

  get totalQuantity(): number {
    return this.cartProducts.reduce((sum, item) => sum + item.quantity, 0);
  }
}
