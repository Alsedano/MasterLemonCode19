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

export const mapRickMortyMemberEntityToVm = (member: am.RickMortyMemberEntity): vm.MemberEntity => {
    return {
        id: member.id,
        login: member.name,
        avatarUrl: member.image
    }
}

export const mapRickMortyMembersEntityToVm = (members: am.RickMortyMemberRoot): vm.MemberEntity[] => {
    return (
        members.results.map(m => mapRickMortyMemberEntityToVm(m))
    )
}