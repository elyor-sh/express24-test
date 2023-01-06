import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import cl from './style.module.scss';
import { Container, Title } from '@/shared/ui';
import { PromoBanners } from '@/features/promo-banners';
import { ShopsCarousel } from '@/entities/shops';
import {RestaurantsList, RestaurantStore} from '@/entities/restaurants';
import {LoadButton} from "@/features/load-btn";
import {getStore} from "@/shared/lib";

const Home = observer(() => {

    const restaurantStore = getStore(RestaurantStore)

    useEffect(() => {
        if(restaurantStore.page > 1){
            (async () => {
                await restaurantStore.loadRestaurants()
            })()
        }
    }, [restaurantStore, restaurantStore.page])

    return (
        <>
            <Container>
                <section className={cl.promo__banners}>
                    <PromoBanners />
                </section>
                <Title>Магазины</Title>
                <section className={cl.shops}>
                    <ShopsCarousel />
                </section>
                <Title>Рестораны</Title>
                <section className={cl.shops}>
                    <RestaurantsList />
                </section>
                <div className={cl.load__button}>
                    <LoadButton />
                </div>
            </Container>
        </>
    );
});

export { Home };
