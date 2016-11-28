import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params}   from '@angular/router';
import {Location}                 from '@angular/common';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/switchMap';


import {RecipeService} from './recipe.service';

import {Recipe, Ingredient, Direction, Tip, Stuff, adminSection} from './recipe';


@Component({
    moduleId: module.id,
    selector: 'recipe-admin',
    templateUrl: 'recipe-admin.component.html',
})
export class RecipeAdminComponent implements OnInit {
    

    constructor(private recipeService:RecipeService,
                private route:ActivatedRoute,
                private location:Location) {
    }

    ngOnInit():void {
        this.route.params
            .switchMap((params:Params) =>
                this.recipeService.getRecipe(params['id']))
            .subscribe(recipe => this.recipe = recipe);
    }


    editItem(item:any):void {
        item.edit = true;
    }


    deleteItem(item:any, array:any):void {
        array.splice(array.indexOf(item), 1);
        
    }

    addItem(itemType:string, array:any):void {
        let item = new adminSection();
        if(itemType === 'ingredient'){
            let item = new Ingredient();
        } else  if(itemType === 'direction'){
            let item = new Direction();
        } else  if(itemType === 'tip'){
            let item = new Tip();
        } else if(itemType === 'stuff'){
            let item = new Stuff();
        }
        
        array.push(item);
        this.editItem(item);
    }

  


    @Input()
    recipe:Recipe;


    //
    // getImage = function (recipe) {
    //     return "assets/img/catalog/" + recipe.title.split(" ").join("") + '/Cover.png';
    // }

}