import { container, InjectionToken } from 'tsyringe';

export function getStore<T>(token: InjectionToken<T>) {
    return container.resolve(token);
}
