import React from 'react';
import { observer } from 'mobx-react-lite';
import cl from './style.module.scss';
import { getStore } from '@/shared/lib';
import { RestaurantStore } from '@/entities/restaurants';
import { RestaurantCard } from './restaurant-card';

const RestaurantsList = observer(() => {
    const restaurantStore = getStore(RestaurantStore);

    return (
        <div className={cl.list}>
            {!restaurantStore.restaurants.length && 'Рестораны не найдены, попробуйте поменять местоположение...'}
            {restaurantStore.restaurants.map((restaurant) => (
                <div key={restaurant.id} className={cl.item}>
                    <RestaurantCard restaurant={restaurant} />
                </div>
            ))}
        </div>
    );
});

export { RestaurantsList };
