import React from 'react';
import cl from './style.module.scss'
import {Link} from "react-router-dom";

const links = [
    {
        href: '/',
        text: 'О нас',
    },
    {
        href: '/',
        text: 'Контакты',
    },
    {
        href: '',
        text: 'Пользовательское соглашение',
    }
]

const FooterLinks = () => {
    return (
        <ul className={cl.links}>
            {
                links.map(link => (
                    <li key={link.text} className={cl.link}>
                        <Link to={link.href}>
                            {link.text}
                        </Link>
                    </li>
                ))
            }
        </ul>
    );
};

export {FooterLinks};