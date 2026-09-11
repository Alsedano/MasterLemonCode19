import * as apiModel from './api/location.api-model';
import * as viewModel from './location.vm';

export const mapLocationFromApiToVm = (
  Character: apiModel.LocationApi
): viewModel.Location => ({
  ...Character,
  id: Character.id,
  name: Character.name,
  type: Character.type,
  dimension: Character.dimension,
});

export const mapCharacterFromVmToApi = (Character: viewModel.Location): apiModel.LocationApi =>
(({
  ...Character,
  id: Character.id,
  name: Character.name,
  type: Character.type,
  dimension: Character.dimension,
} as unknown) as apiModel.LocationApi);
