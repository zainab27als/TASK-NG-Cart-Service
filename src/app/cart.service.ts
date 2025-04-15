import { Injectable } from '@angular/core';
import { Product } from '../data/products';

type CartItem = Product & { quantity: number };

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: CartItem[] = [];

  constructor() {}

  addToCart(product: Product): void {
    const item = this.cart.find((p) => p.id === product.id);
    if (item) {
      if (item.quantity < product.stock) {
        item.quantity++;
      } else {
        alert('Item is sold out!');
      }
    } else {
      this.cart.push({ ...product, quantity: 1 });
    }
  }
  getCart(): CartItem[] {
    return this.cart;
  }
}
