import { ENV } from '#core/constants';
import { HouseEntity } from './house.api.vm';

const url_houses = `${ENV.BASE_API_URL}/houses`;

export const getHouse =
    async (id: string): Promise<HouseEntity> => {
        console.log(`Api call with url: ${`${url_houses}/${id}`} and  id: ${id}`)
        return await fetch(`${url_houses}/${id}`).then((response) => response.json());
    }

/* export const bookHouse =
    async ({ data }): Promise<boolean> =>
        await fetch(`${url_houses}/${data.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }); */
