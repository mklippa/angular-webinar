import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product!: ProductModel;

  @Output() addToCart: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

}
