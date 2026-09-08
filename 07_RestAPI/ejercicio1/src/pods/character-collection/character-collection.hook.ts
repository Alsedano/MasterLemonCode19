import * as React from 'react';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterEntityApi, getCharacters } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from '#common/mappers';

export const useCharacterCollection = () => {
  const [CharacterCollection, setCharacterCollection] =
    React.useState<CharacterEntityVm>({
      totalCount: 0,
      members: [],
    });

  const loadCharacterCollection = (name: string, page: number) => {
    getCharacters(name, page + 1).then((result) => {
      setCharacterCollection(mapRickMortyMembersEntityToVm(result));
    })
  }

  return { CharacterCollection, loadCharacterCollection };
};

export const mapRickMortyMembersEntityToVm = (memberRoot: CharacterEntityApi): CharacterEntityVm => {
  const members = mapToCollection(memberRoot.results, mapFromApiToVm);
  return {
    totalCount: memberRoot.info?.count ?? members.length,
    members: members
  };
}
