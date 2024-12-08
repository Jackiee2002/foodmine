import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule,],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartquantity=0;
  constructor(cartSerive:CartService) {
    cartSerive.getCartObservable().subscribe((newCart) =>{
      this.cartquantity = newCart.totalCount;
    })
   }

  ngOnInit(): void {
  }

}