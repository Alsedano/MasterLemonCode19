import * as apiModel from './api/location-collection.api-model';
import * as viewModel from './location-collection.vm';

export const mapFromApiToVm = (
  Location: apiModel.LocationEntity
): viewModel.LocationEntity => ({
  id: Location.id,
  name: Location.name,
  type: Location.type,
  dimension: Location.dimension
});
