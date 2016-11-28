import { Component, OnChanges, Input,
    Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();

    ngOnChanges(): void {
        // Convert x out of 5 starts
        // to y out of 86px width
        this.starWidth = this.rating * 95 / 5;
    }

    onClick(val:number): void {
        this.rating = val;
       var yyy = this.starWidth;
        this.ratingClicked.emit(`${this.rating}`);
    }
}