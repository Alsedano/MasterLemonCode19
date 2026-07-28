import { ENV } from '#core/constants';
import { HouseEntity } from './house.api.vm';
import { createServerFn } from '@tanstack/react-start';

const url_houses = `${ENV.BASE_API_URL}/houses`;

export const getHouse = createServerFn()
    .validator((house: HouseEntity) => house)
    .handler(
        async ({ data }): Promise<HouseEntity> =>
            await fetch(`${url_houses}/${data?.id}`).then((response) => response.json()));

export const bookHouse = createServerFn({ method: 'POST' })
    .validator((house: HouseEntity) => house)
    .handler(
        async ({ data }): Promise<boolean> => {
            await fetch(`${url_houses}/${data.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            return true;
        });