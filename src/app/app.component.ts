import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

import { CartService } from './cart/services/cart.service';
import { ConfigOptionsService } from './core/services/config-options.service';
import { ConstantService } from './core/services/constant.service';
import { ProductModel } from './products/models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: ConstantService,
      useValue: {
        App: 'TaskManager',
        Ver: '1.0',
        API_URL: 'http://localhost:4200',
      },
    },
  ],
})
export class AppComponent implements AfterViewInit, OnInit {
  @ViewChild('appTitle')
  appTitle!: ElementRef<HTMLHeadingElement>;

  constructor(
    private cartService: CartService,
    private constantService: ConstantService,
    private configOptionsService: ConfigOptionsService
  ) {}

  ngOnInit(): void {
    this.configOptionsService.setConfig({ id: 1, login: 'Maxim' });
  }

  ngAfterViewInit(): void {
    this.appTitle.nativeElement.textContent = 'Shop';
  }

  onAddToCart(product: ProductModel): void {
    this.cartService.addProduct(product);
  }

  get appInfo(): string {
    return JSON.stringify(this.constantService);
  }

  get configOptions(): string {
    return JSON.stringify(this.configOptionsService.getConfig());
  }
}
