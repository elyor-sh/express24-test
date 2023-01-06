import React from 'react';
import { cn } from '../../lib';
import cl from './style.module.scss';

export interface ModalProps {
    children?: React.ReactNode;
    active: boolean;
    onClose: () => void;
    title?: React.ReactNode;
}

export const Modal = ({ children, active, onClose, title }: ModalProps) => {
    return (
        <div
            className={cn(cl.modal, active ? cl.active : '')}
            onClick={onClose}
        >
            <div
                className={cl.modal__content}
                onClick={(e) => e.stopPropagation()}
            >
                {title && <div>{title}</div>}
                <button onClick={onClose} className={cl.modal__close}>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.8115 5.09883C20.0628 4.84746 20.0628 4.4399 19.8115 4.18853C19.5601 3.93716 19.1525 3.93716 18.9012 4.18853L12 11.0897L5.09883 4.18853C4.84746 3.93716 4.4399 3.93716 4.18853 4.18853C3.93716 4.4399 3.93716 4.84746 4.18853 5.09883L11.0897 12L4.18853 18.9012C3.93716 19.1525 3.93716 19.5601 4.18853 19.8115C4.4399 20.0628 4.84746 20.0628 5.09883 19.8115L12 12.9103L18.9012 19.8115C19.1525 20.0628 19.5601 20.0628 19.8115 19.8115C20.0628 19.5601 20.0628 19.1525 19.8115 18.9012L12.9103 12L19.8115 5.09883Z"
                            fill="#1A1A18"
                        />
                    </svg>
                </button>
                <div className={cl.modal__main}>{children}</div>
            </div>
        </div>
    );
};
