import * as am from "./api/api.model";
import * as vm from "../list.vm";

export const mapMemberEntityToVm = (member: am.MemberEntity): vm.MemberEntity => {
    return {
        id: member.id,
        login: member.login,
        avatar_url: member.avatar_url
    }
}

export const mapMembersEntityToVm = (members: am.MemberEntity[]): vm.MemberEntity[] => {
    return (
        members.map(m => mapMemberEntityToVm(m))
    )
}