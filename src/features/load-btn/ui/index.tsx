import React from 'react';
import { observer } from 'mobx-react-lite';
import cl from './style.module.scss';
import { getStore } from '@/shared/lib';
import { LoadButtonModel } from '@/features/load-btn';
import { Spinner } from '@/shared/ui';

export const LoadButton = observer(() => {
    const loadButtonModel = getStore(LoadButtonModel);

    return (
        <button
            className={cl.load}
            onClick={loadButtonModel.setPage}
            disabled={loadButtonModel.disabledButton || loadButtonModel.loading}
        >
            {loadButtonModel.loading ? <Spinner /> : 'Показать еще'}
        </button>
    );
});
