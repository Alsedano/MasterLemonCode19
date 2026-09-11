import BasicTabs from '#common/components/tab/tab';
import React from 'react';
import { CharacterCollectionContainer } from '../character-collection';
import { LocationCollectionContainer } from '../location-collection';

export const CollectionComponent: React.FC = () => {
  return (
    <>
      <BasicTabs
        label1={'Caracteres'}
        children1={<CharacterCollectionContainer />}
        label2={'Lugares'}
        children2={<LocationCollectionContainer />}
        label3={'Episodios'}
        children3={<CharacterCollectionContainer />}
      ></BasicTabs>
    </>
  );
};
