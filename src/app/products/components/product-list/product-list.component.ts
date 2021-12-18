import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Output() addToCart: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  products: ProductModel[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  onAddToCard(product: ProductModel): void {
    this.addToCart.emit(product);
  }

}
