import { getStore } from '@/shared/lib';
import { PromoBannersStore } from '@/features/promo-banners';
import { ShopsStore } from '@/entities/shops';
import { RestaurantStore } from '@/entities/restaurants';

export async function homeInitialLoad() {
    const promoBannersStore = getStore(PromoBannersStore);
    const shopsStore = getStore(ShopsStore);
    const restaurantStore = getStore(RestaurantStore);

    await promoBannersStore.loadPromoBanners();
    await shopsStore.loadShops();
    await restaurantStore.loadRestaurants();

    return () => {
        promoBannersStore.refresh();
        shopsStore.refresh();
    };
}
