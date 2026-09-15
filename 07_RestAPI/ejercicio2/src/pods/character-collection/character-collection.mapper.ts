import * as apiModel from './api/character-collection.api-model';
import * as viewModel from './character-collection.vm';

export const mapFromApiToVm = (
  Character: apiModel.RickMortyMemberEntity
): viewModel.MemberEntity => ({
  id: Character.id,
  name: Character.name,
  avatarUrl: Character.image,
  bestSentence: Character.bestSentence
});
