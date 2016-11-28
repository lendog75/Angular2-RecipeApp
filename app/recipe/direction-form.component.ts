import {Component, Input} from '@angular/core';

import {Direction} from "./recipe";

@Component({
    selector: 'direction-form',
    template: `<form class="form-inline">
                <div> 
                   <label>Order</label>
                    <input type="text" [(ngModel)]="direction.order" class="form-control" name="directionOrder" placeholder="Order">
                    <label>Title</label>
                    <input type="text" [(ngModel)]="direction.title" class="form-control" name="directionTitle" placeholder="Title">
                     <label>Title</label>
                    <input type="text" [(ngModel)]="direction.value" class="form-control" name="directionValue" placeholder="Value">
                    
                    <button (click)="hideForm(direction)" type="button" class="btn btn-secondary btn-sm">Close</button>
               </div>
               </form> `,
})
export class DirectionFormComponent {
    @Input()
    direction:Direction;

    hideForm(item: Direction):void {
        item.edit = false;
    }
}