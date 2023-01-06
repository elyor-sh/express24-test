import { singleton } from 'tsyringe';
import { makeAutoObservable } from 'mobx';

export type PromoBannersType = {
    url: string;
    href: string;
};

@singleton()
export class PromoBannersStore {
    private readonly mockBanners: PromoBannersType[] = [
        {
            url: 'https://cdn.express24.uz/i/567/385/4cIkJ7iqfBOhual1QRc_1.jpg',
            href: '',
        },
        {
            url: 'https://cdn.express24.uz/i/567/385/F9Z6n2mq1SPIMPbk7w7T8.jpg',
            href: '',
        },
        {
            url: 'https://cdn.express24.uz/i/567/385/ZlVLKYW8-AdywtyncdzS7.jpg',
            href: '',
        },
        {
            url: 'https://cdn.express24.uz/i/567/385/5UNfA3P-QPEZaEfuRhD0y.jpg',
            href: '',
        },
        {
            url: 'https://cdn.express24.uz/i/567/385/phZSLrYq1E6D9_l-Gxn1D.jpg',
            href: '',
        },
        {
            url: 'https://cdn.express24.uz/i/567/385/HJnzvgLmjpQ4YkjNIdznm.jpg',
            href: '',
        },
        {
            url: 'https://cdn.express24.uz/i/567/385/AUGq9BpDdV_4l0VKKqsFY.jpg',
            href: '',
        },
        {
            url: 'https://cdn.express24.uz/i/567/385/GLa-sLmL5ZLixwP8gLQrH.jpg',
            href: '',
        },
        {
            url: 'https://cdn.express24.uz/i/567/385/aKxO7RgSvYBJOXnEpNbyv.jpg',
            href: '',
        },
        {
            url: 'https://cdn.express24.uz/i/567/385/AYpapohM1qSGrv5ud_bZv.jpg',
            href: '',
        },
    ];

    public banners: PromoBannersType[] = [];

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    public setBanners(banners: PromoBannersType[]) {
        this.banners = banners;
    }

    public async loadPromoBanners() {
        setTimeout(() => {
            this.setBanners([...this.mockBanners]);
        }, 1000);
    }

    public refresh() {
        this.setBanners([]);
    }
}
