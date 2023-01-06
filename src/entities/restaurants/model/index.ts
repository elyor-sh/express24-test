import { singleton } from 'tsyringe';
import { makeAutoObservable, runInAction } from 'mobx';
import {QueryParamsRestaurantList, RestaurantApi, RestaurantType} from '@/entities/restaurants';

@singleton()
export class RestaurantStore {
    public loading: boolean = false
    public page: number = 1
    public count: number = 0
    public readonly offset: number = 21
    public restaurants: RestaurantType[] = [];

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    public get query () {
        return {
           limit: 21,
           offset: (this.page - 1) * this.offset
        } as QueryParamsRestaurantList
    }

    public setLoading (p: boolean) {
        this.loading = p
    }

    public setPage (page: number) {
        this.page = page
    }

    public setCount (count: number) {
        this.count = count
    }

    public setRestaurants(restaurants: RestaurantType[]) {
        this.restaurants = restaurants;
    }

    public async loadRestaurants() {
        try {

            this.setLoading(true)

            const response = await RestaurantApi.getList(this.query);

            runInAction(() => {
                this.setRestaurants([...this.restaurants, ...response.list]);
                this.setCount(response.count)
            });
        }
        catch (e) {

        }
        finally {
            this.setLoading(false)
        }
    }

}