import { ENV } from '#core/constants';
import { HouseEntity } from './house-list.api.vm';
import { createServerFn } from '@tanstack/react-start';

const url_houses = `${ENV.BASE_API_URL}/houses`;
//const url_houseId = `${ENV.BASE_API_URL}/houses`;

export const getHouseList = createServerFn().handler(
    async (): Promise<HouseEntity[]> =>
        await fetch(url_houses).then((response) => response.json()));