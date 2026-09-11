import { LocationEntityApi } from './location-collection.api-model';

export const getLocations = async (name: string, page: number): Promise<LocationEntityApi> => {
  return name ? getLocationByName(name) : getLocationCollection(page);

}

const getLocationCollection = async (page: number): Promise<LocationEntityApi> => {

  const response = await fetch(`https://rickandmortyapi.com/api/location?page=${page}`);

  if (response.ok) return response.json();
  else {
    console.log(`Rick and Morty Location api fail`);
    throw Error(`Rick and Morty Location api fail`);
  }
};

const getLocationByName = async (name: string): Promise<LocationEntityApi> => {

  const response = await fetch(`https://rickandmortyapi.com/api/location?name=${name}`);
  if (response.ok) return response.json();
  else {
    console.log(`Rick and Morty can not get location by name`);
  }
}
