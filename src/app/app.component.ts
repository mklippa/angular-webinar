import { Component } from '@angular/core';

import { CartService } from './cart/services/cart.service';
import { ProductModel } from './products/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';

  constructor(private cartService: CartService) {
  }

  onAddToCart(product: ProductModel): void {
    this.cartService.addToCart(product.name, product.price);
  }
}
