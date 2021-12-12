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
        'First Product',
        'First Product Description',
        10,
        Category.Clothes,
        true,
        ['Good', 'Great'],
        ['First Tag']
      ),
      new ProductModel(
        'Second Product',
        'Second Product Description',
        20,
        Category.Furniture,
        false,
        ['Bad', 'Awful'],
        ['Second Tag']),
    ];
  }
}
