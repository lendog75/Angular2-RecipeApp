import {Component, Input} from '@angular/core';

import {Ingredient} from "./recipe";

@Component({
    selector: 'ingredient-form',
    template: `<form class="form-inline">
                <div> 
                   <label>Amount</label>
                    <input type="text" [(ngModel)]="ingredient.amount" class="form-control" name="ingredientAmount" placeholder="Amount">
                    <label>Unit</label>
                    <input type="text" [(ngModel)]="ingredient.unit" class="form-control" name="ingredientUnit" placeholder="Unit">
                    <label>Name</label>
                    <input type="text" [(ngModel)]="ingredient.name" class="form-control" name="ingredientName" placeholder="Name">
                    <button (click)="hideForm(ingredient)" type="button" class="btn btn-secondary btn-sm">Close</button>
               </div>
               </form> `,
})
export class IngredientFormComponent {
    @Input()
    ingredient:Ingredient;


    hideForm(item: Ingredient):void {
        item.edit = false;
    }

}