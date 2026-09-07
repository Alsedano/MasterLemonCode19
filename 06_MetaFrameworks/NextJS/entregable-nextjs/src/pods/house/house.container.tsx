import React from 'react';
import { HouseVm } from './house.vm';
import { House } from './house.component';

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
