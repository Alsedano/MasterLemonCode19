import React from 'react';
import { routeConstants } from '#core/constants';
import { HouseList } from '#pods/house-list';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  house: HouseList;
}

export const HouseItem: React.FC<Props> = ({ house }) => {
  return (
    <Link
      href={routeConstants.house(house.id)}
      className="block overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition duration-200 hover:shadow-md w-md"
    >
      <div className="space-y-3 p-4 flex flex-col">
        <div
          className={`${'flex flex-row justify-between'} 
      ${house.isBooked ? 'bg-sky-600' : 'bg-white'}`}
        >
          <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-800">
            <span>{house.name}</span>
          </h2>
          {house.isBooked ? <span>Reservada</span> : <span></span>}
        </div>
        <Image
          className="h-56 w-full rounded-md object-cover"
          src={house.image || ''}
          alt={house.name}
          width={200}
          height={500}
        />
        <div>
          <p>
            {house.address}, {house.city} - {house.country}
          </p>
        </div>
        <div>
          <p>
            Habitaciones: {house.bedrooms}, Baños: {house.bathrooms}
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-medium text-sky-700">
            {house.price}€ /noche
          </span>
          <div className="flex flex-row items-center">
            <img src="/icon-star.png" alt="logo" className="size-4" />
            {house.reviewAverage}
          </div>
        </div>
      </div>
    </Link>
  );
};
