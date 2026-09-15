import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as api from './api';
import { createEmptyCharacter, Character } from './character.vm';
import {
  mapCharacterFromApiToVm,
  mapCharacterFromVmToApi,
} from './character.mappers';
import { Lookup } from '#common/models';
import { CharacterComponent } from './character.component';

interface Props {
  isReadOnly: boolean;
}

export const CharacterContainer: React.FunctionComponent<Props> = ({
  isReadOnly,
}) => {
  //const [readOnly, setReadOnly] = React.useState<boolean>(isReadOnly);
  const [Character, setCharacter] = React.useState<Character>(
    createEmptyCharacter()
  );
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, []);

  const handleSave = async (Character: Character) => {
    console.log(`Save`);
    const apiCharacter = mapCharacterFromVmToApi(Character);
    const success = await api.saveCharacter(apiCharacter);
    if (success) {
      navigate(-1);
    } else {
      alert('Error on save Character');
    }
  };

  return (
    <CharacterComponent
      Character={Character}
      isReadOnly={isReadOnly}
      onSave={handleSave}
    />
  );
};
