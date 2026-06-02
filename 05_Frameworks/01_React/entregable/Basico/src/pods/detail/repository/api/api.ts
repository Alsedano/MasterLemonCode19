import { RICK_MORTY } from "@/common/constants"
import { MemberDetailEntity } from "./api.model"


export const getMember = async (characters: string, id: string): Promise<MemberDetailEntity> => {

    if (characters === RICK_MORTY) return getRickMortyMembers(id);

    return getGitHubMember(id);
}

const getGitHubMember = async (id: string): Promise<MemberDetailEntity> => {
    return fetch(`https://api.github.com/users/${id}`)
        .then((response) => response.json())
}


const getRickMortyMembers = async (id: string): Promise<MemberDetailEntity> => {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`).then((response) => response.json())
}