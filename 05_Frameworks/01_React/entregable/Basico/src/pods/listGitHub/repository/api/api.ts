import { GitHubMemberRoot } from "./api.model"

export const getGitHubMembers = async (organization: string, page: number): Promise<GitHubMemberRoot> => {
    const response = await fetch(`https://api.github.com/orgs/${organization}/members?page=${page}`);

    const linkHeader = response.headers.get('Link');
    const data = await response.json();

    const parseLink = (linkHeader: string | null) => {
        const next = linkHeader?.match(/<([^>]+)>;\s*rel="next"/)?.[1] || '';
        const last = linkHeader?.match(/<([^>]+)>;\s*rel="last"/)?.[1] || null;
        const totalPages: number = Number.parseInt(last?.split("?page=")[1] ?? '1');
        return { next, last, totalPages };
    };

    const { next, last, totalPages } = parseLink(linkHeader);

    if (response.ok) return {
        info: {
            count: totalPages * data.length || totalPages,
            next,
            last
        },
        results: data
    } as GitHubMemberRoot;
    else {
        console.log(`Organization ${organization} does not exists`);
        throw Error(`Organization ${organization} does not exists`);
    }
}