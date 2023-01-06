import React, {useRef} from 'react';
import {Map, YMaps, ZoomControl} from "react-yandex-maps";
import cl from './style.module.scss'
import {Modal} from "@/shared/ui";
import {getStore} from "@/shared/lib";
import {MapModel} from "@/features/map";
import {observer} from "mobx-react-lite";

const mapOptions = {
    modules: ["geocode", "SuggestView"],
    defaultOptions: { suppressMapOpenBlock: true },
    width: 600,
    height: 400,
};


export const MapModal = observer(() => {

    const mapModel = getStore(MapModel)

    const mapRef = useRef<any>(null)

    return (
        <Modal active={mapModel.openModal} onClose={() => mapModel.setOpenModal(false)}>
            <div className={cl.map__container}>
                <YMaps>
                        <Map
                            {...mapOptions}
                            state={{ center: [55.76, 37.64], zoom: 10 }}
                            width="100%"
                            height="400px"
                            modules={["control.SearchControl"]}
                            instanceRef={() => mapRef}
                        >
                            <ZoomControl
                                options={{ float: "none", position: { top: 100, right: 10 } }}
                            />
                        </Map>
                </YMaps>
            </div>
        </Modal>
    );
});