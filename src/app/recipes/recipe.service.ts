import { Recipe } from './recipe.model';

export class RecipeService {

    recipeStaticImg = "https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_auto,w_610/v1/hellofresh_s3/image/5e25f8a6e5491a4d4a6f9912-87bb0d1e.jpg"

    private recipes: Recipe[] = [
        new Recipe('Indian food', 'This is simple test', this.recipeStaticImg),
        new Recipe('Burger', 'This is simple test', this.recipeStaticImg) 
    ];
    getRecipes() :  Recipe[]{
        return this.recipes.slice();
    }

}