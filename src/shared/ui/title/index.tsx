import React, { HTMLAttributes } from 'react';
import cl from './style.module.scss';
import { cn } from '@/shared/lib';

export interface TitleProps extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

export const Title = ({ children, ...rest }: TitleProps) => {
    return (
        <div {...rest} className={cn(cl.title, rest.className)}>
            {children}
        </div>
    );
};
