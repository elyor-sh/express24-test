import React from 'react';
import { observer } from 'mobx-react-lite';
import { SwiperSlide } from 'swiper/react';
import { getStore } from '@/shared/lib';
import { ShopsStore } from '@/entities/shops';
import { Carousel } from '@/shared/ui';
import { ShopsCard } from './shops-card';

const ShopsCarousel = observer(() => {
    const shopsStore = getStore(ShopsStore);

    return (
        <>
            <Carousel slidesPerView={5} spaceBetween={10}>
                {shopsStore.shops.map((shop) => (
                    <SwiperSlide key={shop.id}>
                        <ShopsCard shop={shop} />
                    </SwiperSlide>
                ))}
            </Carousel>
        </>
    );
});

export { ShopsCarousel };
