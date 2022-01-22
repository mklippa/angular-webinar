import { Component, OnInit } from '@angular/core';
import { OrderByPipe } from 'src/app/shared/pipes/order-by.pipe';

import { CartItemModel } from '../../models/cart-item.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  providers: [OrderByPipe]
})
export class CartListComponent implements OnInit {
  public sortOptions: { key: string; asc: boolean } = {
    key: 'name',
    asc: false,
  };

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

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
    this.cartService.removeProduct(item.name);
  }

  onSortChange(event: any): void {
    this.sortOptions.key = event.target.value;
  }

  onOrderChange(event: any): void {
    this.sortOptions.asc = event.target.checked;
  }

  get cartList(): CartItemModel[] {
    return this.cartService.getProducts();
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
