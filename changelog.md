# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.4.0] - 2022-01-23
### Added
- Currency pipe to cart-item.component.html, product.component.html.
- Uppercase pipe to cart-item.component.html, product.component.html.
- Async pipe to product-list.component.html.
- OrderBy pipe to cart-list.component.html

### Changed
- Return observable from getProducts().
- Refactoring of the modules import/export.

## [0.3.0] - 2022-01-23
### Added
- ConfigOptionsService.
- ConstantsService.
- GeneratorService.
- GeneratorFactory.
- LocalStorageService.
- IncreaseFontDirective.
- Usage of new services in the FirstComponent.

### Changed
- Refactoring of the CartService.

## [0.2.0] - 2021-12-26
### Added
- Splitting the application into modules.
- Adding products to the cart.
- Counting of the quantity and cost of purchased products into CartService.
- Display the number of purchased items and the total cost in CartListComponent.
- СartItemComponent.
- Change the quantity of the product (increase/decrease), remove the product from the cart within СartItemComponent.
- Use OnPush strategy for СartItemComponent.
- Setting the AppComponent header via a template variable.
- Use the ngClass directive to highlight the product availability field.

### Changed
- Display of the list of products.


## [0.1.0] - 2021-12-12
### Added
- New project setup.
- First component.
- ProductComponent.
- ProductListComponent.
- ProductsService.
- ProductModel.
- ProductListComponent.
- CartListComponent.
- CartService.
- CartItemModel.


[0.1.0]: https://github.com/mklippa/angular-webinar/releases/tag/v0.1.0
[0.2.0]: https://github.com/mklippa/angular-webinar/releases/tag/v0.2.0
[0.3.0]: https://github.com/mklippa/angular-webinar/releases/tag/v0.3.0
[0.4.0]: https://github.com/mklippa/angular-webinar/releases/tag/v0.4.0