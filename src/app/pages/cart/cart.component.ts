import { Component, NgModule } from '@angular/core';
import { CartService } from '../../cart.service';
import { NgModel } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  productInCart: any;
  constructor(private _cartService: CartService) {
    this.productInCart = this._cartService.getCart();
    console.log('Item Added to Cart', this.productInCart);
  }
  increaseQuantity(item: any): void {
    if (item.quantity < item.stock) {
      item.quantity++;
    }
  }
  decreaseQuantity(item: any): void {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }
  removeItem(index: number): void {
    this.productInCart.splice(index, 1);
  }
  getItemTotal(item: any): number {
    return item.price * item.quantity;
  }
  getCartTotal(): number {
    return this.productInCart.reduce(
      (total: number, item: any) => total + this.getItemTotal(item),
      0
    );
  }
}
