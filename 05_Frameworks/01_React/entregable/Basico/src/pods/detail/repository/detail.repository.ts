import * as api from "./api/api";
import { mapMemberEntityToVm } from "./detail.mappers";

export const getMember = async (characters: string, id: string) =>
    api.getMember(characters, id).then(mapMemberEntityToVm);