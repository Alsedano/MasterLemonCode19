import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';

export const mapCharacterFromApiToVm = (
  Character: apiModel.Character
): viewModel.Character => ({
  ...Character,
  id: Character.id,
  name: Character.name,
  status: Character.status,
  species: Character.species,
  gender: Character.gender,
  image: Character.image,
});

export const mapCharacterFromVmToApi = (Character: viewModel.Character): apiModel.Character =>
(({
  ...Character,
  id: Character.id,
  name: Character.name,
  status: Character.status,
  species: Character.species,
  gender: Character.gender,
  image: Character.image,
} as unknown) as apiModel.Character);
