import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GatewaySharedModule } from 'app/shared';
import {
    PositionService,
    PositionComponent,
    PositionDetailComponent,
    PositionUpdateComponent,
    PositionDeletePopupComponent,
    PositionDeleteDialogComponent,
    positionRoute,
    positionPopupRoute,
    PositionResolve
} from './';

const ENTITY_STATES = [...positionRoute, ...positionPopupRoute];

@NgModule({
    imports: [GatewaySharedModule, RouterModule.forChild(ENTITY_STATES)],
    declarations: [
        PositionComponent,
        PositionDetailComponent,
        PositionUpdateComponent,
        PositionDeleteDialogComponent,
        PositionDeletePopupComponent
    ],
    entryComponents: [PositionComponent, PositionUpdateComponent, PositionDeleteDialogComponent, PositionDeletePopupComponent],
    providers: [PositionService, PositionResolve],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GatewayPositionModule {}
