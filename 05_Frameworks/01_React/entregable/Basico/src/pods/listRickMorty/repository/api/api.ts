import { RickMortyMemberEntity, RickMortyMemberRoot } from "./api.model"

export const getRickMortyMembers = async (page: number): Promise<RickMortyMemberRoot> => {


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