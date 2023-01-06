import {ApiGetRestaurantListType, QueryParamsRestaurantList} from '@/entities/restaurants/api/types';
import {http} from "@/shared/api/base";
import qs from "query-string";

export class RestaurantApi {
    static async getList(query: QueryParamsRestaurantList): Promise<ApiGetRestaurantListType> {
        return http.get<ApiGetRestaurantListType>('catalog/stores?' + qs.stringify(query))
    }
}
