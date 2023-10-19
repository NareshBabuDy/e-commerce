import { Component } from '@angular/core';
import { Product } from 'src/app/models/product';
import { StorageService } from 'src/app/services/stroage.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
})
export class OrdersComponent {

  constructor(private storageServices: StorageService){
    
  }
  cartProducts = this.storageServices.getorder();
  
}
