import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { CartService } from './cart/services/cart.service';
import { ProductModel } from './products/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle')
  appTitle!: ElementRef<HTMLHeadingElement>;

  constructor(private cartService: CartService) {
  }

  ngAfterViewInit(): void {
    this.appTitle.nativeElement.textContent = 'Shop';
  }

  onAddToCart(product: ProductModel): void {
    this.cartService.addProduct(product);
  }
}
