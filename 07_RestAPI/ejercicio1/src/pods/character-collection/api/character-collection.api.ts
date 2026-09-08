import { CharacterEntityApi } from './character-collection.api-model';

export const getCharacters = async (name: string, page: number): Promise<CharacterEntityApi> => {
  return name ? getCharacterByName(name) : getCharacterCollection(page);

}

const getCharacterCollection = async (page: number): Promise<CharacterEntityApi> => {

  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);

  if (response.ok) return response.json();
  else {
    console.log(`Rick and Morty api fail`);
    throw Error(`Rick and Morty api fail`);
  }
};

const getCharacterByName = async (name: string): Promise<CharacterEntityApi> => {

  const response = await fetch(`https://rickandmortyapi.com/api/character?name=${name}`);
  //console.log(`char by name: ${JSON.stringify(...response.json())}`);
  if (response.ok) return response.json();
  else {
    console.log(`Rick and Morty can not get member by name`);
  }
}
