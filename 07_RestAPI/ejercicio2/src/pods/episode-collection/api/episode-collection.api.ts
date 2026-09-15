import { EpisodeEntityApi } from './episode-collection.api-model';

export const getEpisodes = async (
    name: string,
    page: number
): Promise<EpisodeEntityApi> => {
    return name ? getEpisodeByName(name) : getEpisodeCollection(page);
};

const getEpisodeCollection = async (
    page: number
): Promise<EpisodeEntityApi> => {
    const response = await fetch(
        `https://rickandmortyapi.com/api/episode?page=${page}`
    );

    if (response.ok) return response.json();
    throw Error('Rick and Morty Episode api fail');
};

const getEpisodeByName = async (name: string): Promise<EpisodeEntityApi> => {
    const response = await fetch(
        `https://rickandmortyapi.com/api/episode?name=${encodeURIComponent(name)}`
    );

    if (response.ok) return response.json();
    throw Error('Rick and Morty can not get episode by name');
};
