import React from 'react';
import cl from './style.module.scss';

const ProfileBtn = () => {
    return (
        <div className={cl.btn}>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M17.5259 20.658C16.7339 20.892 15.7979 21 14.6999 21H9.29988C8.20188 21 7.26588 20.892 6.47388 20.658C6.67188 18.318 9.07488 16.473 11.9999 16.473C14.9249 16.473 17.3279 18.318 17.5259 20.658Z"
                    stroke="#8e8e93"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M14.7 3H9.3C4.8 3 3 4.8 3 9.3V14.7C3 18.102 4.026 19.965 6.474 20.658C6.672 18.318 9.075 16.473 12 16.473C14.925 16.473 17.328 18.318 17.526 20.658C19.974 19.965 21 18.102 21 14.7V9.3C21 4.8 19.2 3 14.7 3ZM12 13.953C10.218 13.953 8.778 12.504 8.778 10.722C8.778 8.94002 10.218 7.5 12 7.5C13.782 7.5 15.222 8.94002 15.222 10.722C15.222 12.504 13.782 13.953 12 13.953Z"
                    fill="transparent"
                    stroke="#8e8e93"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M15.2221 10.722C15.2221 12.504 13.7821 13.953 12.0001 13.953C10.2181 13.953 8.77808 12.504 8.77808 10.722C8.77808 8.94002 10.2181 7.5 12.0001 7.5C13.7821 7.5 15.2221 8.94002 15.2221 10.722Z"
                    stroke="#8e8e93"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
            <span className={cl.text}>Профиль</span>
        </div>
    );
};

export { ProfileBtn };
