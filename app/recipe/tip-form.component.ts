import {Component, Input} from '@angular/core';

import {Tip} from "./recipe";

@Component({
    selector: 'tip-form',
    template: `<form class="form-inline">
                <div> 
                   <label>Order</label>
                    <input type="text" [(ngModel)]="tip.order" class="form-control" name="tipOrder" placeholder="Order">
                    <label>Title</label>
                    <input type="text" [(ngModel)]="tip.value" class="form-control" name="tipValue" placeholder="Value">
                    <button (click)="hideForm(tip)" type="button" class="btn btn-secondary btn-sm">Close</button>
               </div>
               </form> `,
})
export class TipFormComponent {
    @Input()
    tip:Tip;


    hideForm(item: Tip):void {
        item.edit = false;
    }

}