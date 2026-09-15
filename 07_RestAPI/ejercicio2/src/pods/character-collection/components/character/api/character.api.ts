import { Character } from './character.api-model';

export const getCharacter = async (id: string): Promise<Character> => {
  return fetch(`/api/character/${id}`).then((response) => response.json())
};

export const saveCharacter = async (
  character: Character
): Promise<boolean> => {
  const response = await fetch(`/api/character/${character.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(character),
  });

  return response.ok;
};