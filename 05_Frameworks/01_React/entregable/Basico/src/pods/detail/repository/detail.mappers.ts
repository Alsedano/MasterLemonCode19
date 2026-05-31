import * as am from "./api/api.model";
import * as vm from "../detail.vm";

export const mapMemberEntityToVm = (member: am.MemberDetailEntity): vm.MemberDetailEntity => {
    return {
        id: member.id,
        login: member.login,
        avatarUrl: member.avatar_url,
        name: member.name,
        company: member.company,
        bio: member.bio
    }
}
