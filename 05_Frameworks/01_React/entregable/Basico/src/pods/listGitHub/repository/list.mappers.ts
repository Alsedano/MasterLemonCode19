import * as am from "./api/api.model";
import * as vm from "../list.vm";

export const mapGitHubMemberEntityToVm = (member: am.GitHubMemberEntity): vm.MemberEntity => {
    return {
        id: member.id,
        login: member.login,
        avatarUrl: member.avatar_url
    }
}

export const mapGitHubMembersEntityToVm = (members: am.GitHubMemberEntity[]): vm.MemberEntity[] => {
    return (
        members.map(m => mapGitHubMemberEntityToVm(m))
    )
}