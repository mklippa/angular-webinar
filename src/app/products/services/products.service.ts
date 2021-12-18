import { Injectable } from '@angular/core';

import { Category } from 'src/app/shared/enums/categroy.enum';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): ProductModel[] {
    return [
      new ProductModel(
        1,
        'First Product',
        'First Product Description',
        10,
        Category.Clothes,
        true,
        ['Good', 'Great'],
        ['First Tag']
      ),
      new ProductModel(
        2,
        'Second Product',
        'Second Product Description',
        20,
        Category.Furniture,
        false,
        ['Bad', 'Awful'],
        ['Second Tag']),
      new ProductModel(
        3,
        'Third Product',
        'Third Product Description',
        25,
        Category.Digital,
        true,
        ['Not Bad', 'rather good'],
        ['Third Tag']),
    ];
  }
}
