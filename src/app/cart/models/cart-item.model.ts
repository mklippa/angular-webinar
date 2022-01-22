export class CartItemModel {
  constructor(
    public name: string,
    public price: number,
    public quantity: number = 1) {
  }
}