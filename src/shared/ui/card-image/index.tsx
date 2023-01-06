import React, { ImgHTMLAttributes } from 'react';
import cl from './style.module.scss';
import { cn } from '@/shared/lib';

export interface CardImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    containerClassName?: string;
}

const CardImage = ({ containerClassName, ...rest }: CardImageProps) => {
    return (
        <div className={cn(cl.card__image, containerClassName)}>
            <img {...rest} alt={rest.alt || 'card-image'} />
        </div>
    );
};

export { CardImage };
