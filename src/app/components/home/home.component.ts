import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { StorageService } from 'src/app/services/stroage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  Products: Product[] = [];

  cartItems: Cart[] = [];

  constructor(
    private productservices: ProductService,
    private cartservices: CartService,
    private storageservices: StorageService
  ) {
    this.productservices.getallproduct().subscribe({
      next: (data: Product[]) => {
        this.Products = data;
        this.storageservices.saveProducts(this.Products);
        this.storageservices.SetCart(this.cartItems);
      },
      complete: () => {
        console.log('completed');
      },
      error: (error: Error) => {
        console.log('Message:', error.message);
        console.log('Name:', error.name);
      },
    });
  }


  addToCart(id: number) {
    this.cartservices.addToCart(id);
  }
}
