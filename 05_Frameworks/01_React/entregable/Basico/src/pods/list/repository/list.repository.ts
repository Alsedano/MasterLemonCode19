import { mapGitHubMembersEntityToVm, mapRickMortyMembersEntityToVm } from "./list.mappers";
import * as api from "./api/api";

export const getGitHubMembers = async (organization: string) =>
  api.getGitHubMembers(organization).then(mapGitHubMembersEntityToVm);

export const getRickMortyMembers = async (page: number, pageSize: number) =>
  api.getRickMortyMembers(page, pageSize).then(mapRickMortyMembersEntityToVm);
