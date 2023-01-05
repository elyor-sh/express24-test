import React from 'react';
import cl from './style.module.scss'
import {FooterLinks} from "@/features/footer-links";
import {Container, SocialIcons} from "@/shared/ui";

const Footer = () => {
    return (
        <div className={cl.footer}>
            <Container>
                <FooterLinks />
                <div className={cl.footer__bottom}>
                    <p className={cl.footer__support}>
                        Служба поддержки: <a href="tel:998712004001">+998 71 200 40 01</a>
                    </p>
                    <div className={cl.footer__tools}>
                        <SocialIcons />
                        <p className={cl.footer__copy}>
                            Ⓒ {new Date().getFullYear()} Express24
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export {Footer}