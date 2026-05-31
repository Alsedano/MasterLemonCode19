import { MemberEntity } from "./api.model"

export const getMembers = async (organization: string): Promise<MemberEntity[]> => {
    const response = await fetch(`https://api.github.com/orgs/${organization}/members`);

    if (response.ok) return response.json();
    else {
        console.log(`Organization ${organization} does not exists`);
        return [];
    }
}