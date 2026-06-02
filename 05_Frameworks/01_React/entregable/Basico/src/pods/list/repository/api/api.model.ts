
export interface GitHubMemberEntity {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    user_view_type: string
    site_admin: boolean
}

export interface RickMortyMemberRoot {
    results: RickMortyMemberEntity[]
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