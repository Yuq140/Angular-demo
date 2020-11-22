import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CartService {
  items = [];
  constructor(private http: HttpClient) {}

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

  getShippingPrices() {
    // Http get request
    return this.http.get("/assets/shipping.json");
  }
}
