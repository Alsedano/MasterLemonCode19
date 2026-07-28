import { ENV } from '#core/constants';
import * as am from "./api";
import * as vm from '../house.vm';

export const mapHouseItemToVm = (apiVM: am.HouseEntity): vm.HouseVm => {
    return {
        id: apiVM.id,
        name: apiVM.name,
        description: apiVM.description,
        address: apiVM.address,
        city: apiVM.city,
        country: apiVM.country,
        bedrooms: apiVM.bedrooms,
        bathrooms: apiVM.bathrooms,
        price: apiVM.price,
        image: `${ENV.BASE_PICTURES_URL}${apiVM.image}`,
        isBooked: apiVM.isBooked,
        reviews: apiVM.reviews?.map(r => ({
            id: r.id,
            author: r.author,
            date: r.date,
            comment: r.comment,
            rating: r.rating,
        })) || [],
    }
}