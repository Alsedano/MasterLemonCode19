import React from 'react';
import { HouseItem } from './house-item.component';
import { HouseList } from '#pods/house-list';

interface Props {
  house: HouseList;
}

export const HouseItemContainer: React.FC<Props> = ({ house }) => {
  return (
    <>
      <HouseItem house={house}></HouseItem>
    </>
  );
};
