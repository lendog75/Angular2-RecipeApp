import {Component, OnInit} from '@angular/core';

import {Recipe} from "./recipe";
import {RecipeService} from "./recipe.service";


@Component({
    moduleId: module.id,
    selector: 'recipe-list',
    templateUrl: 'recipe-list.component.html',
    styles: [`
            @media (min-width: 530px) {
                .card-columns {
                    column-count: 1;
                }
            }
            
            @media (min-width: 720px) {
                .card-columns {
                    column-count: 2;
                }
            }
            @media (min-width: 1024px) {
                .card-columns {
                    column-count: 4;
                }
            }
              .selected {
                background-color: #CFD8DC !important;
                color: white;
              }
              .recipes {
                margin: 0 0 2em 0;
                list-style-type: none;
                padding: 0;
                width: 15em;
              }
              .recipes li {
                cursor: pointer;
                position: relative;
                left: 0;
                background-color: #EEE;
                margin: .5em;
                padding: .3em 0;
                height: 1.6em;
                border-radius: 4px;
              }
              .recipes li.selected:hover {
                background-color: #BBD8DC !important;
                color: white;
              }
              .recipes li:hover {
                color: #607D8B;
                background-color: #DDD;
                left: .1em;
              }
              .recipes .text {
                position: relative;
                top: -3px;
              }
              .recipes .badge {
                display: inline-block;
                font-size: small;
                color: white;
                padding: 0.8em 0.7em 0 0.7em;
                background-color: #607D8B;
                line-height: 1em;
                position: relative;
                left: -1px;
                top: -4px;
                height: 1.8em;
                margin-right: .8em;
                border-radius: 4px 0 0 4px;
              }
            // `]
})

export class RecipeListComponent implements OnInit {
    recipes:Recipe[];
    selectedRecipe:Recipe;
    listFilter:string;
   
    constructor(private recipeService:RecipeService) {
        recipeService = recipeService;
    }

    getRecipes():void {
        this.recipeService.getRecipes().subscribe(
            recipes => this.recipes = recipes
        );
        let xxx = this.recipes;
    }

    ngOnInit():void {
        this.getRecipes();
    }

    onSelect(recipe:Recipe):void {
        this.selectedRecipe = recipe;
    }

}
