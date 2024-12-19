import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/Food';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-food-page',
  standalone: false,
  
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent {
food!: Food;
constructor(activatedRoute:ActivatedRoute, foodSerive:FoodService, private cartService:CartService
  , private router: Router){
  activatedRoute.params.subscribe((params) => {
    if(params.id)
     foodSerive.getFoodById(params.id).subscribe(serverFood => {
      this.food =serverFood
    });
  })
}
ngOnInit(): void{

}
addToCart(){
this.cartService.addToCart(this.food);
this.router.navigateByUrl('/cart-page')
}
}
