import React from 'react';
import { HouseList } from './house-list.vm';
import { Houses } from './house-list.component';

interface Props {
  houses: HouseList[];
}

export const HouseListContainer: React.FC<Props> = ({ houses }) => {
  return <Houses houses={houses}></Houses>;
};
