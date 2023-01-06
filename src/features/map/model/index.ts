import { singleton } from 'tsyringe';
import { makeAutoObservable } from 'mobx';

@singleton()
export class MapModel {
    public openModal = false;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    public setOpenModal(p: boolean) {
        this.openModal = p;
    }
}
