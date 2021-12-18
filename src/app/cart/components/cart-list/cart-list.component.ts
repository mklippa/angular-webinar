import { Component, OnInit } from '@angular/core';

import { CartItem } from '../../models/cart-item.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  public cartList: CartItem[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartList = this.cartService.getCartList();
  }

  trackById(index: number, item: CartItem): number {
    return item.id;
  }

  // ![1] === false
  // условие надо проверять на количество элементов
  get cartListIsEmpty(): boolean {
    return !this.cartList;
  }
}
