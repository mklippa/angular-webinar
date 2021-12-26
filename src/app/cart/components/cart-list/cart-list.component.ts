import { Component, OnInit } from '@angular/core';

import { CartItemModel } from '../../models/cart-item.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  trackByName(index: number, item: CartItemModel): string {
    return item.name;
  }

  onIncreaseClick(item: CartItemModel): void {
    this.cartService.increaseQuantity(item.name);
  }

  onDecreaseClick(item: CartItemModel): void {
    this.cartService.decreaseQuantity(item.name);
  }

  onDeleteClick(item: CartItemModel): void {
    this.cartService.deleteChartItem(item.name);
  }

  get cartList(): CartItemModel[] {
    return this.cartService.getCartList();
  }

  get cartListIsEmpty(): boolean {
    return !this.cartList?.length;
  }

  get totalQuantity(): number {
    return this.cartService.totalQuantity;
  }

  get totalCost(): number {
    return this.cartService.totalCost;
  }
}
