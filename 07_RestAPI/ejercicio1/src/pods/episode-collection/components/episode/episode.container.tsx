import React from 'react';
import { useParams } from 'react-router-dom';
import * as api from './api';
import { createEmptyEpisode, Episode } from './episode.vm';
import { mapEpisodeFromApiToVm } from './episode.mappers';
import { EpisodeComponent } from './episode.component';

interface Props {
  isReadOnly: boolean;
}

export const EpisodeContainer: React.FunctionComponent<Props> = ({
  isReadOnly,
}) => {
  const [episode, setEpisode] = React.useState<Episode>(createEmptyEpisode());
  const { id } = useParams<{ id: string }>();

  React.useEffect(() => {
    if (id) {
      api.getEpisode(id).then((result) => {
        setEpisode(mapEpisodeFromApiToVm(result));
      });
    }
  }, [id]);

  return <EpisodeComponent episode={episode} isReadOnly={isReadOnly} />;
};
