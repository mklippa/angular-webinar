import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { CartItemModel } from '../../models/cart-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Input() cartItem!: CartItemModel;

  @Output() increaseClick: EventEmitter<CartItemModel> = new EventEmitter();
  @Output() decreaseClick: EventEmitter<CartItemModel> = new EventEmitter();
  @Output() deleteClick: EventEmitter<CartItemModel> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onIncreaseClick(): void {
    this.increaseClick.emit(this.cartItem);
  }

  onDecreaseClick(): void {
    this.decreaseClick.emit(this.cartItem);
  }

  onDeleteClick(): void {
    this.deleteClick.emit(this.cartItem);
  }

}
