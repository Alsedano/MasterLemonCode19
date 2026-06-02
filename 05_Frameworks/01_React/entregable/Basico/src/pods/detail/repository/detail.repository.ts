import * as api from "./api/api";
import { mapMemberEntityToVm } from "./detail.mappers";

export const getMember = async (url: string, id: string) =>
    api.getMember(url, id).then(mapMemberEntityToVm);