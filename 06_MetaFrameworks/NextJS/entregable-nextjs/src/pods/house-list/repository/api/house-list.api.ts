import { ENV } from '#core/constants';
import { HouseEntity } from './house-list.api.vm';

const url_houses = `${ENV.BASE_API_URL}/houses`;

export const getHouseList = async (options?: RequestInit): Promise<HouseEntity[]> => {
    //const { filter } = (data || {}) as { filter?: string };
    let houses: HouseEntity[] = await fetch(url_houses, options).then((response) => response.json());
    //if (filter) houses = houses.filter((m) => m.name.toLowerCase().includes(filter.toLowerCase()));
    return houses;
};