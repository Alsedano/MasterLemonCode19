import { mapRickMortyMembersEntityToVm } from "./list.mappers";
import * as api from "./api/api";

export const getRickMortyMembers = async (page: number) => {

  return api.getRickMortyMembers(page + 1).then(result => {

    return mapRickMortyMembersEntityToVm(result);
  });
}

export const getRickMortyMemberByName = async (name: string) => {
  return api.getRickMortyMemberByName(name).then(result => {

    return mapRickMortyMembersEntityToVm(result);
  });
}
