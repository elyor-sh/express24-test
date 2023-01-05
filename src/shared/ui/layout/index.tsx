import React from 'react';
import cl from './style.module.scss'
import {cn} from "@/shared/lib";


interface LayoutProps {
    header?: React.ReactNode
    footer?: React.ReactNode
    children?: React.ReactNode
}

const Layout = ({header, footer, children}: LayoutProps) => {

    return (
        <>
            <header>
                {header}
            </header>
            <main className={cn(cl.main)}>
                {children}
            </main>
            <footer>
                {footer}
            </footer>
        </>
    )
}

export {Layout}