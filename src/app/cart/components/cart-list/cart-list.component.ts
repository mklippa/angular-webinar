import { Component, OnInit } from '@angular/core';

import { CartItemModel } from '../../models/cart-item.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  public cartList: CartItemModel[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartList = this.cartService.getCartList();
  }

  trackById(index: number, item: CartItemModel): string {
    return item.name;
  }

  get cartListIsEmpty(): boolean {
    return !this.cartList?.length;
  }
}
