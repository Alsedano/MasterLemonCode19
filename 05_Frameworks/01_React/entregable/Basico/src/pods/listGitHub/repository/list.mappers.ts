import * as am from "./api/api.model";
import * as vm from "../list.vm";

export const mapGitHubMemberEntityToVm = (member: am.GitHubMemberEntity): vm.MemberEntity => {
    return {
        id: member.id,
        login: member.login,
        avatarUrl: member.avatar_url
    }
}

export const mapGitHubMembersEntityToVm = (memberRoot: am.GitHubMemberRoot): vm.MemberRoot => {
    const members = memberRoot.results.map(m => mapGitHubMemberEntityToVm(m));

    return {
        totalCount: memberRoot.info?.count ?? members.length,
        members: members
    };
}