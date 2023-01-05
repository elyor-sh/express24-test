import React, {InputHTMLAttributes} from 'react';
import cl from './style.module.scss'
import {cn} from "@/shared/lib";

export interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
    onSearch?: () => void
}

const SearchInput = ({onSearch, ...rest}: SearchInputProps) => {
    return (
        <div className={cl.wrapper}>
            <div className={cl.icon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.5 19C15.6421 19 19 15.6421 19 11.5C19 7.35786 15.6421 4 11.5 4C7.35786 4 4 7.35786 4 11.5C4 15.6421 7.35786 19 11.5 19Z"
                          fill="transparent" stroke="#1A1A18" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 20L17 17" stroke="#1A1A18" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <input {...rest} className={cn(rest.className, cl.input)}/>
            <button onClick={onSearch} className={cl.button}>
                Найти
            </button>
        </div>
    );
};

export {SearchInput}