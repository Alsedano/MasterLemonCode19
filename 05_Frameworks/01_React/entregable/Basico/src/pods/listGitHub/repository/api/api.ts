import { GitHubMemberEntity } from "./api.model"

export const getGitHubMembers = async (organization: string): Promise<GitHubMemberEntity[]> => {
    const response = await fetch(`https://api.github.com/orgs/${organization}/members`);

    if (response.ok) return response.json();
    else {
        console.log(`Organization ${organization} does not exists`);
        throw Error(`Organization ${organization} does not exists`);
    }
}