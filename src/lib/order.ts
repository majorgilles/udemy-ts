import { IOrder } from "./calculate-total-amount";

export class Order implements IOrder {
  products: any[];
  constructor(products: any[]) {
    this.products = products;
  }
  calculateTotal(): number {
    return 100;
  }
}
