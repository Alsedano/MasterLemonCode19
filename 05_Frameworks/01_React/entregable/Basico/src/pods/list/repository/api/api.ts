import { GitHubMemberEntity, RickMortyMemberEntity, RickMortyMemberRoot } from "./api.model"

export const getGitHubMembers = async (organization: string): Promise<GitHubMemberEntity[]> => {
    const response = await fetch(`https://api.github.com/orgs/${organization}/members`);

    if (response.ok) return response.json();
    else {
        console.log(`Organization ${organization} does not exists`);
        return [];
    }
}

export const getRickMortyMembers = async (page: number, pageSize: number): Promise<RickMortyMemberRoot> => {
    const response = await fetch(`https://rickandmortyapi.com/api/character`);

    if (response.ok) return response.json();
    else {
        console.log(`Rick and Morty api fail`);
        return {
            info: { //TODO. Create a default object in vm
                count: 0,
                pages: 0,
                next: "",
                prev: undefined
            }, results: []
        };
    }
}