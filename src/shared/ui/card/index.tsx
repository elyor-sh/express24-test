import React, { HTMLAttributes } from 'react';
import cl from './style.module.scss';
import { cn } from '@/shared/lib';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}

export const Card = ({ children, ...rest }: CardProps) => {
    return <div className={cn(cl.card, rest.className)}>{children}</div>;
};
