import React from 'react';
import { CollectionComponent } from './collection.component';

interface Props {
  selectedTab: number;
}

export const CollectionContainer: React.FC<Props> = ({ selectedTab }) => {
  return (
    <>
      <CollectionComponent selectedTab={selectedTab}></CollectionComponent>
    </>
  );
};
