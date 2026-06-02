import { RickMortyMemberDetailEntity } from "./api.model"


export const getMember = async (id: string): Promise<RickMortyMemberDetailEntity> => {
    return fetch(`https://rickandmortyapi.com/api/character/${id}`).then((response) => response.json())
}