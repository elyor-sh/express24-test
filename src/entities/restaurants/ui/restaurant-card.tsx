import React from 'react';
import cl from './style.module.scss';
import { Card, FavoriteBtn } from '@/shared/ui';
import { RestaurantType } from '@/entities/restaurants';
import { CarIcon, StarIcon } from '@/shared/assets';

export interface RestaurantCardProps {
    restaurant: RestaurantType;
}

export const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
    return (
        <Card>
            <div className={cl.image}>
                <img src={restaurant.cover} alt={restaurant.name} />
                <div className={cl.logo}>
                    <img src={restaurant.logo} alt={restaurant.name} />
                </div>
            </div>
            <div className={cl.content}>
                <div className={cl.favorite}>
                    <FavoriteBtn />
                </div>
                <div className={cl.name}>{restaurant.name}</div>
                <div className={cl.subCategories}>
                    {restaurant.subCategories.map((c) => c.name).join(' · ')}
                </div>
                <ul className={cl.tags}>
                    <li className={cl.tag}>
                        <StarIcon /> <span>{restaurant.reviews.average}</span>
                    </li>
                    <li className={cl.tag}>
                        <CarIcon /> <span>{43200}</span>
                    </li>
                </ul>
            </div>
        </Card>
    );
};
