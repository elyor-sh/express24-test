import { singleton } from 'tsyringe';
import { makeAutoObservable } from 'mobx';

export type ShopsType = {
    id: number;
    category: string;
    name: string;
    imgUrl: string;
};

@singleton()
export class ShopsStore {
    public shops: ShopsType[] = [];

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    public setShops(shops: ShopsType[]) {
        this.shops = shops;
    }

    public async loadShops() {
        setTimeout(() => {
            this.setShops([...this.mockShops]);
        }, 1000);
    }

    public refresh() {
        this.setShops([]);
    }

    private readonly mockShops: ShopsType[] = [
        {
            id: 1,
            category: 'Продукты',
            name: 'The Mart',
            imgUrl: 'https://cdn.express24.uz/i/700/700/ZWoE7Fxbyy7y9lbpibC4c.jpg',
        },
        {
            id: 2,
            category: 'Здоровье',
            name: 'Аптека OXYmed - Саракулька',
            imgUrl: 'https://cdn.express24.uz/i/700/700/oxYZeCFUfpOygaMfkO5vO.jpg',
        },
        {
            id: 3,
            category: 'Здоровье',
            name: 'Аптека OXYmed - Фархадский №33',
            imgUrl: 'https://cdn.express24.uz/i/700/700/oxYZeCFUfpOygaMfkO5vO.jpg',
        },
        {
            id: 4,
            category: 'Продукты',
            name: 'Saxovat Broiler - халяльная курица из Узбекистана',
            imgUrl: 'https://cdn.express24.uz/i/700/700/BQb1mLaDxd_jlZsu2pT2G.jpg',
        },
        {
            id: 5,
            category: 'Здоровье',
            name: 'Аптека OXYmed - Новомоссковская',
            imgUrl: 'https://cdn.express24.uz/i/700/700/oxYZeCFUfpOygaMfkO5vO.jpg',
        },
        {
            id: 6,
            category: 'Здоровье',
            name: 'Аптека OXYmed - Буюк Ипак Йули',
            imgUrl: 'https://cdn.express24.uz/i/700/700/oxYZeCFUfpOygaMfkO5vO.jpg',
        },
        {
            id: 7,
            category: 'Дом и сад',
            name: 'Ema Home',
            imgUrl: 'https://cdn.express24.uz/i/700/700/upload/iblock/913/91382e675bc21d22518ab407619cb077.jpeg',
        },
        {
            id: 8,
            category: 'Аксессуары',
            name: 'TREND IDEAS',
            imgUrl: 'https://cdn.express24.uz/i/700/700/17ef702be2a.jpg',
        },
    ];
}
