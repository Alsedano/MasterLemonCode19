import { ENV } from '#core/constants';
import * as am from "./api";
import * as vm from '../house-list.vm';

export const mapHouseEntityToVm = (member: am.HouseEntity): vm.HouseList => {
    return {
        id: member.id,
        name: member.name,
        description: member.description,
        address: member.address,
        city: member.city,
        country: member.country,
        bedrooms: member.bedrooms,
        beds: member.beds,
        bathrooms: member.bathrooms,
        price: member.price,
        image: `${ENV.BASE_PICTURES_URL}${member.image}`,
        amenities: member.amenities,
        reviews: member.reviews?.map(r => ({
            id: r.id,
            author: r.author,
            date: r.date,
            comment: r.comment,
            rating: r.rating,
        })) || [],
    }
}

export const mapHousesEntityToVm = (housesEntity: am.HouseEntity[]): vm.HouseList[] => {
    return housesEntity.map(m => mapHouseEntityToVm(m));
}