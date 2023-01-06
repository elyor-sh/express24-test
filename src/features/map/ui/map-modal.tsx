import React, { useRef } from 'react';
import { observer } from 'mobx-react-lite';
import { Map, Placemark, YMaps, ZoomControl } from 'react-yandex-maps';
import cl from './style.module.scss';
import { Modal } from '@/shared/ui';
import { getStore } from '@/shared/lib';
import { MapModel } from '@/features/map';
import { RestaurantStore } from '@/entities/restaurants';

const mapOptions = {
    modules: ['geocode', 'SuggestView'],
    defaultOptions: { suppressMapOpenBlock: true },
    width: 600,
    height: 400,
};

export const MapModal = observer(() => {
    const mapModel = getStore(MapModel);
    const restaurantStore = getStore(RestaurantStore);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    const mapRef = useRef<any>(null);

    const handleBoundsChange = () => {
        if (mapRef.current?.getCenter()) {
            restaurantStore.setCoords(mapRef.current.getCenter());
        }
    };

    const handleSubmit = async () => {
        restaurantStore.setRestaurants([]);
        restaurantStore.setPage(1);
        restaurantStore.setCoords(mapRef.current.getCenter());
        mapModel.setOpenModal(false);
        await restaurantStore.loadRestaurants();
    };

    return (
        <Modal
            active={mapModel.openModal}
            onClose={() => mapModel.setOpenModal(false)}
            title={<div className={cl.title}>Адрес доставки</div>}
        >
            <div className={cl.map__container}>
                <YMaps
                    query={{ apikey: '4b055098-b5b4-405b-b37d-6750f54e4a18' }}
                >
                    <Map
                        {...mapOptions}
                        state={{ center: restaurantStore.coords, zoom: 10 }}
                        width="100%"
                        height="400px"
                        modules={['control.SearchControl']}
                        instanceRef={(ref) => (mapRef.current = ref)}
                        onBoundsChange={handleBoundsChange}
                    >
                        <ZoomControl
                            options={{
                                float: 'none',
                                position: { top: 100, right: 10 },
                            }}
                        />
                        <Placemark geometry={restaurantStore.coords} />
                    </Map>
                </YMaps>
                <button className={cl.submit__btn} onClick={handleSubmit}>
                    Подтвердить
                </button>
            </div>
        </Modal>
    );
});
