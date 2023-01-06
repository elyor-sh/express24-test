export interface Reviews {
    isLow: boolean;
    average: number;
    count: number;
}

export interface Schedule {
    start: string;
    end: string;
}

export interface SubCategory {
    id: number;
    name: string;
}

export type RestaurantType = {
    id: number;
    branchId: number;
    name: string;
    logo: string;
    cover: string;
    isAvailable: boolean;
    isOpen: boolean;
    isExternal: boolean;
    link: string;
    schedule: Schedule;
    reviews: Reviews;
    subCategories: SubCategory[];
};

export type ApiGetRestaurantListType = {
    count: number;
    list: RestaurantType[];
};

export type QueryParamsRestaurantList = {
    limit?: number;
    offset?: number;
    latitude?: number;
    longitude?: number;
};
