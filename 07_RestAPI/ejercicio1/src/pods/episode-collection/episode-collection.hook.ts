import * as React from 'react';
import { EpisodeCollectionVm } from './episode-collection.vm';
import { getEpisodes, EpisodeEntityApi } from './api';
import { mapFromApiToVm } from './episode-collection.mapper';
import { mapToCollection } from '#common/mappers';

export const useEpisodeCollection = () => {
    const [episodeCollection, setEpisodeCollection] =
        React.useState<EpisodeCollectionVm>({
            totalCount: 0,
            episodes: [],
        });

    const loadEpisodeCollection = (name: string, page: number) => {
        getEpisodes(name, page + 1).then((result) => {
            setEpisodeCollection(mapEpisodesEntityToVm(result));
        });
    };

    return { episodeCollection, loadEpisodeCollection };
};

export const mapEpisodesEntityToVm = (
    memberRoot: EpisodeEntityApi
): EpisodeCollectionVm => {
    const collection = mapToCollection(memberRoot.results, mapFromApiToVm);

    return {
        totalCount: memberRoot.info?.count ?? collection.length,
        episodes: collection,
    };
};
