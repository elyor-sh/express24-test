import React from 'react';
import { observer } from 'mobx-react-lite';
import { SwiperSlide } from 'swiper/react';
import cl from './style.module.scss';
import { getStore } from '@/shared/lib';
import { PromoBannersStore } from '@/features/promo-banners';
import { CardImage, Carousel } from '@/shared/ui';

const PromoBanners = observer(() => {
    const promoBannersStore = getStore(PromoBannersStore);

    return (
        <div>
            <Carousel slidesPerView={6}>
                {promoBannersStore.banners.map((banner) => (
                    <SwiperSlide key={banner.url}>
                        <CardImage
                            src={banner.url}
                            containerClassName={cl.card__image}
                        />
                    </SwiperSlide>
                ))}
            </Carousel>
        </div>
    );
});

export { PromoBanners };
