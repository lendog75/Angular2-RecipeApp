import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router}   from '@angular/router';
import {Location}                 from '@angular/common';
import 'rxjs/add/operator/switchMap';


import {RecipeService} from './recipe.service';
import {Recipe} from './recipe';

@Component({
    moduleId: module.id,
    selector: 'recipe-detail',
    templateUrl: 'recipe-detail.component.html',
})
export class RecipeDetailComponent implements OnInit {


    constructor(private recipeService:RecipeService,
                private route:ActivatedRoute,
                private _router:Router,
                private location:Location) {
    }


    ngOnInit():void {
        this.route.params
            .switchMap((params:Params) =>
                this.recipeService.getRecipe(params['id']))
            .subscribe(recipe => this.recipe = recipe);
    }

    getImage = function (recipe: Recipe) {
        return "assets/img/catalog/" + recipe.title.split(" ").join("") + '/Cover.png';
    }

    onRatingClicked(message: number): void {
        this.recipe.rating =  message;
    }

    onBack():void {
        this._router.navigate(['/recipes']);
    }

    @Input()
    recipe:Recipe;

}