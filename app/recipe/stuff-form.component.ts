import {Component, Input} from '@angular/core';
;
import {Stuff} from "./recipe";


@Component({
    selector: 'stuff-form',
    template: `<form class="form-inline">
                <div> 
                   <label>Amount</label>
                    <input type="text" [(ngModel)]="stuff.amount" class="form-control" name="amount" placeholder="Amount">
                    <label>Unit</label>
                    <input type="text" [(ngModel)]="stuff.unit" class="form-control" name="unit" placeholder="Unit">
                    <label>Name</label>
                    <input type="text" [(ngModel)]="stuff.name" class="form-control" name="name" placeholder="Name">
                    <button (click)="hideForm(stuff)" type="button" class="btn btn-secondary btn-sm">Close</button>
               </div>
               </form> `,
})
export class StuffFormComponent {
    @Input()
    stuff:Stuff;


    hideForm(item: Stuff):void {
        item.edit = false;
    }

}