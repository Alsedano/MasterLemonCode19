export interface EpisodeCollectionVm {
    totalCount: number;
    episodes: Episode[];
}

export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
}
