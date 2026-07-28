import React from 'react';
import { HouseVm } from './house.vm';
import { House } from './house.component';
import { mapHouseItemToVm } from './repository';
import { api } from './repository/api';
import { useNavigate } from '@tanstack/react-router';

interface Props {
  house: HouseVm;
}

export const HouseContainer: React.FC<Props> = ({ house }) => {
  const navigate = useNavigate();

  const handleHouseBooking = async () => {
    try {
      const houseEntity = mapHouseItemToVm({
        ...house,
        isBooked: !house.isBooked,
      });
      await api.bookHouse({ data: houseEntity });
      navigate({ to: '/houses', search: { filter: '' } });
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <>
      <House house={house} handleHouseBooking={handleHouseBooking}></House>
    </>
  );
};
