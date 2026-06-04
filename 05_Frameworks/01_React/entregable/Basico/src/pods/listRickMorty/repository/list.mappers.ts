import * as am from "./api/api.model";
import * as vm from "../list.vm";

export const mapRickMortyMemberEntityToVm = (member: am.RickMortyMemberEntity): vm.MemberEntity => {
    return {
        id: member.id,
        login: member.name,
        avatarUrl: member.image
    }
}

export const mapRickMortyMembersEntityToVm = (memberRoot: am.RickMortyMemberRoot): vm.MemberRoot => {
    const members = memberRoot.results.map(m => mapRickMortyMemberEntityToVm(m));

    return {
        totalCount: memberRoot.info?.count ?? members.length,
        members: members
    };
}