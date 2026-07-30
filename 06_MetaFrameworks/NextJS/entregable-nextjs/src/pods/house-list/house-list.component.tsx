import React from 'react';
import { HouseList } from './house-list.vm';
import { HouseItemContainer } from './components/house-item';

interface Props {
  houses: HouseList[];
}

export const Houses: React.FC<Props> = ({ houses }) => {
  return (
    <div className="flex flex-row flex-wrap gap-2">
      {houses.map((house) => (
        <HouseItemContainer house={house} key={house.id}></HouseItemContainer>
      ))}
    </div>
  );
};
