import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../../shared/models/Food';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SearchComponent } from '../../partials/search/search.component';
import { TagsComponent } from '../../partials/tags/tags.component';


@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    RouterLink,
    SearchComponent,
    TagsComponent
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods:Food[] = [];
  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
        this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else if (params.tag)
        this.foods = this.foodService.getAllFoodsByTag(params.tag)
      else
        this.foods = foodService.getAll();
    })

  }

  ngOnInit(): void {
  }

}