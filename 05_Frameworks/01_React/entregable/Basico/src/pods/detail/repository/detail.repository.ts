import * as api from "./api/api";
import { mapMemberEntityToVm } from "./detail.mappers";

export const getMember = async (id: string) =>
    api.getMember(id).then(mapMemberEntityToVm);