
export interface RickMortyMemberRoot {
    info: Info,
    results: RickMortyMemberEntity[]
}

export interface Info {
    count: number
    pages: number
    next: string
    prev: any
}

export interface RickMortyMemberEntity {
    id: number
    name: string
    status: string
    species: string
    type: string
    gender: string
    image: string
    episode: string[]
    url: string
    created: string
}

export const createDefaultRickMortyMemberRoot = (): RickMortyMemberRoot => ({
  info: {
    count: 0,
    pages: 0,
    next: '',
    prev: null,
  },
  results: [],
});