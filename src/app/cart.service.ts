import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CartService {
  items = [];
  constructor() {}

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items.sort((a, b) => (a.price < b.price ? -1 : 1));
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
