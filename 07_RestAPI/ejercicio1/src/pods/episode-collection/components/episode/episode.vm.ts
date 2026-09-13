export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
}

export const createEmptyEpisode = (): Episode => ({
    id: 0,
    name: '',
    air_date: '',
    episode: '',
});
