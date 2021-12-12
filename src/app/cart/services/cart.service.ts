import { Injectable } from '@angular/core';

import { CartItem } from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getCartList(): CartItem[] {
    return [
      { id: 1, name: 'Laptop' },
      { id: 2, name: 'Headphones' },
      { id: 3, name: 'Mouse' }
    ];
  }
}
