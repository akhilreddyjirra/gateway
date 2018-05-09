import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';

import { UserRouteAccessService } from 'app/core';
import { Position } from 'app/shared/model/orderbook/position.model';
import { PositionService } from './position.service';
import { PositionComponent } from './position.component';
import { PositionDetailComponent } from './position-detail.component';
import { PositionUpdateComponent } from './position-update.component';
import { PositionDeletePopupComponent } from './position-delete-dialog.component';

@Injectable()
export class PositionResolve implements Resolve<any> {
    constructor(private service: PositionService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const id = route.params['id'] ? route.params['id'] : null;
        if (id) {
            return this.service.find(id);
        }
        return new Position();
    }
}

export const positionRoute: Routes = [
    {
        path: 'position',
        component: PositionComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Positions'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'position/:id/view',
        component: PositionDetailComponent,
        resolve: {
            position: PositionResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Positions'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'position/new',
        component: PositionUpdateComponent,
        resolve: {
            position: PositionResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Positions'
        },
        canActivate: [UserRouteAccessService]
    },
    {
        path: 'position/:id/edit',
        component: PositionUpdateComponent,
        resolve: {
            position: PositionResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Positions'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const positionPopupRoute: Routes = [
    {
        path: 'position/:id/delete',
        component: PositionDeletePopupComponent,
        resolve: {
            position: PositionResolve
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'Positions'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
