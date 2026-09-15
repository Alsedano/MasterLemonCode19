import * as React from 'react';
import { AppLayout } from '#layouts';
import { EpisodeContainer } from '#pods/episode-collection/components/episode';

interface Props {
  isReadOnly: boolean;
}

export const EpisodeScene = ({ isReadOnly }: Props) => (
  <AppLayout>
    <EpisodeContainer isReadOnly={isReadOnly} />
  </AppLayout>
);
