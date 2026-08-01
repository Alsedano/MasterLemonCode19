import React from 'react';
import { HouseVm } from './house.vm';
import { House } from './house.component';
import { mapHouseItemToVm } from './repository';
import { api } from './repository/api';
import { routeConstants } from '#core/constants';
/* import router from 'next/navigation'; */

interface Props {
  house: HouseVm;
}

export const HouseContainer: React.FC<Props> = ({ house }) => {
  return (
    <>
      <House house={house}></House>
    </>
  );
};
