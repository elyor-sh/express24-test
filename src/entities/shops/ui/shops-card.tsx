import React from 'react';
import cl from './style.module.scss';
import { ShopsType } from '@/entities/shops';
import { CardImage } from '@/shared/ui';

export type ShopsCardProps = {
    shop: ShopsType;
};

const ShopsCard = ({ shop }: ShopsCardProps) => {
    return (
        <div>
            <CardImage
                src={shop.imgUrl}
                alt={shop.name}
                containerClassName={cl.card__image}
            />
            <p className={cl.shop__name}>{shop.name}</p>
            <p className={cl.shop__category}>{shop.category}</p>
        </div>
    );
};

export { ShopsCard };
