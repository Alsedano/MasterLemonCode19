import * as React from 'react';
import { LocationEntityVm } from './location-collection.vm';
import { getLocations, LocationEntityApi } from './api';
import { mapFromApiToVm } from './location-collection.mapper';
import { mapToCollection } from '#common/mappers';

export const useLocationCollection = () => {
  const [LocationCollection, setLocationCollection] =
    React.useState<LocationEntityVm>({
      totalCount: 0,
      locations: [],
    });

  const loadLocationCollection = (name: string, page: number) => {
    getLocations(name, page + 1).then((result) => {
      setLocationCollection(mapLocationsEntityToVm(result));
    })
  }

  return { LocationCollection, loadLocationCollection };
};

export const mapLocationsEntityToVm = (memberRoot: LocationEntityApi): LocationEntityVm => {
  const collection = mapToCollection(memberRoot.results, mapFromApiToVm);
  return {
    totalCount: memberRoot.info?.count ?? collection.length,
    locations: collection
  };
}
