export interface IPosition {
    id?: number;
    tag?: string;
}

export class Position implements IPosition {
    constructor(public id?: number, public tag?: string) {}
}
