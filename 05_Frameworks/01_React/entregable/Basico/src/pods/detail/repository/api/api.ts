import { MemberDetailEntity } from "./api.model"

/* export const getGitHubMember = async (id: string): Promise<MemberDetailEntity> => {
    return fetch(`https://api.github.com/users/${id}`)
        .then((response) => response.json())
}


export const getRickMortyMembers = async (id: string): Promise<MemberDetailEntity> => {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`).then((response) => response.json())
} */

export const getMember = async (url: string, id: string): Promise<MemberDetailEntity> => {
    return fetch(`https://api.github.com/users/${id}`)
        .then((response) => response.json())
}