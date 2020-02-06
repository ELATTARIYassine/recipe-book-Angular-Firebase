import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipeStaticImg = "https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_auto,w_610/v1/hellofresh_s3/image/5e25f8a6e5491a4d4a6f9912-87bb0d1e.jpg"

  recipes: Recipe[] = [
    new Recipe('Indian food', 'This is simple test', this.recipeStaticImg),
    new Recipe('Burger', 'This is simple test', this.recipeStaticImg) 
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
