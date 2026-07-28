import { ENV } from '#core/constants';
import { HouseEntity } from './house-list.api.vm';
import { createServerFn } from '@tanstack/react-start';

const url_houses = `${ENV.BASE_API_URL}/houses`;

export const getHouseList = createServerFn().handler(
    async ({ data }): Promise<HouseEntity[]> => {
        const { filter } = (data || {}) as { filter?: string };
        let houses: HouseEntity[] = await fetch(url_houses).then((response) => response.json());
        if (filter) houses = houses.filter((m) => m.name.toLowerCase().includes(filter.toLowerCase()));
        return houses;
    });