import { ENV } from '#core/constants';
import { HouseEntity } from './house-list.api.vm';

interface Props {
    req: RequestInit;
    searchParams?: {
        query?: string;
        page?: string;
    };
}

const url_houses = `${ENV.BASE_API_URL}/houses`;

export const getHouseList = async (props?: Props): Promise<HouseEntity[]> => {

    const searchParams = props?.searchParams;
    const filter = searchParams?.query || '';

    let houses: HouseEntity[] = await fetch(url_houses).then((response) => response.json());
    if (filter) houses = houses.filter((m) => m.name.toLowerCase().includes(filter.toLowerCase()));
    return houses;
};