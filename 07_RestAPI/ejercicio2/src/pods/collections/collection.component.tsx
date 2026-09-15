import BasicTabs from '#common/components/tab/tab';
import React from 'react';
import { CharacterCollectionContainer } from '../character-collection';
import { LocationCollectionContainer } from '../location-collection';
import { EpisodeCollectionContainer } from '../episode-collection';

interface Props {
  selectedTab: number;
}

export const CollectionComponent: React.FC<Props> = ({ selectedTab }) => {
  return (
    <>
      <BasicTabs
        label1={'Caracteres'}
        children1={<CharacterCollectionContainer />}
        label2={'Lugares'}
        children2={<LocationCollectionContainer />}
        label3={'Episodios'}
        children3={<EpisodeCollectionContainer />}
        selectedValue={selectedTab}
      ></BasicTabs>
    </>
  );
};
