import { Injectable } from '@angular/core';

import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getCartList(): CartItem[] {
    return [
      { id: 1, name: 'Laptop', quantity: 1 },
      { id: 2, name: 'Headphones', quantity: 1 },
      { id: 3, name: 'Mouse', quantity: 2 }
    ];
  }
}
