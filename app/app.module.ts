import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule}   from '@angular/router';
import {HttpModule}    from '@angular/http';

import {AppComponent}  from './app.component';
import {NavbarComponent} from "./navbar/navbar.component";


import {SharedModule} from "./shared/shared.module";
import {RecipeModule} from "./recipe/recipe.module";


@NgModule({
    bootstrap: [AppComponent],
    imports: [
        SharedModule,
        RecipeModule,
        BrowserModule,
        HttpModule,
        RouterModule.forRoot([
          
        ])

    ],
    declarations: [
        AppComponent,
        NavbarComponent,
    ],
    providers: [
     
    ]
})
export class AppModule {
}
