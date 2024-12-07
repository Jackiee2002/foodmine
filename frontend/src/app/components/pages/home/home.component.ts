import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/Food';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [
CommonModule,
RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods:Food[] = [];
  constructor(private foodService:FoodService) {
    this.foods = foodService.getAll();
  }

  ngOnInit(): void {
  }

}