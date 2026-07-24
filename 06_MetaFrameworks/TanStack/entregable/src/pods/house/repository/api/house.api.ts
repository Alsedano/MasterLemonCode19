import { ENV } from '#core/constants';
import { HouseEntity } from './house.api.vm';
import { createServerFn } from '@tanstack/react-start';

const url_houses = `${ENV.BASE_API_URL}/houses`;

export const getHouse = createServerFn().handler(
    async ({ data }): Promise<HouseEntity> =>
        await fetch(`${url_houses}/${data?.id}`).then((response) => response.json()));