import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IPosition } from 'app/shared/model/orderbook/position.model';

@Component({
    selector: 'jhi-position-detail',
    templateUrl: './position-detail.component.html'
})
export class PositionDetailComponent implements OnInit {
    position: IPosition;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.data.subscribe(({ position }) => {
            this.position = position.body ? position.body : position;
        });
    }

    previousState() {
        window.history.back();
    }
}
