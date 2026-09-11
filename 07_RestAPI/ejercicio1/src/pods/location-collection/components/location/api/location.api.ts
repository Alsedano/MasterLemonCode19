import { LocationApi } from './location.api-model';

export const getLocation = async (id: string): Promise<LocationApi> => {
  return fetch(`https://rickandmortyapi.com/api/location/${id}`).then((response) => response.json())
};