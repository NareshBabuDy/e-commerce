import { Injectable } from '@angular/core';
import { Users } from '../models/users';
import { Product } from '../models/product';
import { Cart } from '../models/cart';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  users: Users[] = [
    {
      id: 1,
      email: 'naresh@gmail.com',
      password: 'hello',
    },
  ];

  constructor() {}

  loadUsers() {
    if (!localStorage.getItem('users')) {
      localStorage.setItem('users', JSON.stringify(this.users));
    }
  }

  getAllUsers(): Users[] {
    return JSON.parse(localStorage.getItem('users') || '[]');
  }

  setLoggedInUser(user: Users) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  removeLoggedInUser() {
    localStorage.removeItem('user');
  }

  isLoggedInUser() {
    return localStorage.getItem('user') !== null;
  }

  getLoggedInUser(): Users | null {
    return JSON.parse(localStorage.getItem('user') || 'null');
  }

  saveProducts(products: Product[]): void {
    localStorage.setItem('products', JSON.stringify(products));
  }

  SetCart(cart: Cart[]): void {
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }
  
  getCachedProducts(): Product[] {
    return JSON.parse(localStorage.getItem('products') || '[]');
  }

  loadCartProducts(cart: Product[]): void {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getCartProducts(): Product[] {
    return JSON.parse(localStorage.getItem('cart') as string);
  }

  clearcart() {
    let order: Product[] = JSON.parse(localStorage.getItem('cart') as string);
    localStorage.setItem('order', JSON.stringify(order) as string);
    return localStorage.setItem('cart', JSON.stringify([]) as string);
  }

  SetProducts(products: Product[]): void {
    if (!localStorage.getItem('products')) {
      localStorage.setItem('products', JSON.stringify(products));
    }
  }

  getorder() {
    return JSON.parse(localStorage.getItem('order') as string);
  }
}
