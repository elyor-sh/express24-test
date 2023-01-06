import {inject, singleton} from "tsyringe";
import {RestaurantStore} from "@/entities/restaurants";
import {makeAutoObservable} from "mobx";

@singleton()
export class LoadButtonModel {

    constructor(
        @inject(RestaurantStore) private readonly restaurantStore : RestaurantStore
    ) {
        makeAutoObservable(this, {}, {autoBind: true})
    }

    public setPage () {
        this.restaurantStore.setPage(this.restaurantStore.page + 1)
    }

    public get disabledButton (): boolean {
        return this.restaurantStore.count <= this.restaurantStore.restaurants.length
    }

    public get loading (): boolean {
        return this.restaurantStore.loading
    }
}