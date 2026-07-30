import React from 'react';
import { HouseList } from './house-list.vm';
import { Houses } from './house-list.component';
import { SearchContainer } from './components/search';

interface Props {
  houses: HouseList[];
}

export const HouseListContainer: React.FC<Props> = ({ houses }) => {
  return (
    <div className="flex flex-col gap-4 p-2">
      {/* <SearchContainer></SearchContainer> */}
      <Houses houses={houses}></Houses>
    </div>
  );
};
