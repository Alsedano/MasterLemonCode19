import { ENV } from '#core/constants';
import { HouseEntity } from './house.api.vm';

const url_houses = `${ENV.BASE_API_URL}/houses`;

export const getHouse =
    async (id: string): Promise<HouseEntity> => {
        return await fetch(`${url_houses}/${id}`).then((response) => response.json());
    }

export const bookHouse =
    async (house: HouseEntity): Promise<boolean> => {
        try {
            await fetch(`${url_houses}/${house.id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(house)
            });

            return true;
        } catch (error) {
            return false;
        }
    }
