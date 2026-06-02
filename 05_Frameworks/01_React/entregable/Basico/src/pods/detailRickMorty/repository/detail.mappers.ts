import * as am from "./api/api.model";
import * as vm from "../detail.vm";

export const mapMemberEntityToVm = (member: am.RickMortyMemberDetailEntity): vm.RickMortyMemberDetailEntity => {
    return {
        id: member.id,
        name: member.name,
        status: member.status,
        species: member.species,
        gender: member.gender,
        image: member.image,
    }
}
