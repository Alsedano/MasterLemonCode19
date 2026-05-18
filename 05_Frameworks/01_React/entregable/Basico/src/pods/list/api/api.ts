import { MemberEntity } from "./api.model"

export const getMembers = async (organization: string): Promise<MemberEntity[]> => {
    return fetch(`https://api.github.com/orgs/${organization}/members`)
        .then((response) => response.json())
}