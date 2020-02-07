import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {

    recipeStaticImg = "https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_auto,w_610/v1/hellofresh_s3/image/5e25f8a6e5491a4d4a6f9912-87bb0d1e.jpg";
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('Indian food', 'This is simple test', this.recipeStaticImg, 
        [
            new Ingredient('Meat', 1), 
            new Ingredient('French Fries', 20)
        ]),
        new Recipe('Burger', 'This is simple test', this.recipeStaticImg, 
        [
            new Ingredient('Buns', 2),
            new Ingredient('Meat', 1)
        ]) 
    ];
    getRecipes() :  Recipe[]{
        return this.recipes.slice();
    }

}