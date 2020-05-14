import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();

    constructor(private slService: ShoppingListService){}

    recipeStaticImg = "https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_auto,w_610/v1/hellofresh_s3/image/5e25f8a6e5491a4d4a6f9912-87bb0d1e.jpg";
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('Indian food', 'This is simple test', this.recipeStaticImg, 
        [
            new Ingredient('Meat', 1), 
            new Ingredient('French Fries', 10)
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

    AddIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    getRecipe(index: number)
    {
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, recipe: Recipe){
        this.recipes[index] = recipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        console.log(this.recipes);
        this.recipes.splice(index, 1);
        console.log(this.recipes);
        this.recipesChanged.next(this.recipes.slice());
    }
}