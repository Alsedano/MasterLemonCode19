'use client';
import { routeConstants } from '#core/constants';
import { api } from '#pods/house';
import { useRouter } from 'next/navigation';
import React from 'react';
import { mapHouseItemToVm } from '../../repository';
import { HouseVm } from '#pods/house';

interface Props {
  house: HouseVm;
}

export const BookButton: React.FC<Props> = ({ house }) => {
  const router = useRouter();
  const [book, setBook] = React.useState(house.isBooked ?? false);

  React.useEffect(() => {
    setBook(house.isBooked ?? false);
  }, [house.isBooked]);

  const handleHouseBooking = async () => {
    try {
      const houseEntity = mapHouseItemToVm({
        ...house,
        isBooked: !house.isBooked,
      });
      setBook(!house.isBooked);
      await api.bookHouse(houseEntity);
      router.push(routeConstants.houseList);
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <>
      <button
        className="inline-flex items-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
        onClick={handleHouseBooking}
      >
        {book ? 'Descartar reserva' : 'Reservar'}
      </button>
    </>
  );
};
