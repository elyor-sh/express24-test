import { singleton } from 'tsyringe';
import { getStore } from '@/shared/lib';

@singleton()
class Http {
    private _baseApiUrl = 'https://api.express24.uz/client/v5/';

    get baseApiUrl(): string {
        return this._baseApiUrl;
    }

    public async get<T>(path: string) {
        try {
            const response = await fetch(this._baseApiUrl + path);

            if (!response.ok) {
                return Promise.reject(response);
            }

            const data: T = await response.json();

            return Promise.resolve(data);
        } catch (err) {
            return Promise.reject(err);
        }
    }
}

export const http = getStore(Http);
