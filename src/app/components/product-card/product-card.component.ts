import { Component, Input } from '@angular/core';
import { Product } from '../../../data/products';
import { RouterLink } from '@angular/router';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private _cartService: CartService) {}
  addToCart(): void {
    if (this.product) {
      this._cartService.addToCart(this.product);
      console.log('Item added to cart:', this.product);
    }
  }
}
