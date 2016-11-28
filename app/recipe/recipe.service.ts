import {Injectable} from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import {Recipe} from './recipe';


@Injectable()
export class RecipeService {
    private recipeUrl = 'http://localhost:8080/api/recipes';  // URL to web api


    constructor(private http: Http) { }


    getRecipes(): Observable<Recipe[]> {
        return this.http.get(this.recipeUrl)
            .map((response: Response) => <Recipe[]> response.json())
            .do(data => console.log('all: ' + JSON.stringify(data)))
            .catch(this.handleError);


    }

    getRecipe(id: string): Observable<Recipe> {
        var url = this.recipeUrl + '/' + id;
        console.log(url);

        return this.http.get(url)
            .map((response: Response) => <Recipe> response.json())
            .do(data => console.log('all: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response)  {
        console.error(error);
        return Observable.throw(error.json().error || 'server error');
        //return Promise.reject(error.message || error);
    }


    // getRecipes(): Promise<Recipe[]> {
    //     return this.http.get(this.recipeUrl)
    //         .toPromise()
    //         .then(
    //             response => response.json() as Recipe[]
    //         )
    //         .catch(this.handleError);
    // }


    // getRecipe(id: string): Observable<Recipe> {
    //     var url = this.recipeUrl + '/' + id;
    //     console.log(url);
    //
    //     return this.http.get(url)
    //         .toPromise()
    //         .then(
    //             response => response.json() as Recipe
    //         )
    //         .catch(this.handleError);
    // }


    //
    // private handleError(error: any): Promise<any> {
    //     console.error('An error occurred', error);
    //     return Promise.reject(error.message || error);
    // }

}











