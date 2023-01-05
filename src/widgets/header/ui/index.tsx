import React from 'react';
import {Link} from "react-router-dom";
import cl from './style.module.scss'
import {Logo} from "@/shared/assets";
import {SearchNav} from "@/features/search-nav";
import {ProfileBtn} from "@/features/profile-btn";
import {MapBtn} from "@/features/map-btn";

const Header = () => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.tools}>
                <Link to='/' className={cl.logo__wrapper}>
                    <Logo />
                </Link>
                <div className={cl.search}>
                    <SearchNav />
                </div>
                <div className="map">
                    <MapBtn />
                </div>
            </div>
            <div className={cl.profile__btn}>
                <ProfileBtn />
            </div>
        </div>
    );
};

export {Header}