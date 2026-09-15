import { EpisodeApi } from './episode.api-model';

export const getEpisode = async (id: string): Promise<EpisodeApi> => {
    const response = await fetch(
        `https://rickandmortyapi.com/api/episode/${id}`
    );

    if (response.ok) return response.json();
    throw Error('Rick and Morty Episode api fail');
};
