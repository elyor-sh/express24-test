import React from 'react';
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export interface CarouselProps {
    children?: React.ReactNode;
    slidesPerView?: number;
    spaceBetween?: number;
}

export const Carousel = ({
    children,
    slidesPerView,
    spaceBetween,
}: CarouselProps) => {
    return (
        <>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                slidesPerView={slidesPerView || 'auto'}
                spaceBetween={spaceBetween || 0}
            >
                {children}
            </Swiper>
        </>
    );
};
