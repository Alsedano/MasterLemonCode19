import { MemberDetailEntity } from "./api.model"

export const getMember = async (id: string): Promise<MemberDetailEntity> => {
    return fetch(`https://api.github.com/users/${id}`)
        .then((response) => response.json())
}