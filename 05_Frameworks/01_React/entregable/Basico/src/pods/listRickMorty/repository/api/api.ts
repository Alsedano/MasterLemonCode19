import { RickMortyMemberEntity, RickMortyMemberRoot } from "./api.model"

export const getRickMortyMembers = async (page: number): Promise<RickMortyMemberRoot> => {


    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);

    if (response.ok) return response.json();
    else {
        console.log(`Rick and Morty api fail`);
        throw Error(`Rick and Morty api fail`);
    }
}