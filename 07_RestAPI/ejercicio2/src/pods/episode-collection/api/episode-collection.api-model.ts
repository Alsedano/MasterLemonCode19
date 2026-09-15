export interface EpisodeEntityApi {
    info: Info;
    results: EpisodeEntity[];
}

export interface Info {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
}

export interface EpisodeEntity {
    id: number;
    name: string;
    air_date: string;
    episode: string;
}
