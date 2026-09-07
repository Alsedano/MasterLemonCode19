import { ENV } from '#core/constants';
import * as am from "./api";
import * as vm from '../house-list.vm';

export const mapHouseEntityToVm = (member: am.HouseEntity): vm.HouseList => {
    const m: vm.HouseList = {
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
        isBooked: member.isBooked,
        reviewAverage: 0
    };
    const sum = member.reviews?.reduce((acc, cur) => acc + cur.rating, 0);
    m.reviewAverage = sum / member.reviews.length;

    return m;
}

export const mapHousesEntityToVm = (housesEntity: am.HouseEntity[]): vm.HouseList[] => {
    return housesEntity.map(m => mapHouseEntityToVm(m));
}