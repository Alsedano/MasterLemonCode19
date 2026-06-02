import { mapGitHubMembersEntityToVm, mapRickMortyMembersEntityToVm } from "./list.mappers";
import * as api from "./api/api";

export const getGitHubMembers = async (organization: string) =>
  api.getGitHubMembers(organization).then(mapGitHubMembersEntityToVm);

export const getRickMortyMembers = async () =>
  api.getRickMortyMembers().then(mapRickMortyMembersEntityToVm);
