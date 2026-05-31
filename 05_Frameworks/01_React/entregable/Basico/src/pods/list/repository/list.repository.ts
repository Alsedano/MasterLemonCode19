import { mapMembersEntityToVm } from "./list.mappers";
import * as api from "./api/api";

export const getMembers = async (organization: string) =>
  api.getMembers(organization).then(mapMembersEntityToVm);
