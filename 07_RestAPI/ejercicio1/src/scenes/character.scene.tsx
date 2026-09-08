import * as React from 'react';
import { AppLayout } from '#layouts';
import { CharacterContainer } from '#pods/character';

interface Props {
  isReadOnly: boolean;
}

export const CharacterScene = ({ isReadOnly }) => (
  <AppLayout>
    <CharacterContainer isReadOnly={isReadOnly} />
  </AppLayout>
);
