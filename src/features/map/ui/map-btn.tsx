import React, { useCallback, useEffect } from 'react';
import cl from './style.module.scss';
import { getStore } from '@/shared/lib';
import { MapModel } from '@/features/map';
import { RestaurantStore } from '@/entities/restaurants';

const MapBtn = () => {
    const mapModel = getStore(MapModel);
    const restaurantStore = getStore(RestaurantStore);

    const showPosition = useCallback(
        (position: GeolocationPosition) => {
            const { latitude, longitude } = position.coords;
            restaurantStore.setCoords([latitude, longitude]);
        },
        [restaurantStore]
    );

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log('Geolocation не поддерживается');
        }
    }, [showPosition]);

    return (
        <button
            className={cl.button}
            onClick={() => mapModel.setOpenModal(true)}
        >
            <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.87005 21.09C9.03005 22.2 10.5201 22.76 12.0001 22.76C13.4801 22.76 14.9701 22.2 16.1301 21.09C19.0801 18.25 22.3401 13.73 21.1201 8.34C20.0101 3.44 15.7401 1.25 12.0101 1.25H12.0001C8.27005 1.25 4.00005 3.44 2.89005 8.33C1.66005 13.72 4.92005 18.25 7.87005 21.09ZM4.36005 8.66C5.35005 4.3 9.09005 2.75 12.0001 2.75C14.9101 2.75 18.6601 4.3 19.6601 8.66C20.7201 13.37 17.7601 17.43 15.0901 20C13.3601 21.67 10.6501 21.67 8.92005 20C6.24005 17.43 3.28005 13.37 4.36005 8.66ZM8.12988 10.2999C8.12988 12.4399 9.86988 14.1699 11.9999 14.1699C14.1299 14.1699 15.8699 12.4499 15.8699 10.3099C15.8699 8.16994 14.1299 6.43994 11.9999 6.43994C9.86988 6.43994 8.12988 8.15994 8.12988 10.2999ZM9.62988 10.3099C9.62988 8.99994 10.6999 7.93994 11.9999 7.93994C13.2999 7.93994 14.3699 8.99994 14.3699 10.3099C14.3699 11.6199 13.3099 12.6799 11.9999 12.6799C10.6899 12.6799 9.62988 11.6199 9.62988 10.3099Z"
                    fill="#1A1A18"
                />
            </svg>
            <span className={cl.address}>Зангиатинский район, Ханабад</span>
        </button>
    );
};

export { MapBtn };
