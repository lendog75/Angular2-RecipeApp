import {NgModule}      from '@angular/core';
import {RouterModule}   from '@angular/router';
import {HttpModule}    from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {RecipeCardComponent} from './recipe-card.component';
import {RecipeDetailComponent} from './recipe-detail.component';
import {RecipeListComponent} from './recipe-list.component';
import {RecipeService} from './recipe.service';
import {RecipeAdminComponent} from "./recipe-admin.component";
import {IngredientFormComponent} from "./ingredient-form.component";
import {DirectionFormComponent} from "./direction-form.component";
import {TipFormComponent} from "./tip-form.component";
import {StuffFormComponent} from "./stuff-form.component";

import {RecipeFilterPipe} from "./recipe-filter.pipe";
import {SharedModule} from "../shared/shared.module";


@NgModule({
    imports: [
        SharedModule,
        BrowserModule,

        HttpModule,
        RouterModule.forChild([
            {
                path: '',
                redirectTo: '/recipes',
                pathMatch: 'full'
            },
            {
                path: 'recipes',
                component: RecipeListComponent
            },
            {
                path: 'recipe/:id',
                component: RecipeDetailComponent
            },
            {
                path: 'recipe/:id/admin',
                component: RecipeAdminComponent
            }
        ])

    ],
    declarations: [

        RecipeCardComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeAdminComponent,
        IngredientFormComponent,
        DirectionFormComponent,
        TipFormComponent,
        StuffFormComponent,
        RecipeFilterPipe,
    ],
    providers: [
        RecipeService
    ]
})
export class RecipeModule {
}
